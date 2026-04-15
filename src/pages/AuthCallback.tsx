import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/stores/authStore'
import Skeleton from '@/components/Skeleton'

export default function AuthCallback() {
  const loadMe = useAuthStore((s) => s.loadMe)
  const navigate = useNavigate()

  useEffect(() => {
    ;(async () => {
      await loadMe()
      navigate('/', { replace: true })
    })()
  }, [loadMe, navigate])

  return (
    <div className="rounded-3xl border border-tk-border bg-white/60 p-6 shadow-soft backdrop-blur-sm">
      <div className="font-display text-lg font-semibold text-slate-900">Signing you in…</div>
      <div className="mt-4 grid gap-2">
        <Skeleton className="h-4 w-52" />
        <Skeleton className="h-4 w-80" />
      </div>
    </div>
  )
}

