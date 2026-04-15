import { create } from 'zustand'

export type Toast = {
  id: string
  message: string
}

type ToastState = {
  toasts: Toast[]
  push: (message: string) => void
  remove: (id: string) => void
}

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  push: (message) => {
    const id = `${Date.now()}_${Math.random().toString(16).slice(2)}`
    set((s) => ({ toasts: [...s.toasts, { id, message }] }))
    window.setTimeout(() => {
      set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) }))
    }, 1800)
  },
  remove: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
}))

