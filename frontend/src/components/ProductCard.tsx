import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRightLeft, ShoppingCart } from 'lucide-react'
import type { Product } from '@/types/catalog'
import { toInrFromUsd, formatInr } from '@/utils/money'
import { getSpecProfile } from '@/utils/specs'
import { useCompareStore } from '@/stores/compareStore'
import { useCartStore } from '@/stores/cartStore'
import { useToastStore } from '@/stores/toastStore'
import { cn } from '@/lib/utils'
import { getTechCategoryFromSlug } from '@/utils/techCategory'
import { isBestChoice, hasValidImage } from '@/utils/productUtils'
import { useCatalogStore } from '@/stores/catalogStore'
import { motion } from 'framer-motion'

export default function ProductCard({ product }: { product: Product }) {
  const selected = useCompareStore((s) => s.isSelected(product.id))
  const toggle = useCompareStore((s) => s.toggle)
  const ids = useCompareStore((s) => s.ids)
  const compareCategory = useCompareStore((s) => s.category)
  const add = useCartStore((s) => s.add)
  const toast = useToastStore((s) => s.push)
  const markImageBroken = useCatalogStore((s) => s.markImageBroken)
  const brokenImageIds = useCatalogStore((s) => s.brokenImageIds)
  
  const specs = getSpecProfile(product)
  const priceInr = toInrFromUsd(product.price)
  const techCategory = getTechCategoryFromSlug(product.category)
  const isBlocked = !selected && !!compareCategory && techCategory !== compareCategory

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-tk-border bg-white/90 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white flex items-center justify-center p-6">
        <img
          src={hasValidImage(product, brokenImageIds) ? product.thumbnail : '/product-fallback.svg'}
          alt={product.title}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={(e) => {
            markImageBroken(product.id)
            const el = e.currentTarget
            if (el.src.endsWith('/product-fallback.svg')) return
            el.src = '/product-fallback.svg'
          }}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
        />
        {isBestChoice(product) ? (
          <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-semibold text-white shadow-md shadow-emerald-500/25">
            <CheckCircle2 size={14} />
            Best Choice
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <Link to={`/products/${product.id}`} className="block">
          <div className="tk-clamp-2 text-sm font-semibold text-slate-900">{product.title}</div>
        </Link>

        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="font-display text-lg font-bold text-slate-900">{formatInr(priceInr)}</div>
          {product.discountPercentage > 0 ? (
            <div className="rounded-full bg-emerald-600/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
              {Math.round(product.discountPercentage)}% off
            </div>
          ) : null}
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-slate-600">
          <div className="rounded-xl bg-slate-900/5 px-2 py-1 text-center">{specs.ram}</div>
          <div className="rounded-xl bg-slate-900/5 px-2 py-1 text-center">{specs.storage}</div>
          <div className="rounded-xl bg-slate-900/5 px-2 py-1 text-center">{specs.battery}</div>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <button
            className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-tk-primary text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition hover:shadow-lg hover:shadow-blue-500/25"
            onClick={() => {
              add(product.id)
              toast('Added to cart')
            }}
          >
            <ShoppingCart size={18} />
            Add
          </button>
          <button
            className={cn(
              'inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-xl text-sm font-semibold transition border',
              selected
                ? 'bg-tk-primary text-white border-tk-primary shadow-md shadow-blue-500/20'
                : 'border-tk-border bg-white/80 text-slate-700 hover:bg-white hover:shadow-md',
            )}
            onClick={() => {
              if (!techCategory) return
              toggle({ id: product.id, category: techCategory })
            }}
            disabled={!techCategory || isBlocked || (!selected && ids.length >= 4)}
          >
            <ArrowRightLeft size={18} />
            Compare
          </button>
        </div>
      </div>
    </motion.div>
  )
}
