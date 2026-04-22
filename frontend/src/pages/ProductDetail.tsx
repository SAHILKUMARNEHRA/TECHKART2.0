import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowRightLeft, BadgePercent, CheckCircle2, ChevronLeft, ShoppingCart, TrendingDown, TrendingUp } from 'lucide-react'
import ImageGalleryZoom from '@/components/ImageGalleryZoom'
import PriceHistoryChart from '@/components/PriceHistoryChart'
import StarRating from '@/components/StarRating'
import Button from '@/components/Button'
import Skeleton from '@/components/Skeleton'
import EmptyState from '@/components/EmptyState'
import { useCatalogStore } from '@/stores/catalogStore'
import { useCartStore } from '@/stores/cartStore'
import { useCompareStore } from '@/stores/compareStore'
import { useToastStore } from '@/stores/toastStore'
import { getSpecProfile } from '@/utils/specs'
import { formatInr, toInrFromUsd } from '@/utils/money'
import { getOrCreatePriceHistory, summarizeHistory } from '@/utils/priceHistory'
import { getReviewCount } from '@/utils/reviews'
import { getTechCategoryFromSlug, techCategoryLabel } from '@/utils/techCategory'
import { motion } from 'framer-motion'

function mockReviews(productId: number) {
  const names = ['Aarav', 'Diya', 'Kabir', 'Meera', 'Ishaan', 'Anaya']
  const lines = [
    'Packaging was solid and delivery was quick.',
    'Great value for the price. Feels premium in hand.',
    'Battery life is better than expected for daily use.',
    'Display quality is crisp and colors look great.',
    'Worth buying during a discount—super satisfied.',
  ]
  return Array.from({ length: 4 }).map((_, i) => {
    const n = names[(productId + i * 3) % names.length]
    const t = lines[(productId + i * 5) % lines.length]
    const r = Math.min(5, Math.max(3.5, 3.6 + ((productId * 17 + i * 29) % 15) / 10))
    return { name: n, text: t, rating: r }
  })
}

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const numericId = Number(id)
  const status = useCatalogStore((s) => s.status)
  const loadAll = useCatalogStore((s) => s.loadAll)
  const products = useCatalogStore((s) => s.products)
  const addToCart = useCartStore((s) => s.add)
  const toast = useToastStore((s) => s.push)
  const compareToggle = useCompareStore((s) => s.toggle)
  const compareSelected = useCompareStore((s) => s.isSelected(numericId))
  const compareIds = useCompareStore((s) => s.ids)
  const compareCategory = useCompareStore((s) => s.category)

  useEffect(() => {
    void loadAll()
  }, [loadAll])

  const product = useMemo(() => products.find((p) => p.id === numericId), [numericId, products])

  const priceInr = product ? toInrFromUsd(product.price) : 0
  const discounted = product ? Math.round(priceInr * (1 - product.discountPercentage / 100)) : 0

  const [historyDays, setHistoryDays] = useState<30 | 90>(30)
  const history = useMemo(() => {
    if (!product) return []
    const points = getOrCreatePriceHistory(product.id, discounted)
    return historyDays === 30 ? points.slice(-30) : points
  }, [discounted, historyDays, product])

  const historySummary = useMemo(() => summarizeHistory(history), [history])

  if (!Number.isFinite(numericId)) {
    return (
      <EmptyState
        title="Invalid product"
        description="Please go back and open a valid product."
        action={
          <Link to="/products">
            <Button variant="secondary" className="border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white">Back to products</Button>
          </Link>
        }
      />
    )
  }

  if (status !== 'success' && !product) {
    return (
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-4 shadow-soft">
          <Skeleton className="h-[420px] w-full rounded-3xl bg-slate-800" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-7 w-5/6 bg-slate-800" />
          <Skeleton className="h-5 w-2/3 bg-slate-800" />
          <Skeleton className="h-24 w-full rounded-2xl bg-slate-800" />
          <Skeleton className="h-11 w-full rounded-2xl bg-slate-800" />
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <EmptyState
        title="Product not found"
        description="This item might not be available. Try browsing the catalog."
        action={
          <Link to="/products">
            <Button variant="secondary" className="border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white">Back to products</Button>
          </Link>
        }
      />
    )
  }

  const specs = getSpecProfile(product)
  const techCategory = getTechCategoryFromSlug(product.category)
  const totalReviews = getReviewCount(product.id)
  const reviews = mockReviews(product.id)
  const isCompareBlocked = !compareSelected && !!compareCategory && techCategory !== compareCategory

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
      className="space-y-8"
    >
      <motion.div variants={itemVariants}>
        <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white">
          <ChevronLeft size={18} /> Back to listing
        </Link>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <motion.div variants={itemVariants} className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-neon backdrop-blur-md">
          <ImageGalleryZoom images={product.images} title={product.title} />
        </motion.div>

        <div className="space-y-6">
          <motion.div variants={itemVariants} className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-neon backdrop-blur-md">
            <div className="font-display text-3xl font-bold tracking-tight text-white">{product.title}</div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-4 py-1.5 text-sm font-semibold text-slate-300 border border-slate-700">
                <StarRating rating={product.rating} size={14} />
                <span className="text-white">{product.rating.toFixed(1)}</span>
                <span className="text-slate-500">({totalReviews} reviews)</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-sm font-semibold text-emerald-400">
                <CheckCircle2 size={16} /> Verified Buyer tags
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 shadow-sm">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Price</div>
                  <div className="mt-2 flex items-baseline gap-3">
                    <div className="font-display text-4xl font-bold text-white">{formatInr(discounted)}</div>
                    <div className="text-sm font-semibold text-slate-500 line-through">{formatInr(priceInr)}</div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-tk-primary/10 border border-tk-primary/20 px-3 py-1 text-sm font-semibold text-tk-primary-2 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                      <BadgePercent size={16} />
                      {Math.round(product.discountPercentage)}% off
                    </div>
                  </div>
                </div>
                <div className="text-xs text-slate-500">Inclusive of all taxes</div>
              </div>

              <div className="mt-6 grid gap-3 text-sm text-slate-300">
                <div className="flex items-center justify-between py-2 border-b border-slate-700/50">
                  <span className="font-semibold text-slate-200">Offer</span>
                  <span>Extra discount on select cards (UI)</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="font-semibold text-slate-200">Delivery</span>
                  <span className="text-emerald-400">Free delivery above ₹499</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                className="h-12 flex-1 bg-tk-primary hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]"
                onClick={() => {
                  addToCart(product.id)
                  toast('Added to cart')
                }}
              >
                <ShoppingCart size={18} /> Add to Cart
              </Button>
              <Button
                className="h-12 flex-1 bg-tk-accent hover:bg-violet-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] border-0"
                onClick={() => {
                  addToCart(product.id)
                  toast('Proceeding to checkout')
                  navigate('/checkout')
                }}
              >
                Buy Now
              </Button>
              <button
                className={
                  compareSelected
                    ? 'inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-tk-primary to-blue-700 px-5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition hover:shadow-lg hover:shadow-blue-500/25'
                    : 'inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-slate-800/50 px-5 text-sm font-semibold text-slate-300 shadow-sm transition hover:bg-slate-700 hover:text-white'
                }
                onClick={() => {
                  if (!techCategory) return
                  compareToggle({ id: product.id, category: techCategory })
                }}
                disabled={!techCategory || isCompareBlocked || (!compareSelected && compareIds.length >= 4)}
              >
                <ArrowRightLeft size={18} /> Compare
              </button>
            </div>
            {isCompareBlocked ? (
              <div className="mt-4 text-sm text-rose-400 text-center">Compare only within the same category.</div>
            ) : !compareSelected && compareIds.length >= 4 ? (
              <div className="mt-4 text-sm text-rose-400 text-center">Compare list is full (4). Remove one to add this.</div>
            ) : null}
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-neon backdrop-blur-md">
            <div className="font-display text-xl font-bold text-white">Specifications</div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/40 shadow-sm">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Processor', specs.processor],
                    ['RAM', specs.ram],
                    ['Storage', specs.storage],
                    ['Battery', specs.battery],
                    ['Display', specs.display],
                    ['Brand', product.brand],
                    ['Category', techCategory ? techCategoryLabel(techCategory) : product.category],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-slate-700/50 last:border-b-0">
                      <td className="w-32 bg-slate-900/40 px-5 py-4 font-semibold text-slate-400">{k}</td>
                      <td className="px-5 py-4 text-slate-200">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-neon backdrop-blur-md">
            <div className="flex items-center justify-between gap-3">
              <div className="font-display text-xl font-bold text-white">Price Tracking</div>
              <div className="inline-flex overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/80 shadow-sm p-1">
                <button
                  className={historyDays === 30 ? 'px-4 py-1.5 text-sm font-semibold text-white bg-tk-primary rounded-xl shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'px-4 py-1.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors'}
                  onClick={() => setHistoryDays(30)}
                >
                  30 days
                </button>
                <button
                  className={historyDays === 90 ? 'px-4 py-1.5 text-sm font-semibold text-white bg-tk-primary rounded-xl shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'px-4 py-1.5 text-sm font-semibold text-slate-400 hover:text-white transition-colors'}
                  onClick={() => setHistoryDays(90)}
                >
                  90 days
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_220px]">
              <div className="rounded-2xl bg-slate-800/40 border border-slate-700/50 p-4">
                <PriceHistoryChart points={history} />
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-5 shadow-sm">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Lowest price</div>
                  <div className="mt-2 font-display text-2xl font-bold text-white">{formatInr(historySummary.lowest)}</div>
                </div>
                <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-5 shadow-sm">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Trend</div>
                  <div className="mt-3 inline-flex items-center gap-2 text-base font-semibold">
                    {historySummary.trend <= 0 ? (
                      <>
                        <div className="bg-emerald-500/20 p-1.5 rounded-lg border border-emerald-500/30">
                          <TrendingDown size={18} className="text-emerald-400" />
                        </div>
                        <span className="text-emerald-400">Dropping</span>
                      </>
                    ) : (
                      <>
                        <div className="bg-rose-500/20 p-1.5 rounded-lg border border-rose-500/30">
                          <TrendingUp size={18} className="text-rose-400" />
                        </div>
                        <span className="text-rose-400">Rising</span>
                      </>
                    )}
                  </div>
                  <div className="mt-3 text-xs text-slate-500 leading-relaxed">
                    Based on last vs first week in this range.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-neon backdrop-blur-md">
            <div className="flex items-center justify-between gap-3">
              <div className="font-display text-xl font-bold text-white">Ratings & Reviews</div>
              <div className="text-sm font-medium text-tk-primary-2">{totalReviews} total</div>
            </div>
            <div className="mt-6 grid gap-4">
              {reviews.map((r, idx) => (
                <div key={idx} className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-5 shadow-sm transition hover:bg-slate-800/60">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-base font-semibold text-white">{r.name}</div>
                      <div className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                        <CheckCircle2 size={12} /> Verified Buyer
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-slate-300 border border-slate-700">
                      <StarRating rating={r.rating} size={14} />
                      <span className="text-white">{r.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-slate-300 leading-relaxed">{r.text}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
