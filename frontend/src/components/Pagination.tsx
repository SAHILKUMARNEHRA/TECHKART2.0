import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number
  totalPages: number
  onPageChange: (p: number) => void
}) {
  if (totalPages <= 1) return null

  const getPages = () => {
    const pages: (number | string)[] = []
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(i)
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...')
      }
    }
    return pages
  }

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <button
        disabled={currentPage === 1}
        onClick={() => {
          onPageChange(currentPage - 1)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-tk-border bg-white text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
      >
        <ChevronLeft size={18} />
      </button>

      {getPages().map((p, i) => (
        <button
          key={i}
          disabled={p === '...'}
          onClick={() => {
            if (typeof p === 'number') {
              onPageChange(p)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
          className={cn(
            'flex h-10 min-w-[40px] items-center justify-center rounded-xl border px-3 text-sm font-semibold transition',
            p === currentPage
              ? 'border-blue-600 bg-blue-600 text-white shadow-md'
              : p === '...'
                ? 'border-transparent bg-transparent text-slate-400'
                : 'border-tk-border bg-white text-slate-600 hover:bg-slate-50',
          )}
        >
          {p}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => {
          onPageChange(currentPage + 1)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-tk-border bg-white text-slate-600 transition hover:bg-slate-50 disabled:opacity-50"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  )
}
