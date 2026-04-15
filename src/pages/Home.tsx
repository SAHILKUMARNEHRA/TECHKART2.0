import { useEffect, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Sparkles, Tag } from 'lucide-react'
import { MAIN_CATEGORIES } from '@/constants/techkart'
import { useCatalogStore } from '@/stores/catalogStore'
import ProductCard from '@/components/ProductCard'
import Skeleton from '@/components/Skeleton'
import { toInrFromUsd } from '@/utils/money'

function SectionHeader({ title, subtitle, to }: { title: string; subtitle: string; to: string }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <div className="font-display text-xl font-bold tracking-tight text-slate-900">{title}</div>
        <div className="mt-1 text-sm text-slate-600">{subtitle}</div>
      </div>
      <Link
        to={to}
        className="inline-flex items-center gap-2 rounded-xl border border-tk-border bg-white/70 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white hover:shadow-md"
      >
        View all <ArrowRight size={16} />
      </Link>
    </div>
  )
}

export default function Home() {
  const loadAll = useCatalogStore((s) => s.loadAll)
  const status = useCatalogStore((s) => s.status)
  const products = useCatalogStore((s) => s.products)
  const navigate = useNavigate()

  useEffect(() => {
    void loadAll()
  }, [loadAll])

  const { under10, under20, trending, brands } = useMemo(() => {
    const mapped = products.map((p) => ({ ...p, priceInr: toInrFromUsd(p.price) }))
    const under10 = mapped.filter((p) => p.priceInr <= 10000).sort((a, b) => b.rating - a.rating).slice(0, 8)
    const under20 = mapped.filter((p) => p.priceInr <= 20000).sort((a, b) => b.discountPercentage - a.discountPercentage).slice(0, 8)
    const trending = mapped
      .slice()
      .sort((a, b) => b.rating * (1 + b.discountPercentage / 100) - a.rating * (1 + a.discountPercentage / 100))
      .slice(0, 10)

    const brandCounts = new Map<string, number>()
    for (const p of mapped) brandCounts.set(p.brand, (brandCounts.get(p.brand) ?? 0) + 1)
    const brands = Array.from(brandCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([name]) => name)

    return { under10, under20, trending, brands }
  }, [products])

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-tk-border bg-white/60 shadow-soft backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(800px_360px_at_10%_0%,rgba(29,92,255,0.22),transparent_55%),radial-gradient(700px_320px_at_90%_0%,rgba(0,168,255,0.18),transparent_55%)]" />
        <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/60 bg-white/70 px-3 py-1 text-xs font-semibold text-blue-700">
              <Sparkles size={14} /> Premium browsing, made simple
            </div>
            <div className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Shop smarter with comparison + price tracking
            </div>
            <div className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
              TechKart helps you shortlist faster: clean filters, side-by-side specs, and a quick price history view to catch the best time to buy.
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => navigate('/products')}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-tk-primary to-blue-700 px-5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition hover:shadow-lg hover:shadow-blue-500/25"
              >
                Browse products <ArrowRight size={16} />
              </button>
              <Link
                to="/compare"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-tk-border bg-white/70 px-5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white hover:shadow-md"
              >
                Compare picks
              </Link>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-2xl border border-tk-border bg-white/70 p-4 shadow-sm">
              <div className="text-xs font-semibold text-slate-500">Today’s offers</div>
              <div className="mt-2 font-display text-lg font-semibold text-slate-900">Extra savings on essentials</div>
              <div className="mt-1 text-sm text-slate-600">Budget picks, deep discounts, and top-rated value.</div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-tk-border bg-white/70 p-4 shadow-sm">
                <div className="text-xs font-semibold text-slate-500">Price tracking</div>
                <div className="mt-2 font-display text-lg font-semibold text-slate-900">30/90 days</div>
                <div className="mt-1 text-sm text-slate-600">Spot trends instantly.</div>
              </div>
              <div className="rounded-2xl border border-tk-border bg-white/70 p-4 shadow-sm">
                <div className="text-xs font-semibold text-slate-500">Compare</div>
                <div className="mt-2 font-display text-lg font-semibold text-slate-900">2–4 items</div>
                <div className="mt-1 text-sm text-slate-600">Pick the best.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="font-display text-xl font-bold tracking-tight text-slate-900">Shop by Category</div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {MAIN_CATEGORIES.map((c) => (
            <Link
              key={c.value}
              to={`/products?category=${encodeURIComponent(c.value)}`}
              className="group relative overflow-hidden rounded-2xl border border-tk-border bg-white/70 p-5 shadow-soft backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(500px_220px_at_20%_20%,rgba(29,92,255,0.14),transparent_55%)]" />
              <div className="relative">
                <div className="text-xs font-semibold text-slate-500">Explore</div>
                <div className="mt-2 font-display text-lg font-semibold text-slate-900">{c.label}</div>
                <div className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                  View deals <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeader title="Best under ₹10,000" subtitle="Top-rated picks that don’t stretch your budget." to="/products" />
        {status !== 'success' ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-tk-border bg-white/60 p-4 shadow-soft">
                <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
                <Skeleton className="mt-4 h-4 w-5/6" />
                <Skeleton className="mt-2 h-4 w-2/3" />
                <Skeleton className="mt-4 h-10 w-full rounded-xl" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {under10.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>

      <section className="space-y-4">
        <SectionHeader title="Best under ₹20,000" subtitle="Big features, cleaner pricing." to="/products" />
        {status !== 'success' ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-tk-border bg-white/60 p-4 shadow-soft">
                <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
                <Skeleton className="mt-4 h-4 w-5/6" />
                <Skeleton className="mt-2 h-4 w-2/3" />
                <Skeleton className="mt-4 h-10 w-full rounded-xl" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {under20.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>

      <section className="space-y-4">
        <SectionHeader title="Trending Products" subtitle="High ratings + strong offers right now." to="/products" />
        {status !== 'success' ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-tk-border bg-white/60 p-4 shadow-soft">
                <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
                <Skeleton className="mt-4 h-4 w-5/6" />
                <Skeleton className="mt-2 h-4 w-2/3" />
                <Skeleton className="mt-4 h-10 w-full rounded-xl" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trending.slice(0, 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </section>

      <section className="space-y-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="font-display text-xl font-bold tracking-tight text-slate-900">Top Brands</div>
            <div className="mt-1 text-sm text-slate-600">Quick-jump into a brand’s catalog.</div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
            <Tag size={14} /> Popular right now
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {brands.map((b, idx) => (
            <Link
              key={`${b}-${idx}`}
              to={`/products?brand=${encodeURIComponent(b)}`}
              className="inline-flex items-center rounded-full border border-tk-border bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white hover:shadow-md"
            >
              {b}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
