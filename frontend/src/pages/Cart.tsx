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
      <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-neon backdrop-blur-md">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="font-display text-3xl font-bold tracking-tight text-white">Cart</div>
            <div className="mt-1 text-sm font-medium text-slate-400">{items.length} item(s)</div>
          </div>
          <button
            className="inline-flex h-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 px-5 text-sm font-semibold text-slate-300 shadow-sm transition hover:bg-slate-700 hover:text-white"
            onClick={clear}
          >
            Clear
          </button>
        </div>

        <div className="mt-6 grid gap-4">
          {lines.map((l) => (
            <div key={l!.product.id} className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-5 shadow-sm transition hover:bg-slate-800/60">
              <div className="flex gap-5">
                <div className="relative h-24 w-24 flex-none rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 p-4 shadow-inner">
                  <img
                    src={l!.product.thumbnail}
                    alt={l!.product.title}
                    className="h-full w-full object-contain drop-shadow-[0_5px_10px_rgba(0,0,0,0.5)]"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <Link to={`/products/${l!.product.id}`} className="tk-clamp-2 text-base font-bold text-white hover:text-tk-primary-2 transition-colors">
                    {l!.product.title}
                  </Link>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
                    <div className="text-lg font-bold text-white">{formatInr(l!.unit)}</div>
                    <button
                      className="inline-flex items-center gap-2 rounded-xl border border-rose-900/50 bg-rose-500/10 px-3 py-2 text-xs font-semibold text-rose-400 shadow-sm transition hover:bg-rose-500/20 hover:text-rose-300"
                      onClick={() => remove(l!.product.id)}
                    >
                      <Trash2 size={14} /> Remove
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-700/50 pt-4">
                    <div className="inline-flex items-center overflow-hidden rounded-xl border border-slate-700 bg-slate-800/80 shadow-sm">
                      <button
                        className="h-9 w-10 text-slate-400 transition hover:bg-slate-700 hover:text-white"
                        onClick={() => setQty(l!.product.id, l!.qty - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} className="mx-auto" />
                      </button>
                      <div className="h-9 w-12 text-center text-sm font-bold leading-9 text-white bg-slate-900/50">{l!.qty}</div>
                      <button
                        className="h-9 w-10 text-slate-400 transition hover:bg-slate-700 hover:text-white"
                        onClick={() => setQty(l!.product.id, l!.qty + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} className="mx-auto" />
                      </button>
                    </div>
                    <div className="text-sm font-semibold text-slate-400">
                      Line total: <span className="font-bold text-white">{formatInr(l!.lineTotal)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sticky top-24 space-y-6">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-neon backdrop-blur-md">
          <div className="font-display text-xl font-bold text-white">Summary</div>
          <div className="mt-5 space-y-3 text-sm text-slate-300">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-white">{formatInr(subtotal)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Delivery</span>
              <span className="font-semibold text-emerald-400">{subtotal >= 499 ? 'Free' : formatInr(49)}</span>
            </div>
            <div className="mt-4 border-t border-slate-700/50 pt-4 flex items-center justify-between">
              <span className="font-bold text-white">Total</span>
              <span className="font-display text-2xl font-bold text-white">
                {formatInr(subtotal + (subtotal >= 499 ? 0 : 49))}
              </span>
            </div>
          </div>
          <div className="mt-6">
            <Link to="/checkout">
              <Button className="h-12 w-full bg-tk-primary hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]">Checkout</Button>
            </Link>
            <div className="mt-3 text-center text-xs text-slate-500 leading-relaxed">UPI and Cash on Delivery available (simulated).</div>
          </div>
        </div>
      </div>
    </div>
  )
}
