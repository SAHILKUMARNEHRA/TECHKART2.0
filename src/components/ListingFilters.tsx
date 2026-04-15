type Bounds = { min: number; max: number }
type Opt = { label: string; value: string }

export default function ListingFilters({
  priceBounds,
  priceMin,
  priceMax,
  setPriceMin,
  setPriceMax,
  categories,
  selectedCategories,
  setSelectedCategories,
  brands,
  selectedBrands,
  setSelectedBrands,
  minRating,
  setMinRating,
  onClearAll,
}: {
  priceBounds: Bounds
  priceMin: number
  priceMax: number
  setPriceMin: (v: number) => void
  setPriceMax: (v: number) => void
  categories: Opt[]
  selectedCategories: Set<string>
  setSelectedCategories: (updater: (prev: Set<string>) => Set<string>) => void
  brands: string[]
  selectedBrands: Set<string>
  setSelectedBrands: (updater: (prev: Set<string>) => Set<string>) => void
  minRating: number
  setMinRating: (v: number) => void
  onClearAll: () => void
}) {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-xs font-semibold text-slate-500">Price range</div>
        <div className="mt-3 space-y-3 rounded-2xl border border-tk-border bg-white/70 p-4 shadow-sm">
          <div className="flex items-center justify-between text-sm font-semibold text-slate-900">
            <span>₹{priceMin.toLocaleString('en-IN')}</span>
            <span>₹{priceMax.toLocaleString('en-IN')}</span>
          </div>
          <div className="grid gap-3">
            <input
              type="range"
              min={priceBounds.min}
              max={priceBounds.max}
              value={priceMin}
              onChange={(e) => setPriceMin(Math.min(Number(e.target.value), priceMax))}
              className="w-full accent-blue-600"
            />
            <input
              type="range"
              min={priceBounds.min}
              max={priceBounds.max}
              value={priceMax}
              onChange={(e) => setPriceMax(Math.max(Number(e.target.value), priceMin))}
              className="w-full accent-blue-600"
            />
          </div>
          <button
            className="w-full rounded-xl border border-tk-border bg-white/70 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white hover:shadow-md"
            onClick={() => {
              setPriceMin(priceBounds.min)
              setPriceMax(priceBounds.max)
            }}
          >
            Reset price
          </button>
        </div>
      </div>

      <div>
        <div className="text-xs font-semibold text-slate-500">Rating</div>
        <div className="mt-3 rounded-2xl border border-tk-border bg-white/70 p-4 shadow-sm">
          <div className="grid gap-2 text-sm">
            {[0, 3.5, 4, 4.5].map((r) => (
              <label key={r} className="flex cursor-pointer items-center justify-between gap-3">
                <span className="text-slate-700">{r === 0 ? 'All ratings' : `${r}+ stars`}</span>
                <input
                  type="radio"
                  name="rating"
                  checked={minRating === r}
                  onChange={() => setMinRating(r)}
                  className="h-4 w-4 accent-blue-600"
                />
              </label>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="text-xs font-semibold text-slate-500">Category</div>
        <div className="mt-3 max-h-56 space-y-2 overflow-auto rounded-2xl border border-tk-border bg-white/70 p-4 shadow-sm">
          {categories.map((c) => {
            const checked = selectedCategories.has(c.value)
            return (
              <label key={c.value} className="flex cursor-pointer items-center justify-between gap-3 text-sm">
                <span className="truncate text-slate-700">{c.label}</span>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() =>
                    setSelectedCategories((prev) => {
                      const next = new Set(prev)
                      if (next.has(c.value)) next.delete(c.value)
                      else next.add(c.value)
                      return next
                    })
                  }
                  className="h-4 w-4 accent-blue-600"
                />
              </label>
            )
          })}
        </div>
      </div>

      <div>
        <div className="text-xs font-semibold text-slate-500">Brand</div>
        <div className="mt-3 max-h-56 space-y-2 overflow-auto rounded-2xl border border-tk-border bg-white/70 p-4 shadow-sm">
          {brands.map((b) => {
            const checked = selectedBrands.has(b)
            return (
              <label key={b} className="flex cursor-pointer items-center justify-between gap-3 text-sm">
                <span className="truncate text-slate-700">{b}</span>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() =>
                    setSelectedBrands((prev) => {
                      const next = new Set(prev)
                      if (next.has(b)) next.delete(b)
                      else next.add(b)
                      return next
                    })
                  }
                  className="h-4 w-4 accent-blue-600"
                />
              </label>
            )
          })}
        </div>
      </div>

      <button
        className="w-full rounded-xl border border-tk-border bg-white/70 px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-white hover:shadow-md"
        onClick={onClearAll}
      >
        Clear all filters
      </button>
    </div>
  )
}
