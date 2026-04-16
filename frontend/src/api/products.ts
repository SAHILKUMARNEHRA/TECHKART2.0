import type { Product } from '@/types/catalog'
import { api } from '@/api/client'

export async function fetchAllProducts() {
  const res = await api.get<{ products: Product[] }>('/products')
  return res.data.products
}

export async function fetchProductById(id: number) {
  const res = await api.get<{ product: Product }>(`/products/${id}`)
  return res.data.product
}
