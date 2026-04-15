import type { Request, Response } from 'express'
import axios from 'axios'

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

type ProductsResponse = {
  products: Product[]
  total: number
  skip: number
  limit: number
}

const TECH_CATEGORY_ALLOW = new Set(['smartphones', 'laptops', 'tablets', 'mens-watches', 'womens-watches'])

function isTech(p: Product) {
  return TECH_CATEGORY_ALLOW.has(p.category)
}

let cache: { products: Product[]; at: number } | null = null

async function fetchAllDummyProducts() {
  const limit = 100
  const first = await axios.get<ProductsResponse>('https://dummyjson.com/products', { params: { limit, skip: 0 } })
  const total = first.data.total
  const pages = Math.ceil(total / limit)
  const rest = await Promise.all(
    Array.from({ length: Math.max(0, pages - 1) }).map((_, idx) =>
      axios.get<ProductsResponse>('https://dummyjson.com/products', { params: { limit, skip: (idx + 1) * limit } }),
    ),
  )

  return [first.data, ...rest.map((r) => r.data)].flatMap((p) => p.products)
}

async function getCatalog() {
  const ttlMs = 5 * 60 * 1000
  const now = Date.now()
  if (cache && now - cache.at < ttlMs) return cache.products
  const all = await fetchAllDummyProducts()
  const products = all.filter(isTech)
  cache = { products, at: now }
  return products
}

export async function getCatalogProducts() {
  return getCatalog()
}

export async function getProducts(_req: Request, res: Response) {
  const products = await getCatalog()
  res.json({ products })
}

export async function getProductById(req: Request, res: Response) {
  const id = Number(req.params.id)
  if (!Number.isFinite(id)) {
    res.status(400).json({ message: 'Invalid id' })
    return
  }
  const products = await getCatalog()
  const p = products.find((x) => x.id === id)
  if (!p) {
    res.status(404).json({ message: 'Not found' })
    return
  }
  res.json({ product: p })
}
