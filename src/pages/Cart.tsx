import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react'
import EmptyState from '@/components/EmptyState'
import Button from '@/components/Button'
import { useCartStore } from '@/stores/cartStore'
import { useCatalogStore } from '@/stores/catalogStore'
import { formatInr, toInrFromUsd } from '@/utils/money'

export default function Cart() {
  const loadAll = useCatalogStore((s) => s.loadAll)
  const products = useCatalogStore((s) => s.products)
  const items = useCartStore((s) => s.items)
  const remove = useCartStore((s) => s.remove)
  const setQty = useCartStore((s) => s.setQty)
  const clear = useCartStore((s) => s.clear)

  useEffect(() => {
    void loadAll()
  }, [loadAll])

  const lines = useMemo(() => {
    return items
      .map((it) => {
        const p = products.find((x) => x.id === it.productId)
        if (!p) return null
        const mrp = toInrFromUsd(p.price)
        const price = Math.round(mrp * (1 - p.discountPercentage / 100))
        return { product: p, qty: it.qty, lineTotal: price * it.qty, unit: price }
      })
      .filter(Boolean)
  }, [items, products])

  const subtotal = useMemo(() => lines.reduce((a, l) => a + l!.lineTotal, 0), [lines])

  if (items.length === 0) {
    return (
      <EmptyState
        title="Your cart is empty"
        description="Add products while browsing to keep them here."
        action={
          <Link to="/products">
            <Button>
              <ShoppingCart size={18} /> Browse products
            </Button>
          </Link>
        }
      />
    )
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
      <div className="rounded-3xl border border-tk-border bg-white/60 p-5 shadow-soft backdrop-blur-sm">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="font-display text-2xl font-bold tracking-tight text-slate-900">Cart</div>
            <div className="mt-1 text-sm text-slate-600">{items.length} item(s)</div>
          </div>
          <button
            className="inline-flex h-10 items-center justify-center rounded-xl border border-tk-border bg-white/70 px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white hover:shadow-md"
            onClick={clear}
          >
            Clear
          </button>
        </div>

        <div className="mt-5 grid gap-3">
          {lines.map((l) => (
            <div key={l!.product.id} className="rounded-2xl border border-tk-border bg-white/70 p-4 shadow-sm">
              <div className="flex gap-4">
                <img
                  src={l!.product.thumbnail}
                  alt={l!.product.title}
                  className="h-20 w-20 flex-none rounded-2xl bg-white object-contain p-3"
                  loading="lazy"
                />
                <div className="min-w-0 flex-1">
                  <Link to={`/products/${l!.product.id}`} className="tk-clamp-2 text-sm font-semibold text-slate-900">
                    {l!.product.title}
                  </Link>
                  <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
                    <div className="text-sm font-bold text-slate-900">{formatInr(l!.unit)}</div>
                    <button
                      className="inline-flex items-center gap-2 rounded-xl border border-tk-border bg-white/70 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:bg-white hover:shadow-md"
                      onClick={() => remove(l!.product.id)}
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="inline-flex items-center overflow-hidden rounded-xl border border-tk-border bg-white/70 shadow-sm">
                      <button
                        className="h-9 w-10 text-slate-700 transition hover:bg-white"
                        onClick={() => setQty(l!.product.id, l!.qty - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} className="mx-auto" />
                      </button>
                      <div className="h-9 w-12 text-center text-sm font-semibold leading-9 text-slate-900">{l!.qty}</div>
                      <button
                        className="h-9 w-10 text-slate-700 transition hover:bg-white"
                        onClick={() => setQty(l!.product.id, l!.qty + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} className="mx-auto" />
                      </button>
                    </div>
                    <div className="text-sm font-semibold text-slate-700">
                      Line total: <span className="font-bold text-slate-900">{formatInr(l!.lineTotal)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sticky top-20 space-y-4">
        <div className="rounded-3xl border border-tk-border bg-white/60 p-5 shadow-soft backdrop-blur-sm">
          <div className="font-display text-lg font-semibold text-slate-900">Summary</div>
          <div className="mt-4 space-y-2 text-sm text-slate-700">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">{formatInr(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Delivery</span>
              <span className="font-semibold">{subtotal >= 499 ? 'Free' : formatInr(49)}</span>
            </div>
            <div className="mt-3 border-t border-tk-border pt-3 flex items-center justify-between">
              <span className="font-semibold">Total</span>
              <span className="font-display text-xl font-bold text-slate-900">
                {formatInr(subtotal + (subtotal >= 499 ? 0 : 49))}
              </span>
            </div>
          </div>
          <div className="mt-5">
            <Link to="/checkout">
              <Button className="h-11 w-full">Checkout</Button>
            </Link>
            <div className="mt-2 text-center text-xs text-slate-500">UPI and Cash on Delivery available (simulated).</div>
          </div>
        </div>
      </div>
    </div>
  )
}
