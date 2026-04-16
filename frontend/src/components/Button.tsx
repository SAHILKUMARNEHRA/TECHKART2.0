import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost'

export default function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition active:translate-y-px disabled:pointer-events-none disabled:opacity-50',
        variant === 'primary' &&
          'bg-gradient-to-b from-tk-primary to-blue-700 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/25',
        variant === 'secondary' &&
          'border border-tk-border bg-white/80 text-slate-900 shadow-sm hover:bg-white hover:shadow-md',
        variant === 'ghost' && 'text-slate-700 hover:bg-slate-900/5',
        className,
      )}
      {...props}
    />
  )
}

