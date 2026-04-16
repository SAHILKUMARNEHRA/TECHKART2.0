import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, CheckCircle2, X } from 'lucide-react'
import EmptyState from '@/components/EmptyState'
import Button from '@/components/Button'
import StarRating from '@/components/StarRating'
import { useCompareStore } from '@/stores/compareStore'
import { useCatalogStore } from '@/stores/catalogStore'
import { getSpecProfile } from '@/utils/specs'
import { formatInr, toInrFromUsd } from '@/utils/money'

type Row = {
  label: string
  kind: 'min' | 'max' | 'text'
  value: (id: number) => string | number
}

function parseNum(v: unknown) {
  if (typeof v === 'number') return v
  if (typeof v !== 'string') return 0
  const n = Number(v.replace(/[^\d.]/g, ''))
  return Number.isFinite(n) ? n : 0
}

function bestIndex(values: Array<string | number>, kind: Row['kind']) {
  if (kind === 'text') return -1
  const nums = values.map(parseNum)
  const best = kind === 'min' ? Math.min(...nums) : Math.max(...nums)
  return nums.findIndex((n) => n === best)
}

function scoreProduct(p: { priceInr: number; rating: number; discount: number; specScore: number }) {
  const priceScore = 1 / Math.max(1, p.priceInr)
  return p.rating * 0.55 + p.discount * 0.02 + priceScore * 120000 + p.specScore * 0.15
}

export default function Compare() {
  const ids = useCompareStore((s) => s.ids)
  const remove = useCompareStore((s) => s.remove)
  const clear = useCompareStore((s) => s.clear)
  const loadAll = useCatalogStore((s) => s.loadAll)
  const status = useCatalogStore((s) => s.status)
  const products = useCatalogStore((s) => s.products)

  useEffect(() => {
    void loadAll()
  }, [loadAll])

  const byId = useMemo(() => new Map(products.map((p) => [p.id, p] as const)), [products])

  const selected = useMemo(() => {
    return ids.map((id) => byId.get(id)).filter(Boolean)
  }, [byId, ids])

  const rows: Row[] = useMemo(() => {
    return [
      {
        label: 'Final price',
        kind: 'min',
        value: (id) => {
          const p = byId.get(id)
          if (!p) return 0
          const mrp = toInrFromUsd(p.price)
          return Math.round(mrp * (1 - p.discountPercentage / 100))
        },
      },
      {
        label: 'Discount',
        kind: 'max',
        value: (id) => {
          const p = byId.get(id)
          return p ? Math.round(p.discountPercentage) : 0
        },
      },
      {
        label: 'Rating',
        kind: 'max',
        value: (id) => {
          const p = byId.get(id)
          return p ? p.rating : 0
        },
      },
      {
        label: 'RAM',
        kind: 'max',
        value: (id) => {
          const p = byId.get(id)
          return p ? getSpecProfile(p).ram : ''
        },
      },
      {
        label: 'Storage',
        kind: 'max',
        value: (id) => {
          const p = byId.get(id)
          return p ? getSpecProfile(p).storage : ''
        },
      },
      {
        label: 'Battery',
        kind: 'max',
        value: (id) => {
          const p = byId.get(id)
          return p ? getSpecProfile(p).battery : ''
        },
      },
      {
        label: 'Display',
        kind: 'text',
        value: (id) => {
          const p = byId.get(id)
          return p ? getSpecProfile(p).display : ''
        },
      },
      {
        label: 'Processor',
        kind: 'text',
        value: (id) => {
          const p = byId.get(id)
          return p ? getSpecProfile(p).processor : ''
        },
      },
      {
        label: 'Brand',
        kind: 'text',
        value: (id) => {
          const p = byId.get(id)
          return p ? p.brand : ''
        },
      },
    ]
  }, [byId])

  const bestPick = useMemo(() => {
    const computed = selected.map((p) => {
      const mrp = toInrFromUsd(p!.price)
      const priceInr = Math.round(mrp * (1 - p!.discountPercentage / 100))
      const specs = getSpecProfile(p!)
      const specScore = parseNum(specs.ram) * 0.6 + parseNum(specs.storage) * 0.2 + parseNum(specs.battery) * 0.01
      return {
        id: p!.id,
        score: scoreProduct({ priceInr, rating: p!.rating, discount: p!.discountPercentage, specScore }),
      }
    })
    const sorted = computed.sort((a, b) => b.score - a.score)
    return sorted[0]?.id ?? null
  }, [selected])

  if (status !== 'success' && ids.length >= 2 && selected.length === 0) {
    return (
      <div className="rounded-3xl border border-tk-border bg-white/60 p-6 shadow-soft backdrop-blur-sm">
        <div className="font-display text-lg font-semibold text-slate-900">Loading comparison…</div>
        <div className="mt-4 text-sm text-slate-600">Fetching product details from the catalog.</div>
      </div>
    )
  }

  if (ids.length < 2) {
    return (
      <EmptyState
        title="Select at least 2 products to compare"
        description="Go to the listing and tap Compare on 2–4 products."
        action={
          <Link to="/products">
            <Button>Browse products</Button>
          </Link>
        }
      />
    )
  }

  if (selected.length < 2) {
    return (
      <EmptyState
        title="Some compared items are unavailable"
        description="Please remove missing items or add new ones from the catalog."
        action={
          <Link to="/products">
            <Button variant="secondary">Browse products</Button>
          </Link>
        }
      />
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="font-display text-2xl font-bold tracking-tight text-slate-900">Comparison</div>
          <div className="mt-1 text-sm text-slate-600">Side-by-side specs with better values highlighted.</div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            to="/products"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-tk-border bg-white/70 px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white hover:shadow-md"
          >
            Add more <ArrowRight size={16} />
          </Link>
          <button
            className="inline-flex h-10 items-center justify-center rounded-xl border border-tk-border bg-white/70 px-4 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white hover:shadow-md"
            onClick={clear}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-tk-border bg-white/60 p-4 shadow-soft backdrop-blur-sm">
        <div className="overflow-auto">
          <table className="min-w-[860px] w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="sticky left-0 z-10 w-44 bg-white/60 p-4 text-left text-xs font-semibold text-slate-500 backdrop-blur-sm">
                  Category
                </th>
                {selected.map((p) => (
                  <th key={p!.id} className="p-4 text-left">
                    <div className="rounded-2xl border border-tk-border bg-white/70 p-3 shadow-sm">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link to={`/products/${p!.id}`} className="tk-clamp-2 text-sm font-semibold text-slate-900">
                            {p!.title}
                          </Link>
                          <div className="mt-2 inline-flex items-center gap-2 text-xs text-slate-600">
                            <StarRating rating={p!.rating} size={14} />
                            <span className="font-semibold">{p!.rating.toFixed(1)}</span>
                          </div>
                        </div>
                        <button
                          className="rounded-xl p-2 text-slate-400 transition hover:bg-slate-900/5 hover:text-slate-600"
                          onClick={() => remove(p!.id)}
                          aria-label="Remove"
                        >
                          <X size={18} />
                        </button>
                      </div>
                      {bestPick === p!.id ? (
                        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow-md shadow-emerald-500/25">
                          <Award size={14} /> Best Pick
                        </div>
                      ) : null}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                const values = selected.map((p) => row.value(p!.id))
                const best = bestIndex(values, row.kind)

                return (
                  <tr key={row.label}>
                    <td className="sticky left-0 z-10 w-44 border-t border-tk-border bg-white/60 p-4 text-sm font-semibold text-slate-700 backdrop-blur-sm">
                      {row.label}
                    </td>
                    {values.map((v, idx) => {
                      const isBest = best === idx
                      const display =
                        row.label === 'Final price'
                          ? formatInr(Number(v))
                          : row.label === 'Discount'
                            ? `${v}%`
                            : row.label === 'Rating'
                              ? Number(v).toFixed(1)
                              : String(v)

                      return (
                        <td key={`${row.label}-${idx}`} className="border-t border-tk-border p-4 align-top">
                          <div
                            className={
                              isBest
                                ? 'rounded-2xl border border-emerald-200 bg-emerald-50/60 px-3 py-3 text-sm font-semibold text-emerald-800 shadow-sm'
                                : 'rounded-2xl border border-tk-border bg-white/70 px-3 py-3 text-sm font-semibold text-slate-800 shadow-sm'
                            }
                          >
                            <div className="flex items-center justify-between gap-3">
                              <span>{display}</span>
                              {isBest && row.kind !== 'text' ? <CheckCircle2 size={16} className="text-emerald-600" /> : null}
                            </div>
                          </div>
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
