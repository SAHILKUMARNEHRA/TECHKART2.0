import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowRightLeft, BadgePercent, ChevronLeft, ShoppingCart, TrendingDown, TrendingUp } from 'lucide-react'
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
      className="space-y-6 w-full max-w-6xl mx-auto"
    >
      <motion.div variants={itemVariants}>
        <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-slate-900">
          <ChevronLeft size={18} /> Back to listing
        </Link>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[520px_1fr] lg:items-start w-full">
        <motion.div variants={itemVariants} className="rounded-3xl border border-tk-border bg-white/80 p-4 shadow-soft backdrop-blur-sm lg:sticky lg:top-24">
          <ImageGalleryZoom images={product.images} title={product.title} />
        </motion.div>

        <div className="space-y-6">
          <motion.div variants={itemVariants} className="rounded-3xl border border-tk-border bg-white/80 p-6 shadow-soft backdrop-blur-sm">
            <div className="font-display text-2xl font-bold tracking-tight text-slate-900">{product.title}</div>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs font-semibold">
              <div className="rounded-full bg-slate-900/5 px-3 py-1 text-slate-700">{product.brand}</div>
              <div className="rounded-full bg-slate-900/5 px-3 py-1 text-slate-700">
                {techCategory ? techCategoryLabel(techCategory) : product.category}
              </div>
              {product.discountPercentage > 0 ? (
                <div className="rounded-full bg-emerald-600/10 px-3 py-1 text-emerald-700">
                  {Math.round(product.discountPercentage)}% off
                </div>
              ) : null}
            </div>

            <div className="mt-6 rounded-2xl border border-tk-border bg-white/90 p-5 shadow-sm">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-slate-500">Price</div>
                  <div className="mt-2 flex items-baseline gap-3">
                    <div className="font-display text-4xl font-bold text-slate-900">{formatInr(discounted)}</div>
                    {product.discountPercentage > 0 ? (
                      <div className="text-sm font-semibold text-slate-500 line-through">{formatInr(priceInr)}</div>
                    ) : null}
                    {product.discountPercentage > 0 ? (
                      <div className="inline-flex items-center gap-2 rounded-full bg-tk-primary/10 px-3 py-1 text-sm font-semibold text-tk-primary">
                        <BadgePercent size={16} />
                        Save {Math.round(product.discountPercentage)}%
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="text-xs text-slate-500">Inclusive of all taxes</div>
              </div>

              <div className="mt-4 grid gap-2 text-sm text-slate-700">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Processor</span>
                  <span>{specs.processor}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">RAM</span>
                  <span>{specs.ram}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Storage</span>
                  <span>{specs.storage}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Battery</span>
                  <span>{specs.battery}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                className="h-12 flex-1"
                onClick={() => {
                  addToCart(product.id)
                  toast('Added to cart')
                }}
              >
                <ShoppingCart size={18} /> Add to Cart
              </Button>
              <Button
                className="h-12 flex-1 bg-gradient-to-b from-tk-accent to-amber-500 text-white shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/25"
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
                    ? 'inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-tk-primary text-white shadow-md shadow-blue-500/20 transition hover:shadow-lg hover:shadow-blue-500/25'
                    : 'inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-tk-border bg-white/80 text-slate-700 shadow-sm transition hover:bg-white hover:shadow-md'
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
              <div className="mt-3 text-xs text-slate-500">Compare only within the same category.</div>
            ) : !compareSelected && compareIds.length >= 4 ? (
              <div className="mt-3 text-xs text-slate-500">Compare list is full (4). Remove one to add this.</div>
            ) : null}
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-3xl border border-tk-border bg-white/80 p-6 shadow-soft backdrop-blur-sm">
            <div className="font-display text-lg font-semibold text-slate-900">Specifications</div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-tk-border bg-white shadow-sm">
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
                    <tr key={k} className="border-b border-tk-border last:border-b-0">
                      <td className="w-40 bg-slate-900/5 px-5 py-3 font-semibold text-slate-700">{k}</td>
                      <td className="px-5 py-3 text-slate-800">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="rounded-3xl border border-tk-border bg-white/80 p-6 shadow-soft backdrop-blur-sm">
            <div className="flex items-center justify-between gap-3">
              <div className="font-display text-lg font-semibold text-slate-900">Price Tracking</div>
              <div className="inline-flex overflow-hidden rounded-2xl border border-tk-border bg-white shadow-sm">
                <button
                  className={historyDays === 30 ? 'px-4 py-2 text-sm font-semibold text-white bg-tk-primary' : 'px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-white'}
                  onClick={() => setHistoryDays(30)}
                >
                  30 days
                </button>
                <button
                  className={historyDays === 90 ? 'px-4 py-2 text-sm font-semibold text-white bg-tk-primary' : 'px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-white'}
                  onClick={() => setHistoryDays(90)}
                >
                  90 days
                </button>
              </div>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_220px]">
              <PriceHistoryChart points={history} />
              <div className="space-y-3">
                <div className="rounded-2xl border border-tk-border bg-white p-4 shadow-sm">
                  <div className="text-xs font-semibold text-slate-500">Lowest price</div>
                  <div className="mt-2 font-display text-xl font-bold text-slate-900">{formatInr(historySummary.lowest)}</div>
                </div>
                <div className="rounded-2xl border border-tk-border bg-white p-4 shadow-sm">
                  <div className="text-xs font-semibold text-slate-500">Trend</div>
                  <div className="mt-2 inline-flex items-center gap-2 text-sm font-semibold">
                    {historySummary.trend <= 0 ? (
                      <>
                        <TrendingDown size={18} className="text-emerald-600" />
                        <span className="text-emerald-700">Dropping</span>
                      </>
                    ) : (
                      <>
                        <TrendingUp size={18} className="text-rose-600" />
                        <span className="text-rose-700">Rising</span>
                      </>
                    )}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">Based on last vs first week in this range.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
