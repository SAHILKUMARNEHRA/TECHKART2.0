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
    "id": 1,
    "title": "Google Nord Max",
    "brand": "Google",
    "category": "smartphones",
    "price": 844,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Google mobile phone with advanced camera and fast processing.",
    "discountPercentage": 13,
    "rating": 4.4,
    "stock": 346
  },
  {
    "id": 2,
    "title": "Google Galaxy S24 5G",
    "brand": "Google",
    "category": "smartphones",
    "price": 1079,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Google mobile phone with advanced camera and fast processing.",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 301
  },
  {
    "id": 3,
    "title": "Vivo Pixel 8 Max",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 1276,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Vivo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 18,
    "rating": 4.6,
    "stock": 89
  },
  {
    "id": 4,
    "title": "Nothing Pixel 7 FE",
    "brand": "Nothing",
    "category": "smartphones",
    "price": 685,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Nothing mobile phone with advanced camera and fast processing.",
    "discountPercentage": 15,
    "rating": 4.0,
    "stock": 480
  },
  {
    "id": 5,
    "title": "OnePlus iPhone 13 Plus",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 1111,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance OnePlus mobile phone with advanced camera and fast processing.",
    "discountPercentage": 20,
    "rating": 4.9,
    "stock": 35
  },
  {
    "id": 6,
    "title": "Vivo Nord 5G",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 1032,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Vivo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 14,
    "rating": 4.9,
    "stock": 360
  },
  {
    "id": 7,
    "title": "OnePlus Nord FE",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 643,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance OnePlus mobile phone with advanced camera and fast processing.",
    "discountPercentage": 21,
    "rating": 4.3,
    "stock": 310
  },
  {
    "id": 8,
    "title": "Oppo Galaxy S23 5G",
    "brand": "Oppo",
    "category": "smartphones",
    "price": 771,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Oppo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 15,
    "rating": 4.3,
    "stock": 251
  },
  {
    "id": 9,
    "title": "Google Nord Max",
    "brand": "Google",
    "category": "smartphones",
    "price": 955,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Google mobile phone with advanced camera and fast processing.",
    "discountPercentage": 9,
    "rating": 5.0,
    "stock": 194
  },
  {
    "id": 10,
    "title": "Apple Nord Ultra",
    "brand": "Apple",
    "category": "smartphones",
    "price": 650,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Apple mobile phone with advanced camera and fast processing.",
    "discountPercentage": 17,
    "rating": 4.4,
    "stock": 410
  },
  {
    "id": 11,
    "title": "Samsung iPhone 15 Lite",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 871,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Samsung mobile phone with advanced camera and fast processing.",
    "discountPercentage": 20,
    "rating": 4.4,
    "stock": 452
  },
  {
    "id": 12,
    "title": "Google X90 Pro",
    "brand": "Google",
    "category": "smartphones",
    "price": 1117,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Google mobile phone with advanced camera and fast processing.",
    "discountPercentage": 25,
    "rating": 4.5,
    "stock": 120
  },
  {
    "id": 13,
    "title": "Vivo Pixel 7 5G",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 762,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Vivo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 14,
    "rating": 4.7,
    "stock": 306
  },
  {
    "id": 14,
    "title": "Google Nord Ultra",
    "brand": "Google",
    "category": "smartphones",
    "price": 665,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Google mobile phone with advanced camera and fast processing.",
    "discountPercentage": 11,
    "rating": 4.3,
    "stock": 168
  },
  {
    "id": 15,
    "title": "Motorola iPhone 13 Plus",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 770,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Motorola mobile phone with advanced camera and fast processing.",
    "discountPercentage": 7,
    "rating": 4.5,
    "stock": 431
  },
  {
    "id": 16,
    "title": "Oppo Pixel 7 Ultra",
    "brand": "Oppo",
    "category": "smartphones",
    "price": 1280,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Oppo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 5,
    "rating": 4.5,
    "stock": 223
  },
  {
    "id": 17,
    "title": "Apple Galaxy S24 Ultra",
    "brand": "Apple",
    "category": "smartphones",
    "price": 1007,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Apple mobile phone with advanced camera and fast processing.",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 262
  },
  {
    "id": 18,
    "title": "OnePlus Pixel 7 5G",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 891,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance OnePlus mobile phone with advanced camera and fast processing.",
    "discountPercentage": 21,
    "rating": 4.4,
    "stock": 242
  },
  {
    "id": 19,
    "title": "Google Galaxy S24 FE",
    "brand": "Google",
    "category": "smartphones",
    "price": 563,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Google mobile phone with advanced camera and fast processing.",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 187
  },
  {
    "id": 20,
    "title": "Nothing iPhone 13 Max",
    "brand": "Nothing",
    "category": "smartphones",
    "price": 1351,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Nothing mobile phone with advanced camera and fast processing.",
    "discountPercentage": 25,
    "rating": 4.4,
    "stock": 114
  },
  {
    "id": 21,
    "title": "Xiaomi Nord Max",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 426,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Xiaomi mobile phone with advanced camera and fast processing.",
    "discountPercentage": 19,
    "rating": 4.3,
    "stock": 425
  },
  {
    "id": 22,
    "title": "OnePlus Galaxy S23 FE",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 819,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance OnePlus mobile phone with advanced camera and fast processing.",
    "discountPercentage": 15,
    "rating": 4.4,
    "stock": 393
  },
  {
    "id": 23,
    "title": "Realme Pixel 7 Lite",
    "brand": "Realme",
    "category": "smartphones",
    "price": 988,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Realme mobile phone with advanced camera and fast processing.",
    "discountPercentage": 20,
    "rating": 4.1,
    "stock": 438
  },
  {
    "id": 24,
    "title": "Motorola Pixel 7 Ultra",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 1303,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Motorola mobile phone with advanced camera and fast processing.",
    "discountPercentage": 24,
    "rating": 4.8,
    "stock": 499
  },
  {
    "id": 25,
    "title": "Google Pixel 8 Ultra",
    "brand": "Google",
    "category": "smartphones",
    "price": 905,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Google mobile phone with advanced camera and fast processing.",
    "discountPercentage": 10,
    "rating": 4.1,
    "stock": 207
  },
  {
    "id": 26,
    "title": "Xiaomi Galaxy S24 5G",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 759,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Xiaomi mobile phone with advanced camera and fast processing.",
    "discountPercentage": 5,
    "rating": 4.0,
    "stock": 224
  },
  {
    "id": 27,
    "title": "Vivo Pixel 8 Ultra",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 1004,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Vivo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 24,
    "rating": 4.8,
    "stock": 211
  },
  {
    "id": 28,
    "title": "OnePlus Galaxy S23 5G",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 1331,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance OnePlus mobile phone with advanced camera and fast processing.",
    "discountPercentage": 19,
    "rating": 4.3,
    "stock": 205
  },
  {
    "id": 29,
    "title": "Realme iPhone 15 FE",
    "brand": "Realme",
    "category": "smartphones",
    "price": 1047,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Realme mobile phone with advanced camera and fast processing.",
    "discountPercentage": 13,
    "rating": 4.4,
    "stock": 210
  },
  {
    "id": 30,
    "title": "Realme Galaxy S23 Max",
    "brand": "Realme",
    "category": "smartphones",
    "price": 1121,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Realme mobile phone with advanced camera and fast processing.",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 233
  },
  {
    "id": 31,
    "title": "Xiaomi Edge Plus",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 1167,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Xiaomi mobile phone with advanced camera and fast processing.",
    "discountPercentage": 7,
    "rating": 4.8,
    "stock": 289
  },
  {
    "id": 32,
    "title": "OnePlus iPhone 13 Plus",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 891,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance OnePlus mobile phone with advanced camera and fast processing.",
    "discountPercentage": 5,
    "rating": 4.1,
    "stock": 91
  },
  {
    "id": 33,
    "title": "Vivo Pixel 7 FE",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 1152,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Vivo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 18,
    "rating": 4.2,
    "stock": 196
  },
  {
    "id": 34,
    "title": "Samsung iPhone 13 Plus",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 337,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Samsung mobile phone with advanced camera and fast processing.",
    "discountPercentage": 19,
    "rating": 4.6,
    "stock": 454
  },
  {
    "id": 35,
    "title": "Samsung Galaxy S23 Lite",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 794,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Samsung mobile phone with advanced camera and fast processing.",
    "discountPercentage": 11,
    "rating": 4.6,
    "stock": 343
  },
  {
    "id": 36,
    "title": "OnePlus Pixel 8 Ultra",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 1499,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance OnePlus mobile phone with advanced camera and fast processing.",
    "discountPercentage": 16,
    "rating": 4.6,
    "stock": 57
  },
  {
    "id": 37,
    "title": "Google Galaxy S24 Pro",
    "brand": "Google",
    "category": "smartphones",
    "price": 798,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Google mobile phone with advanced camera and fast processing.",
    "discountPercentage": 22,
    "rating": 4.9,
    "stock": 452
  },
  {
    "id": 38,
    "title": "Xiaomi iPhone 15 FE",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 1024,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Xiaomi mobile phone with advanced camera and fast processing.",
    "discountPercentage": 25,
    "rating": 4.9,
    "stock": 131
  },
  {
    "id": 39,
    "title": "Xiaomi iPhone 14 Ultra",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 404,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Xiaomi mobile phone with advanced camera and fast processing.",
    "discountPercentage": 24,
    "rating": 4.5,
    "stock": 135
  },
  {
    "id": 40,
    "title": "Nothing Pixel 7 5G",
    "brand": "Nothing",
    "category": "smartphones",
    "price": 1053,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Nothing mobile phone with advanced camera and fast processing.",
    "discountPercentage": 19,
    "rating": 5.0,
    "stock": 389
  },
  {
    "id": 41,
    "title": "Vivo iPhone 14 Max",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 1264,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Vivo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 15,
    "rating": 4.7,
    "stock": 47
  },
  {
    "id": 42,
    "title": "Realme Galaxy S23 FE",
    "brand": "Realme",
    "category": "smartphones",
    "price": 876,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Realme mobile phone with advanced camera and fast processing.",
    "discountPercentage": 23,
    "rating": 4.8,
    "stock": 487
  },
  {
    "id": 43,
    "title": "Xiaomi Galaxy S23 Max",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 1236,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Xiaomi mobile phone with advanced camera and fast processing.",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 137
  },
  {
    "id": 44,
    "title": "Google X90 5G",
    "brand": "Google",
    "category": "smartphones",
    "price": 731,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Google mobile phone with advanced camera and fast processing.",
    "discountPercentage": 25,
    "rating": 4.4,
    "stock": 131
  },
  {
    "id": 45,
    "title": "Realme X90 Pro",
    "brand": "Realme",
    "category": "smartphones",
    "price": 980,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Realme mobile phone with advanced camera and fast processing.",
    "discountPercentage": 11,
    "rating": 4.1,
    "stock": 418
  },
  {
    "id": 46,
    "title": "Oppo Pixel 8 Lite",
    "brand": "Oppo",
    "category": "smartphones",
    "price": 1489,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Oppo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 12,
    "rating": 4.3,
    "stock": 243
  },
  {
    "id": 47,
    "title": "Vivo iPhone 14 Pro",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 1210,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Vivo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 17,
    "rating": 4.9,
    "stock": 24
  },
  {
    "id": 48,
    "title": "Vivo X90 5G",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 1223,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Vivo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 18,
    "rating": 4.4,
    "stock": 447
  },
  {
    "id": 49,
    "title": "OnePlus Edge Plus",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 972,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance OnePlus mobile phone with advanced camera and fast processing.",
    "discountPercentage": 21,
    "rating": 4.7,
    "stock": 432
  },
  {
    "id": 50,
    "title": "Realme Galaxy S23 Ultra",
    "brand": "Realme",
    "category": "smartphones",
    "price": 1392,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Realme mobile phone with advanced camera and fast processing.",
    "discountPercentage": 5,
    "rating": 4.8,
    "stock": 413
  },
  {
    "id": 51,
    "title": "OnePlus iPhone 14 Max",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 770,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance OnePlus mobile phone with advanced camera and fast processing.",
    "discountPercentage": 19,
    "rating": 4.5,
    "stock": 338
  },
  {
    "id": 52,
    "title": "Samsung iPhone 15 Pro",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 966,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Samsung mobile phone with advanced camera and fast processing.",
    "discountPercentage": 21,
    "rating": 4.1,
    "stock": 329
  },
  {
    "id": 53,
    "title": "OnePlus Nord Plus",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 553,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance OnePlus mobile phone with advanced camera and fast processing.",
    "discountPercentage": 9,
    "rating": 4.8,
    "stock": 314
  },
  {
    "id": 54,
    "title": "Nothing Nord Lite",
    "brand": "Nothing",
    "category": "smartphones",
    "price": 1069,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Nothing mobile phone with advanced camera and fast processing.",
    "discountPercentage": 17,
    "rating": 4.5,
    "stock": 179
  },
  {
    "id": 55,
    "title": "Motorola Galaxy S23 Plus",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 1496,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Motorola mobile phone with advanced camera and fast processing.",
    "discountPercentage": 25,
    "rating": 4.0,
    "stock": 281
  },
  {
    "id": 56,
    "title": "OnePlus Galaxy S24 Max",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 754,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance OnePlus mobile phone with advanced camera and fast processing.",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 192
  },
  {
    "id": 57,
    "title": "Motorola Pixel 8 FE",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 319,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Motorola mobile phone with advanced camera and fast processing.",
    "discountPercentage": 20,
    "rating": 4.7,
    "stock": 476
  },
  {
    "id": 58,
    "title": "Oppo iPhone 13 5G",
    "brand": "Oppo",
    "category": "smartphones",
    "price": 990,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Oppo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 7,
    "rating": 4.9,
    "stock": 343
  },
  {
    "id": 59,
    "title": "OnePlus X90 5G",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 484,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance OnePlus mobile phone with advanced camera and fast processing.",
    "discountPercentage": 19,
    "rating": 4.4,
    "stock": 184
  },
  {
    "id": 60,
    "title": "Motorola Galaxy S23 Max",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 509,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Motorola mobile phone with advanced camera and fast processing.",
    "discountPercentage": 9,
    "rating": 4.2,
    "stock": 94
  },
  {
    "id": 61,
    "title": "Oppo Pixel 8 Ultra",
    "brand": "Oppo",
    "category": "smartphones",
    "price": 1061,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Oppo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 7,
    "rating": 4.3,
    "stock": 265
  },
  {
    "id": 62,
    "title": "OnePlus X90 Plus",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 495,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance OnePlus mobile phone with advanced camera and fast processing.",
    "discountPercentage": 11,
    "rating": 4.4,
    "stock": 181
  },
  {
    "id": 63,
    "title": "Motorola iPhone 13 Pro",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 1309,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Motorola mobile phone with advanced camera and fast processing.",
    "discountPercentage": 18,
    "rating": 4.3,
    "stock": 390
  },
  {
    "id": 64,
    "title": "Motorola Edge 5G",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 974,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Motorola mobile phone with advanced camera and fast processing.",
    "discountPercentage": 15,
    "rating": 4.3,
    "stock": 423
  },
  {
    "id": 65,
    "title": "Realme Galaxy S24 Ultra",
    "brand": "Realme",
    "category": "smartphones",
    "price": 1190,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Realme mobile phone with advanced camera and fast processing.",
    "discountPercentage": 19,
    "rating": 4.8,
    "stock": 400
  },
  {
    "id": 66,
    "title": "OnePlus iPhone 15 FE",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 835,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance OnePlus mobile phone with advanced camera and fast processing.",
    "discountPercentage": 23,
    "rating": 4.9,
    "stock": 299
  },
  {
    "id": 67,
    "title": "Motorola iPhone 15 5G",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 1468,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Motorola mobile phone with advanced camera and fast processing.",
    "discountPercentage": 11,
    "rating": 4.5,
    "stock": 77
  },
  {
    "id": 68,
    "title": "Nothing Edge Lite",
    "brand": "Nothing",
    "category": "smartphones",
    "price": 1083,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Nothing mobile phone with advanced camera and fast processing.",
    "discountPercentage": 24,
    "rating": 4.7,
    "stock": 64
  },
  {
    "id": 69,
    "title": "Motorola iPhone 15 Max",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 966,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Motorola mobile phone with advanced camera and fast processing.",
    "discountPercentage": 6,
    "rating": 4.5,
    "stock": 99
  },
  {
    "id": 70,
    "title": "Oppo iPhone 14 Pro",
    "brand": "Oppo",
    "category": "smartphones",
    "price": 1459,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Oppo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 8,
    "rating": 4.1,
    "stock": 255
  },
  {
    "id": 71,
    "title": "Motorola Nord Pro",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 737,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Motorola mobile phone with advanced camera and fast processing.",
    "discountPercentage": 5,
    "rating": 4.1,
    "stock": 364
  },
  {
    "id": 72,
    "title": "Vivo Galaxy S24 Plus",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 939,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Vivo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 21,
    "rating": 4.6,
    "stock": 332
  },
  {
    "id": 73,
    "title": "Samsung Galaxy S23 Plus",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 669,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Samsung mobile phone with advanced camera and fast processing.",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 383
  },
  {
    "id": 74,
    "title": "Realme Pixel 8 Pro",
    "brand": "Realme",
    "category": "smartphones",
    "price": 637,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Realme mobile phone with advanced camera and fast processing.",
    "discountPercentage": 8,
    "rating": 4.2,
    "stock": 469
  },
  {
    "id": 75,
    "title": "Samsung X90 Pro",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 435,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Samsung mobile phone with advanced camera and fast processing.",
    "discountPercentage": 6,
    "rating": 4.7,
    "stock": 230
  },
  {
    "id": 76,
    "title": "OnePlus Galaxy S23 FE",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 421,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance OnePlus mobile phone with advanced camera and fast processing.",
    "discountPercentage": 21,
    "rating": 4.2,
    "stock": 465
  },
  {
    "id": 77,
    "title": "Google Edge 5G",
    "brand": "Google",
    "category": "smartphones",
    "price": 365,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Google mobile phone with advanced camera and fast processing.",
    "discountPercentage": 19,
    "rating": 5.0,
    "stock": 279
  },
  {
    "id": 78,
    "title": "Vivo iPhone 15 Max",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 408,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Vivo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 22,
    "rating": 4.6,
    "stock": 247
  },
  {
    "id": 79,
    "title": "Oppo Nord Pro",
    "brand": "Oppo",
    "category": "smartphones",
    "price": 1059,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Oppo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 23,
    "rating": 4.6,
    "stock": 95
  },
  {
    "id": 80,
    "title": "Oppo Pixel 8 Ultra",
    "brand": "Oppo",
    "category": "smartphones",
    "price": 367,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Oppo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 14,
    "rating": 4.2,
    "stock": 352
  },
  {
    "id": 81,
    "title": "Apple Pixel 7 Plus",
    "brand": "Apple",
    "category": "smartphones",
    "price": 467,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Apple mobile phone with advanced camera and fast processing.",
    "discountPercentage": 19,
    "rating": 4.6,
    "stock": 331
  },
  {
    "id": 82,
    "title": "Apple Galaxy S23 Plus",
    "brand": "Apple",
    "category": "smartphones",
    "price": 827,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Apple mobile phone with advanced camera and fast processing.",
    "discountPercentage": 17,
    "rating": 4.8,
    "stock": 263
  },
  {
    "id": 83,
    "title": "Xiaomi Pixel 8 Ultra",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 1039,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Xiaomi mobile phone with advanced camera and fast processing.",
    "discountPercentage": 8,
    "rating": 4.9,
    "stock": 235
  },
  {
    "id": 84,
    "title": "Nothing Galaxy S24 5G",
    "brand": "Nothing",
    "category": "smartphones",
    "price": 743,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Nothing mobile phone with advanced camera and fast processing.",
    "discountPercentage": 21,
    "rating": 4.7,
    "stock": 136
  },
  {
    "id": 85,
    "title": "Google iPhone 15 Lite",
    "brand": "Google",
    "category": "smartphones",
    "price": 562,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Google mobile phone with advanced camera and fast processing.",
    "discountPercentage": 5,
    "rating": 4.5,
    "stock": 315
  },
  {
    "id": 86,
    "title": "Xiaomi Pixel 7 Ultra",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 714,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Xiaomi mobile phone with advanced camera and fast processing.",
    "discountPercentage": 10,
    "rating": 4.8,
    "stock": 456
  },
  {
    "id": 87,
    "title": "OnePlus Galaxy S23 Plus",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 799,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance OnePlus mobile phone with advanced camera and fast processing.",
    "discountPercentage": 18,
    "rating": 4.6,
    "stock": 263
  },
  {
    "id": 88,
    "title": "Apple Pixel 8 Plus",
    "brand": "Apple",
    "category": "smartphones",
    "price": 922,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Apple mobile phone with advanced camera and fast processing.",
    "discountPercentage": 23,
    "rating": 4.4,
    "stock": 309
  },
  {
    "id": 89,
    "title": "Motorola Pixel 7 5G",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 352,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Motorola mobile phone with advanced camera and fast processing.",
    "discountPercentage": 9,
    "rating": 4.5,
    "stock": 486
  },
  {
    "id": 90,
    "title": "Xiaomi Galaxy S23 Max",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 812,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Xiaomi mobile phone with advanced camera and fast processing.",
    "discountPercentage": 22,
    "rating": 4.2,
    "stock": 118
  },
  {
    "id": 91,
    "title": "Oppo Galaxy S24 Plus",
    "brand": "Oppo",
    "category": "smartphones",
    "price": 1251,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Oppo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 16,
    "rating": 4.1,
    "stock": 303
  },
  {
    "id": 92,
    "title": "Vivo iPhone 15 5G",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 1017,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Vivo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 15,
    "rating": 4.5,
    "stock": 46
  },
  {
    "id": 93,
    "title": "Samsung Pixel 8 Pro",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 1100,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Samsung mobile phone with advanced camera and fast processing.",
    "discountPercentage": 17,
    "rating": 4.3,
    "stock": 432
  },
  {
    "id": 94,
    "title": "Vivo iPhone 13 FE",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 607,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Vivo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 23,
    "rating": 4.5,
    "stock": 190
  },
  {
    "id": 95,
    "title": "OnePlus iPhone 15 Pro",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 799,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance OnePlus mobile phone with advanced camera and fast processing.",
    "discountPercentage": 20,
    "rating": 4.3,
    "stock": 110
  },
  {
    "id": 96,
    "title": "Vivo Galaxy S24 Pro",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 1134,
    "thumbnail": "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Vivo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 5,
    "rating": 4.8,
    "stock": 406
  },
  {
    "id": 97,
    "title": "Xiaomi iPhone 15 5G",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 396,
    "thumbnail": "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Xiaomi mobile phone with advanced camera and fast processing.",
    "discountPercentage": 16,
    "rating": 4.1,
    "stock": 82
  },
  {
    "id": 98,
    "title": "Oppo Pixel 7 Lite",
    "brand": "Oppo",
    "category": "smartphones",
    "price": 942,
    "thumbnail": "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Oppo mobile phone with advanced camera and fast processing.",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 53
  },
  {
    "id": 99,
    "title": "Google Pixel 7 Plus",
    "brand": "Google",
    "category": "smartphones",
    "price": 779,
    "thumbnail": "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Google mobile phone with advanced camera and fast processing.",
    "discountPercentage": 5,
    "rating": 4.3,
    "stock": 181
  },
  {
    "id": 100,
    "title": "Samsung X90 Ultra",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 1336,
    "thumbnail": "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "High performance Samsung mobile phone with advanced camera and fast processing.",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 492
  },
  {
    "id": 101,
    "title": "Asus Swift 14\" Intel i5",
    "brand": "Asus",
    "category": "laptops",
    "price": 1640,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Asus laptop for gaming and productivity with Intel i5.",
    "discountPercentage": 16,
    "rating": 4.5,
    "stock": 138
  },
  {
    "id": 102,
    "title": "Lenovo XPS 14\" AMD Ryzen 9",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 2664,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Lenovo laptop for gaming and productivity with AMD Ryzen 9.",
    "discountPercentage": 17,
    "rating": 4.1,
    "stock": 95
  },
  {
    "id": 103,
    "title": "Lenovo Blade 14\" Apple M2",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 1971,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Lenovo laptop for gaming and productivity with Apple M2.",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 130
  },
  {
    "id": 104,
    "title": "Asus Envy 14\" AMD Ryzen 5",
    "brand": "Asus",
    "category": "laptops",
    "price": 1089,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Asus laptop for gaming and productivity with AMD Ryzen 5.",
    "discountPercentage": 7,
    "rating": 5.0,
    "stock": 70
  },
  {
    "id": 105,
    "title": "Razer Pro 14\" AMD Ryzen 9",
    "brand": "Razer",
    "category": "laptops",
    "price": 616,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Razer laptop for gaming and productivity with AMD Ryzen 9.",
    "discountPercentage": 20,
    "rating": 4.5,
    "stock": 171
  },
  {
    "id": 106,
    "title": "Lenovo Blade 14\" Apple M3",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 1289,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Lenovo laptop for gaming and productivity with Apple M3.",
    "discountPercentage": 5,
    "rating": 4.3,
    "stock": 43
  },
  {
    "id": 107,
    "title": "Acer Surface 14\" Intel i9",
    "brand": "Acer",
    "category": "laptops",
    "price": 2201,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Acer laptop for gaming and productivity with Intel i9.",
    "discountPercentage": 13,
    "rating": 4.5,
    "stock": 108
  },
  {
    "id": 108,
    "title": "Lenovo Swift 14\" AMD Ryzen 9",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 2966,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Lenovo laptop for gaming and productivity with AMD Ryzen 9.",
    "discountPercentage": 8,
    "rating": 4.7,
    "stock": 20
  },
  {
    "id": 109,
    "title": "Lenovo Pro 14\" AMD Ryzen 9",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 1663,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Lenovo laptop for gaming and productivity with AMD Ryzen 9.",
    "discountPercentage": 14,
    "rating": 4.2,
    "stock": 160
  },
  {
    "id": 110,
    "title": "Dell Pro 14\" Intel i5",
    "brand": "Dell",
    "category": "laptops",
    "price": 1263,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Dell laptop for gaming and productivity with Intel i5.",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 168
  },
  {
    "id": 111,
    "title": "Acer ThinkPad 14\" Apple M2",
    "brand": "Acer",
    "category": "laptops",
    "price": 3402,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Acer laptop for gaming and productivity with Apple M2.",
    "discountPercentage": 8,
    "rating": 4.3,
    "stock": 187
  },
  {
    "id": 112,
    "title": "Dell Swift 14\" Intel i9",
    "brand": "Dell",
    "category": "laptops",
    "price": 3353,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Dell laptop for gaming and productivity with Intel i9.",
    "discountPercentage": 19,
    "rating": 4.9,
    "stock": 154
  },
  {
    "id": 113,
    "title": "Samsung ROG 14\" AMD Ryzen 5",
    "brand": "Samsung",
    "category": "laptops",
    "price": 1246,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Samsung laptop for gaming and productivity with AMD Ryzen 5.",
    "discountPercentage": 19,
    "rating": 4.4,
    "stock": 99
  },
  {
    "id": 114,
    "title": "Dell Yoga 14\" Apple M2",
    "brand": "Dell",
    "category": "laptops",
    "price": 2828,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Dell laptop for gaming and productivity with Apple M2.",
    "discountPercentage": 11,
    "rating": 4.5,
    "stock": 77
  },
  {
    "id": 115,
    "title": "Acer TUF 14\" AMD Ryzen 5",
    "brand": "Acer",
    "category": "laptops",
    "price": 1603,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Acer laptop for gaming and productivity with AMD Ryzen 5.",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 185
  },
  {
    "id": 116,
    "title": "HP XPS 14\" AMD Ryzen 7",
    "brand": "HP",
    "category": "laptops",
    "price": 2168,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful HP laptop for gaming and productivity with AMD Ryzen 7.",
    "discountPercentage": 16,
    "rating": 4.7,
    "stock": 117
  },
  {
    "id": 117,
    "title": "Microsoft Blade 14\" AMD Ryzen 9",
    "brand": "Microsoft",
    "category": "laptops",
    "price": 1933,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Microsoft laptop for gaming and productivity with AMD Ryzen 9.",
    "discountPercentage": 11,
    "rating": 4.4,
    "stock": 13
  },
  {
    "id": 118,
    "title": "Apple XPS 14\" AMD Ryzen 5",
    "brand": "Apple",
    "category": "laptops",
    "price": 2047,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Apple laptop for gaming and productivity with AMD Ryzen 5.",
    "discountPercentage": 13,
    "rating": 4.5,
    "stock": 175
  },
  {
    "id": 119,
    "title": "Apple Yoga 14\" Intel i9",
    "brand": "Apple",
    "category": "laptops",
    "price": 3040,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Apple laptop for gaming and productivity with Intel i9.",
    "discountPercentage": 15,
    "rating": 4.8,
    "stock": 141
  },
  {
    "id": 120,
    "title": "HP Blade 14\" Intel i9",
    "brand": "HP",
    "category": "laptops",
    "price": 3124,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful HP laptop for gaming and productivity with Intel i9.",
    "discountPercentage": 20,
    "rating": 4.6,
    "stock": 11
  },
  {
    "id": 121,
    "title": "Microsoft Surface 14\" Intel i9",
    "brand": "Microsoft",
    "category": "laptops",
    "price": 791,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Microsoft laptop for gaming and productivity with Intel i9.",
    "discountPercentage": 13,
    "rating": 4.4,
    "stock": 94
  },
  {
    "id": 122,
    "title": "Lenovo ThinkPad 14\" AMD Ryzen 5",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 2162,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Lenovo laptop for gaming and productivity with AMD Ryzen 5.",
    "discountPercentage": 11,
    "rating": 4.7,
    "stock": 73
  },
  {
    "id": 123,
    "title": "Dell Surface 14\" AMD Ryzen 5",
    "brand": "Dell",
    "category": "laptops",
    "price": 1655,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Dell laptop for gaming and productivity with AMD Ryzen 5.",
    "discountPercentage": 13,
    "rating": 4.8,
    "stock": 195
  },
  {
    "id": 124,
    "title": "Asus Spectre 14\" Intel i5",
    "brand": "Asus",
    "category": "laptops",
    "price": 2655,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Asus laptop for gaming and productivity with Intel i5.",
    "discountPercentage": 12,
    "rating": 4.0,
    "stock": 129
  },
  {
    "id": 125,
    "title": "Acer Surface 14\" Intel i7",
    "brand": "Acer",
    "category": "laptops",
    "price": 2854,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Acer laptop for gaming and productivity with Intel i7.",
    "discountPercentage": 6,
    "rating": 4.7,
    "stock": 70
  },
  {
    "id": 126,
    "title": "Razer XPS 14\" AMD Ryzen 9",
    "brand": "Razer",
    "category": "laptops",
    "price": 750,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Razer laptop for gaming and productivity with AMD Ryzen 9.",
    "discountPercentage": 15,
    "rating": 4.4,
    "stock": 46
  },
  {
    "id": 127,
    "title": "Razer TUF 14\" Intel i7",
    "brand": "Razer",
    "category": "laptops",
    "price": 2717,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Razer laptop for gaming and productivity with Intel i7.",
    "discountPercentage": 15,
    "rating": 4.9,
    "stock": 24
  },
  {
    "id": 128,
    "title": "Razer Swift 14\" Intel i7",
    "brand": "Razer",
    "category": "laptops",
    "price": 2615,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Razer laptop for gaming and productivity with Intel i7.",
    "discountPercentage": 8,
    "rating": 4.9,
    "stock": 180
  },
  {
    "id": 129,
    "title": "HP Spectre 14\" Apple M3",
    "brand": "HP",
    "category": "laptops",
    "price": 3485,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful HP laptop for gaming and productivity with Apple M3.",
    "discountPercentage": 10,
    "rating": 4.2,
    "stock": 150
  },
  {
    "id": 130,
    "title": "Razer Envy 14\" Intel i9",
    "brand": "Razer",
    "category": "laptops",
    "price": 708,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Razer laptop for gaming and productivity with Intel i9.",
    "discountPercentage": 14,
    "rating": 4.2,
    "stock": 126
  },
  {
    "id": 131,
    "title": "Samsung TUF 14\" AMD Ryzen 7",
    "brand": "Samsung",
    "category": "laptops",
    "price": 861,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Samsung laptop for gaming and productivity with AMD Ryzen 7.",
    "discountPercentage": 5,
    "rating": 4.9,
    "stock": 167
  },
  {
    "id": 132,
    "title": "Dell Surface 14\" AMD Ryzen 7",
    "brand": "Dell",
    "category": "laptops",
    "price": 2385,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Dell laptop for gaming and productivity with AMD Ryzen 7.",
    "discountPercentage": 15,
    "rating": 4.8,
    "stock": 27
  },
  {
    "id": 133,
    "title": "Acer Air 14\" AMD Ryzen 7",
    "brand": "Acer",
    "category": "laptops",
    "price": 1195,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Acer laptop for gaming and productivity with AMD Ryzen 7.",
    "discountPercentage": 12,
    "rating": 4.2,
    "stock": 108
  },
  {
    "id": 134,
    "title": "Dell XPS 14\" Intel i9",
    "brand": "Dell",
    "category": "laptops",
    "price": 1314,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Dell laptop for gaming and productivity with Intel i9.",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 156
  },
  {
    "id": 135,
    "title": "HP ROG 14\" Apple M3",
    "brand": "HP",
    "category": "laptops",
    "price": 2430,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful HP laptop for gaming and productivity with Apple M3.",
    "discountPercentage": 8,
    "rating": 4.3,
    "stock": 88
  },
  {
    "id": 136,
    "title": "Razer XPS 14\" Apple M2",
    "brand": "Razer",
    "category": "laptops",
    "price": 1110,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Razer laptop for gaming and productivity with Apple M2.",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 45
  },
  {
    "id": 137,
    "title": "Samsung Swift 14\" Intel i9",
    "brand": "Samsung",
    "category": "laptops",
    "price": 1650,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Samsung laptop for gaming and productivity with Intel i9.",
    "discountPercentage": 6,
    "rating": 4.2,
    "stock": 65
  },
  {
    "id": 138,
    "title": "Lenovo ROG 14\" Intel i7",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 869,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Lenovo laptop for gaming and productivity with Intel i7.",
    "discountPercentage": 20,
    "rating": 4.3,
    "stock": 148
  },
  {
    "id": 139,
    "title": "Lenovo Envy 14\" AMD Ryzen 9",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 2291,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Lenovo laptop for gaming and productivity with AMD Ryzen 9.",
    "discountPercentage": 11,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 140,
    "title": "Razer Air 14\" AMD Ryzen 5",
    "brand": "Razer",
    "category": "laptops",
    "price": 3389,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Razer laptop for gaming and productivity with AMD Ryzen 5.",
    "discountPercentage": 19,
    "rating": 4.7,
    "stock": 143
  },
  {
    "id": 141,
    "title": "Lenovo Swift 14\" Intel i5",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 2900,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Lenovo laptop for gaming and productivity with Intel i5.",
    "discountPercentage": 8,
    "rating": 4.9,
    "stock": 54
  },
  {
    "id": 142,
    "title": "Asus Surface 14\" AMD Ryzen 9",
    "brand": "Asus",
    "category": "laptops",
    "price": 2579,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Asus laptop for gaming and productivity with AMD Ryzen 9.",
    "discountPercentage": 7,
    "rating": 4.2,
    "stock": 178
  },
  {
    "id": 143,
    "title": "Acer Surface 14\" Intel i5",
    "brand": "Acer",
    "category": "laptops",
    "price": 2448,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Acer laptop for gaming and productivity with Intel i5.",
    "discountPercentage": 14,
    "rating": 4.1,
    "stock": 195
  },
  {
    "id": 144,
    "title": "Razer Envy 14\" AMD Ryzen 7",
    "brand": "Razer",
    "category": "laptops",
    "price": 2054,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Razer laptop for gaming and productivity with AMD Ryzen 7.",
    "discountPercentage": 19,
    "rating": 5.0,
    "stock": 183
  },
  {
    "id": 145,
    "title": "Dell Pro 14\" Intel i5",
    "brand": "Dell",
    "category": "laptops",
    "price": 1373,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Dell laptop for gaming and productivity with Intel i5.",
    "discountPercentage": 5,
    "rating": 4.3,
    "stock": 127
  },
  {
    "id": 146,
    "title": "Asus Spectre 14\" Intel i7",
    "brand": "Asus",
    "category": "laptops",
    "price": 1819,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Asus laptop for gaming and productivity with Intel i7.",
    "discountPercentage": 17,
    "rating": 4.2,
    "stock": 32
  },
  {
    "id": 147,
    "title": "Apple Air 14\" AMD Ryzen 9",
    "brand": "Apple",
    "category": "laptops",
    "price": 1438,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Apple laptop for gaming and productivity with AMD Ryzen 9.",
    "discountPercentage": 14,
    "rating": 4.4,
    "stock": 142
  },
  {
    "id": 148,
    "title": "Microsoft ROG 14\" Apple M2",
    "brand": "Microsoft",
    "category": "laptops",
    "price": 2885,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Microsoft laptop for gaming and productivity with Apple M2.",
    "discountPercentage": 7,
    "rating": 4.8,
    "stock": 20
  },
  {
    "id": 149,
    "title": "MSI Air 14\" AMD Ryzen 5",
    "brand": "MSI",
    "category": "laptops",
    "price": 1955,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful MSI laptop for gaming and productivity with AMD Ryzen 5.",
    "discountPercentage": 12,
    "rating": 4.2,
    "stock": 34
  },
  {
    "id": 150,
    "title": "Acer TUF 14\" Intel i5",
    "brand": "Acer",
    "category": "laptops",
    "price": 2394,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Acer laptop for gaming and productivity with Intel i5.",
    "discountPercentage": 10,
    "rating": 4.4,
    "stock": 150
  },
  {
    "id": 151,
    "title": "Lenovo TUF 14\" AMD Ryzen 7",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 1534,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Lenovo laptop for gaming and productivity with AMD Ryzen 7.",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 104
  },
  {
    "id": 152,
    "title": "Asus ROG 14\" AMD Ryzen 9",
    "brand": "Asus",
    "category": "laptops",
    "price": 1212,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Asus laptop for gaming and productivity with AMD Ryzen 9.",
    "discountPercentage": 13,
    "rating": 4.9,
    "stock": 148
  },
  {
    "id": 153,
    "title": "Acer Pro 14\" Apple M2",
    "brand": "Acer",
    "category": "laptops",
    "price": 1140,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Acer laptop for gaming and productivity with Apple M2.",
    "discountPercentage": 17,
    "rating": 4.7,
    "stock": 88
  },
  {
    "id": 154,
    "title": "Asus TUF 14\" Apple M2",
    "brand": "Asus",
    "category": "laptops",
    "price": 862,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Asus laptop for gaming and productivity with Apple M2.",
    "discountPercentage": 13,
    "rating": 4.7,
    "stock": 146
  },
  {
    "id": 155,
    "title": "Acer Envy 14\" Intel i9",
    "brand": "Acer",
    "category": "laptops",
    "price": 3102,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Acer laptop for gaming and productivity with Intel i9.",
    "discountPercentage": 10,
    "rating": 4.5,
    "stock": 20
  },
  {
    "id": 156,
    "title": "Lenovo ROG 14\" Intel i7",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 2728,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Lenovo laptop for gaming and productivity with Intel i7.",
    "discountPercentage": 11,
    "rating": 4.0,
    "stock": 30
  },
  {
    "id": 157,
    "title": "HP Air 14\" Intel i9",
    "brand": "HP",
    "category": "laptops",
    "price": 2631,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful HP laptop for gaming and productivity with Intel i9.",
    "discountPercentage": 12,
    "rating": 4.2,
    "stock": 143
  },
  {
    "id": 158,
    "title": "Lenovo Surface 14\" AMD Ryzen 5",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 681,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Lenovo laptop for gaming and productivity with AMD Ryzen 5.",
    "discountPercentage": 13,
    "rating": 4.7,
    "stock": 118
  },
  {
    "id": 159,
    "title": "Samsung Predator 14\" AMD Ryzen 5",
    "brand": "Samsung",
    "category": "laptops",
    "price": 2155,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Samsung laptop for gaming and productivity with AMD Ryzen 5.",
    "discountPercentage": 7,
    "rating": 4.7,
    "stock": 193
  },
  {
    "id": 160,
    "title": "HP Surface 14\" AMD Ryzen 5",
    "brand": "HP",
    "category": "laptops",
    "price": 2661,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful HP laptop for gaming and productivity with AMD Ryzen 5.",
    "discountPercentage": 15,
    "rating": 4.6,
    "stock": 113
  },
  {
    "id": 161,
    "title": "HP XPS 14\" Intel i9",
    "brand": "HP",
    "category": "laptops",
    "price": 2678,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful HP laptop for gaming and productivity with Intel i9.",
    "discountPercentage": 14,
    "rating": 4.9,
    "stock": 32
  },
  {
    "id": 162,
    "title": "Razer Pro 14\" Apple M2",
    "brand": "Razer",
    "category": "laptops",
    "price": 2383,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Razer laptop for gaming and productivity with Apple M2.",
    "discountPercentage": 5,
    "rating": 4.9,
    "stock": 159
  },
  {
    "id": 163,
    "title": "Acer Envy 14\" AMD Ryzen 9",
    "brand": "Acer",
    "category": "laptops",
    "price": 1262,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Acer laptop for gaming and productivity with AMD Ryzen 9.",
    "discountPercentage": 9,
    "rating": 4.7,
    "stock": 120
  },
  {
    "id": 164,
    "title": "Apple Yoga 14\" Apple M3",
    "brand": "Apple",
    "category": "laptops",
    "price": 3329,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Apple laptop for gaming and productivity with Apple M3.",
    "discountPercentage": 7,
    "rating": 4.2,
    "stock": 179
  },
  {
    "id": 165,
    "title": "Dell Blade 14\" Intel i9",
    "brand": "Dell",
    "category": "laptops",
    "price": 654,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Dell laptop for gaming and productivity with Intel i9.",
    "discountPercentage": 14,
    "rating": 4.2,
    "stock": 157
  },
  {
    "id": 166,
    "title": "Lenovo ROG 14\" Apple M2",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 807,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Lenovo laptop for gaming and productivity with Apple M2.",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 21
  },
  {
    "id": 167,
    "title": "Razer Yoga 14\" Apple M3",
    "brand": "Razer",
    "category": "laptops",
    "price": 2488,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Razer laptop for gaming and productivity with Apple M3.",
    "discountPercentage": 19,
    "rating": 4.4,
    "stock": 121
  },
  {
    "id": 168,
    "title": "Asus Yoga 14\" AMD Ryzen 5",
    "brand": "Asus",
    "category": "laptops",
    "price": 1226,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Asus laptop for gaming and productivity with AMD Ryzen 5.",
    "discountPercentage": 9,
    "rating": 4.8,
    "stock": 141
  },
  {
    "id": 169,
    "title": "Samsung Yoga 14\" Intel i5",
    "brand": "Samsung",
    "category": "laptops",
    "price": 2470,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Samsung laptop for gaming and productivity with Intel i5.",
    "discountPercentage": 19,
    "rating": 4.3,
    "stock": 141
  },
  {
    "id": 170,
    "title": "Razer XPS 14\" AMD Ryzen 7",
    "brand": "Razer",
    "category": "laptops",
    "price": 3324,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Razer laptop for gaming and productivity with AMD Ryzen 7.",
    "discountPercentage": 20,
    "rating": 4.6,
    "stock": 194
  },
  {
    "id": 171,
    "title": "Samsung Swift 14\" Intel i5",
    "brand": "Samsung",
    "category": "laptops",
    "price": 2547,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Samsung laptop for gaming and productivity with Intel i5.",
    "discountPercentage": 14,
    "rating": 4.6,
    "stock": 35
  },
  {
    "id": 172,
    "title": "HP Predator 14\" AMD Ryzen 5",
    "brand": "HP",
    "category": "laptops",
    "price": 1336,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful HP laptop for gaming and productivity with AMD Ryzen 5.",
    "discountPercentage": 5,
    "rating": 4.0,
    "stock": 68
  },
  {
    "id": 173,
    "title": "Razer XPS 14\" AMD Ryzen 7",
    "brand": "Razer",
    "category": "laptops",
    "price": 3134,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Razer laptop for gaming and productivity with AMD Ryzen 7.",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 23
  },
  {
    "id": 174,
    "title": "Dell Spectre 14\" Apple M2",
    "brand": "Dell",
    "category": "laptops",
    "price": 979,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Dell laptop for gaming and productivity with Apple M2.",
    "discountPercentage": 5,
    "rating": 4.3,
    "stock": 18
  },
  {
    "id": 175,
    "title": "Lenovo XPS 14\" AMD Ryzen 5",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 1719,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Lenovo laptop for gaming and productivity with AMD Ryzen 5.",
    "discountPercentage": 11,
    "rating": 4.1,
    "stock": 73
  },
  {
    "id": 176,
    "title": "HP Surface 14\" Intel i7",
    "brand": "HP",
    "category": "laptops",
    "price": 2140,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful HP laptop for gaming and productivity with Intel i7.",
    "discountPercentage": 5,
    "rating": 4.7,
    "stock": 83
  },
  {
    "id": 177,
    "title": "Dell Air 14\" Apple M2",
    "brand": "Dell",
    "category": "laptops",
    "price": 3122,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Dell laptop for gaming and productivity with Apple M2.",
    "discountPercentage": 11,
    "rating": 4.1,
    "stock": 115
  },
  {
    "id": 178,
    "title": "Microsoft XPS 14\" Intel i9",
    "brand": "Microsoft",
    "category": "laptops",
    "price": 2254,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Microsoft laptop for gaming and productivity with Intel i9.",
    "discountPercentage": 18,
    "rating": 4.2,
    "stock": 115
  },
  {
    "id": 179,
    "title": "Razer Envy 14\" Apple M3",
    "brand": "Razer",
    "category": "laptops",
    "price": 3277,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Razer laptop for gaming and productivity with Apple M3.",
    "discountPercentage": 5,
    "rating": 4.7,
    "stock": 159
  },
  {
    "id": 180,
    "title": "HP Surface 14\" Apple M2",
    "brand": "HP",
    "category": "laptops",
    "price": 1176,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful HP laptop for gaming and productivity with Apple M2.",
    "discountPercentage": 19,
    "rating": 4.5,
    "stock": 123
  },
  {
    "id": 181,
    "title": "Apple Surface 14\" Intel i5",
    "brand": "Apple",
    "category": "laptops",
    "price": 2012,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Apple laptop for gaming and productivity with Intel i5.",
    "discountPercentage": 12,
    "rating": 4.7,
    "stock": 173
  },
  {
    "id": 182,
    "title": "Asus ThinkPad 14\" Intel i5",
    "brand": "Asus",
    "category": "laptops",
    "price": 2159,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Asus laptop for gaming and productivity with Intel i5.",
    "discountPercentage": 5,
    "rating": 4.3,
    "stock": 154
  },
  {
    "id": 183,
    "title": "Razer Blade 14\" AMD Ryzen 9",
    "brand": "Razer",
    "category": "laptops",
    "price": 661,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Razer laptop for gaming and productivity with AMD Ryzen 9.",
    "discountPercentage": 14,
    "rating": 4.6,
    "stock": 56
  },
  {
    "id": 184,
    "title": "Apple Yoga 14\" AMD Ryzen 7",
    "brand": "Apple",
    "category": "laptops",
    "price": 3177,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Apple laptop for gaming and productivity with AMD Ryzen 7.",
    "discountPercentage": 16,
    "rating": 4.5,
    "stock": 125
  },
  {
    "id": 185,
    "title": "MSI Spectre 14\" Apple M3",
    "brand": "MSI",
    "category": "laptops",
    "price": 2306,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful MSI laptop for gaming and productivity with Apple M3.",
    "discountPercentage": 6,
    "rating": 5.0,
    "stock": 68
  },
  {
    "id": 186,
    "title": "Razer ROG 14\" Apple M2",
    "brand": "Razer",
    "category": "laptops",
    "price": 1636,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Razer laptop for gaming and productivity with Apple M2.",
    "discountPercentage": 14,
    "rating": 4.1,
    "stock": 132
  },
  {
    "id": 187,
    "title": "Lenovo Spectre 14\" AMD Ryzen 5",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 1763,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Lenovo laptop for gaming and productivity with AMD Ryzen 5.",
    "discountPercentage": 14,
    "rating": 4.5,
    "stock": 70
  },
  {
    "id": 188,
    "title": "HP Air 14\" Apple M3",
    "brand": "HP",
    "category": "laptops",
    "price": 825,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful HP laptop for gaming and productivity with Apple M3.",
    "discountPercentage": 7,
    "rating": 4.3,
    "stock": 158
  },
  {
    "id": 189,
    "title": "Razer Envy 14\" Intel i7",
    "brand": "Razer",
    "category": "laptops",
    "price": 2602,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Razer laptop for gaming and productivity with Intel i7.",
    "discountPercentage": 5,
    "rating": 4.7,
    "stock": 106
  },
  {
    "id": 190,
    "title": "HP Predator 14\" Intel i5",
    "brand": "HP",
    "category": "laptops",
    "price": 3271,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful HP laptop for gaming and productivity with Intel i5.",
    "discountPercentage": 12,
    "rating": 4.5,
    "stock": 59
  },
  {
    "id": 191,
    "title": "MSI Swift 14\" Intel i9",
    "brand": "MSI",
    "category": "laptops",
    "price": 3224,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful MSI laptop for gaming and productivity with Intel i9.",
    "discountPercentage": 5,
    "rating": 4.6,
    "stock": 89
  },
  {
    "id": 192,
    "title": "HP Blade 14\" Intel i7",
    "brand": "HP",
    "category": "laptops",
    "price": 1724,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful HP laptop for gaming and productivity with Intel i7.",
    "discountPercentage": 15,
    "rating": 4.8,
    "stock": 38
  },
  {
    "id": 193,
    "title": "MSI ThinkPad 14\" AMD Ryzen 7",
    "brand": "MSI",
    "category": "laptops",
    "price": 2301,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful MSI laptop for gaming and productivity with AMD Ryzen 7.",
    "discountPercentage": 16,
    "rating": 4.9,
    "stock": 169
  },
  {
    "id": 194,
    "title": "MSI Swift 14\" AMD Ryzen 9",
    "brand": "MSI",
    "category": "laptops",
    "price": 1065,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful MSI laptop for gaming and productivity with AMD Ryzen 9.",
    "discountPercentage": 8,
    "rating": 4.0,
    "stock": 134
  },
  {
    "id": 195,
    "title": "Microsoft ThinkPad 14\" AMD Ryzen 5",
    "brand": "Microsoft",
    "category": "laptops",
    "price": 2070,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Microsoft laptop for gaming and productivity with AMD Ryzen 5.",
    "discountPercentage": 14,
    "rating": 4.2,
    "stock": 199
  },
  {
    "id": 196,
    "title": "Microsoft Pro 14\" AMD Ryzen 7",
    "brand": "Microsoft",
    "category": "laptops",
    "price": 1390,
    "thumbnail": "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Microsoft laptop for gaming and productivity with AMD Ryzen 7.",
    "discountPercentage": 12,
    "rating": 4.4,
    "stock": 11
  },
  {
    "id": 197,
    "title": "HP ROG 14\" AMD Ryzen 7",
    "brand": "HP",
    "category": "laptops",
    "price": 2945,
    "thumbnail": "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful HP laptop for gaming and productivity with AMD Ryzen 7.",
    "discountPercentage": 14,
    "rating": 4.4,
    "stock": 189
  },
  {
    "id": 198,
    "title": "Acer ROG 14\" AMD Ryzen 9",
    "brand": "Acer",
    "category": "laptops",
    "price": 1074,
    "thumbnail": "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Acer laptop for gaming and productivity with AMD Ryzen 9.",
    "discountPercentage": 8,
    "rating": 4.1,
    "stock": 192
  },
  {
    "id": 199,
    "title": "Apple XPS 14\" Intel i7",
    "brand": "Apple",
    "category": "laptops",
    "price": 2541,
    "thumbnail": "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Apple laptop for gaming and productivity with Intel i7.",
    "discountPercentage": 9,
    "rating": 4.2,
    "stock": 133
  },
  {
    "id": 200,
    "title": "Apple XPS 14\" Intel i7",
    "brand": "Apple",
    "category": "laptops",
    "price": 3361,
    "thumbnail": "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Powerful Apple laptop for gaming and productivity with Intel i7.",
    "discountPercentage": 8,
    "rating": 4.8,
    "stock": 143
  },
  {
    "id": 201,
    "title": "Jabra Crusher Wireless",
    "brand": "Jabra",
    "category": "headphones",
    "price": 226,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Jabra audio experience with active noise cancellation.",
    "discountPercentage": 23,
    "rating": 4.1,
    "stock": 499
  },
  {
    "id": 202,
    "title": "Sennheiser Live Over-Ear",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 57,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sennheiser audio experience with active noise cancellation.",
    "discountPercentage": 11,
    "rating": 4.3,
    "stock": 495
  },
  {
    "id": 203,
    "title": "Skullcandy QuietComfort Pro",
    "brand": "Skullcandy",
    "category": "headphones",
    "price": 216,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Skullcandy audio experience with active noise cancellation.",
    "discountPercentage": 29,
    "rating": 4.5,
    "stock": 421
  },
  {
    "id": 204,
    "title": "Jabra Live Over-Ear",
    "brand": "Jabra",
    "category": "headphones",
    "price": 188,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Jabra audio experience with active noise cancellation.",
    "discountPercentage": 14,
    "rating": 4.2,
    "stock": 157
  },
  {
    "id": 205,
    "title": "Jabra WH-1000XM5 Max",
    "brand": "Jabra",
    "category": "headphones",
    "price": 337,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Jabra audio experience with active noise cancellation.",
    "discountPercentage": 23,
    "rating": 4.7,
    "stock": 192
  },
  {
    "id": 206,
    "title": "Apple AirPods Max",
    "brand": "Apple",
    "category": "headphones",
    "price": 274,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Apple audio experience with active noise cancellation.",
    "discountPercentage": 30,
    "rating": 4.2,
    "stock": 623
  },
  {
    "id": 207,
    "title": "Skullcandy AirPods Pro",
    "brand": "Skullcandy",
    "category": "headphones",
    "price": 276,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Skullcandy audio experience with active noise cancellation.",
    "discountPercentage": 28,
    "rating": 4.5,
    "stock": 192
  },
  {
    "id": 208,
    "title": "JBL AirPods ANC",
    "brand": "JBL",
    "category": "headphones",
    "price": 223,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium JBL audio experience with active noise cancellation.",
    "discountPercentage": 26,
    "rating": 4.1,
    "stock": 662
  },
  {
    "id": 209,
    "title": "Sennheiser Momentum ANC",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 209,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sennheiser audio experience with active noise cancellation.",
    "discountPercentage": 20,
    "rating": 4.9,
    "stock": 287
  },
  {
    "id": 210,
    "title": "Skullcandy Live Pro",
    "brand": "Skullcandy",
    "category": "headphones",
    "price": 123,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Skullcandy audio experience with active noise cancellation.",
    "discountPercentage": 23,
    "rating": 4.2,
    "stock": 789
  },
  {
    "id": 211,
    "title": "Marshall Live Max",
    "brand": "Marshall",
    "category": "headphones",
    "price": 190,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Marshall audio experience with active noise cancellation.",
    "discountPercentage": 23,
    "rating": 4.3,
    "stock": 659
  },
  {
    "id": 212,
    "title": "Bose Major Wireless",
    "brand": "Bose",
    "category": "headphones",
    "price": 182,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Bose audio experience with active noise cancellation.",
    "discountPercentage": 23,
    "rating": 4.4,
    "stock": 606
  },
  {
    "id": 213,
    "title": "Beats Momentum Earbuds",
    "brand": "Beats",
    "category": "headphones",
    "price": 314,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Beats audio experience with active noise cancellation.",
    "discountPercentage": 21,
    "rating": 4.7,
    "stock": 753
  },
  {
    "id": 214,
    "title": "Skullcandy WH-1000XM5 Over-Ear",
    "brand": "Skullcandy",
    "category": "headphones",
    "price": 379,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Skullcandy audio experience with active noise cancellation.",
    "discountPercentage": 30,
    "rating": 4.2,
    "stock": 344
  },
  {
    "id": 215,
    "title": "Jabra Live Earbuds",
    "brand": "Jabra",
    "category": "headphones",
    "price": 343,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Jabra audio experience with active noise cancellation.",
    "discountPercentage": 24,
    "rating": 4.5,
    "stock": 471
  },
  {
    "id": 216,
    "title": "Marshall Major Max",
    "brand": "Marshall",
    "category": "headphones",
    "price": 282,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Marshall audio experience with active noise cancellation.",
    "discountPercentage": 30,
    "rating": 4.0,
    "stock": 204
  },
  {
    "id": 217,
    "title": "Marshall Major ANC",
    "brand": "Marshall",
    "category": "headphones",
    "price": 237,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Marshall audio experience with active noise cancellation.",
    "discountPercentage": 23,
    "rating": 4.6,
    "stock": 282
  },
  {
    "id": 218,
    "title": "Skullcandy QuietComfort Max",
    "brand": "Skullcandy",
    "category": "headphones",
    "price": 357,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Skullcandy audio experience with active noise cancellation.",
    "discountPercentage": 12,
    "rating": 4.2,
    "stock": 168
  },
  {
    "id": 219,
    "title": "Apple AirPods ANC",
    "brand": "Apple",
    "category": "headphones",
    "price": 131,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Apple audio experience with active noise cancellation.",
    "discountPercentage": 25,
    "rating": 5.0,
    "stock": 135
  },
  {
    "id": 220,
    "title": "Bose QuietComfort Max",
    "brand": "Bose",
    "category": "headphones",
    "price": 115,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Bose audio experience with active noise cancellation.",
    "discountPercentage": 10,
    "rating": 4.1,
    "stock": 617
  },
  {
    "id": 221,
    "title": "Beats Live Pro",
    "brand": "Beats",
    "category": "headphones",
    "price": 152,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Beats audio experience with active noise cancellation.",
    "discountPercentage": 12,
    "rating": 4.3,
    "stock": 466
  },
  {
    "id": 222,
    "title": "JBL AirPods Pro",
    "brand": "JBL",
    "category": "headphones",
    "price": 270,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium JBL audio experience with active noise cancellation.",
    "discountPercentage": 26,
    "rating": 4.6,
    "stock": 523
  },
  {
    "id": 223,
    "title": "Jabra Momentum Earbuds",
    "brand": "Jabra",
    "category": "headphones",
    "price": 295,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Jabra audio experience with active noise cancellation.",
    "discountPercentage": 19,
    "rating": 4.1,
    "stock": 373
  },
  {
    "id": 224,
    "title": "Sennheiser Major Pro",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 221,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sennheiser audio experience with active noise cancellation.",
    "discountPercentage": 23,
    "rating": 4.6,
    "stock": 176
  },
  {
    "id": 225,
    "title": "Skullcandy Live Over-Ear",
    "brand": "Skullcandy",
    "category": "headphones",
    "price": 211,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Skullcandy audio experience with active noise cancellation.",
    "discountPercentage": 29,
    "rating": 4.3,
    "stock": 354
  },
  {
    "id": 226,
    "title": "Marshall Major Pro",
    "brand": "Marshall",
    "category": "headphones",
    "price": 210,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Marshall audio experience with active noise cancellation.",
    "discountPercentage": 15,
    "rating": 4.6,
    "stock": 480
  },
  {
    "id": 227,
    "title": "JBL AirPods ANC",
    "brand": "JBL",
    "category": "headphones",
    "price": 190,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium JBL audio experience with active noise cancellation.",
    "discountPercentage": 13,
    "rating": 4.3,
    "stock": 305
  },
  {
    "id": 228,
    "title": "Apple WH-1000XM5 Pro",
    "brand": "Apple",
    "category": "headphones",
    "price": 195,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Apple audio experience with active noise cancellation.",
    "discountPercentage": 17,
    "rating": 4.3,
    "stock": 366
  },
  {
    "id": 229,
    "title": "Jabra Major Over-Ear",
    "brand": "Jabra",
    "category": "headphones",
    "price": 363,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Jabra audio experience with active noise cancellation.",
    "discountPercentage": 28,
    "rating": 4.4,
    "stock": 770
  },
  {
    "id": 230,
    "title": "Marshall Crusher Pro",
    "brand": "Marshall",
    "category": "headphones",
    "price": 190,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Marshall audio experience with active noise cancellation.",
    "discountPercentage": 12,
    "rating": 4.4,
    "stock": 567
  },
  {
    "id": 231,
    "title": "Sony Elite Pro",
    "brand": "Sony",
    "category": "headphones",
    "price": 382,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sony audio experience with active noise cancellation.",
    "discountPercentage": 12,
    "rating": 4.5,
    "stock": 204
  },
  {
    "id": 232,
    "title": "Sennheiser Major Max",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 283,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sennheiser audio experience with active noise cancellation.",
    "discountPercentage": 18,
    "rating": 4.4,
    "stock": 366
  },
  {
    "id": 233,
    "title": "Sony Major Pro",
    "brand": "Sony",
    "category": "headphones",
    "price": 381,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sony audio experience with active noise cancellation.",
    "discountPercentage": 15,
    "rating": 4.7,
    "stock": 374
  },
  {
    "id": 234,
    "title": "Bose WH-1000XM5 Wireless",
    "brand": "Bose",
    "category": "headphones",
    "price": 240,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Bose audio experience with active noise cancellation.",
    "discountPercentage": 30,
    "rating": 4.5,
    "stock": 786
  },
  {
    "id": 235,
    "title": "Skullcandy Momentum ANC",
    "brand": "Skullcandy",
    "category": "headphones",
    "price": 243,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Skullcandy audio experience with active noise cancellation.",
    "discountPercentage": 26,
    "rating": 4.4,
    "stock": 153
  },
  {
    "id": 236,
    "title": "Beats Major Over-Ear",
    "brand": "Beats",
    "category": "headphones",
    "price": 308,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Beats audio experience with active noise cancellation.",
    "discountPercentage": 23,
    "rating": 4.2,
    "stock": 613
  },
  {
    "id": 237,
    "title": "Sennheiser Major Earbuds",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 70,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sennheiser audio experience with active noise cancellation.",
    "discountPercentage": 25,
    "rating": 4.9,
    "stock": 693
  },
  {
    "id": 238,
    "title": "Skullcandy Crusher Max",
    "brand": "Skullcandy",
    "category": "headphones",
    "price": 393,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Skullcandy audio experience with active noise cancellation.",
    "discountPercentage": 14,
    "rating": 4.4,
    "stock": 671
  },
  {
    "id": 239,
    "title": "Bose Crusher Earbuds",
    "brand": "Bose",
    "category": "headphones",
    "price": 321,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Bose audio experience with active noise cancellation.",
    "discountPercentage": 23,
    "rating": 4.3,
    "stock": 195
  },
  {
    "id": 240,
    "title": "Sony AirPods Max",
    "brand": "Sony",
    "category": "headphones",
    "price": 189,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sony audio experience with active noise cancellation.",
    "discountPercentage": 22,
    "rating": 4.3,
    "stock": 721
  },
  {
    "id": 241,
    "title": "Sony Momentum Max",
    "brand": "Sony",
    "category": "headphones",
    "price": 196,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sony audio experience with active noise cancellation.",
    "discountPercentage": 27,
    "rating": 4.8,
    "stock": 495
  },
  {
    "id": 242,
    "title": "Bose Momentum ANC",
    "brand": "Bose",
    "category": "headphones",
    "price": 85,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Bose audio experience with active noise cancellation.",
    "discountPercentage": 10,
    "rating": 4.6,
    "stock": 322
  },
  {
    "id": 243,
    "title": "Sony WH-1000XM5 Over-Ear",
    "brand": "Sony",
    "category": "headphones",
    "price": 249,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sony audio experience with active noise cancellation.",
    "discountPercentage": 18,
    "rating": 4.9,
    "stock": 344
  },
  {
    "id": 244,
    "title": "Jabra WH-1000XM5 Earbuds",
    "brand": "Jabra",
    "category": "headphones",
    "price": 268,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Jabra audio experience with active noise cancellation.",
    "discountPercentage": 20,
    "rating": 4.8,
    "stock": 86
  },
  {
    "id": 245,
    "title": "Jabra Momentum Wireless",
    "brand": "Jabra",
    "category": "headphones",
    "price": 177,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Jabra audio experience with active noise cancellation.",
    "discountPercentage": 16,
    "rating": 4.0,
    "stock": 69
  },
  {
    "id": 246,
    "title": "JBL AirPods Wireless",
    "brand": "JBL",
    "category": "headphones",
    "price": 199,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium JBL audio experience with active noise cancellation.",
    "discountPercentage": 16,
    "rating": 4.6,
    "stock": 52
  },
  {
    "id": 247,
    "title": "Sony AirPods Wireless",
    "brand": "Sony",
    "category": "headphones",
    "price": 208,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sony audio experience with active noise cancellation.",
    "discountPercentage": 11,
    "rating": 4.5,
    "stock": 746
  },
  {
    "id": 248,
    "title": "JBL QuietComfort Over-Ear",
    "brand": "JBL",
    "category": "headphones",
    "price": 317,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium JBL audio experience with active noise cancellation.",
    "discountPercentage": 20,
    "rating": 4.2,
    "stock": 114
  },
  {
    "id": 249,
    "title": "Bose Momentum Over-Ear",
    "brand": "Bose",
    "category": "headphones",
    "price": 290,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Bose audio experience with active noise cancellation.",
    "discountPercentage": 13,
    "rating": 4.9,
    "stock": 794
  },
  {
    "id": 250,
    "title": "Sennheiser Live ANC",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 60,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sennheiser audio experience with active noise cancellation.",
    "discountPercentage": 21,
    "rating": 4.1,
    "stock": 653
  },
  {
    "id": 251,
    "title": "Beats Momentum ANC",
    "brand": "Beats",
    "category": "headphones",
    "price": 247,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Beats audio experience with active noise cancellation.",
    "discountPercentage": 12,
    "rating": 4.5,
    "stock": 364
  },
  {
    "id": 252,
    "title": "Apple Elite Over-Ear",
    "brand": "Apple",
    "category": "headphones",
    "price": 331,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Apple audio experience with active noise cancellation.",
    "discountPercentage": 28,
    "rating": 4.7,
    "stock": 676
  },
  {
    "id": 253,
    "title": "JBL Elite Wireless",
    "brand": "JBL",
    "category": "headphones",
    "price": 259,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium JBL audio experience with active noise cancellation.",
    "discountPercentage": 30,
    "rating": 4.7,
    "stock": 243
  },
  {
    "id": 254,
    "title": "Sennheiser QuietComfort Over-Ear",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 262,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sennheiser audio experience with active noise cancellation.",
    "discountPercentage": 19,
    "rating": 4.2,
    "stock": 715
  },
  {
    "id": 255,
    "title": "Jabra Elite Pro",
    "brand": "Jabra",
    "category": "headphones",
    "price": 153,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Jabra audio experience with active noise cancellation.",
    "discountPercentage": 18,
    "rating": 4.1,
    "stock": 253
  },
  {
    "id": 256,
    "title": "Bose Crusher ANC",
    "brand": "Bose",
    "category": "headphones",
    "price": 347,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Bose audio experience with active noise cancellation.",
    "discountPercentage": 18,
    "rating": 4.1,
    "stock": 424
  },
  {
    "id": 257,
    "title": "Sony AirPods Over-Ear",
    "brand": "Sony",
    "category": "headphones",
    "price": 222,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sony audio experience with active noise cancellation.",
    "discountPercentage": 15,
    "rating": 4.4,
    "stock": 355
  },
  {
    "id": 258,
    "title": "Marshall Crusher Over-Ear",
    "brand": "Marshall",
    "category": "headphones",
    "price": 245,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Marshall audio experience with active noise cancellation.",
    "discountPercentage": 20,
    "rating": 4.3,
    "stock": 344
  },
  {
    "id": 259,
    "title": "Skullcandy Live Earbuds",
    "brand": "Skullcandy",
    "category": "headphones",
    "price": 274,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Skullcandy audio experience with active noise cancellation.",
    "discountPercentage": 23,
    "rating": 4.3,
    "stock": 139
  },
  {
    "id": 260,
    "title": "Bose Major Max",
    "brand": "Bose",
    "category": "headphones",
    "price": 205,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Bose audio experience with active noise cancellation.",
    "discountPercentage": 18,
    "rating": 4.3,
    "stock": 226
  },
  {
    "id": 261,
    "title": "Bose Momentum Earbuds",
    "brand": "Bose",
    "category": "headphones",
    "price": 196,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Bose audio experience with active noise cancellation.",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 394
  },
  {
    "id": 262,
    "title": "Skullcandy Elite Earbuds",
    "brand": "Skullcandy",
    "category": "headphones",
    "price": 175,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Skullcandy audio experience with active noise cancellation.",
    "discountPercentage": 15,
    "rating": 4.3,
    "stock": 466
  },
  {
    "id": 263,
    "title": "Marshall Live Earbuds",
    "brand": "Marshall",
    "category": "headphones",
    "price": 95,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Marshall audio experience with active noise cancellation.",
    "discountPercentage": 23,
    "rating": 4.5,
    "stock": 349
  },
  {
    "id": 264,
    "title": "Beats AirPods Over-Ear",
    "brand": "Beats",
    "category": "headphones",
    "price": 358,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Beats audio experience with active noise cancellation.",
    "discountPercentage": 16,
    "rating": 4.1,
    "stock": 369
  },
  {
    "id": 265,
    "title": "Sony Major ANC",
    "brand": "Sony",
    "category": "headphones",
    "price": 331,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sony audio experience with active noise cancellation.",
    "discountPercentage": 12,
    "rating": 4.7,
    "stock": 628
  },
  {
    "id": 266,
    "title": "Sennheiser QuietComfort Over-Ear",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 150,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sennheiser audio experience with active noise cancellation.",
    "discountPercentage": 12,
    "rating": 4.2,
    "stock": 518
  },
  {
    "id": 267,
    "title": "Apple AirPods Earbuds",
    "brand": "Apple",
    "category": "headphones",
    "price": 363,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Apple audio experience with active noise cancellation.",
    "discountPercentage": 10,
    "rating": 4.8,
    "stock": 631
  },
  {
    "id": 268,
    "title": "Jabra AirPods Earbuds",
    "brand": "Jabra",
    "category": "headphones",
    "price": 137,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Jabra audio experience with active noise cancellation.",
    "discountPercentage": 27,
    "rating": 4.2,
    "stock": 559
  },
  {
    "id": 269,
    "title": "Skullcandy Elite ANC",
    "brand": "Skullcandy",
    "category": "headphones",
    "price": 151,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Skullcandy audio experience with active noise cancellation.",
    "discountPercentage": 14,
    "rating": 4.0,
    "stock": 198
  },
  {
    "id": 270,
    "title": "Sony AirPods Pro",
    "brand": "Sony",
    "category": "headphones",
    "price": 157,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sony audio experience with active noise cancellation.",
    "discountPercentage": 27,
    "rating": 4.9,
    "stock": 57
  },
  {
    "id": 271,
    "title": "Jabra Major Pro",
    "brand": "Jabra",
    "category": "headphones",
    "price": 226,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Jabra audio experience with active noise cancellation.",
    "discountPercentage": 15,
    "rating": 4.6,
    "stock": 171
  },
  {
    "id": 272,
    "title": "Apple Crusher Max",
    "brand": "Apple",
    "category": "headphones",
    "price": 209,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Apple audio experience with active noise cancellation.",
    "discountPercentage": 18,
    "rating": 5.0,
    "stock": 468
  },
  {
    "id": 273,
    "title": "Jabra Momentum Wireless",
    "brand": "Jabra",
    "category": "headphones",
    "price": 82,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Jabra audio experience with active noise cancellation.",
    "discountPercentage": 24,
    "rating": 4.2,
    "stock": 521
  },
  {
    "id": 274,
    "title": "Sony Live Earbuds",
    "brand": "Sony",
    "category": "headphones",
    "price": 343,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sony audio experience with active noise cancellation.",
    "discountPercentage": 28,
    "rating": 4.4,
    "stock": 299
  },
  {
    "id": 275,
    "title": "Apple WH-1000XM5 Earbuds",
    "brand": "Apple",
    "category": "headphones",
    "price": 81,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Apple audio experience with active noise cancellation.",
    "discountPercentage": 24,
    "rating": 4.4,
    "stock": 415
  },
  {
    "id": 276,
    "title": "Jabra Crusher Over-Ear",
    "brand": "Jabra",
    "category": "headphones",
    "price": 346,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Jabra audio experience with active noise cancellation.",
    "discountPercentage": 26,
    "rating": 4.8,
    "stock": 717
  },
  {
    "id": 277,
    "title": "Sony QuietComfort Earbuds",
    "brand": "Sony",
    "category": "headphones",
    "price": 90,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sony audio experience with active noise cancellation.",
    "discountPercentage": 18,
    "rating": 4.0,
    "stock": 629
  },
  {
    "id": 278,
    "title": "Bose WH-1000XM5 Earbuds",
    "brand": "Bose",
    "category": "headphones",
    "price": 133,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Bose audio experience with active noise cancellation.",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 536
  },
  {
    "id": 279,
    "title": "JBL Momentum Over-Ear",
    "brand": "JBL",
    "category": "headphones",
    "price": 106,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium JBL audio experience with active noise cancellation.",
    "discountPercentage": 10,
    "rating": 4.4,
    "stock": 334
  },
  {
    "id": 280,
    "title": "Bose AirPods Pro",
    "brand": "Bose",
    "category": "headphones",
    "price": 287,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Bose audio experience with active noise cancellation.",
    "discountPercentage": 17,
    "rating": 4.8,
    "stock": 752
  },
  {
    "id": 281,
    "title": "Marshall WH-1000XM5 Over-Ear",
    "brand": "Marshall",
    "category": "headphones",
    "price": 391,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Marshall audio experience with active noise cancellation.",
    "discountPercentage": 18,
    "rating": 4.2,
    "stock": 85
  },
  {
    "id": 282,
    "title": "Skullcandy Elite Wireless",
    "brand": "Skullcandy",
    "category": "headphones",
    "price": 356,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Skullcandy audio experience with active noise cancellation.",
    "discountPercentage": 19,
    "rating": 4.8,
    "stock": 79
  },
  {
    "id": 283,
    "title": "Beats QuietComfort Pro",
    "brand": "Beats",
    "category": "headphones",
    "price": 151,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Beats audio experience with active noise cancellation.",
    "discountPercentage": 10,
    "rating": 4.1,
    "stock": 179
  },
  {
    "id": 284,
    "title": "JBL Major ANC",
    "brand": "JBL",
    "category": "headphones",
    "price": 276,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium JBL audio experience with active noise cancellation.",
    "discountPercentage": 14,
    "rating": 4.7,
    "stock": 382
  },
  {
    "id": 285,
    "title": "Sony AirPods Pro",
    "brand": "Sony",
    "category": "headphones",
    "price": 70,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sony audio experience with active noise cancellation.",
    "discountPercentage": 17,
    "rating": 4.3,
    "stock": 427
  },
  {
    "id": 286,
    "title": "JBL WH-1000XM5 Max",
    "brand": "JBL",
    "category": "headphones",
    "price": 236,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium JBL audio experience with active noise cancellation.",
    "discountPercentage": 19,
    "rating": 4.1,
    "stock": 247
  },
  {
    "id": 287,
    "title": "Marshall Crusher Max",
    "brand": "Marshall",
    "category": "headphones",
    "price": 260,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Marshall audio experience with active noise cancellation.",
    "discountPercentage": 28,
    "rating": 4.8,
    "stock": 547
  },
  {
    "id": 288,
    "title": "Marshall Momentum Pro",
    "brand": "Marshall",
    "category": "headphones",
    "price": 365,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Marshall audio experience with active noise cancellation.",
    "discountPercentage": 26,
    "rating": 4.9,
    "stock": 162
  },
  {
    "id": 289,
    "title": "Sony QuietComfort Over-Ear",
    "brand": "Sony",
    "category": "headphones",
    "price": 143,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sony audio experience with active noise cancellation.",
    "discountPercentage": 24,
    "rating": 4.8,
    "stock": 604
  },
  {
    "id": 290,
    "title": "Sennheiser QuietComfort Max",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 346,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sennheiser audio experience with active noise cancellation.",
    "discountPercentage": 15,
    "rating": 4.8,
    "stock": 344
  },
  {
    "id": 291,
    "title": "JBL Crusher Max",
    "brand": "JBL",
    "category": "headphones",
    "price": 357,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium JBL audio experience with active noise cancellation.",
    "discountPercentage": 27,
    "rating": 4.8,
    "stock": 37
  },
  {
    "id": 292,
    "title": "Beats Crusher Pro",
    "brand": "Beats",
    "category": "headphones",
    "price": 234,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Beats audio experience with active noise cancellation.",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 436
  },
  {
    "id": 293,
    "title": "Sony QuietComfort Over-Ear",
    "brand": "Sony",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sony audio experience with active noise cancellation.",
    "discountPercentage": 19,
    "rating": 4.8,
    "stock": 694
  },
  {
    "id": 294,
    "title": "Sony Live Wireless",
    "brand": "Sony",
    "category": "headphones",
    "price": 227,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sony audio experience with active noise cancellation.",
    "discountPercentage": 29,
    "rating": 4.1,
    "stock": 411
  },
  {
    "id": 295,
    "title": "Apple WH-1000XM5 Earbuds",
    "brand": "Apple",
    "category": "headphones",
    "price": 172,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Apple audio experience with active noise cancellation.",
    "discountPercentage": 16,
    "rating": 4.3,
    "stock": 780
  },
  {
    "id": 296,
    "title": "Skullcandy QuietComfort Earbuds",
    "brand": "Skullcandy",
    "category": "headphones",
    "price": 104,
    "thumbnail": "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Skullcandy audio experience with active noise cancellation.",
    "discountPercentage": 29,
    "rating": 4.1,
    "stock": 249
  },
  {
    "id": 297,
    "title": "JBL Elite Earbuds",
    "brand": "JBL",
    "category": "headphones",
    "price": 312,
    "thumbnail": "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium JBL audio experience with active noise cancellation.",
    "discountPercentage": 20,
    "rating": 4.1,
    "stock": 301
  },
  {
    "id": 298,
    "title": "Apple Crusher Max",
    "brand": "Apple",
    "category": "headphones",
    "price": 110,
    "thumbnail": "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Apple audio experience with active noise cancellation.",
    "discountPercentage": 30,
    "rating": 4.8,
    "stock": 127
  },
  {
    "id": 299,
    "title": "Marshall QuietComfort Earbuds",
    "brand": "Marshall",
    "category": "headphones",
    "price": 157,
    "thumbnail": "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Marshall audio experience with active noise cancellation.",
    "discountPercentage": 16,
    "rating": 4.2,
    "stock": 290
  },
  {
    "id": 300,
    "title": "Sennheiser WH-1000XM5 ANC",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 171,
    "thumbnail": "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Premium Sennheiser audio experience with active noise cancellation.",
    "discountPercentage": 16,
    "rating": 4.4,
    "stock": 197
  },
  {
    "id": 301,
    "title": "Fitbit GTR 4",
    "brand": "Fitbit",
    "category": "smartwatches",
    "price": 220,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fitbit watch with AMOLED display.",
    "discountPercentage": 21,
    "rating": 4.4,
    "stock": 131
  },
  {
    "id": 302,
    "title": "Fossil GTR 4",
    "brand": "Fossil",
    "category": "smartwatches",
    "price": 524,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fossil watch with AMOLED display.",
    "discountPercentage": 7,
    "rating": 4.0,
    "stock": 354
  },
  {
    "id": 303,
    "title": "Fossil Fenix 7",
    "brand": "Fossil",
    "category": "smartwatches",
    "price": 114,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fossil watch with AMOLED display.",
    "discountPercentage": 37,
    "rating": 4.5,
    "stock": 58
  },
  {
    "id": 304,
    "title": "Amazfit Watch Series 9",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 669,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Amazfit watch with AMOLED display.",
    "discountPercentage": 32,
    "rating": 4.0,
    "stock": 401
  },
  {
    "id": 305,
    "title": "Fossil Fenix 7",
    "brand": "Fossil",
    "category": "smartwatches",
    "price": 150,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fossil watch with AMOLED display.",
    "discountPercentage": 37,
    "rating": 4.3,
    "stock": 86
  },
  {
    "id": 306,
    "title": "Amazfit Galaxy Watch 6",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 562,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Amazfit watch with AMOLED display.",
    "discountPercentage": 15,
    "rating": 4.5,
    "stock": 54
  },
  {
    "id": 307,
    "title": "Apple Fenix 7",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 453,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Apple watch with AMOLED display.",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 554
  },
  {
    "id": 308,
    "title": "Garmin Watch Series 9",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 300,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Garmin watch with AMOLED display.",
    "discountPercentage": 21,
    "rating": 5.0,
    "stock": 396
  },
  {
    "id": 309,
    "title": "Fitbit Venu 3",
    "brand": "Fitbit",
    "category": "smartwatches",
    "price": 494,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fitbit watch with AMOLED display.",
    "discountPercentage": 29,
    "rating": 4.6,
    "stock": 313
  },
  {
    "id": 310,
    "title": "boAt Galaxy Watch 6",
    "brand": "boAt",
    "category": "smartwatches",
    "price": 189,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking boAt watch with AMOLED display.",
    "discountPercentage": 31,
    "rating": 4.1,
    "stock": 175
  },
  {
    "id": 311,
    "title": "boAt Venu 3",
    "brand": "boAt",
    "category": "smartwatches",
    "price": 549,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking boAt watch with AMOLED display.",
    "discountPercentage": 11,
    "rating": 4.2,
    "stock": 143
  },
  {
    "id": 312,
    "title": "Apple Versa 4",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 733,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Apple watch with AMOLED display.",
    "discountPercentage": 10,
    "rating": 4.6,
    "stock": 411
  },
  {
    "id": 313,
    "title": "Garmin ColorFit",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 156,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Garmin watch with AMOLED display.",
    "discountPercentage": 9,
    "rating": 4.2,
    "stock": 181
  },
  {
    "id": 314,
    "title": "Garmin Versa 4",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 653,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Garmin watch with AMOLED display.",
    "discountPercentage": 7,
    "rating": 4.7,
    "stock": 328
  },
  {
    "id": 315,
    "title": "Samsung Venu 3",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 393,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Samsung watch with AMOLED display.",
    "discountPercentage": 11,
    "rating": 4.0,
    "stock": 301
  },
  {
    "id": 316,
    "title": "boAt Galaxy Watch 6",
    "brand": "boAt",
    "category": "smartwatches",
    "price": 118,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking boAt watch with AMOLED display.",
    "discountPercentage": 8,
    "rating": 4.9,
    "stock": 337
  },
  {
    "id": 317,
    "title": "Fitbit Watch Ultra",
    "brand": "Fitbit",
    "category": "smartwatches",
    "price": 198,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fitbit watch with AMOLED display.",
    "discountPercentage": 34,
    "rating": 4.4,
    "stock": 412
  },
  {
    "id": 318,
    "title": "Noise ColorFit",
    "brand": "Noise",
    "category": "smartwatches",
    "price": 274,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Noise watch with AMOLED display.",
    "discountPercentage": 18,
    "rating": 4.6,
    "stock": 54
  },
  {
    "id": 319,
    "title": "Amazfit Watch Ultra",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 103,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Amazfit watch with AMOLED display.",
    "discountPercentage": 16,
    "rating": 4.9,
    "stock": 352
  },
  {
    "id": 320,
    "title": "boAt Fenix 7",
    "brand": "boAt",
    "category": "smartwatches",
    "price": 578,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking boAt watch with AMOLED display.",
    "discountPercentage": 31,
    "rating": 4.9,
    "stock": 219
  },
  {
    "id": 321,
    "title": "Garmin Versa 4",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 512,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Garmin watch with AMOLED display.",
    "discountPercentage": 36,
    "rating": 4.8,
    "stock": 386
  },
  {
    "id": 322,
    "title": "Samsung Watch Series 9",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 453,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Samsung watch with AMOLED display.",
    "discountPercentage": 31,
    "rating": 4.5,
    "stock": 547
  },
  {
    "id": 323,
    "title": "Huawei Watch Ultra",
    "brand": "Huawei",
    "category": "smartwatches",
    "price": 729,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Huawei watch with AMOLED display.",
    "discountPercentage": 9,
    "rating": 4.2,
    "stock": 600
  },
  {
    "id": 324,
    "title": "Apple Watch Series 9",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 443,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Apple watch with AMOLED display.",
    "discountPercentage": 40,
    "rating": 4.1,
    "stock": 386
  },
  {
    "id": 325,
    "title": "Fossil Versa 4",
    "brand": "Fossil",
    "category": "smartwatches",
    "price": 485,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fossil watch with AMOLED display.",
    "discountPercentage": 14,
    "rating": 4.8,
    "stock": 328
  },
  {
    "id": 326,
    "title": "boAt Watch Series 9",
    "brand": "boAt",
    "category": "smartwatches",
    "price": 313,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking boAt watch with AMOLED display.",
    "discountPercentage": 12,
    "rating": 4.8,
    "stock": 407
  },
  {
    "id": 327,
    "title": "Apple Fenix 7",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 766,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Apple watch with AMOLED display.",
    "discountPercentage": 14,
    "rating": 4.4,
    "stock": 500
  },
  {
    "id": 328,
    "title": "Apple Versa 4",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 784,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Apple watch with AMOLED display.",
    "discountPercentage": 31,
    "rating": 4.4,
    "stock": 586
  },
  {
    "id": 329,
    "title": "Apple Watch Ultra",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 367,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Apple watch with AMOLED display.",
    "discountPercentage": 13,
    "rating": 4.9,
    "stock": 509
  },
  {
    "id": 330,
    "title": "Amazfit Fenix 7",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 396,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Amazfit watch with AMOLED display.",
    "discountPercentage": 22,
    "rating": 4.1,
    "stock": 139
  },
  {
    "id": 331,
    "title": "Samsung Venu 3",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 396,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Samsung watch with AMOLED display.",
    "discountPercentage": 14,
    "rating": 4.2,
    "stock": 429
  },
  {
    "id": 332,
    "title": "Huawei Venu 3",
    "brand": "Huawei",
    "category": "smartwatches",
    "price": 220,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Huawei watch with AMOLED display.",
    "discountPercentage": 15,
    "rating": 4.3,
    "stock": 302
  },
  {
    "id": 333,
    "title": "Fossil Watch Ultra",
    "brand": "Fossil",
    "category": "smartwatches",
    "price": 370,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fossil watch with AMOLED display.",
    "discountPercentage": 25,
    "rating": 4.8,
    "stock": 433
  },
  {
    "id": 334,
    "title": "Garmin ColorFit",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 149,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Garmin watch with AMOLED display.",
    "discountPercentage": 38,
    "rating": 4.7,
    "stock": 231
  },
  {
    "id": 335,
    "title": "boAt Watch Ultra",
    "brand": "boAt",
    "category": "smartwatches",
    "price": 213,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking boAt watch with AMOLED display.",
    "discountPercentage": 32,
    "rating": 5.0,
    "stock": 272
  },
  {
    "id": 336,
    "title": "Garmin GTR 4",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 578,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Garmin watch with AMOLED display.",
    "discountPercentage": 19,
    "rating": 4.8,
    "stock": 417
  },
  {
    "id": 337,
    "title": "Noise Fenix 7",
    "brand": "Noise",
    "category": "smartwatches",
    "price": 150,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Noise watch with AMOLED display.",
    "discountPercentage": 12,
    "rating": 4.4,
    "stock": 204
  },
  {
    "id": 338,
    "title": "Fitbit Watch Ultra",
    "brand": "Fitbit",
    "category": "smartwatches",
    "price": 126,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fitbit watch with AMOLED display.",
    "discountPercentage": 27,
    "rating": 4.6,
    "stock": 348
  },
  {
    "id": 339,
    "title": "Samsung Watch Series 9",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 735,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Samsung watch with AMOLED display.",
    "discountPercentage": 28,
    "rating": 4.5,
    "stock": 101
  },
  {
    "id": 340,
    "title": "Samsung Fenix 7",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 391,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Samsung watch with AMOLED display.",
    "discountPercentage": 25,
    "rating": 4.5,
    "stock": 410
  },
  {
    "id": 341,
    "title": "Noise Fenix 7",
    "brand": "Noise",
    "category": "smartwatches",
    "price": 542,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Noise watch with AMOLED display.",
    "discountPercentage": 14,
    "rating": 4.5,
    "stock": 221
  },
  {
    "id": 342,
    "title": "Amazfit Watch Series 9",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 483,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Amazfit watch with AMOLED display.",
    "discountPercentage": 23,
    "rating": 4.0,
    "stock": 185
  },
  {
    "id": 343,
    "title": "Fitbit Watch Series 9",
    "brand": "Fitbit",
    "category": "smartwatches",
    "price": 794,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fitbit watch with AMOLED display.",
    "discountPercentage": 13,
    "rating": 4.4,
    "stock": 139
  },
  {
    "id": 344,
    "title": "Amazfit Watch Series 9",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 444,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Amazfit watch with AMOLED display.",
    "discountPercentage": 37,
    "rating": 4.2,
    "stock": 165
  },
  {
    "id": 345,
    "title": "Amazfit Galaxy Watch 6",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 260,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Amazfit watch with AMOLED display.",
    "discountPercentage": 33,
    "rating": 4.3,
    "stock": 279
  },
  {
    "id": 346,
    "title": "Apple GTR 4",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 455,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Apple watch with AMOLED display.",
    "discountPercentage": 18,
    "rating": 4.6,
    "stock": 585
  },
  {
    "id": 347,
    "title": "Fossil Watch Ultra",
    "brand": "Fossil",
    "category": "smartwatches",
    "price": 712,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fossil watch with AMOLED display.",
    "discountPercentage": 34,
    "rating": 4.7,
    "stock": 518
  },
  {
    "id": 348,
    "title": "Garmin Venu 3",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 165,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Garmin watch with AMOLED display.",
    "discountPercentage": 14,
    "rating": 4.5,
    "stock": 547
  },
  {
    "id": 349,
    "title": "Apple Watch Series 9",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 421,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Apple watch with AMOLED display.",
    "discountPercentage": 9,
    "rating": 4.4,
    "stock": 371
  },
  {
    "id": 350,
    "title": "Apple Watch Series 9",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 323,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Apple watch with AMOLED display.",
    "discountPercentage": 32,
    "rating": 4.6,
    "stock": 168
  },
  {
    "id": 351,
    "title": "Garmin Fenix 7",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 682,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Garmin watch with AMOLED display.",
    "discountPercentage": 38,
    "rating": 4.9,
    "stock": 442
  },
  {
    "id": 352,
    "title": "Fossil Versa 4",
    "brand": "Fossil",
    "category": "smartwatches",
    "price": 227,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fossil watch with AMOLED display.",
    "discountPercentage": 5,
    "rating": 4.5,
    "stock": 154
  },
  {
    "id": 353,
    "title": "Apple ColorFit",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 133,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Apple watch with AMOLED display.",
    "discountPercentage": 16,
    "rating": 4.2,
    "stock": 176
  },
  {
    "id": 354,
    "title": "Amazfit Venu 3",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 174,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Amazfit watch with AMOLED display.",
    "discountPercentage": 28,
    "rating": 4.0,
    "stock": 479
  },
  {
    "id": 355,
    "title": "Huawei Watch Series 9",
    "brand": "Huawei",
    "category": "smartwatches",
    "price": 279,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Huawei watch with AMOLED display.",
    "discountPercentage": 33,
    "rating": 4.3,
    "stock": 233
  },
  {
    "id": 356,
    "title": "Apple Venu 3",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 778,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Apple watch with AMOLED display.",
    "discountPercentage": 39,
    "rating": 4.3,
    "stock": 310
  },
  {
    "id": 357,
    "title": "Fitbit Galaxy Watch 6",
    "brand": "Fitbit",
    "category": "smartwatches",
    "price": 670,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fitbit watch with AMOLED display.",
    "discountPercentage": 34,
    "rating": 4.4,
    "stock": 145
  },
  {
    "id": 358,
    "title": "Apple GTR 4",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 497,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Apple watch with AMOLED display.",
    "discountPercentage": 6,
    "rating": 4.9,
    "stock": 175
  },
  {
    "id": 359,
    "title": "Noise Versa 4",
    "brand": "Noise",
    "category": "smartwatches",
    "price": 676,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Noise watch with AMOLED display.",
    "discountPercentage": 10,
    "rating": 4.0,
    "stock": 316
  },
  {
    "id": 360,
    "title": "Noise Venu 3",
    "brand": "Noise",
    "category": "smartwatches",
    "price": 394,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Noise watch with AMOLED display.",
    "discountPercentage": 32,
    "rating": 4.3,
    "stock": 115
  },
  {
    "id": 361,
    "title": "Noise ColorFit",
    "brand": "Noise",
    "category": "smartwatches",
    "price": 476,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Noise watch with AMOLED display.",
    "discountPercentage": 19,
    "rating": 4.7,
    "stock": 64
  },
  {
    "id": 362,
    "title": "boAt ColorFit",
    "brand": "boAt",
    "category": "smartwatches",
    "price": 440,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking boAt watch with AMOLED display.",
    "discountPercentage": 15,
    "rating": 5.0,
    "stock": 61
  },
  {
    "id": 363,
    "title": "Amazfit ColorFit",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 347,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Amazfit watch with AMOLED display.",
    "discountPercentage": 10,
    "rating": 4.5,
    "stock": 193
  },
  {
    "id": 364,
    "title": "Huawei Versa 4",
    "brand": "Huawei",
    "category": "smartwatches",
    "price": 489,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Huawei watch with AMOLED display.",
    "discountPercentage": 37,
    "rating": 4.1,
    "stock": 486
  },
  {
    "id": 365,
    "title": "Fossil ColorFit",
    "brand": "Fossil",
    "category": "smartwatches",
    "price": 644,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fossil watch with AMOLED display.",
    "discountPercentage": 37,
    "rating": 4.1,
    "stock": 524
  },
  {
    "id": 366,
    "title": "Fossil Galaxy Watch 6",
    "brand": "Fossil",
    "category": "smartwatches",
    "price": 218,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fossil watch with AMOLED display.",
    "discountPercentage": 15,
    "rating": 4.8,
    "stock": 106
  },
  {
    "id": 367,
    "title": "boAt ColorFit",
    "brand": "boAt",
    "category": "smartwatches",
    "price": 612,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking boAt watch with AMOLED display.",
    "discountPercentage": 37,
    "rating": 4.8,
    "stock": 323
  },
  {
    "id": 368,
    "title": "Amazfit Versa 4",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 141,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Amazfit watch with AMOLED display.",
    "discountPercentage": 34,
    "rating": 4.6,
    "stock": 422
  },
  {
    "id": 369,
    "title": "Noise ColorFit",
    "brand": "Noise",
    "category": "smartwatches",
    "price": 734,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Noise watch with AMOLED display.",
    "discountPercentage": 39,
    "rating": 4.1,
    "stock": 437
  },
  {
    "id": 370,
    "title": "Garmin Galaxy Watch 6",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 126,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Garmin watch with AMOLED display.",
    "discountPercentage": 29,
    "rating": 4.8,
    "stock": 574
  },
  {
    "id": 371,
    "title": "Amazfit Fenix 7",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 489,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Amazfit watch with AMOLED display.",
    "discountPercentage": 11,
    "rating": 4.9,
    "stock": 290
  },
  {
    "id": 372,
    "title": "Noise Versa 4",
    "brand": "Noise",
    "category": "smartwatches",
    "price": 377,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Noise watch with AMOLED display.",
    "discountPercentage": 11,
    "rating": 4.2,
    "stock": 146
  },
  {
    "id": 373,
    "title": "Fossil GTR 4",
    "brand": "Fossil",
    "category": "smartwatches",
    "price": 409,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fossil watch with AMOLED display.",
    "discountPercentage": 26,
    "rating": 4.6,
    "stock": 327
  },
  {
    "id": 374,
    "title": "Amazfit ColorFit",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 420,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Amazfit watch with AMOLED display.",
    "discountPercentage": 8,
    "rating": 4.8,
    "stock": 101
  },
  {
    "id": 375,
    "title": "Noise Venu 3",
    "brand": "Noise",
    "category": "smartwatches",
    "price": 321,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Noise watch with AMOLED display.",
    "discountPercentage": 18,
    "rating": 4.7,
    "stock": 177
  },
  {
    "id": 376,
    "title": "Noise Watch Ultra",
    "brand": "Noise",
    "category": "smartwatches",
    "price": 769,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Noise watch with AMOLED display.",
    "discountPercentage": 7,
    "rating": 4.6,
    "stock": 190
  },
  {
    "id": 377,
    "title": "Noise Galaxy Watch 6",
    "brand": "Noise",
    "category": "smartwatches",
    "price": 443,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Noise watch with AMOLED display.",
    "discountPercentage": 24,
    "rating": 4.2,
    "stock": 449
  },
  {
    "id": 378,
    "title": "Fossil Watch Ultra",
    "brand": "Fossil",
    "category": "smartwatches",
    "price": 426,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fossil watch with AMOLED display.",
    "discountPercentage": 35,
    "rating": 4.4,
    "stock": 466
  },
  {
    "id": 379,
    "title": "Samsung Fenix 7",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 494,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Samsung watch with AMOLED display.",
    "discountPercentage": 11,
    "rating": 4.5,
    "stock": 599
  },
  {
    "id": 380,
    "title": "Fitbit GTR 4",
    "brand": "Fitbit",
    "category": "smartwatches",
    "price": 450,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fitbit watch with AMOLED display.",
    "discountPercentage": 40,
    "rating": 4.1,
    "stock": 475
  },
  {
    "id": 381,
    "title": "Fossil Watch Series 9",
    "brand": "Fossil",
    "category": "smartwatches",
    "price": 466,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fossil watch with AMOLED display.",
    "discountPercentage": 33,
    "rating": 4.2,
    "stock": 58
  },
  {
    "id": 382,
    "title": "Noise Watch Series 9",
    "brand": "Noise",
    "category": "smartwatches",
    "price": 652,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Noise watch with AMOLED display.",
    "discountPercentage": 35,
    "rating": 4.9,
    "stock": 550
  },
  {
    "id": 383,
    "title": "Samsung Venu 3",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 406,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Samsung watch with AMOLED display.",
    "discountPercentage": 25,
    "rating": 5.0,
    "stock": 560
  },
  {
    "id": 384,
    "title": "boAt Watch Ultra",
    "brand": "boAt",
    "category": "smartwatches",
    "price": 598,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking boAt watch with AMOLED display.",
    "discountPercentage": 6,
    "rating": 4.8,
    "stock": 548
  },
  {
    "id": 385,
    "title": "Noise Watch Ultra",
    "brand": "Noise",
    "category": "smartwatches",
    "price": 705,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Noise watch with AMOLED display.",
    "discountPercentage": 8,
    "rating": 4.6,
    "stock": 386
  },
  {
    "id": 386,
    "title": "Noise Versa 4",
    "brand": "Noise",
    "category": "smartwatches",
    "price": 396,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Noise watch with AMOLED display.",
    "discountPercentage": 6,
    "rating": 4.2,
    "stock": 201
  },
  {
    "id": 387,
    "title": "Apple Venu 3",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 796,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Apple watch with AMOLED display.",
    "discountPercentage": 25,
    "rating": 4.8,
    "stock": 357
  },
  {
    "id": 388,
    "title": "Noise Venu 3",
    "brand": "Noise",
    "category": "smartwatches",
    "price": 563,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Noise watch with AMOLED display.",
    "discountPercentage": 7,
    "rating": 4.1,
    "stock": 56
  },
  {
    "id": 389,
    "title": "Noise Venu 3",
    "brand": "Noise",
    "category": "smartwatches",
    "price": 209,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Noise watch with AMOLED display.",
    "discountPercentage": 5,
    "rating": 4.4,
    "stock": 491
  },
  {
    "id": 390,
    "title": "boAt Venu 3",
    "brand": "boAt",
    "category": "smartwatches",
    "price": 721,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking boAt watch with AMOLED display.",
    "discountPercentage": 38,
    "rating": 4.2,
    "stock": 102
  },
  {
    "id": 391,
    "title": "Samsung Watch Ultra",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 600,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Samsung watch with AMOLED display.",
    "discountPercentage": 13,
    "rating": 5.0,
    "stock": 247
  },
  {
    "id": 392,
    "title": "Amazfit GTR 4",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 390,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Amazfit watch with AMOLED display.",
    "discountPercentage": 21,
    "rating": 4.4,
    "stock": 391
  },
  {
    "id": 393,
    "title": "Huawei Versa 4",
    "brand": "Huawei",
    "category": "smartwatches",
    "price": 151,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Huawei watch with AMOLED display.",
    "discountPercentage": 15,
    "rating": 4.4,
    "stock": 426
  },
  {
    "id": 394,
    "title": "Apple Galaxy Watch 6",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 661,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Apple watch with AMOLED display.",
    "discountPercentage": 8,
    "rating": 4.2,
    "stock": 315
  },
  {
    "id": 395,
    "title": "boAt Fenix 7",
    "brand": "boAt",
    "category": "smartwatches",
    "price": 362,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking boAt watch with AMOLED display.",
    "discountPercentage": 36,
    "rating": 4.7,
    "stock": 119
  },
  {
    "id": 396,
    "title": "Apple Fenix 7",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 449,
    "thumbnail": "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Apple watch with AMOLED display.",
    "discountPercentage": 17,
    "rating": 4.1,
    "stock": 356
  },
  {
    "id": 397,
    "title": "Samsung GTR 4",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 269,
    "thumbnail": "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Samsung watch with AMOLED display.",
    "discountPercentage": 38,
    "rating": 4.7,
    "stock": 332
  },
  {
    "id": 398,
    "title": "boAt Venu 3",
    "brand": "boAt",
    "category": "smartwatches",
    "price": 308,
    "thumbnail": "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking boAt watch with AMOLED display.",
    "discountPercentage": 38,
    "rating": 5.0,
    "stock": 204
  },
  {
    "id": 399,
    "title": "Fitbit Venu 3",
    "brand": "Fitbit",
    "category": "smartwatches",
    "price": 418,
    "thumbnail": "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking Fitbit watch with AMOLED display.",
    "discountPercentage": 8,
    "rating": 4.1,
    "stock": 169
  },
  {
    "id": 400,
    "title": "boAt Venu 3",
    "brand": "boAt",
    "category": "smartwatches",
    "price": 154,
    "thumbnail": "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg"
    ],
    "description": "Smart fitness tracking boAt watch with AMOLED display.",
    "discountPercentage": 22,
    "rating": 4.6,
    "stock": 227
  }
]

export async function getCatalogProducts() {
  return customProducts
}

export async function getProducts(req: Request, res: Response) {
  // We can add simple pagination here if requested, or return all and let frontend paginate.
  // We'll return all, but we could accept page/limit if we want to change frontend.
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
