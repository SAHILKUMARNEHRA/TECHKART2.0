import { create } from 'zustand'
import { fetchAllProducts } from '@/api/products'
import type { Product } from '@/types/catalog'

type Status = 'idle' | 'loading' | 'success' | 'error'

type CatalogState = {
  status: Status
  products: Product[]
  error: string | null
  brokenImageIds: Record<number, boolean>
  loadAll: () => Promise<void>
  markImageBroken: (id: number) => void
}

export const useCatalogStore = create<CatalogState>((set, get) => ({
  status: 'idle',
  products: [],
  error: null,
  brokenImageIds: {},
  markImageBroken: (id: number) => {
    set((state) => ({
      brokenImageIds: { ...state.brokenImageIds, [id]: true }
    }))
  },
  loadAll: async () => {
    const { status } = get()
    if (status === 'loading' || status === 'success') return

    set({ status: 'loading', error: null })
    try {
      const products = await fetchAllProducts()
      set({ status: 'success', products })
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Failed to load products'
      set({ status: 'error', error: message })
    }
  },
}))

