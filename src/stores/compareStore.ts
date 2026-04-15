import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { TechCategory } from '@/constants/techkart'

type CompareState = {
  ids: number[]
  category: TechCategory | null
  error: string | null
  toggle: (params: { id: number; category: TechCategory }) => void
  remove: (id: number) => void
  clear: () => void
  isSelected: (id: number) => boolean
  clearError: () => void
}

export const useCompareStore = create<CompareState>()(
  persist(
    (set, get) => ({
      ids: [],
      category: null,
      error: null,
      toggle: ({ id, category }) => {
        set((state) => {
          const exists = state.ids.includes(id)
          if (exists) {
            const nextIds = state.ids.filter((x) => x !== id)
            return { ids: nextIds, category: nextIds.length ? state.category : null, error: null }
          }
          if (state.ids.length >= 4) return state
          if (state.category && state.category !== category) {
            return { ...state, error: 'Compare works only within the same category.' }
          }
          return { ids: [...state.ids, id], category: state.category ?? category, error: null }
        })
      },
      remove: (id) =>
        set((state) => {
          const nextIds = state.ids.filter((x) => x !== id)
          return { ids: nextIds, category: nextIds.length ? state.category : null, error: null }
        }),
      clear: () => set({ ids: [], category: null, error: null }),
      isSelected: (id) => get().ids.includes(id),
      clearError: () => set({ error: null }),
    }),
    {
      name: 'tk_compare_v2',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
