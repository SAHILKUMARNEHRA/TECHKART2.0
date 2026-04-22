import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { LogOut, Search, ShoppingCart, User, X } from 'lucide-react'
import { useCartStore } from '@/stores/cartStore'
import { useAuthStore } from '@/stores/authStore'
import AuthModal from '@/components/AuthModal'

function useInitialQuery() {
  const location = useLocation()
  const [params] = useSearchParams()
  return useMemo(() => {
    if (!location.pathname.startsWith('/products')) return ''
    return params.get('q') ?? ''
  }, [location.pathname, params])
}

export default function Navbar() {
  const navigate = useNavigate()
  const initial = useInitialQuery()
  const [q, setQ] = useState(initial)
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cartCount = useCartStore((s) => s.count())
  const [cartPulse, setCartPulse] = useState(false)
  const user = useAuthStore((s) => s.user)
  const logout = useAuthStore((s) => s.logout)

  useEffect(() => {
    setQ(initial)
  }, [initial])

  useEffect(() => {
    if (cartCount <= 0) return
    setCartPulse(true)
    const t = window.setTimeout(() => setCartPulse(false), 260)
    return () => window.clearTimeout(t)
  }, [cartCount])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-800/50 bg-slate-950/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
          <Link to="/" className="group inline-flex items-center gap-2">
            <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-tk-primary to-tk-accent text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]">
              <span className="font-display text-lg font-bold tracking-tight">T</span>
            </span>
            <div className="hidden sm:block">
              <div className="font-display text-lg font-bold tracking-tight text-white">TechKart</div>
              <div className="-mt-1 text-xs text-slate-400">Compare • Track • Decide</div>
            </div>
          </Link>

          <form
            className="relative ml-auto w-full max-w-xl"
            onSubmit={(e) => {
              e.preventDefault()
              const next = q.trim()
              navigate(next ? `/products?q=${encodeURIComponent(next)}` : '/products')
            }}
          >
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <Search size={18} />
            </div>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search mobiles, laptops, brands..."
              className="h-11 w-full rounded-2xl border border-slate-700/50 bg-slate-900/50 pl-10 pr-10 text-sm text-slate-200 shadow-inner outline-none transition focus:border-tk-primary/50 focus:bg-slate-800/80 focus:ring-4 focus:ring-tk-primary/20 placeholder:text-slate-500"
            />
            {q.length > 0 ? (
              <button
                type="button"
                onClick={() => setQ('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 transition hover:bg-slate-800 hover:text-white"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            ) : null}
          </form>

          <div className="flex items-center gap-2">
            <Link
              to="/cart"
              className="relative inline-flex h-11 items-center justify-center rounded-2xl border border-slate-700/50 bg-slate-900/50 px-3 text-slate-300 shadow-sm transition hover:bg-slate-800 hover:text-white hover:border-slate-600"
              aria-label="Cart"
            >
              <ShoppingCart size={18} />
              {cartCount > 0 ? (
                <span
                  className={
                    cartPulse
                      ? 'absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-tk-primary px-1 text-[11px] font-semibold text-white shadow-[0_0_10px_rgba(59,130,246,0.6)] scale-110 transition-transform'
                      : 'absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-tk-primary px-1 text-[11px] font-semibold text-white shadow-[0_0_10px_rgba(59,130,246,0.6)] transition-transform'
                  }
                >
                  {cartCount}
                </span>
              ) : null}
            </Link>
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen((v) => !v)}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-slate-700/50 bg-slate-900/50 px-3 text-slate-300 shadow-sm transition hover:bg-slate-800 hover:text-white hover:border-slate-600"
                  aria-label="Account"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-tk-primary to-tk-accent text-sm font-bold text-white shadow-inner">
                    {(user.name?.trim()?.[0] ?? user.email?.trim()?.[0] ?? 'U').toUpperCase()}
                  </span>
                </button>
                {isMenuOpen ? (
                  <div className="absolute right-0 top-14 w-56 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/95 shadow-neon backdrop-blur-xl z-50">
                    <div className="px-4 py-3">
                      <div className="text-sm font-semibold text-white">{user.name ?? 'Buyer'}</div>
                      <div className="mt-0.5 text-xs text-slate-400">{user.email ?? 'Google account'}</div>
                    </div>
                    <Link
                      to="/account"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex w-full items-center gap-2 border-t border-slate-800 px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-slate-800 hover:text-white"
                    >
                      <User size={16} /> Profile
                    </Link>
                    <button
                      onClick={async () => {
                        setIsMenuOpen(false)
                        await logout()
                      }}
                      className="flex w-full items-center gap-2 border-t border-slate-800 px-4 py-3 text-sm font-semibold text-rose-400 transition hover:bg-rose-500/10 hover:text-rose-300"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                ) : null}
              </div>
            ) : (
              <button
                onClick={() => setIsAuthOpen(true)}
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-700/50 bg-slate-900/50 px-3 text-slate-300 shadow-sm transition hover:bg-slate-800 hover:text-white hover:border-slate-600"
                aria-label="Login"
              >
                <User size={18} />
              </button>
            )}
          </div>
        </div>
      </header>

      <AuthModal open={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  )
}
