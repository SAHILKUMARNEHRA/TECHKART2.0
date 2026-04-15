import type { Request, Response } from 'express'
import { pool } from './db'

function requireDb(res: Response) {
  if (!pool) {
    res.status(503).json({ message: 'Database not configured' })
    return false
  }
  return true
}

export async function getAddresses(req: Request, res: Response) {
  if (!requireDb(res)) return
  const userId = (req as any).user?.id as string | undefined
  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' })
    return
  }

  const r = await pool!.query(
    `select
      id::text,
      label,
      full_name,
      phone,
      line1,
      line2,
      city,
      state,
      pincode,
      created_at
    from addresses
    where user_id = $1
    order by created_at desc`,
    [userId],
  )
  res.json({ addresses: r.rows })
}

export async function postAddress(req: Request, res: Response) {
  if (!requireDb(res)) return
  const userId = (req as any).user?.id as string | undefined
  if (!userId) {
    res.status(401).json({ message: 'Unauthorized' })
    return
  }

  const label = String(req.body?.label ?? '').trim() || 'Home'
  const fullName = String(req.body?.fullName ?? '').trim()
  const phone = String(req.body?.phone ?? '').trim()
  const line1 = String(req.body?.line1 ?? '').trim()
  const line2 = String(req.body?.line2 ?? '').trim() || null
  const city = String(req.body?.city ?? '').trim()
  const state = String(req.body?.state ?? '').trim()
  const pincode = String(req.body?.pincode ?? '').trim()

  if (!fullName || !phone || !line1 || !city || !state || !pincode) {
    res.status(400).json({ message: 'Missing fields' })
    return
  }

  const cnt = await pool!.query(`select count(*)::int as c from addresses where user_id = $1`, [userId])
  if ((cnt.rows[0]?.c ?? 0) >= 3) {
    res.status(409).json({ message: 'You can save only 3 addresses.' })
    return
  }

  const r = await pool!.query(
    `insert into addresses (user_id, label, full_name, phone, line1, line2, city, state, pincode)
     values ($1,$2,$3,$4,$5,$6,$7,$8,$9)
     returning id::text, label, full_name, phone, line1, line2, city, state, pincode, created_at`,
    [userId, label, fullName, phone, line1, line2, city, state, pincode],
  )

  res.json({ address: r.rows[0] })
}

export async function deleteAddress(req: Request, res: Response) {
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
  const r = await pool!.query(`delete from addresses where id = $1 and user_id = $2 returning id`, [id, userId])
  if (!r.rowCount) {
    res.status(404).json({ message: 'Not found' })
    return
  }
  res.json({ ok: true })
}

