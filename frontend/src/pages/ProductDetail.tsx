import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowRightLeft, BadgePercent, CheckCircle2, ChevronLeft, ShoppingCart, TrendingDown, TrendingUp } from 'lucide-react'
import ImageGalleryZoom from '@/components/ImageGalleryZoom'
import PriceHistoryChart from '@/components/PriceHistoryChart'
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
import { getTechCategoryFromSlug, techCategoryLabel } from '@/utils/techCategory'
import { motion } from 'framer-motion'

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
      <div className="grid gap-12 lg:grid-cols-2 max-w-7xl mx-auto w-full">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-4 shadow-soft">
          <Skeleton className="aspect-square w-full rounded-3xl bg-slate-800" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-10 w-5/6 bg-slate-800" />
          <Skeleton className="h-6 w-2/3 bg-slate-800" />
          <Skeleton className="h-32 w-full rounded-2xl bg-slate-800" />
          <Skeleton className="h-14 w-full rounded-2xl bg-slate-800" />
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
      className="space-y-8 w-full max-w-[1400px] mx-auto"
    >
      <motion.div variants={itemVariants}>
        <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white">
          <ChevronLeft size={18} /> Back to listing
        </Link>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-start w-full">
        {/* Left Column: Image */}
        <motion.div variants={itemVariants} className="rounded-3xl border border-slate-800 bg-[#0f1423] p-8 shadow-neon flex items-center justify-center min-h-[500px] aspect-square lg:sticky lg:top-24">
          <div className="w-full max-w-[500px]">
            <ImageGalleryZoom images={product.images} title={product.title} />
          </div>
        </motion.div>

        {/* Right Column: Details */}
        <div className="space-y-8 w-full">
          <motion.div variants={itemVariants} className="rounded-3xl border border-slate-800 bg-[#0f1423] p-8 shadow-neon">
            <div className="font-display text-4xl font-bold tracking-tight text-white">{product.title}</div>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 text-sm font-semibold text-emerald-400">
              <CheckCircle2 size={16} /> Verified Authentic Product
            </div>

            <div className="mt-10 rounded-2xl border border-slate-700/50 bg-[#161d2d] p-6 shadow-sm">
              <div className="flex flex-col gap-2">
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Price</div>
                <div className="flex items-baseline gap-4 flex-wrap">
                  <div className="font-display text-5xl font-bold text-white">{formatInr(discounted)}</div>
                  {product.discountPercentage > 0 && (
                    <>
                      <div className="text-lg font-semibold text-slate-500 line-through">{formatInr(priceInr)}</div>
                      <div className="inline-flex items-center gap-2 rounded-full bg-tk-primary/10 border border-tk-primary/20 px-3 py-1 text-sm font-bold text-tk-primary-2 shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                        <BadgePercent size={18} />
                        {Math.round(product.discountPercentage)}% off
                      </div>
                    </>
                  )}
                </div>
                <div className="text-sm text-slate-500 mt-1">Inclusive of all taxes</div>
              </div>

              <div className="mt-8 grid gap-4 text-sm text-slate-300">
                <div className="flex items-center justify-between py-3 border-b border-slate-700/50">
                  <span className="font-semibold text-slate-200 text-base">Offer</span>
                  <span className="text-slate-400">Extra discount on select cards</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="font-semibold text-slate-200 text-base">Delivery</span>
                  <span className="text-emerald-400 font-semibold">Free delivery above ₹499</span>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                className="h-14 flex-1 text-base bg-[#5271ff] hover:bg-[#4361ee] text-white shadow-[0_4px_14px_rgba(82,113,255,0.4)] transition-all hover:shadow-[0_6px_20px_rgba(82,113,255,0.6)] border-0"
                onClick={() => {
                  addToCart(product.id)
                  toast('Added to cart')
                }}
              >
                <ShoppingCart size={20} className="mr-2" /> Add to Cart
              </Button>
              <Button
                className="h-14 flex-1 text-base bg-tk-accent hover:bg-violet-500 text-white shadow-[0_4px_14px_rgba(139,92,246,0.4)] transition-all hover:shadow-[0_6px_20px_rgba(139,92,246,0.6)] border-0"
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
                    ? 'inline-flex h-14 flex-1 items-center justify-center gap-2 rounded-2xl bg-tk-accent/20 border border-tk-accent text-tk-accent px-6 text-base font-bold shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all'
                    : 'inline-flex h-14 flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-700 bg-[#161d2d] px-6 text-base font-bold text-slate-300 shadow-sm transition-all hover:bg-[#1f293f] hover:text-white'
                }
                onClick={() => {
                  if (!techCategory) return
                  compareToggle({ id: product.id, category: techCategory })
                }}
                disabled={!techCategory || isCompareBlocked || (!compareSelected && compareIds.length >= 4)}
              >
                <ArrowRightLeft size={20} /> Compare
              </button>
            </div>
            {isCompareBlocked ? (
              <div className="mt-4 text-sm text-rose-400 text-center">Compare only within the same category.</div>
            ) : !compareSelected && compareIds.length >= 4 ? (
              <div className="mt-4 text-sm text-rose-400 text-center">Compare list is full (4). Remove one to add this.</div>
            ) : null}
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-3xl border border-slate-800 bg-[#0f1423] p-8 shadow-neon">
            <div className="font-display text-2xl font-bold text-white">Specifications</div>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-700/50 bg-[#161d2d] shadow-sm">
              <table className="w-full text-base">
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
                      <td className="w-40 bg-[#111827] px-6 py-4 font-semibold text-slate-400">{k}</td>
                      <td className="px-6 py-4 text-slate-200 font-medium">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-3xl border border-slate-800 bg-[#0f1423] p-8 shadow-neon">
            <div className="flex items-center justify-between gap-3">
              <div className="font-display text-2xl font-bold text-white">Price Tracking</div>
              <div className="inline-flex overflow-hidden rounded-2xl border border-slate-700 bg-[#161d2d] shadow-sm p-1">
                <button
                  className={historyDays === 30 ? 'px-5 py-2 text-sm font-bold text-white bg-tk-primary rounded-xl shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'px-5 py-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors'}
                  onClick={() => setHistoryDays(30)}
                >
                  30 days
                </button>
                <button
                  className={historyDays === 90 ? 'px-5 py-2 text-sm font-bold text-white bg-tk-primary rounded-xl shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'px-5 py-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors'}
                  onClick={() => setHistoryDays(90)}
                >
                  90 days
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_220px]">
              <div className="rounded-2xl bg-[#161d2d] border border-slate-700/50 p-6 min-h-[250px] flex flex-col justify-center">
                <PriceHistoryChart points={history} />
              </div>
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-700/50 bg-[#161d2d] p-6 shadow-sm">
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Lowest price</div>
                  <div className="mt-3 font-display text-3xl font-bold text-white">{formatInr(historySummary.lowest)}</div>
                </div>
                <div className="rounded-2xl border border-slate-700/50 bg-[#161d2d] p-6 shadow-sm">
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Trend</div>
                  <div className="mt-4 inline-flex items-center gap-3 text-lg font-bold">
                    {historySummary.trend <= 0 ? (
                      <>
                        <div className="bg-emerald-500/20 p-2 rounded-xl border border-emerald-500/30">
                          <TrendingDown size={24} className="text-emerald-400" />
                        </div>
                        <span className="text-emerald-400">Dropping</span>
                      </>
                    ) : (
                      <>
                        <div className="bg-rose-500/20 p-2 rounded-xl border border-rose-500/30">
                          <TrendingUp size={24} className="text-rose-400" />
                        </div>
                        <span className="text-rose-400">Rising</span>
                      </>
                    )}
                  </div>
                  <div className="mt-4 text-sm text-slate-500 leading-relaxed font-medium">
                    Based on last vs first week in this range.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
