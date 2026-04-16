import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Filter, SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import Skeleton from '@/components/Skeleton'
import EmptyState from '@/components/EmptyState'
import Button from '@/components/Button'
import ListingFilters from '@/components/ListingFilters'
import Pagination from '@/components/Pagination'
import { useCatalogStore } from '@/stores/catalogStore'
import { toInrFromUsd } from '@/utils/money'
import { MAIN_CATEGORIES, type TechCategory } from '@/constants/techkart'
import { getTechCategoryFromSlug } from '@/utils/techCategory'

type SortKey = 'newest' | 'popularity' | 'price_asc' | 'price_desc' | 'rating_desc'

function uniqSorted(list: string[]) {
  return Array.from(new Set(list)).sort((a, b) => a.localeCompare(b))
}

function isTechCategory(v: string): v is TechCategory {
  return v === 'smartphones' || v === 'laptops' || v === 'headphones' || v === 'smartwatches'
}

export default function Products() {
  const loadAll = useCatalogStore((s) => s.loadAll)
  const status = useCatalogStore((s) => s.status)
  const products = useCatalogStore((s) => s.products)
  const [params] = useSearchParams()

  useEffect(() => {
    void loadAll()
  }, [loadAll])

  const q = (params.get('q') ?? '').trim().toLowerCase()
  const initialCategory = params.get('category')
  const initialBrand = params.get('brand')

  const catalog = useMemo(() => {
    return products
      .map((p) => {
        const techCategory = getTechCategoryFromSlug(p.category)
        return techCategory ? { ...p, techCategory, priceInr: toInrFromUsd(p.price) } : null
      })
      .filter(Boolean)
  }, [products])

  const priceBounds = useMemo(() => {
    const prices = catalog.map((p) => p.priceInr)
    const min = prices.length ? Math.min(...prices) : 0
    const max = prices.length ? Math.max(...prices) : 100000
    return { min, max }
  }, [catalog])

  const [sort, setSort] = useState<SortKey>('newest')
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)
  const [priceMin, setPriceMin] = useState(priceBounds.min)
  const [priceMax, setPriceMax] = useState(priceBounds.max)
  const [selectedBrands, setSelectedBrands] = useState<Set<string>>(
    new Set(initialBrand ? [initialBrand] : []),
  )
  const [selectedCategories, setSelectedCategories] = useState<Set<string>>(
    new Set(initialCategory && isTechCategory(initialCategory) ? [initialCategory] : []),
  )
  const [minRating, setMinRating] = useState<number>(0)
  
  const ITEMS_PER_PAGE = 18
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setPriceMin(priceBounds.min)
    setPriceMax(priceBounds.max)
  }, [priceBounds.max, priceBounds.min])

  useEffect(() => {
    setCurrentPage(1)
  }, [initialBrand, initialCategory, minRating, priceMax, priceMin, q, sort, selectedBrands, selectedCategories])

  const allBrands = useMemo(() => uniqSorted(catalog.map((p) => p!.brand)), [catalog])
  const allCategories = useMemo(() => MAIN_CATEGORIES, [])

  const filtered = useMemo(() => {
    const matchQ = (t: string) => t.toLowerCase().includes(q)
    const hasCategory = selectedCategories.size > 0
    const hasBrand = selectedBrands.size > 0

    const base = catalog.filter((p) => {
      const item = p!
      if (q) {
        if (!matchQ(item.title) && !matchQ(item.brand) && !matchQ(item.description)) return false
      }
      if (hasCategory && !selectedCategories.has(item.techCategory)) return false
      if (hasBrand && !selectedBrands.has(item.brand)) return false
      if (item.rating < minRating) return false
      if (item.priceInr < priceMin || item.priceInr > priceMax) return false
      return true
    })

    const sorted = base.slice()
    sorted.sort((a, b) => {
      if (sort === 'newest') return b.id - a.id
      if (sort === 'price_asc') return a.priceInr - b.priceInr
      if (sort === 'price_desc') return b.priceInr - a.priceInr
      if (sort === 'rating_desc') return b.rating - a.rating
      const pa = a.rating * (1 + a.discountPercentage / 100)
      const pb = b.rating * (1 + b.discountPercentage / 100)
      return pb - pa
    })

    return sorted
  }, [catalog, minRating, priceMax, priceMin, q, selectedBrands, selectedCategories, sort])

  const clearAll = () => {
    setSelectedBrands(new Set())
    setSelectedCategories(new Set())
    setMinRating(0)
    setPriceMin(priceBounds.min)
    setPriceMax(priceBounds.max)
  }

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)

  const visible = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filtered.slice(start, start + ITEMS_PER_PAGE)
  }, [filtered, currentPage])

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <div className="lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <div className="font-display text-xl font-bold tracking-tight text-slate-900">Products</div>
          <Button variant="secondary" onClick={() => setIsMobileFiltersOpen(true)} className="h-10">
            <Filter size={16} /> Filters
          </Button>
        </div>
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-20 rounded-3xl border border-tk-border bg-white/60 p-5 shadow-soft backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="font-display text-lg font-semibold text-slate-900">Filters</div>
            <SlidersHorizontal size={18} className="text-slate-500" />
          </div>
          <div className="mt-5">
            <ListingFilters
              priceBounds={priceBounds}
              priceMin={priceMin}
              priceMax={priceMax}
              setPriceMin={setPriceMin}
              setPriceMax={setPriceMax}
              categories={allCategories}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              brands={allBrands.slice(0, 18)}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              minRating={minRating}
              setMinRating={setMinRating}
              onClearAll={clearAll}
            />
          </div>
        </div>
      </aside>

      <main className="space-y-4">
        <div className="hidden items-end justify-between gap-4 lg:flex">
          <div>
            <div className="font-display text-xl font-bold tracking-tight text-slate-900">Products</div>
            <div className="mt-1 text-sm text-slate-600">
              {status === 'success' ? `${filtered.length} results` : 'Loading catalog...'}
            </div>
          </div>
          <label className="flex items-center gap-2 rounded-2xl border border-tk-border bg-white/70 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
            Sort
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="bg-transparent text-sm font-semibold outline-none"
            >
              <option value="newest">Newest</option>
              <option value="popularity">Popularity</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating_desc">Rating</option>
            </select>
          </label>
        </div>

        <div className="lg:hidden">
          <label className="flex items-center justify-between gap-2 rounded-2xl border border-tk-border bg-white/70 px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
            Sort
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="bg-transparent text-sm font-semibold outline-none"
            >
              <option value="newest">Newest</option>
              <option value="popularity">Popularity</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="rating_desc">Rating</option>
            </select>
          </label>
        </div>

        {status !== 'success' ? (
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-tk-border bg-white/60 p-4 shadow-soft">
                <Skeleton className="aspect-[4/3] w-full rounded-2xl" />
                <Skeleton className="mt-4 h-4 w-5/6" />
                <Skeleton className="mt-2 h-4 w-2/3" />
                <Skeleton className="mt-4 h-10 w-full rounded-xl" />
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <EmptyState
            title="No results found"
            description="Try changing filters or searching a different product."
            action={
              <Button variant="secondary" onClick={clearAll}>
                Clear filters
              </Button>
            }
          />
        ) : (
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {visible.map((p) => (
                <ProductCard key={p!.id} product={p!} />
              ))}
            </div>
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        )}
      </main>

      {isMobileFiltersOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            onClick={() => setIsMobileFiltersOpen(false)}
            aria-label="Close filters"
          />
          <div className="absolute inset-x-0 bottom-0 max-h-[86vh] overflow-auto rounded-t-3xl border border-tk-border bg-white/90 p-5 shadow-lift backdrop-blur-xl">
            <div className="flex items-center justify-between gap-3">
              <div className="font-display text-lg font-semibold text-slate-900">Filters</div>
              <Button variant="secondary" onClick={() => setIsMobileFiltersOpen(false)} className="h-10">
                Done
              </Button>
            </div>
            <div className="mt-5">
              <ListingFilters
                priceBounds={priceBounds}
                priceMin={priceMin}
                priceMax={priceMax}
                setPriceMin={setPriceMin}
                setPriceMax={setPriceMax}
                categories={allCategories}
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                brands={allBrands.slice(0, 18)}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                minRating={minRating}
                setMinRating={setMinRating}
                onClearAll={clearAll}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
