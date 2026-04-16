import { api } from '@/api/client'

export type OrderItem = {
  productId: number
  title: string
  thumbnail: string | null
  category: string
  brand: string | null
  unitPriceInr: number
  qty: number
  lineTotalInr: number
}

export type Order = {
  id: string
  total_inr: number
  payment_method: string
  payment_status: string
  eta_days_min: number
  eta_days_max: number
  created_at: string
  address_snapshot: any
  items: OrderItem[]
}

export async function apiGetOrders() {
  const res = await api.get<{ orders: Order[] }>('/orders')
  return res.data.orders
}

export async function apiPlaceOrder(params: {
  addressId?: string
  address?: {
    label: string
    fullName: string
    phone: string
    line1: string
    line2?: string
    city: string
    state: string
    pincode: string
  }
  paymentMethod: 'upi' | 'cod'
  items: Array<{ productId: number; qty: number }>
}) {
  const res = await api.post<{ orderId: string; etaDaysMin: number; etaDaysMax: number }>('/orders', params)
  return res.data
}

