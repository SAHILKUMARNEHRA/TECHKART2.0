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
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import { MouseEvent } from 'react'

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

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 20, stiffness: 150 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const rotateX = useMotionTemplate`${springY}deg`
  const rotateY = useMotionTemplate`${springX}deg`

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXPos = e.clientX - rect.left
    const mouseYPos = e.clientY - rect.top
    
    const xPct = (mouseXPos / width - 0.5) * 2
    const yPct = (mouseYPos / height - 0.5) * 2

    mouseX.set(xPct * 10) // max rotation 10deg
    mouseY.set(yPct * -10)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-tk-border bg-tk-card bg-glass-gradient shadow-soft backdrop-blur-md transition-shadow hover:shadow-neon"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 p-6 flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
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
          className="relative z-10 max-h-full max-w-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-110"
        />
        {isBestChoice(product) ? (
          <div className="absolute left-3 top-3 z-20 inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 text-[11px] font-semibold text-emerald-400 shadow-md backdrop-blur-md">
            <CheckCircle2 size={14} />
            Best Choice
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <Link to={`/products/${product.id}`} className="block">
          <div className="tk-clamp-2 text-sm font-semibold text-slate-200 group-hover:text-tk-primary-2 transition-colors">{product.title}</div>
        </Link>

        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-2">
            <div className="font-display text-xl font-bold text-white tracking-tight">{formatInr(priceInr)}</div>
            <div className="rounded-full bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 text-[11px] font-semibold text-blue-400">
              {Math.round(product.discountPercentage)}% off
            </div>
          </div>
          <div className="flex items-center gap-1 bg-slate-800/50 rounded-full px-2 py-1 border border-slate-700">
            <StarRating rating={product.rating} size={12} />
            <span className="text-xs font-medium text-slate-300">{product.rating.toFixed(1)}</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-[11px] text-slate-300 font-medium">
          <div className="rounded-xl bg-slate-800/60 border border-slate-700/50 px-2 py-1.5 text-center truncate">{specs.ram}</div>
          <div className="rounded-xl bg-slate-800/60 border border-slate-700/50 px-2 py-1.5 text-center truncate">{specs.storage}</div>
          <div className="rounded-xl bg-slate-800/60 border border-slate-700/50 px-2 py-1.5 text-center truncate">{specs.battery}</div>
        </div>

        <div className="mt-auto pt-5 flex items-center gap-2">
          <button
            className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-tk-primary hover:bg-blue-500 text-sm font-semibold text-white shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
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
              'inline-flex h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold shadow-sm transition-all border',
              selected
                ? 'bg-tk-accent border-tk-accent text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]'
                : 'border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white',
            )}
            onClick={() => {
              if (!techCategory) return
              toggle({ id: product.id, category: techCategory })
            }}
            disabled={!techCategory || isBlocked || (!selected && ids.length >= 4)}
          >
            <ArrowRightLeft size={16} />
            <span className="sr-only sm:not-sr-only">Compare</span>
          </button>
        </div>
        {isBlocked ? (
          <div className="mt-3 text-xs text-rose-400 text-center">Compare only within same category</div>
        ) : !selected && ids.length >= 4 ? (
          <div className="mt-3 text-xs text-rose-400 text-center">Remove one item to add more</div>
        ) : null}
      </div>
    </motion.div>
  )
}
