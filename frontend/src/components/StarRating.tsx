import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  const full = Math.floor(rating)
  const frac = rating - full
  const half = frac >= 0.5 ? 1 : 0
  const empty = Math.max(0, 5 - full - half)

  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, idx) => (
        <Star key={`f-${idx}`} size={size} className="fill-amber-400 text-amber-400" />
      ))}
      {half === 1 ? (
        <span className="relative inline-flex">
          <Star size={size} className="text-amber-400" />
          <span className="pointer-events-none absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            <Star size={size} className="fill-amber-400 text-amber-400" />
          </span>
        </span>
      ) : null}
      {Array.from({ length: empty }).map((_, idx) => (
        <Star key={`e-${idx}`} size={size} className={cn('text-slate-300')} />
      ))}
    </div>
  )
}

