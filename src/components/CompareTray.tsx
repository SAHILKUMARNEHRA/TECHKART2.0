import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, ArrowRightLeft } from 'lucide-react'
import { useCompareStore } from '@/stores/compareStore'
import { useCatalogStore } from '@/stores/catalogStore'
import { cn } from '@/lib/utils'

export default function CompareTray() {
  const ids = useCompareStore((s) => s.ids)
  const remove = useCompareStore((s) => s.remove)
  const clear = useCompareStore((s) => s.clear)
  const error = useCompareStore((s) => s.error)
  const clearError = useCompareStore((s) => s.clearError)
  const products = useCatalogStore((s) => s.products)

  useEffect(() => {
    if (!error) return
    const t = window.setTimeout(() => clearError(), 2200)
    return () => window.clearTimeout(t)
  }, [clearError, error])

  if (ids.length === 0) return null

  const selected = ids
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)

  return (
    <div className="fixed inset-x-0 bottom-3 z-40 px-3">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-tk-border bg-white/80 p-3 shadow-lift backdrop-blur-xl">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-tk-primary to-tk-primary2 text-white shadow-md shadow-blue-500/20">
                <ArrowRightLeft size={18} />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Compare</div>
                <div className="text-xs text-slate-600">Pick 2–4 products to compare specs.</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {selected.map((p) => (
                <span
                  key={p!.id}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-xl border border-tk-border bg-white/70 px-3 py-2 text-xs text-slate-700 shadow-sm',
                  )}
                >
                  <span className="max-w-[160px] truncate">{p!.title}</span>
                  <button
                    className="rounded-lg p-1 text-slate-400 transition hover:bg-slate-900/5 hover:text-slate-600"
                    onClick={() => remove(p!.id)}
                    aria-label="Remove from compare"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
              <Link
                to="/compare"
                className="inline-flex h-10 items-center justify-center rounded-xl bg-gradient-to-b from-tk-primary to-blue-700 px-4 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition hover:shadow-lg hover:shadow-blue-500/25"
              >
                Compare ({ids.length})
              </Link>
              <button
                className="inline-flex h-10 items-center justify-center rounded-xl border border-tk-border bg-white/70 px-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white hover:shadow-md"
                onClick={clear}
              >
                Clear
              </button>
            </div>
          </div>
          {error ? (
            <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50/70 px-3 py-2 text-xs font-semibold text-amber-800">
              {error}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
