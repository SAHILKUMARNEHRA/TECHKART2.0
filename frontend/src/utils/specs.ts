import type { Product, SpecProfile } from '@/types/catalog'

function pick<T>(list: T[], seed: number) {
  return list[Math.abs(seed) % list.length]
}

function seeded(seed: number) {
  let x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

function pickWeighted(list: string[], seed: number) {
  const r = seeded(seed)
  const idx = Math.min(list.length - 1, Math.floor(r * list.length))
  return list[idx]
}

export function getSpecProfile(product: Product): SpecProfile {
  const s = product.id * 97 + product.price * 3
  const category = product.category

  if (category === 'smartphones') {
    return {
      ram: pick(['4GB', '6GB', '8GB', '12GB'], s + 1),
      storage: pick(['64GB', '128GB', '256GB', '512GB'], s + 2),
      battery: pick(['4500mAh', '5000mAh', '5500mAh'], s + 3),
      display: pickWeighted(['6.1" OLED', '6.5" AMOLED 120Hz', '6.7" AMOLED 120Hz'], s + 4),
      processor: pickWeighted(['Snapdragon 7 Gen', 'Dimensity 8-series', 'Snapdragon 8-series'], s + 5),
    }
  }

  if (category === 'laptops') {
    return {
      ram: pick(['8GB', '16GB', '32GB'], s + 11),
      storage: pick(['256GB SSD', '512GB SSD', '1TB SSD'], s + 12),
      battery: pick(['45Wh', '55Wh', '70Wh'], s + 13),
      display: pickWeighted(['14" FHD', '15.6" FHD', '16" 2.5K'], s + 14),
      processor: pickWeighted(['Intel i5 / Ryzen 5', 'Intel i7 / Ryzen 7', 'Intel Ultra / Ryzen 9'], s + 15),
    }
  }

  if (category === 'tablets') {
    return {
      ram: pick(['4GB', '6GB', '8GB'], s + 21),
      storage: pick(['64GB', '128GB', '256GB'], s + 22),
      battery: pick(['7000mAh', '8000mAh', '9000mAh'], s + 23),
      display: pickWeighted(['10.4" LCD', '11" LCD 120Hz', '12.9" IPS'], s + 24),
      processor: pickWeighted(['Snapdragon 6-series', 'Dimensity 7-series', 'Apple-class performance'], s + 25),
    }
  }

  if (category.includes('watches')) {
    return {
      ram: pick(['1GB', '2GB'], s + 31),
      storage: pick(['8GB', '16GB', '32GB'], s + 32),
      battery: pick(['250mAh', '300mAh', '350mAh'], s + 33),
      display: pickWeighted(['1.32" AMOLED', '1.43" AMOLED', '1.6" OLED'], s + 34),
      processor: pickWeighted(['Dual-core', 'Low-power quad-core', 'Wearable SoC'], s + 35),
    }
  }

  return {
    ram: pick(['4GB', '6GB', '8GB'], s + 41),
    storage: pick(['128GB', '256GB', '512GB'], s + 42),
    battery: pick(['4000mAh', '5000mAh'], s + 43),
    display: pickWeighted(['FHD', 'FHD+ 120Hz', '2K'], s + 44),
    processor: pickWeighted(['Mid-range', 'Upper mid-range', 'Flagship'], s + 45),
  }
}

