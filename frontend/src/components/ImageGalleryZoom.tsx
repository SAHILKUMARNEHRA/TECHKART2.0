import { useMemo, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export default function ImageGalleryZoom({ images, title }: { images: string[]; title: string }) {
  const list = useMemo(() => {
    const next = images.filter(Boolean)
    return next.length > 0 ? next : ['/product-fallback.svg']
  }, [images])
  const [active, setActive] = useState(list[0])
  const [isHover, setIsHover] = useState(false)
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const ref = useRef<HTMLDivElement | null>(null)
  const activeSrc = active || '/product-fallback.svg'

  return (
    <div className="grid gap-3 lg:grid-cols-[84px_1fr]">
      <div className="order-2 flex gap-2 overflow-auto lg:order-1 lg:flex-col lg:pr-1">
        {list.map((src) => (
          <button
            key={src}
            onClick={() => setActive(src)}
            className={cn(
              'h-20 w-20 flex-none overflow-hidden rounded-2xl border bg-white/60 shadow-sm transition hover:bg-white hover:shadow-md lg:h-[84px] lg:w-[84px]',
              src === active ? 'border-blue-300 ring-4 ring-blue-200/40' : 'border-tk-border',
            )}
          >
            <img
              src={src}
              alt={title}
              className="h-full w-full object-contain p-3"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const el = e.currentTarget
                if (el.src.endsWith('/product-fallback.svg')) return
                el.src = '/product-fallback.svg'
              }}
            />
          </button>
        ))}
      </div>

      <div
        ref={ref}
        className="relative order-1 overflow-hidden rounded-3xl border border-tk-border bg-white/60 shadow-soft"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onMouseMove={(e) => {
          const el = ref.current
          if (!el) return
          const rect = el.getBoundingClientRect()
          const x = ((e.clientX - rect.left) / rect.width) * 100
          const y = ((e.clientY - rect.top) / rect.height) * 100
          setPos({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) })
        }}
      >
        <img
          src={activeSrc}
          alt={title}
          decoding="async"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const el = e.currentTarget
            if (el.src.endsWith('/product-fallback.svg')) return
            el.src = '/product-fallback.svg'
            setActive('/product-fallback.svg')
          }}
          className={cn('h-full w-full object-contain p-8', isHover ? 'opacity-0' : 'opacity-100')}
        />
        <div
          className={cn('absolute inset-0 hidden lg:block', isHover ? 'opacity-100' : 'opacity-0')}
          style={{
            backgroundImage: `url(${activeSrc})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '220%',
            backgroundPosition: `${pos.x}% ${pos.y}%`,
            transition: 'opacity 120ms ease-out',
          }}
        />
      </div>
    </div>
  )
}
