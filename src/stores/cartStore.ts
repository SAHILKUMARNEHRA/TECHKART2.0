import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type CartItem = { productId: number; qty: number }

type CartState = {
  items: CartItem[]
  add: (productId: number) => void
  remove: (productId: number) => void
  setQty: (productId: number, qty: number) => void
  clear: () => void
  count: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (productId) => {
        set((state) => {
          const existing = state.items.find((i) => i.productId === productId)
          if (existing) {
            return { items: state.items.map((i) => (i.productId === productId ? { ...i, qty: i.qty + 1 } : i)) }
          }
          return { items: [...state.items, { productId, qty: 1 }] }
        })
      },
      remove: (productId) => set((state) => ({ items: state.items.filter((i) => i.productId !== productId) })),
      setQty: (productId, qty) =>
        set((state) => ({
          items: state.items
            .map((i) => (i.productId === productId ? { ...i, qty: Math.max(1, Math.min(99, qty)) } : i))
            .filter((i) => i.qty > 0),
        })),
      clear: () => set({ items: [] }),
      count: () => get().items.reduce((a, i) => a + i.qty, 0),
    }),
    {
      name: 'tk_cart_v1',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

