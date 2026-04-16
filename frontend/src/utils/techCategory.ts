import type { TechCategory } from '@/constants/techkart'

export function getTechCategoryFromSlug(slug: string): TechCategory | null {
  if (slug === 'smartphones') return 'smartphones'
  if (slug === 'laptops') return 'laptops'
  if (slug === 'tablets') return 'tablets'
  if (slug === 'smartwatches') return 'smartwatches'
  if (slug === 'mens-watches' || slug === 'womens-watches') return 'smartwatches'
  return null
}

export function techCategoryLabel(cat: TechCategory) {
  if (cat === 'smartphones') return 'Smartphones'
  if (cat === 'laptops') return 'Laptops'
  if (cat === 'tablets') return 'Tablets'
  return 'Smartwatches'
}
