import { api } from '@/api/client'

export type AuthUser = {
  id: string
  email: string | null
  name: string | null
}

export async function apiMe() {
  const res = await api.get<{ user: AuthUser | null }>('/auth/me')
  return res.data.user
}

export async function apiRegister(params: { name: string; email: string; password: string }) {
  const res = await api.post<{ user: AuthUser }>('/auth/register', params)
  return res.data.user
}

export async function apiLogin(params: { email: string; password: string }) {
  const res = await api.post<{ user: AuthUser }>('/auth/login', params)
  return res.data.user
}

export async function apiLogout() {
  await api.post('/auth/logout')
}

