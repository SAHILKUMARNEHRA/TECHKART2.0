import type { Request, Response } from 'express'
import { pool } from './db'
import { getCatalogProducts } from './products'

const USD_TO_INR = 83

function toInrFromUsd(usd: number) {
  return Math.round(usd * USD_TO_INR)
}

function requireDb(res: Response) {
  if (!pool) {
    res.status(503).json({ message: 'Database not configured' })
    return false
  }
  return true
}

type AddressSnapshot = {
  label: string
  fullName: string
  phone: string
  line1: string
  line2: string | null
  city: string
  state: string
  pincode: string
}

function snapshotFromRow(r: any): AddressSnapshot {
  return {
    label: r.label,
    fullName: r.full_name,
    phone: r.phone,
    line1: r.line1,
    line2: r.line2 ?? null,
    city: r.city,
    state: r.state,
    pincode: r.pincode,
  }
}

export async function getOrders(req: Request, res: Response) {
  if (!requireDb(res)) return
  const userId = (req as any).user?.id as string | undefined
  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' })
    return
  }

  const r = await pool!.query(
    `select
      o.id::text,
      o.total_inr,
      o.payment_method,
      o.payment_status,
      o.eta_days_min,
      o.eta_days_max,
      o.created_at,
      o.address_snapshot,
      coalesce(
        json_agg(
          json_build_object(
            'productId', i.product_id,
            'title', i.title,
            'thumbnail', i.thumbnail,
            'category', i.category,
            'brand', i.brand,
            'unitPriceInr', i.unit_price_inr,
            'qty', i.qty,
            'lineTotalInr', i.line_total_inr
          )
        ) filter (where i.id is not null),
        '[]'::json
      ) as items
    from orders o
    left join order_items i on i.order_id = o.id
    where o.user_id = $1
    group by o.id
    order by o.created_at desc`,
    [userId],
  )

  res.json({ orders: r.rows })
}

export async function getOrderById(req: Request, res: Response) {
  if (!requireDb(res)) return
  const userId = (req as any).user?.id as string | undefined
  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' })
    return
  }
  const id = String(req.params.id ?? '').trim()
  if (!id) {
    res.status(400).json({ message: 'Invalid id' })
    return
  }

  const r = await pool!.query(
    `select
      o.id::text,
      o.total_inr,
      o.payment_method,
      o.payment_status,
      o.eta_days_min,
      o.eta_days_max,
      o.created_at,
      o.address_snapshot,
      coalesce(
        json_agg(
          json_build_object(
            'productId', i.product_id,
            'title', i.title,
            'thumbnail', i.thumbnail,
            'category', i.category,
            'brand', i.brand,
            'unitPriceInr', i.unit_price_inr,
            'qty', i.qty,
            'lineTotalInr', i.line_total_inr
          )
        ) filter (where i.id is not null),
        '[]'::json
      ) as items
    from orders o
    left join order_items i on i.order_id = o.id
    where o.user_id = $1 and o.id = $2
    group by o.id`,
    [userId, id],
  )

  const order = r.rows[0]
  if (!order) {
    res.status(404).json({ message: 'Not found' })
    return
  }
  res.json({ order })
}

export async function postOrder(req: Request, res: Response) {
  if (!requireDb(res)) return
  const userId = (req as any).user?.id as string | undefined
  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' })
    return
  }

  const paymentMethod = String(req.body?.paymentMethod ?? '').trim()
  if (paymentMethod !== 'upi' && paymentMethod !== 'cod') {
    res.status(400).json({ message: 'Invalid payment method' })
    return
  }

  const items = Array.isArray(req.body?.items) ? (req.body.items as Array<{ productId: number; qty: number }>) : []
  if (!items.length) {
    res.status(400).json({ message: 'Empty cart' })
    return
  }

  const addressId = String(req.body?.addressId ?? '').trim() || null

  let addressSnapshot: AddressSnapshot | null = null
  if (addressId) {
    const ar = await pool!.query(
      `select id, label, full_name, phone, line1, line2, city, state, pincode
       from addresses where id = $1 and user_id = $2 limit 1`,
      [addressId, userId],
    )
    const row = ar.rows[0]
    if (!row) {
      res.status(400).json({ message: 'Invalid address' })
      return
    }
    addressSnapshot = snapshotFromRow(row)
  } else {
    const label = String(req.body?.address?.label ?? '').trim() || 'Home'
    const fullName = String(req.body?.address?.fullName ?? '').trim()
    const phone = String(req.body?.address?.phone ?? '').trim()
    const line1 = String(req.body?.address?.line1 ?? '').trim()
    const line2 = String(req.body?.address?.line2 ?? '').trim() || null
    const city = String(req.body?.address?.city ?? '').trim()
    const state = String(req.body?.address?.state ?? '').trim()
    const pincode = String(req.body?.address?.pincode ?? '').trim()

    if (!fullName || !phone || !line1 || !city || !state || !pincode) {
      res.status(400).json({ message: 'Missing address fields' })
      return
    }

    const cnt = await pool!.query(`select count(*)::int as c from addresses where user_id = $1`, [userId])
    if ((cnt.rows[0]?.c ?? 0) < 3) {
      const ins = await pool!.query(
        `insert into addresses (user_id, label, full_name, phone, line1, line2, city, state, pincode)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9)
         returning id, label, full_name, phone, line1, line2, city, state, pincode`,
        [userId, label, fullName, phone, line1, line2, city, state, pincode],
      )
      addressSnapshot = snapshotFromRow(ins.rows[0])
    } else {
      addressSnapshot = { label, fullName, phone, line1, line2, city, state, pincode }
    }
  }

  const catalog = await getCatalogProducts()
  const byId = new Map(catalog.map((p) => [p.id, p] as const))

  const orderLines = items
    .map((it) => {
      const p = byId.get(Number(it.productId))
      if (!p) return null
      const qty = Math.max(1, Math.min(99, Number(it.qty) || 1))
      const mrpInr = toInrFromUsd(p.price)
      const unit = Math.round(mrpInr * (1 - p.discountPercentage / 100))
      return {
        productId: p.id,
        title: p.title,
        thumbnail: p.thumbnail,
        category: p.category,
        brand: p.brand,
        unitPriceInr: unit,
        qty,
        lineTotalInr: unit * qty,
      }
    })
    .filter(Boolean) as Array<{
    productId: number
    title: string
    thumbnail: string
    category: string
    brand: string
    unitPriceInr: number
    qty: number
    lineTotalInr: number
  }>

  if (!orderLines.length) {
    res.status(400).json({ message: 'No valid items' })
    return
  }

  const total = orderLines.reduce((a, l) => a + l.lineTotalInr, 0)
  const paymentStatus = paymentMethod === 'upi' ? 'paid' : 'pending'

  const client = await pool!.connect()
  try {
    await client.query('begin')
    const o = await client.query(
      `insert into orders (user_id, address_snapshot, payment_method, payment_status, total_inr)
       values ($1,$2,$3,$4,$5)
       returning id::text, eta_days_min, eta_days_max`,
      [userId, addressSnapshot, paymentMethod, paymentStatus, total],
    )
    const orderId = o.rows[0].id as string

    for (const l of orderLines) {
      await client.query(
        `insert into order_items (order_id, product_id, title, thumbnail, category, brand, unit_price_inr, qty, line_total_inr)
         values ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
        [orderId, l.productId, l.title, l.thumbnail, l.category, l.brand, l.unitPriceInr, l.qty, l.lineTotalInr],
      )
    }

    await client.query('commit')
    res.json({ orderId, etaDaysMin: o.rows[0].eta_days_min, etaDaysMax: o.rows[0].eta_days_max })
  } catch {
    await client.query('rollback')
    res.status(500).json({ message: 'Failed to place order' })
  } finally {
    client.release()
  }
}
