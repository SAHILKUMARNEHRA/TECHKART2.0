import { api } from '@/api/client'

export type EbayItem = {
  title: string
  price: string | null
  url: string | null
  image: string | null
  condition: string | null
}

export async function apiEbaySearch(params: { q: string; techCategory?: string }) {
  const res = await api.get<{ items: EbayItem[] }>('/ebay/search', { params })
  return res.data.items
}

