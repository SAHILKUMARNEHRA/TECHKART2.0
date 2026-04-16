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

const customProducts: Product[] = [
  {
    "title": "Apple iPhone 15 Pro Max",
    "brand": "Apple",
    "price": 1199,
    "id": 1001,
    "category": "smartphones",
    "description": "Latest Apple smartphone with incredible features.",
    "discountPercentage": 3,
    "rating": 4.8,
    "stock": 100,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Samsung Galaxy S24 Ultra",
    "brand": "Samsung",
    "price": 1299,
    "id": 1002,
    "category": "smartphones",
    "description": "Latest Samsung smartphone with incredible features.",
    "discountPercentage": 2,
    "rating": 4.5,
    "stock": 236,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Google Pixel 8 Pro",
    "brand": "Google",
    "price": 999,
    "id": 1003,
    "category": "smartphones",
    "description": "Latest Google smartphone with incredible features.",
    "discountPercentage": 7,
    "rating": 4.9,
    "stock": 194,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "OnePlus 12",
    "brand": "OnePlus",
    "price": 799,
    "id": 1004,
    "category": "smartphones",
    "description": "Latest OnePlus smartphone with incredible features.",
    "discountPercentage": 1,
    "rating": 4.7,
    "stock": 189,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Xiaomi 14 Ultra",
    "brand": "Xiaomi",
    "price": 1099,
    "id": 1005,
    "category": "smartphones",
    "description": "Latest Xiaomi smartphone with incredible features.",
    "discountPercentage": 9,
    "rating": 4.5,
    "stock": 235,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Sony Xperia 1 V",
    "brand": "Sony",
    "price": 1399,
    "id": 1006,
    "category": "smartphones",
    "description": "Latest Sony smartphone with incredible features.",
    "discountPercentage": 4,
    "rating": 4.7,
    "stock": 88,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Samsung Galaxy Z Fold 5",
    "brand": "Samsung",
    "price": 1799,
    "id": 1007,
    "category": "smartphones",
    "description": "Latest Samsung smartphone with incredible features.",
    "discountPercentage": 6,
    "rating": 4.7,
    "stock": 228,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Nothing Phone (2)",
    "brand": "Nothing",
    "price": 599,
    "id": 1008,
    "category": "smartphones",
    "description": "Latest Nothing smartphone with incredible features.",
    "discountPercentage": 13,
    "rating": 4.6,
    "stock": 240,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Asus ROG Phone 8 Pro",
    "brand": "Asus",
    "price": 1199,
    "id": 1009,
    "category": "smartphones",
    "description": "Latest Asus smartphone with incredible features.",
    "discountPercentage": 5,
    "rating": 4.8,
    "stock": 126,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Motorola Edge 50 Pro",
    "brand": "Motorola",
    "price": 699,
    "id": 1010,
    "category": "smartphones",
    "description": "Latest Motorola smartphone with incredible features.",
    "discountPercentage": 8,
    "rating": 4.6,
    "stock": 84,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Apple iPhone 14 Pro",
    "brand": "Apple",
    "price": 999,
    "id": 1011,
    "category": "smartphones",
    "description": "Latest Apple smartphone with incredible features.",
    "discountPercentage": 5,
    "rating": 4.5,
    "stock": 126,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Samsung Galaxy A55 5G",
    "brand": "Samsung",
    "price": 499,
    "id": 1012,
    "category": "smartphones",
    "description": "Latest Samsung smartphone with incredible features.",
    "discountPercentage": 6,
    "rating": 4.6,
    "stock": 151,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Vivo X100 Pro",
    "brand": "Vivo",
    "price": 899,
    "id": 1013,
    "category": "smartphones",
    "description": "Latest Vivo smartphone with incredible features.",
    "discountPercentage": 4,
    "rating": 4.7,
    "stock": 119,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "iQOO 12 5G",
    "brand": "iQOO",
    "price": 649,
    "id": 1014,
    "category": "smartphones",
    "description": "Latest iQOO smartphone with incredible features.",
    "discountPercentage": 0,
    "rating": 4.6,
    "stock": 129,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Realme 12 Pro+",
    "brand": "Realme",
    "price": 499,
    "id": 1015,
    "category": "smartphones",
    "description": "Latest Realme smartphone with incredible features.",
    "discountPercentage": 10,
    "rating": 4.5,
    "stock": 195,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Apple MacBook Pro 16\" (M3 Max)",
    "brand": "Apple",
    "price": 3499,
    "id": 2001,
    "category": "laptops",
    "description": "Powerful Apple laptop for productivity and gaming.",
    "discountPercentage": 11,
    "rating": 4.9,
    "stock": 246,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Dell XPS 14",
    "brand": "Dell",
    "price": 1699,
    "id": 2002,
    "category": "laptops",
    "description": "Powerful Dell laptop for productivity and gaming.",
    "discountPercentage": 2,
    "rating": 4.5,
    "stock": 130,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Lenovo ThinkPad X1 Carbon Gen 12",
    "brand": "Lenovo",
    "price": 1899,
    "id": 2003,
    "category": "laptops",
    "description": "Powerful Lenovo laptop for productivity and gaming.",
    "discountPercentage": 8,
    "rating": 4.6,
    "stock": 248,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "ASUS ROG Zephyrus G14 (2024)",
    "brand": "Asus",
    "price": 1599,
    "id": 2004,
    "category": "laptops",
    "description": "Powerful Asus laptop for productivity and gaming.",
    "discountPercentage": 10,
    "rating": 4.6,
    "stock": 62,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Apple MacBook Air 15\" (M3)",
    "brand": "Apple",
    "price": 1299,
    "id": 2005,
    "category": "laptops",
    "description": "Powerful Apple laptop for productivity and gaming.",
    "discountPercentage": 14,
    "rating": 4.6,
    "stock": 215,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "HP Spectre x360 14",
    "brand": "HP",
    "price": 1499,
    "id": 2006,
    "category": "laptops",
    "description": "Powerful HP laptop for productivity and gaming.",
    "discountPercentage": 13,
    "rating": 4.9,
    "stock": 213,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Razer Blade 16",
    "brand": "Razer",
    "price": 2999,
    "id": 2007,
    "category": "laptops",
    "description": "Powerful Razer laptop for productivity and gaming.",
    "discountPercentage": 12,
    "rating": 4.7,
    "stock": 72,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Microsoft Surface Laptop 7",
    "brand": "Microsoft",
    "price": 1199,
    "id": 2008,
    "category": "laptops",
    "description": "Powerful Microsoft laptop for productivity and gaming.",
    "discountPercentage": 6,
    "rating": 4.7,
    "stock": 69,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "LG Gram 14",
    "brand": "LG",
    "price": 1299,
    "id": 2009,
    "category": "laptops",
    "description": "Powerful LG laptop for productivity and gaming.",
    "discountPercentage": 4,
    "rating": 4.9,
    "stock": 103,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Acer Zenbook S 13 OLED",
    "brand": "Acer",
    "price": 1099,
    "id": 2010,
    "category": "laptops",
    "description": "Powerful Acer laptop for productivity and gaming.",
    "discountPercentage": 4,
    "rating": 4.8,
    "stock": 219,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Alienware m16 R2",
    "brand": "Alienware",
    "price": 1699,
    "id": 2011,
    "category": "laptops",
    "description": "Powerful Alienware laptop for productivity and gaming.",
    "discountPercentage": 13,
    "rating": 4.6,
    "stock": 143,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "MSI Stealth 14 Studio",
    "brand": "MSI",
    "price": 1499,
    "id": 2012,
    "category": "laptops",
    "description": "Powerful MSI laptop for productivity and gaming.",
    "discountPercentage": 13,
    "rating": 4.8,
    "stock": 56,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Gigabyte AERO 14 OLED",
    "brand": "Gigabyte",
    "price": 1399,
    "id": 2013,
    "category": "laptops",
    "description": "Powerful Gigabyte laptop for productivity and gaming.",
    "discountPercentage": 14,
    "rating": 4.7,
    "stock": 69,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Samsung Galaxy Book 4 Pro",
    "brand": "Samsung",
    "price": 1449,
    "id": 2014,
    "category": "laptops",
    "description": "Powerful Samsung laptop for productivity and gaming.",
    "discountPercentage": 13,
    "rating": 4.5,
    "stock": 134,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Framework Laptop 13",
    "brand": "Framework",
    "price": 1049,
    "id": 2015,
    "category": "laptops",
    "description": "Powerful Framework laptop for productivity and gaming.",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 101,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Apple iPad Pro 13\" (M4)",
    "brand": "Apple",
    "price": 1299,
    "id": 3001,
    "category": "tablets",
    "description": "Versatile Apple tablet for work and play.",
    "discountPercentage": 9,
    "rating": 4.7,
    "stock": 213,
    "thumbnail": "https://m.media-amazon.com/images/I/61uA2UVnYWL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61uA2UVnYWL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Samsung Galaxy Tab S9 Ultra",
    "brand": "Samsung",
    "price": 1199,
    "id": 3002,
    "category": "tablets",
    "description": "Versatile Samsung tablet for work and play.",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 104,
    "thumbnail": "https://m.media-amazon.com/images/I/81X1Gz6fUqL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81X1Gz6fUqL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Apple iPad Air 11\" (M2)",
    "brand": "Apple",
    "price": 599,
    "id": 3003,
    "category": "tablets",
    "description": "Versatile Apple tablet for work and play.",
    "discountPercentage": 9,
    "rating": 4.9,
    "stock": 230,
    "thumbnail": "https://m.media-amazon.com/images/I/71U8hYpS99L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71U8hYpS99L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Google Pixel Tablet",
    "brand": "Google",
    "price": 499,
    "id": 3004,
    "category": "tablets",
    "description": "Versatile Google tablet for work and play.",
    "discountPercentage": 14,
    "rating": 4.7,
    "stock": 55,
    "thumbnail": "https://m.media-amazon.com/images/I/71wPZf7xGfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wPZf7xGfL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "OnePlus Pad 2",
    "brand": "OnePlus",
    "price": 499,
    "id": 3005,
    "category": "tablets",
    "description": "Versatile OnePlus tablet for work and play.",
    "discountPercentage": 0,
    "rating": 4.5,
    "stock": 140,
    "thumbnail": "https://m.media-amazon.com/images/I/61R1sB2j4QL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61R1sB2j4QL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Samsung Galaxy Tab S9 FE",
    "brand": "Samsung",
    "price": 449,
    "id": 3006,
    "category": "tablets",
    "description": "Versatile Samsung tablet for work and play.",
    "discountPercentage": 5,
    "rating": 4.8,
    "stock": 124,
    "thumbnail": "https://m.media-amazon.com/images/I/61uA2UVnYWL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61uA2UVnYWL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Lenovo Tab P12 Pro",
    "brand": "Lenovo",
    "price": 599,
    "id": 3007,
    "category": "tablets",
    "description": "Versatile Lenovo tablet for work and play.",
    "discountPercentage": 8,
    "rating": 4.7,
    "stock": 98,
    "thumbnail": "https://m.media-amazon.com/images/I/81X1Gz6fUqL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81X1Gz6fUqL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Apple iPad mini (6th gen)",
    "brand": "Apple",
    "price": 499,
    "id": 3008,
    "category": "tablets",
    "description": "Versatile Apple tablet for work and play.",
    "discountPercentage": 14,
    "rating": 4.6,
    "stock": 190,
    "thumbnail": "https://m.media-amazon.com/images/I/71U8hYpS99L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71U8hYpS99L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Xiaomi Pad 6",
    "brand": "Xiaomi",
    "price": 399,
    "id": 3009,
    "category": "tablets",
    "description": "Versatile Xiaomi tablet for work and play.",
    "discountPercentage": 7,
    "rating": 4.6,
    "stock": 205,
    "thumbnail": "https://m.media-amazon.com/images/I/71wPZf7xGfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wPZf7xGfL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Microsoft Surface Pro 11",
    "brand": "Microsoft",
    "price": 999,
    "id": 3010,
    "category": "tablets",
    "description": "Versatile Microsoft tablet for work and play.",
    "discountPercentage": 6,
    "rating": 4.7,
    "stock": 183,
    "thumbnail": "https://m.media-amazon.com/images/I/61R1sB2j4QL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61R1sB2j4QL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Amazon Fire Max 11",
    "brand": "Amazon",
    "price": 229,
    "id": 3011,
    "category": "tablets",
    "description": "Versatile Amazon tablet for work and play.",
    "discountPercentage": 9,
    "rating": 4.9,
    "stock": 68,
    "thumbnail": "https://m.media-amazon.com/images/I/61uA2UVnYWL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61uA2UVnYWL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Remarkable 2",
    "brand": "Remarkable",
    "price": 399,
    "id": 3012,
    "category": "tablets",
    "description": "Versatile Remarkable tablet for work and play.",
    "discountPercentage": 2,
    "rating": 4.6,
    "stock": 182,
    "thumbnail": "https://m.media-amazon.com/images/I/81X1Gz6fUqL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81X1Gz6fUqL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Boox Note Air 3",
    "brand": "Boox",
    "price": 399,
    "id": 3013,
    "category": "tablets",
    "description": "Versatile Boox tablet for work and play.",
    "discountPercentage": 3,
    "rating": 4.8,
    "stock": 206,
    "thumbnail": "https://m.media-amazon.com/images/I/71U8hYpS99L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71U8hYpS99L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Honor Pad 9",
    "brand": "Honor",
    "price": 349,
    "id": 3014,
    "category": "tablets",
    "description": "Versatile Honor tablet for work and play.",
    "discountPercentage": 5,
    "rating": 4.7,
    "stock": 237,
    "thumbnail": "https://m.media-amazon.com/images/I/71wPZf7xGfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wPZf7xGfL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Vivo Pad 3 Pro",
    "brand": "Vivo",
    "price": 449,
    "id": 3015,
    "category": "tablets",
    "description": "Versatile Vivo tablet for work and play.",
    "discountPercentage": 14,
    "rating": 4.9,
    "stock": 137,
    "thumbnail": "https://m.media-amazon.com/images/I/61R1sB2j4QL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61R1sB2j4QL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Apple Watch Ultra 2",
    "brand": "Apple",
    "price": 799,
    "id": 4001,
    "category": "smartwatches",
    "description": "Advanced Apple smartwatch with health tracking.",
    "discountPercentage": 6,
    "rating": 4.8,
    "stock": 90,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Samsung Galaxy Watch 6 Classic",
    "brand": "Samsung",
    "price": 399,
    "id": 4002,
    "category": "smartwatches",
    "description": "Advanced Samsung smartwatch with health tracking.",
    "discountPercentage": 11,
    "rating": 4.6,
    "stock": 188,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Garmin Epix Pro (Gen 2)",
    "brand": "Garmin",
    "price": 899,
    "id": 4003,
    "category": "smartwatches",
    "description": "Advanced Garmin smartwatch with health tracking.",
    "discountPercentage": 14,
    "rating": 4.6,
    "stock": 52,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Google Pixel Watch 2",
    "brand": "Google",
    "price": 349,
    "id": 4004,
    "category": "smartwatches",
    "description": "Advanced Google smartwatch with health tracking.",
    "discountPercentage": 14,
    "rating": 4.5,
    "stock": 118,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Apple Watch Series 9",
    "brand": "Apple",
    "price": 399,
    "id": 4005,
    "category": "smartwatches",
    "description": "Advanced Apple smartwatch with health tracking.",
    "discountPercentage": 6,
    "rating": 4.8,
    "stock": 189,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "OnePlus Watch 2",
    "brand": "OnePlus",
    "price": 299,
    "id": 4006,
    "category": "smartwatches",
    "description": "Advanced OnePlus smartwatch with health tracking.",
    "discountPercentage": 2,
    "rating": 4.7,
    "stock": 174,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Garmin Venu 3",
    "brand": "Garmin",
    "price": 449,
    "id": 4007,
    "category": "smartwatches",
    "description": "Advanced Garmin smartwatch with health tracking.",
    "discountPercentage": 11,
    "rating": 4.9,
    "stock": 164,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Amazfit GTR 4",
    "brand": "Amazfit",
    "price": 199,
    "id": 4008,
    "category": "smartwatches",
    "description": "Advanced Amazfit smartwatch with health tracking.",
    "discountPercentage": 12,
    "rating": 4.5,
    "stock": 249,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Samsung Galaxy Watch 6",
    "brand": "Samsung",
    "price": 299,
    "id": 4009,
    "category": "smartwatches",
    "description": "Advanced Samsung smartwatch with health tracking.",
    "discountPercentage": 2,
    "rating": 4.6,
    "stock": 188,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Fossil Gen 6 Smartwatch",
    "brand": "Fossil",
    "price": 229,
    "id": 4010,
    "category": "smartwatches",
    "description": "Advanced Fossil smartwatch with health tracking.",
    "discountPercentage": 4,
    "rating": 4.8,
    "stock": 83,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Huawei Watch 4 Pro",
    "brand": "Huawei",
    "price": 549,
    "id": 4011,
    "category": "smartwatches",
    "description": "Advanced Huawei smartwatch with health tracking.",
    "discountPercentage": 7,
    "rating": 4.8,
    "stock": 247,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "TicWatch Pro 5",
    "brand": "Mobvoi",
    "price": 349,
    "id": 4012,
    "category": "smartwatches",
    "description": "Advanced Mobvoi smartwatch with health tracking.",
    "discountPercentage": 1,
    "rating": 4.8,
    "stock": 212,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Suunto 9 Peak Pro",
    "brand": "Suunto",
    "price": 499,
    "id": 4013,
    "category": "smartwatches",
    "description": "Advanced Suunto smartwatch with health tracking.",
    "discountPercentage": 5,
    "rating": 4.9,
    "stock": 131,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Polar Vantage V3",
    "brand": "Polar",
    "price": 599,
    "id": 4014,
    "category": "smartwatches",
    "description": "Advanced Polar smartwatch with health tracking.",
    "discountPercentage": 13,
    "rating": 4.5,
    "stock": 122,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ]
  },
  {
    "title": "Apple Watch SE (2nd Gen)",
    "brand": "Apple",
    "price": 249,
    "id": 4015,
    "category": "smartwatches",
    "description": "Advanced Apple smartwatch with health tracking.",
    "discountPercentage": 7,
    "rating": 4.5,
    "stock": 97,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ]
  }
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
