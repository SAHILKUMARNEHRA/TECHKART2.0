import { create } from 'zustand'
import type { AuthUser } from '@/api/auth'
import { apiLogin, apiLogout, apiMe, apiRegister } from '@/api/auth'

type Status = 'idle' | 'loading' | 'success' | 'error'

type AuthState = {
  status: Status
  user: AuthUser | null
  error: string | null
  loadMe: () => Promise<void>
  login: (params: { email: string; password: string }) => Promise<boolean>
  register: (params: { name: string; email: string; password: string }) => Promise<boolean>
  logout: () => Promise<void>
}

export const useAuthStore = create<AuthState>((set) => ({
  status: 'idle',
  user: null,
  error: null,
  loadMe: async () => {
    set({ status: 'loading', error: null })
    try {
      const user = await apiMe()
      set({ status: 'success', user })
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Failed to load session'
      set({ status: 'error', error: message, user: null })
    }
  },
  login: async ({ email, password }) => {
    set({ status: 'loading', error: null })
    try {
      const user = await apiLogin({ email, password })
      set({ status: 'success', user })
      return true
    } catch (e: any) {
      const message = e?.response?.data?.message ?? (e instanceof Error ? e.message : 'Login failed')
      set({ status: 'error', error: message })
      return false
    }
  },
  register: async ({ name, email, password }) => {
    set({ status: 'loading', error: null })
    try {
      const user = await apiRegister({ name, email, password })
      set({ status: 'success', user })
      return true
    } catch (e: any) {
      const message = e?.response?.data?.message ?? (e instanceof Error ? e.message : 'Register failed')
      set({ status: 'error', error: message })
      return false
    }
  },
  logout: async () => {
    try {
      await apiLogout()
    } finally {
      set({ user: null, status: 'success', error: null })
    }
  },
}))

