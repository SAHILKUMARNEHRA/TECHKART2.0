import { api } from '@/api/client'

export type Address = {
  id: string
  label: string
  full_name: string
  phone: string
  line1: string
  line2: string | null
  city: string
  state: string
  pincode: string
  created_at: string
}

export async function apiGetAddresses() {
  const res = await api.get<{ addresses: Address[] }>('/addresses')
  return res.data.addresses
}

export async function apiCreateAddress(params: {
  label: string
  fullName: string
  phone: string
  line1: string
  line2?: string
  city: string
  state: string
  pincode: string
}) {
  const res = await api.post<{ address: Address }>('/addresses', params)
  return res.data.address
}

export async function apiDeleteAddress(id: string) {
  await api.delete(`/addresses/${id}`)
}

