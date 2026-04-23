import { Product } from '@/types/catalog'
import { toInrFromUsd } from './money'

export function isBestChoice(p: Product) {
  const inr = toInrFromUsd(p.price)
  return (p.rating >= 4.6 && p.discountPercentage >= 12) || (p.rating >= 4.5 && inr <= 20000)
}

export function hasValidImage(p: Product, brokenImageIds?: Record<number, boolean>) {
  if (brokenImageIds?.[p.id]) return false
  return p.thumbnail && p.thumbnail.trim() !== '' && !p.thumbnail.includes('fallback')
}

export function sortProductsForDisplay(products: Product[], brokenImageIds?: Record<number, boolean>) {
  return [...products].sort((a, b) => {
    // 1. Products with images come first
    const aImg = hasValidImage(a, brokenImageIds)
    const bImg = hasValidImage(b, brokenImageIds)
    if (aImg && !bImg) return -1
    if (!aImg && bImg) return 1

    // 2. Best Choice products come first
    const aBest = isBestChoice(a)
    const bBest = isBestChoice(b)
    if (aBest && !bBest) return -1
    if (!aBest && bBest) return 1

    // 3. Fallback to rating or discount
    const scoreA = a.rating * (1 + a.discountPercentage / 100)
    const scoreB = b.rating * (1 + b.discountPercentage / 100)
    return scoreB - scoreA
  })
}
