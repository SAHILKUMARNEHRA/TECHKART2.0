import type { PricePoint } from '@/types/catalog'

function dayKey(d: Date) {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function seeded(seed: number) {
  let x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

function storageKey(productId: number) {
  return `tk_price_history_v1_${productId}`
}

export function getOrCreatePriceHistory(productId: number, basePriceInr: number): PricePoint[] {
  const key = storageKey(productId)
  const raw = localStorage.getItem(key)
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as PricePoint[]
      if (Array.isArray(parsed) && parsed.length >= 30) return parsed
    } catch {
    }
  }

  const points: PricePoint[] = []
  const today = new Date()
  const days = 90
  const base = Math.max(1, basePriceInr)
  let price = base * (0.92 + seeded(productId) * 0.12)

  for (let i = days - 1; i >= 0; i -= 1) {
    const d = new Date(today)
    d.setDate(today.getDate() - i)

    const drift = (seeded(productId * 999 + i) - 0.5) * 0.035
    const spike = seeded(productId * 1337 + i) > 0.965 ? (seeded(productId * 777 + i) - 0.5) * 0.2 : 0
    price = price * (1 + drift + spike)
    price = clamp(price, base * 0.68, base * 1.08)

    points.push({
      date: dayKey(d),
      priceInr: Math.round(price),
    })
  }

  localStorage.setItem(key, JSON.stringify(points))
  return points
}

export function summarizeHistory(points: PricePoint[]) {
  if (points.length === 0) {
    return { lowest: 0, trend: 0 }
  }

  const lowest = points.reduce((acc, p) => Math.min(acc, p.priceInr), Number.POSITIVE_INFINITY)
  const first = points.slice(0, 7)
  const last = points.slice(-7)
  const avg = (arr: PricePoint[]) => arr.reduce((a, p) => a + p.priceInr, 0) / Math.max(1, arr.length)
  const trend = avg(last) - avg(first)
  return { lowest, trend }
}

