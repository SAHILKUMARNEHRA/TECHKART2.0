import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export default function EmptyState({
  title,
  description,
  action,
  className,
}: {
  title: string
  description?: string
  action?: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-tk-border bg-white/70 px-6 py-10 text-center shadow-soft backdrop-blur-sm',
        className,
      )}
    >
      <div className="mx-auto max-w-md">
        <div className="font-display text-xl font-semibold">{title}</div>
        {description ? <div className="mt-2 text-sm text-slate-600">{description}</div> : null}
        {action ? <div className="mt-6 flex justify-center">{action}</div> : null}
      </div>
    </div>
  )
}
