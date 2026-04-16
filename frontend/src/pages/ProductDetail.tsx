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
            <Button variant="secondary">Back to products</Button>
          </Link>
        }
      />
    )
  }

  if (status !== 'success' && !product) {
    return (
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-3xl border border-tk-border bg-white/60 p-4 shadow-soft">
          <Skeleton className="h-[420px] w-full rounded-3xl" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-7 w-5/6" />
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-24 w-full rounded-2xl" />
          <Skeleton className="h-11 w-full rounded-2xl" />
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
            <Button variant="secondary">Back to products</Button>
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

  return (
    <div className="space-y-8">
      <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900">
        <ChevronLeft size={18} /> Back to listing
      </Link>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="rounded-3xl border border-tk-border bg-white/60 p-4 shadow-soft backdrop-blur-sm">
          <ImageGalleryZoom images={product.images} title={product.title} />
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-tk-border bg-white/60 p-6 shadow-soft backdrop-blur-sm">
            <div className="font-display text-2xl font-bold tracking-tight text-slate-900">{product.title}</div>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-sm font-semibold text-slate-700">
                <StarRating rating={product.rating} size={14} />
                <span>{product.rating.toFixed(1)}</span>
                <span className="text-slate-500">({totalReviews} reviews)</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 px-3 py-1 text-sm font-semibold text-emerald-700">
                <CheckCircle2 size={16} /> Verified Buyer tags
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-tk-border bg-white/70 p-4 shadow-sm">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <div className="text-xs font-semibold text-slate-500">Price</div>
                  <div className="mt-1 flex items-baseline gap-3">
                    <div className="font-display text-3xl font-bold text-slate-900">{formatInr(discounted)}</div>
                    <div className="text-sm font-semibold text-slate-500 line-through">{formatInr(priceInr)}</div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold text-blue-700">
                      <BadgePercent size={16} />
                      {Math.round(product.discountPercentage)}% off
                    </div>
                  </div>
                </div>
                <div className="text-xs text-slate-500">Inclusive of all taxes</div>
              </div>

              <div className="mt-4 grid gap-2 text-sm text-slate-700">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Offer</span>
                  <span>Extra discount on select cards (UI)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Delivery</span>
                  <span>Free delivery above ₹499</span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button
                className="h-11 flex-1"
                onClick={() => {
                  addToCart(product.id)
                  toast('Added to cart')
                }}
              >
                <ShoppingCart size={18} /> Add to Cart
              </Button>
              <Button
                className="h-11 flex-1"
                variant="secondary"
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
                    ? 'inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-tk-primary to-blue-700 px-5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition hover:shadow-lg hover:shadow-blue-500/25'
                    : 'inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-2xl border border-tk-border bg-white/70 px-5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white hover:shadow-md'
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
          </div>

          <div className="rounded-3xl border border-tk-border bg-white/60 p-6 shadow-soft backdrop-blur-sm">
            <div className="font-display text-lg font-semibold text-slate-900">Specifications</div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-tk-border bg-white/70 shadow-sm">
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
                      <td className="w-32 bg-slate-900/5 px-4 py-3 font-semibold text-slate-700">{k}</td>
                      <td className="px-4 py-3 text-slate-800">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-3xl border border-tk-border bg-white/60 p-6 shadow-soft backdrop-blur-sm">
            <div className="flex items-center justify-between gap-3">
              <div className="font-display text-lg font-semibold text-slate-900">Price Tracking</div>
              <div className="inline-flex overflow-hidden rounded-2xl border border-tk-border bg-white/70 shadow-sm">
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
                <div className="rounded-2xl border border-tk-border bg-white/70 p-4 shadow-sm">
                  <div className="text-xs font-semibold text-slate-500">Lowest price</div>
                  <div className="mt-2 font-display text-xl font-bold text-slate-900">{formatInr(historySummary.lowest)}</div>
                </div>
                <div className="rounded-2xl border border-tk-border bg-white/70 p-4 shadow-sm">
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
                  <div className="mt-1 text-xs text-slate-500">
                    Based on last vs first week in this range.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-tk-border bg-white/60 p-6 shadow-soft backdrop-blur-sm">
            <div className="flex items-center justify-between gap-3">
              <div className="font-display text-lg font-semibold text-slate-900">Ratings & Reviews</div>
              <div className="text-xs text-slate-500">{totalReviews} total</div>
            </div>
            <div className="mt-4 grid gap-3">
              {reviews.map((r, idx) => (
                <div key={idx} className="rounded-2xl border border-tk-border bg-white/70 p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{r.name}</div>
                      <div className="mt-1 inline-flex items-center gap-2 text-xs font-semibold text-emerald-700">
                        <CheckCircle2 size={14} /> Verified Buyer
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700">
                      <StarRating rating={r.rating} size={14} />
                      <span>{r.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-slate-700">{r.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
