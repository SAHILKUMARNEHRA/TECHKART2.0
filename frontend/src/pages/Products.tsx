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
          <div className="font-display text-2xl font-bold tracking-tight text-white">Products</div>
          <Button variant="secondary" onClick={() => setIsMobileFiltersOpen(true)} className="h-10 border-slate-700 bg-slate-800/50 text-slate-300 hover:bg-slate-700 hover:text-white">
            <Filter size={16} /> Filters
          </Button>
        </div>
      </div>

      <aside className="hidden lg:block">
        <div className="sticky top-20 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-neon backdrop-blur-md">
          <div className="flex items-center justify-between">
            <div className="font-display text-lg font-bold text-white">Filters</div>
            <SlidersHorizontal size={18} className="text-slate-400" />
          </div>
          <div className="mt-6">
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

      <main className="space-y-6">
        <div className="hidden items-end justify-between gap-4 lg:flex">
          <div>
            <div className="font-display text-3xl font-bold tracking-tight text-white">Products</div>
            <div className="mt-1 text-sm font-medium text-tk-primary-2">
              {status === 'success' ? `${filtered.length} results` : 'Loading catalog...'}
            </div>
          </div>
          <label className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 px-5 py-2.5 text-sm font-semibold text-slate-300 shadow-sm backdrop-blur-md transition hover:border-slate-600 hover:bg-slate-800/80">
            Sort by:
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="bg-transparent text-sm font-bold text-white outline-none cursor-pointer"
            >
              <option value="newest" className="bg-slate-900">Newest</option>
              <option value="popularity" className="bg-slate-900">Popularity</option>
              <option value="price_asc" className="bg-slate-900">Price: Low to High</option>
              <option value="price_desc" className="bg-slate-900">Price: High to Low</option>
              <option value="rating_desc" className="bg-slate-900">Rating</option>
            </select>
          </label>
        </div>

        <div className="lg:hidden">
          <label className="flex items-center justify-between gap-2 rounded-2xl border border-slate-800 bg-slate-900/50 px-5 py-3 text-sm font-semibold text-slate-300 shadow-sm backdrop-blur-md">
            Sort by
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="bg-transparent text-sm font-bold text-white outline-none"
            >
              <option value="newest" className="bg-slate-900">Newest</option>
              <option value="popularity" className="bg-slate-900">Popularity</option>
              <option value="price_asc" className="bg-slate-900">Price: Low to High</option>
              <option value="price_desc" className="bg-slate-900">Price: High to Low</option>
              <option value="rating_desc" className="bg-slate-900">Rating</option>
            </select>
          </label>
        </div>

        {status !== 'success' ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-5 shadow-lg">
                <Skeleton className="aspect-[4/3] w-full rounded-xl bg-slate-800" />
                <Skeleton className="mt-5 h-5 w-5/6 bg-slate-800" />
                <Skeleton className="mt-3 h-4 w-2/3 bg-slate-800" />
                <Skeleton className="mt-6 h-11 w-full rounded-xl bg-slate-800" />
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <EmptyState
            title="No results found"
            description="Try changing filters or searching a different product."
            action={
              <Button variant="secondary" onClick={clearAll} className="border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white">
                Clear filters
              </Button>
            }
          />
        ) : (
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
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
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => setIsMobileFiltersOpen(false)}
            aria-label="Close filters"
          />
          <div className="absolute inset-x-0 bottom-0 max-h-[86vh] overflow-auto rounded-t-3xl border border-slate-800 bg-slate-900/95 p-6 shadow-neon backdrop-blur-xl">
            <div className="flex items-center justify-between gap-3">
              <div className="font-display text-xl font-bold text-white">Filters</div>
              <Button variant="secondary" onClick={() => setIsMobileFiltersOpen(false)} className="h-10 border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white">
                Done
              </Button>
            </div>
            <div className="mt-6">
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
