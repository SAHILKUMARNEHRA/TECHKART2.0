import { useMemo, useState } from 'react'
import { X } from 'lucide-react'
import Button from '@/components/Button'
import { useAuthStore } from '@/stores/authStore'

type Mode = 'login' | 'register'

export default function AuthModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mode, setMode] = useState<Mode>('login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const status = useAuthStore((s) => s.status)
  const error = useAuthStore((s) => s.error)
  const login = useAuthStore((s) => s.login)
  const register = useAuthStore((s) => s.register)

  const canSubmit = useMemo(() => {
    if (!email.trim() || !password) return false
    if (mode === 'register' && !name.trim()) return false
    return true
  }, [email, mode, name, password])

  if (!open) return null

  const apiBase = import.meta.env.VITE_API_BASE ?? '/api'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <button className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm" aria-label="Close" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-2xl border border-tk-border bg-white/90 p-6 shadow-lift backdrop-blur-xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-display text-xl font-semibold">{mode === 'login' ? 'Sign in' : 'Create account'}</div>
            <div className="mt-1 text-sm text-slate-600">Buyer account for TechKart.</div>
          </div>
          <button
            className="rounded-xl p-2 text-slate-500 transition hover:bg-slate-900/5 hover:text-slate-700"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="mt-5 grid gap-3">
          <div className="inline-flex overflow-hidden rounded-2xl border border-tk-border bg-white/70 shadow-sm">
            <button
              className={
                mode === 'login'
                  ? 'flex-1 px-4 py-2 text-sm font-semibold text-white bg-tk-primary'
                  : 'flex-1 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-white'
              }
              onClick={() => setMode('login')}
              type="button"
            >
              Login
            </button>
            <button
              className={
                mode === 'register'
                  ? 'flex-1 px-4 py-2 text-sm font-semibold text-white bg-tk-primary'
                  : 'flex-1 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-white'
              }
              onClick={() => setMode('register')}
              type="button"
            >
              Register
            </button>
          </div>

          {mode === 'register' ? (
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-11 rounded-xl border border-tk-border bg-white/70 px-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-200/40"
            />
          ) : null}
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 rounded-xl border border-tk-border bg-white/70 px-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-200/40"
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-11 rounded-xl border border-tk-border bg-white/70 px-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-200/40"
          />

          {error ? <div className="rounded-xl border border-rose-200 bg-rose-50/70 px-3 py-2 text-xs font-semibold text-rose-800">{error}</div> : null}

          <Button
            className="h-11"
            disabled={!canSubmit || status === 'loading'}
            onClick={async () => {
              const ok =
                mode === 'login'
                  ? await login({ email: email.trim(), password })
                  : await register({ name: name.trim(), email: email.trim(), password })
              if (ok) onClose()
            }}
            type="button"
          >
            {status === 'loading' ? 'Please wait…' : mode === 'login' ? 'Continue' : 'Create account'}
          </Button>

          <div className="relative py-2">
            <div className="absolute inset-x-0 top-1/2 h-px bg-tk-border" />
            <div className="relative mx-auto w-fit bg-white/90 px-3 text-xs font-semibold text-slate-500">or</div>
          </div>

          <a
            href={`${apiBase}/auth/google`}
            className="inline-flex h-11 items-center justify-center rounded-xl border border-tk-border bg-white/80 px-4 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-white hover:shadow-md"
          >
            Continue with Google
          </a>

          <div className="text-center text-xs text-slate-500">Google sign-in requires keys in backend env.</div>
        </div>
      </div>
    </div>
  )
}

