import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRightLeft, ShoppingCart } from 'lucide-react'
import type { Product } from '@/types/catalog'
import StarRating from '@/components/StarRating'
import { toInrFromUsd, formatInr } from '@/utils/money'
import { getSpecProfile } from '@/utils/specs'
import { useCompareStore } from '@/stores/compareStore'
import { useCartStore } from '@/stores/cartStore'
import { useToastStore } from '@/stores/toastStore'
import { cn } from '@/lib/utils'
import { getTechCategoryFromSlug } from '@/utils/techCategory'

function isBestChoice(p: Product) {
  const inr = toInrFromUsd(p.price)
  return (p.rating >= 4.6 && p.discountPercentage >= 12) || (p.rating >= 4.5 && inr <= 20000)
}

export default function ProductCard({ product }: { product: Product }) {
  const selected = useCompareStore((s) => s.isSelected(product.id))
  const toggle = useCompareStore((s) => s.toggle)
  const ids = useCompareStore((s) => s.ids)
  const compareCategory = useCompareStore((s) => s.category)
  const add = useCartStore((s) => s.add)
  const toast = useToastStore((s) => s.push)
  const specs = getSpecProfile(product)
  const priceInr = toInrFromUsd(product.price)
  const techCategory = getTechCategoryFromSlug(product.category)
  const isBlocked = !selected && !!compareCategory && techCategory !== compareCategory

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-tk-border bg-white/70 shadow-soft backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lift">
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-white to-slate-50">
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-contain p-6 transition duration-300 group-hover:scale-[1.04]"
        />
        {isBestChoice(product) ? (
          <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-semibold text-white shadow-md shadow-emerald-500/25">
            <CheckCircle2 size={14} />
            Best Choice
          </div>
        ) : null}
      </div>

      <div className="p-4">
        <Link to={`/products/${product.id}`} className="block">
          <div className="tk-clamp-2 text-sm font-semibold text-slate-900">{product.title}</div>
        </Link>

        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <div className="font-display text-lg font-bold text-slate-900">{formatInr(priceInr)}</div>
            <div className="rounded-full bg-blue-600/10 px-2 py-0.5 text-[11px] font-semibold text-blue-700">
              {Math.round(product.discountPercentage)}% off
            </div>
          </div>
          <div className="flex items-center gap-1">
            <StarRating rating={product.rating} size={14} />
            <span className="text-xs text-slate-500">{product.rating.toFixed(1)}</span>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-slate-600">
          <div className="rounded-xl bg-slate-900/5 px-2 py-1 text-center">{specs.ram}</div>
          <div className="rounded-xl bg-slate-900/5 px-2 py-1 text-center">{specs.storage}</div>
          <div className="rounded-xl bg-slate-900/5 px-2 py-1 text-center">{specs.battery}</div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <button
            className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-tk-border bg-white/70 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white hover:shadow-md"
            onClick={() => {
              add(product.id)
              toast('Added to cart')
            }}
          >
            <ShoppingCart size={16} />
            Add
          </button>
          <button
            className={cn(
              'inline-flex h-10 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold shadow-sm transition',
              selected
                ? 'bg-gradient-to-b from-tk-primary to-blue-700 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/25'
                : 'border border-tk-border bg-white/70 text-slate-700 hover:bg-white hover:shadow-md',
            )}
            onClick={() => {
              if (!techCategory) return
              toggle({ id: product.id, category: techCategory })
            }}
            disabled={!techCategory || isBlocked || (!selected && ids.length >= 4)}
          >
            <ArrowRightLeft size={16} />
            Compare
          </button>
        </div>
        {isBlocked ? (
          <div className="mt-2 text-xs text-slate-500">Compare only within the same category.</div>
        ) : !selected && ids.length >= 4 ? (
          <div className="mt-2 text-xs text-slate-500">Remove one item to add more.</div>
        ) : null}
      </div>
    </div>
  )
}
