export type Product = {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export type SpecProfile = {
  ram: string
  storage: string
  battery: string
  display: string
  processor: string
}

export type PricePoint = {
  date: string
  priceInr: number
}
