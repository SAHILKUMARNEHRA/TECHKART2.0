import type { Request, Response } from 'express'

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

type ProductBase = {
  title: string
  brand: string
  price: number
}

function img(seed: string, size = 900) {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${size}/${size}`
}

function makeProduct(id: number, category: 'smartphones' | 'laptops' | 'tablets' | 'smartwatches', base: ProductBase, idx: number): Product {
  const rating = Number((4.5 + ((idx % 5) * 0.1)).toFixed(1))
  const discountPercentage = 6 + ((idx * 3) % 18)
  const stock = 60 + ((idx * 17) % 220)
  const thumb = img(`techkart-${category}-${id}`)
  return {
    id,
    title: base.title,
    description: `Latest ${base.brand} ${category.slice(0, -1)} built for performance and everyday use.`,
    price: base.price,
    discountPercentage,
    rating,
    stock,
    brand: base.brand,
    category,
    thumbnail: thumb,
    images: [thumb, img(`techkart-${category}-${id}-2`)],
  }
}

const SMARTPHONES: ProductBase[] = [
  { title: 'Apple iPhone 15 Pro Max', brand: 'Apple', price: 1199 },
  { title: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', price: 1299 },
  { title: 'Google Pixel 8 Pro', brand: 'Google', price: 999 },
  { title: 'OnePlus 12', brand: 'OnePlus', price: 799 },
  { title: 'Xiaomi 14 Ultra', brand: 'Xiaomi', price: 1099 },
  { title: 'Vivo X100 Pro', brand: 'Vivo', price: 899 },
  { title: 'iQOO 12 5G', brand: 'iQOO', price: 649 },
  { title: 'Realme 12 Pro+', brand: 'Realme', price: 499 },
  { title: 'Nothing Phone (2)', brand: 'Nothing', price: 599 },
  { title: 'Motorola Edge 50 Pro', brand: 'Motorola', price: 699 },
  { title: 'Apple iPhone 15', brand: 'Apple', price: 799 },
  { title: 'Samsung Galaxy S24', brand: 'Samsung', price: 999 },
  { title: 'Google Pixel 8', brand: 'Google', price: 799 },
  { title: 'OnePlus 12R', brand: 'OnePlus', price: 599 },
  { title: 'Xiaomi 14', brand: 'Xiaomi', price: 899 },
  { title: 'Samsung Galaxy A55 5G', brand: 'Samsung', price: 499 },
  { title: 'OPPO Find X7 Ultra', brand: 'OPPO', price: 1099 },
  { title: 'Sony Xperia 1 V', brand: 'Sony', price: 1399 },
  { title: 'Asus ROG Phone 8 Pro', brand: 'Asus', price: 1199 },
  { title: 'Samsung Galaxy Z Fold 5', brand: 'Samsung', price: 1799 },
]

const LAPTOPS: ProductBase[] = [
  { title: 'Apple MacBook Pro 16" (M3 Max)', brand: 'Apple', price: 3499 },
  { title: 'Dell XPS 14', brand: 'Dell', price: 1699 },
  { title: 'Lenovo ThinkPad X1 Carbon Gen 12', brand: 'Lenovo', price: 1899 },
  { title: 'ASUS ROG Zephyrus G14 (2024)', brand: 'Asus', price: 1599 },
  { title: 'Apple MacBook Air 15" (M3)', brand: 'Apple', price: 1299 },
  { title: 'HP Spectre x360 14', brand: 'HP', price: 1499 },
  { title: 'Razer Blade 16', brand: 'Razer', price: 2999 },
  { title: 'Microsoft Surface Laptop 7', brand: 'Microsoft', price: 1199 },
  { title: 'LG Gram 14', brand: 'LG', price: 1299 },
  { title: 'Framework Laptop 13', brand: 'Framework', price: 1049 },
  { title: 'Alienware m16 R2', brand: 'Alienware', price: 1699 },
  { title: 'MSI Stealth 14 Studio', brand: 'MSI', price: 1499 },
  { title: 'Gigabyte AERO 14 OLED', brand: 'Gigabyte', price: 1399 },
  { title: 'Samsung Galaxy Book 4 Pro', brand: 'Samsung', price: 1449 },
  { title: 'Acer Swift X 14', brand: 'Acer', price: 1199 },
  { title: 'Lenovo Legion 5 Pro', brand: 'Lenovo', price: 1399 },
  { title: 'HP Omen Transcend 14', brand: 'HP', price: 1599 },
  { title: 'ASUS Zenbook 14 OLED', brand: 'Asus', price: 1099 },
  { title: 'Dell Inspiron 14 Plus', brand: 'Dell', price: 999 },
  { title: 'MacBook Pro 14" (M3 Pro)', brand: 'Apple', price: 1999 },
]

const TABLETS: ProductBase[] = [
  { title: 'Apple iPad Pro 13" (M4)', brand: 'Apple', price: 1299 },
  { title: 'Samsung Galaxy Tab S9 Ultra', brand: 'Samsung', price: 1199 },
  { title: 'Apple iPad Air 11" (M2)', brand: 'Apple', price: 599 },
  { title: 'Google Pixel Tablet', brand: 'Google', price: 499 },
  { title: 'OnePlus Pad 2', brand: 'OnePlus', price: 499 },
  { title: 'Samsung Galaxy Tab S9 FE', brand: 'Samsung', price: 449 },
  { title: 'Apple iPad mini (6th gen)', brand: 'Apple', price: 499 },
  { title: 'Xiaomi Pad 6', brand: 'Xiaomi', price: 399 },
  { title: 'Microsoft Surface Pro 11', brand: 'Microsoft', price: 999 },
  { title: 'Lenovo Tab P12 Pro', brand: 'Lenovo', price: 599 },
  { title: 'Amazon Fire Max 11', brand: 'Amazon', price: 229 },
  { title: 'Honor Pad 9', brand: 'Honor', price: 349 },
  { title: 'Vivo Pad 3 Pro', brand: 'Vivo', price: 449 },
  { title: 'OPPO Pad Air 2', brand: 'OPPO', price: 299 },
  { title: 'Samsung Galaxy Tab A9+', brand: 'Samsung', price: 249 },
  { title: 'Lenovo Tab M11', brand: 'Lenovo', price: 229 },
  { title: 'Apple iPad (10th gen)', brand: 'Apple', price: 449 },
  { title: 'Xiaomi Redmi Pad SE', brand: 'Xiaomi', price: 199 },
  { title: 'Huawei MatePad 11.5', brand: 'Huawei', price: 399 },
  { title: 'Realme Pad 2', brand: 'Realme', price: 249 },
]

const SMARTWATCHES: ProductBase[] = [
  { title: 'Apple Watch Ultra 2', brand: 'Apple', price: 799 },
  { title: 'Samsung Galaxy Watch 6 Classic', brand: 'Samsung', price: 399 },
  { title: 'Garmin Epix Pro (Gen 2)', brand: 'Garmin', price: 899 },
  { title: 'Google Pixel Watch 2', brand: 'Google', price: 349 },
  { title: 'Apple Watch Series 9', brand: 'Apple', price: 399 },
  { title: 'OnePlus Watch 2', brand: 'OnePlus', price: 299 },
  { title: 'Garmin Venu 3', brand: 'Garmin', price: 449 },
  { title: 'Samsung Galaxy Watch 6', brand: 'Samsung', price: 299 },
  { title: 'Huawei Watch 4 Pro', brand: 'Huawei', price: 549 },
  { title: 'Mobvoi TicWatch Pro 5', brand: 'Mobvoi', price: 349 },
  { title: 'Suunto 9 Peak Pro', brand: 'Suunto', price: 499 },
  { title: 'Polar Vantage V3', brand: 'Polar', price: 599 },
  { title: 'Apple Watch SE (2nd Gen)', brand: 'Apple', price: 249 },
  { title: 'Amazfit Balance', brand: 'Amazfit', price: 229 },
  { title: 'Fitbit Versa 4', brand: 'Fitbit', price: 199 },
  { title: 'Samsung Galaxy Watch FE', brand: 'Samsung', price: 199 },
  { title: 'Garmin Forerunner 265', brand: 'Garmin', price: 449 },
  { title: 'Noise ColorFit Pro 5', brand: 'Noise', price: 59 },
  { title: 'boAt Wave Call 2', brand: 'boAt', price: 39 },
  { title: 'Fossil Gen 6 Smartwatch', brand: 'Fossil', price: 229 },
]

const customProducts: Product[] = [
  ...SMARTPHONES.map((b, i) => makeProduct(1001 + i, 'smartphones', b, i)),
  ...LAPTOPS.map((b, i) => makeProduct(2001 + i, 'laptops', b, i)),
  ...TABLETS.map((b, i) => makeProduct(3001 + i, 'tablets', b, i)),
  ...SMARTWATCHES.map((b, i) => makeProduct(4001 + i, 'smartwatches', b, i)),
]

export async function getCatalogProducts() {
  return customProducts
}

export async function getProducts(_req: Request, res: Response) {
  res.json({ products: customProducts })
}

export async function getProductById(req: Request, res: Response) {
  const id = Number(req.params.id)
  if (!Number.isFinite(id)) {
    res.status(400).json({ message: 'Invalid id' })
    return
  }
  const p = customProducts.find((x) => x.id === id)
  if (!p) {
    res.status(404).json({ message: 'Not found' })
    return
  }
  res.json({ product: p })
}

