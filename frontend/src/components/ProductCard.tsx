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
import { isBestChoice } from '@/utils/productUtils'
import { motion } from 'framer-motion'

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-[#0f1423] border border-slate-800 shadow-lg hover:shadow-neon transition-shadow duration-300"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0a0f18] flex items-center justify-center p-8">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1423] to-transparent opacity-50 pointer-events-none" />
        
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const el = e.currentTarget
            if (el.src.endsWith('/product-fallback.svg')) return
            el.src = '/product-fallback.svg'
          }}
          className="relative z-10 h-full w-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
        />
        
        {isBestChoice(product) ? (
          <div className="absolute left-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-[#1b3b2b]/80 border border-emerald-500/30 px-3 py-1.5 text-xs font-semibold text-emerald-400 backdrop-blur-md shadow-lg">
            <CheckCircle2 size={14} />
            Best Choice
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6 pt-5">
        <Link to={`/products/${product.id}`} className="block">
          <div className="tk-clamp-1 text-lg font-bold text-slate-100 group-hover:text-tk-primary-2 transition-colors">
            {product.title}
          </div>
        </Link>

        <div className="mt-3 flex items-center gap-3">
          <div className="font-display text-2xl font-bold text-white tracking-tight">
            {formatInr(priceInr)}
          </div>
          {product.discountPercentage > 0 && (
            <div className="flex h-9 w-9 flex-col items-center justify-center rounded-full bg-blue-900/40 border border-blue-500/20 text-[10px] font-bold text-blue-400 leading-none">
              <span>{Math.round(product.discountPercentage)}%</span>
              <span>off</span>
            </div>
          )}
        </div>

        <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-slate-300">
          <div className="rounded-full bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 truncate max-w-[100px] text-center">
            {specs.processor || specs.ram}
          </div>
          <div className="rounded-full bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 truncate max-w-[100px] text-center">
            {specs.storage}
          </div>
          <div className="rounded-full bg-slate-800/80 border border-slate-700/60 px-3 py-1.5 truncate max-w-[100px] text-center">
            {specs.battery}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            className="flex-1 inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#5271ff] hover:bg-[#4361ee] text-sm font-bold text-white shadow-[0_4px_14px_rgba(82,113,255,0.4)] transition-all hover:shadow-[0_6px_20px_rgba(82,113,255,0.6)]"
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
              'flex-1 inline-flex h-11 items-center justify-center gap-2 rounded-xl text-sm font-bold transition-all border',
              selected
                ? 'bg-tk-accent/20 border-tk-accent text-tk-accent shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                : 'border-slate-700 bg-[#161d2d] text-slate-300 hover:bg-[#1f293f] hover:text-white',
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
