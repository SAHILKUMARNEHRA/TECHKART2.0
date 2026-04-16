import { create } from 'zustand'
import { fetchAllProducts } from '@/api/products'
import type { Product } from '@/types/catalog'

type Status = 'idle' | 'loading' | 'success' | 'error'

type CatalogState = {
  status: Status
  products: Product[]
  error: string | null
  loadAll: () => Promise<void>
}

export const useCatalogStore = create<CatalogState>((set, get) => ({
  status: 'idle',
  products: [],
  error: null,
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

