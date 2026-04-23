import { useEffect, useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, Sparkles, Tag, Zap } from 'lucide-react'
import { MAIN_CATEGORIES } from '@/constants/techkart'
import { useCatalogStore } from '@/stores/catalogStore'
import ProductCard from '@/components/ProductCard'
import Skeleton from '@/components/Skeleton'
import { toInrFromUsd } from '@/utils/money'
import { sortProductsForDisplay } from '@/utils/productUtils'
import { motion } from 'framer-motion'

function SectionHeader({ title, subtitle, to }: { title: string; subtitle: string; to: string }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">{title}</h2>
        <div className="mt-1 text-sm text-slate-600">{subtitle}</div>
      </div>
      <Link
        to={to}
        className="inline-flex items-center gap-2 rounded-xl border border-tk-border bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white hover:shadow-md"
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
  const brokenImageIds = useCatalogStore((s) => s.brokenImageIds)
  const navigate = useNavigate()

  useEffect(() => {
    void loadAll()
  }, [loadAll])

  const { under10, under20, trending, brands } = useMemo(() => {
    const mapped = products.map((p) => ({ ...p, priceInr: toInrFromUsd(p.price) }))
    const under10 = sortProductsForDisplay(mapped.filter((p) => p.priceInr <= 10000), brokenImageIds).slice(0, 8)
    const under20 = sortProductsForDisplay(mapped.filter((p) => p.priceInr <= 20000), brokenImageIds).slice(0, 8)
    const trending = sortProductsForDisplay(mapped.slice(), brokenImageIds).slice(0, 8)

    const brandCounts = new Map<string, number>()
    for (const p of mapped) brandCounts.set(p.brand, (brandCounts.get(p.brand) ?? 0) + 1)
    const brands = Array.from(brandCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([name]) => name)

    return { under10, under20, trending, brands }
  }, [products, brokenImageIds])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-12 pb-10"
    >
      <motion.section variants={itemVariants} className="relative overflow-hidden rounded-3xl border border-tk-border bg-white/80 shadow-soft backdrop-blur-sm">
        <div className="absolute inset-0 bg-[radial-gradient(900px_480px_at_10%_0%,rgba(40,116,240,0.18),transparent_60%),radial-gradient(800px_420px_at_90%_0%,rgba(255,159,0,0.14),transparent_60%)]" />
        <div className="relative grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 px-4 py-1.5 text-xs font-semibold text-blue-700"
            >
              <Sparkles size={14} /> Next-Gen Tech Discovery
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.1]"
            >
              Shop smarter with <span className="text-transparent bg-clip-text bg-gradient-to-r from-tk-primary to-tk-primary2">comparison & tracking</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-slate-600"
            >
              TechKart helps you shortlist faster: clean filters, side-by-side specs, and a quick price history view to catch the best time to buy your dream gadgets.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={() => navigate('/products')}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-tk-primary px-6 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition hover:shadow-lg hover:shadow-blue-500/25"
              >
                Browse products <ArrowRight size={16} />
              </button>
              <Link
                to="/compare"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-tk-border bg-white/80 px-6 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white hover:shadow-md"
              >
                Compare picks
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="grid gap-4"
          >
            <div className="rounded-2xl border border-tk-border bg-white/70 p-5 shadow-sm backdrop-blur-sm">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-700">
                <Zap size={14} /> Today's Offers
              </div>
              <div className="mt-2 font-display text-xl font-bold text-slate-900">Extra savings on essentials</div>
              <div className="mt-1 text-sm text-slate-600">Budget picks, deep discounts, and top-rated value.</div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-tk-border bg-white/70 p-5 shadow-sm backdrop-blur-sm">
                <div className="text-xs font-semibold text-slate-500">Price tracking</div>
                <div className="mt-2 font-display text-xl font-bold text-slate-900">30/90 days</div>
                <div className="mt-1 text-sm text-slate-600">Spot trends.</div>
              </div>
              <div className="rounded-2xl border border-tk-border bg-white/70 p-5 shadow-sm backdrop-blur-sm">
                <div className="text-xs font-semibold text-slate-500">Compare</div>
                <div className="mt-2 font-display text-xl font-bold text-slate-900">2–4 items</div>
                <div className="mt-1 text-sm text-slate-600">Pick the best.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="space-y-6">
        <div className="rounded-3xl border border-tk-border bg-white/70 p-6 shadow-soft backdrop-blur-sm">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">Top Brands</h2>
              <div className="mt-1 text-sm text-slate-600">Quick-jump into a brand's catalog.</div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-amber-700">
              <Tag size={14} /> Popular right now
            </div>
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
            {brands.map((b, idx) => (
              <Link
                key={`${b}-${idx}`}
                to={`/products?brand=${encodeURIComponent(b)}`}
                className="shrink-0 rounded-full border border-tk-border bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:shadow-md"
              >
                {b}
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="space-y-6">
        <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">Shop by Category</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MAIN_CATEGORIES.map((c) => (
            <Link
              key={c.value}
              to={`/products?category=${encodeURIComponent(c.value)}`}
              className="group relative overflow-hidden rounded-2xl border border-tk-border bg-white/80 p-6 shadow-soft backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-[radial-gradient(500px_220px_at_20%_20%,rgba(40,116,240,0.14),transparent_55%)]" />
              <div className="relative">
                <div className="text-xs font-semibold text-slate-500">Explore</div>
                <div className="mt-2 font-display text-xl font-bold text-slate-900">{c.label}</div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                  View deals <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      <motion.section variants={itemVariants} className="space-y-6">
        <SectionHeader title="Trending Products" subtitle="High ratings + strong offers right now." to="/products" />
        {status !== 'success' ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-tk-border bg-white/70 p-5 shadow-soft backdrop-blur-sm">
                <Skeleton className="aspect-[4/3] w-full rounded-xl" />
                <Skeleton className="mt-5 h-5 w-5/6" />
                <Skeleton className="mt-3 h-4 w-2/3" />
                <Skeleton className="mt-6 h-11 w-full rounded-xl" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trending.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </motion.section>

      <motion.section variants={itemVariants} className="space-y-6">
        <SectionHeader title="Best under ₹10,000" subtitle="Top-rated picks that don't stretch your budget." to="/products" />
        {status !== 'success' ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-tk-border bg-white/70 p-5 shadow-soft backdrop-blur-sm">
                <Skeleton className="aspect-[4/3] w-full rounded-xl" />
                <Skeleton className="mt-5 h-5 w-5/6" />
                <Skeleton className="mt-3 h-4 w-2/3" />
                <Skeleton className="mt-6 h-11 w-full rounded-xl" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {under10.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </motion.section>

      <motion.section variants={itemVariants} className="space-y-6">
        <SectionHeader title="Best under ₹20,000" subtitle="Big features, cleaner pricing." to="/products" />
        {status !== 'success' ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-tk-border bg-white/70 p-5 shadow-soft backdrop-blur-sm">
                <Skeleton className="aspect-[4/3] w-full rounded-xl" />
                <Skeleton className="mt-5 h-5 w-5/6" />
                <Skeleton className="mt-3 h-4 w-2/3" />
                <Skeleton className="mt-6 h-11 w-full rounded-xl" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {under20.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </motion.section>
    </motion.div>
  )
}
