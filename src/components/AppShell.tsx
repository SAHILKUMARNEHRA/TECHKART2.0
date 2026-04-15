import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import CompareTray from '@/components/CompareTray'
import ToastHost from '@/components/ToastHost'
import { useAuthStore } from '@/stores/authStore'

export default function AppShell() {
  const location = useLocation()
  const loadMe = useAuthStore((s) => s.loadMe)

  useEffect(() => {
    void loadMe()
  }, [loadMe])

  return (
    <div className="min-h-screen bg-tk-bg text-tk-fg">
      <Navbar />
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-20">
        <div key={location.pathname} className="tk-page">
          <Outlet />
        </div>
      </div>
      <CompareTray />
      <ToastHost />
    </div>
  )
}
