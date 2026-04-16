import { useToastStore } from '@/stores/toastStore'

export default function ToastHost() {
  const toasts = useToastStore((s) => s.toasts)
  const remove = useToastStore((s) => s.remove)
  if (!toasts.length) return null

  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-[92vw] max-w-md -translate-x-1/2 space-y-2">
      {toasts.map((t) => (
        <button
          key={t.id}
          onClick={() => remove(t.id)}
          className="w-full rounded-2xl border border-tk-border bg-slate-950/90 px-4 py-3 text-left text-sm font-semibold text-white shadow-lift backdrop-blur-xl transition animate-[tk_toast_in_180ms_ease-out]"
        >
          {t.message}
        </button>
      ))}
    </div>
  )
}

