import type { TechCategory } from '@/constants/techkart'

export function getTechCategoryFromSlug(slug: string): TechCategory | null {
  if (slug === 'smartphones') return 'smartphones'
  if (slug === 'laptops') return 'laptops'
  if (slug === 'headphones') return 'headphones'
  if (slug === 'smartwatches') return 'smartwatches'
  if (slug === 'mens-watches' || slug === 'womens-watches') return 'smartwatches'
  return null
}

export function techCategoryLabel(cat: TechCategory): string {
  if (cat === 'smartphones') return 'Mobiles'
  if (cat === 'laptops') return 'Laptops'
  if (cat === 'headphones') return 'Headphones'
  if (cat === 'smartwatches') return 'Smartwatches'
  return 'Electronics'
}
