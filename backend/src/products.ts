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
    "title": "iPhone 15 Pro Max - 128GB, Phantom Black",
    "brand": "Apple",
    "category": "smartphones",
    "price": 1199,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg"
    ],
    "description": "Premium Apple smartphone with incredible features. Model variant: 128GB, Phantom Black",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 2,
    "title": "iPhone 15 Pro Max - 256GB, Phantom Black",
    "brand": "Apple",
    "category": "smartphones",
    "price": 1299,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg"
    ],
    "description": "Premium Apple smartphone with incredible features. Model variant: 256GB, Phantom Black",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 3,
    "title": "iPhone 15 Pro Max - 512GB, Phantom Black",
    "brand": "Apple",
    "category": "smartphones",
    "price": 1449,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg"
    ],
    "description": "Premium Apple smartphone with incredible features. Model variant: 512GB, Phantom Black",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 4,
    "title": "iPhone 15 Pro Max - 128GB, Titanium Blue",
    "brand": "Apple",
    "category": "smartphones",
    "price": 1199,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg"
    ],
    "description": "Premium Apple smartphone with incredible features. Model variant: 128GB, Titanium Blue",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 5,
    "title": "iPhone 15 Pro Max - 256GB, Titanium Blue",
    "brand": "Apple",
    "category": "smartphones",
    "price": 1299,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg"
    ],
    "description": "Premium Apple smartphone with incredible features. Model variant: 256GB, Titanium Blue",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 6,
    "title": "iPhone 15 Pro Max - 512GB, Titanium Blue",
    "brand": "Apple",
    "category": "smartphones",
    "price": 1449,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg"
    ],
    "description": "Premium Apple smartphone with incredible features. Model variant: 512GB, Titanium Blue",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 7,
    "title": "iPhone 15 Pro Max - 128GB, Snow White",
    "brand": "Apple",
    "category": "smartphones",
    "price": 1199,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg"
    ],
    "description": "Premium Apple smartphone with incredible features. Model variant: 128GB, Snow White",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 8,
    "title": "iPhone 15 Pro Max - 256GB, Snow White",
    "brand": "Apple",
    "category": "smartphones",
    "price": 1299,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg"
    ],
    "description": "Premium Apple smartphone with incredible features. Model variant: 256GB, Snow White",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 9,
    "title": "iPhone 15 Pro Max - 512GB, Snow White",
    "brand": "Apple",
    "category": "smartphones",
    "price": 1449,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg"
    ],
    "description": "Premium Apple smartphone with incredible features. Model variant: 512GB, Snow White",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 10,
    "title": "Galaxy S24 Ultra - 128GB, Phantom Black",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 1299,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg"
    ],
    "description": "Premium Samsung smartphone with incredible features. Model variant: 128GB, Phantom Black",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 11,
    "title": "Galaxy S24 Ultra - 256GB, Phantom Black",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 1399,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg"
    ],
    "description": "Premium Samsung smartphone with incredible features. Model variant: 256GB, Phantom Black",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 12,
    "title": "Galaxy S24 Ultra - 512GB, Phantom Black",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 1549,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg"
    ],
    "description": "Premium Samsung smartphone with incredible features. Model variant: 512GB, Phantom Black",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 13,
    "title": "Galaxy S24 Ultra - 128GB, Titanium Blue",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 1299,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg"
    ],
    "description": "Premium Samsung smartphone with incredible features. Model variant: 128GB, Titanium Blue",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 14,
    "title": "Galaxy S24 Ultra - 256GB, Titanium Blue",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 1399,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg"
    ],
    "description": "Premium Samsung smartphone with incredible features. Model variant: 256GB, Titanium Blue",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 15,
    "title": "Galaxy S24 Ultra - 512GB, Titanium Blue",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 1549,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg"
    ],
    "description": "Premium Samsung smartphone with incredible features. Model variant: 512GB, Titanium Blue",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 16,
    "title": "Galaxy S24 Ultra - 128GB, Snow White",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 1299,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg"
    ],
    "description": "Premium Samsung smartphone with incredible features. Model variant: 128GB, Snow White",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 17,
    "title": "Galaxy S24 Ultra - 256GB, Snow White",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 1399,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg"
    ],
    "description": "Premium Samsung smartphone with incredible features. Model variant: 256GB, Snow White",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 18,
    "title": "Galaxy S24 Ultra - 512GB, Snow White",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 1549,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg"
    ],
    "description": "Premium Samsung smartphone with incredible features. Model variant: 512GB, Snow White",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 19,
    "title": "Pixel 8 Pro - 128GB, Phantom Black",
    "brand": "Google",
    "category": "smartphones",
    "price": 999,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg"
    ],
    "description": "Premium Google smartphone with incredible features. Model variant: 128GB, Phantom Black",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 20,
    "title": "Pixel 8 Pro - 256GB, Phantom Black",
    "brand": "Google",
    "category": "smartphones",
    "price": 1099,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg"
    ],
    "description": "Premium Google smartphone with incredible features. Model variant: 256GB, Phantom Black",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 21,
    "title": "Pixel 8 Pro - 512GB, Phantom Black",
    "brand": "Google",
    "category": "smartphones",
    "price": 1249,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg"
    ],
    "description": "Premium Google smartphone with incredible features. Model variant: 512GB, Phantom Black",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 22,
    "title": "Pixel 8 Pro - 128GB, Titanium Blue",
    "brand": "Google",
    "category": "smartphones",
    "price": 999,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg"
    ],
    "description": "Premium Google smartphone with incredible features. Model variant: 128GB, Titanium Blue",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 23,
    "title": "Pixel 8 Pro - 256GB, Titanium Blue",
    "brand": "Google",
    "category": "smartphones",
    "price": 1099,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg"
    ],
    "description": "Premium Google smartphone with incredible features. Model variant: 256GB, Titanium Blue",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 24,
    "title": "Pixel 8 Pro - 512GB, Titanium Blue",
    "brand": "Google",
    "category": "smartphones",
    "price": 1249,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg"
    ],
    "description": "Premium Google smartphone with incredible features. Model variant: 512GB, Titanium Blue",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 25,
    "title": "Pixel 8 Pro - 128GB, Snow White",
    "brand": "Google",
    "category": "smartphones",
    "price": 999,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg"
    ],
    "description": "Premium Google smartphone with incredible features. Model variant: 128GB, Snow White",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 26,
    "title": "Pixel 8 Pro - 256GB, Snow White",
    "brand": "Google",
    "category": "smartphones",
    "price": 1099,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg"
    ],
    "description": "Premium Google smartphone with incredible features. Model variant: 256GB, Snow White",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 27,
    "title": "Pixel 8 Pro - 512GB, Snow White",
    "brand": "Google",
    "category": "smartphones",
    "price": 1249,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg"
    ],
    "description": "Premium Google smartphone with incredible features. Model variant: 512GB, Snow White",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 28,
    "title": "12 - 128GB, Phantom Black",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 799,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg"
    ],
    "description": "Premium OnePlus smartphone with incredible features. Model variant: 128GB, Phantom Black",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 29,
    "title": "12 - 256GB, Phantom Black",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 899,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg"
    ],
    "description": "Premium OnePlus smartphone with incredible features. Model variant: 256GB, Phantom Black",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 30,
    "title": "12 - 512GB, Phantom Black",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 1049,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg"
    ],
    "description": "Premium OnePlus smartphone with incredible features. Model variant: 512GB, Phantom Black",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 31,
    "title": "12 - 128GB, Titanium Blue",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 799,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg"
    ],
    "description": "Premium OnePlus smartphone with incredible features. Model variant: 128GB, Titanium Blue",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 32,
    "title": "12 - 256GB, Titanium Blue",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 899,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg"
    ],
    "description": "Premium OnePlus smartphone with incredible features. Model variant: 256GB, Titanium Blue",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 33,
    "title": "12 - 512GB, Titanium Blue",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 1049,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg"
    ],
    "description": "Premium OnePlus smartphone with incredible features. Model variant: 512GB, Titanium Blue",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 34,
    "title": "12 - 128GB, Snow White",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 799,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg"
    ],
    "description": "Premium OnePlus smartphone with incredible features. Model variant: 128GB, Snow White",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 35,
    "title": "12 - 256GB, Snow White",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 899,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg"
    ],
    "description": "Premium OnePlus smartphone with incredible features. Model variant: 256GB, Snow White",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 36,
    "title": "12 - 512GB, Snow White",
    "brand": "OnePlus",
    "category": "smartphones",
    "price": 1049,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg"
    ],
    "description": "Premium OnePlus smartphone with incredible features. Model variant: 512GB, Snow White",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 37,
    "title": "14 Ultra - 128GB, Phantom Black",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 1099,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg"
    ],
    "description": "Premium Xiaomi smartphone with incredible features. Model variant: 128GB, Phantom Black",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 38,
    "title": "14 Ultra - 256GB, Phantom Black",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 1199,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg"
    ],
    "description": "Premium Xiaomi smartphone with incredible features. Model variant: 256GB, Phantom Black",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 39,
    "title": "14 Ultra - 512GB, Phantom Black",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 1349,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg"
    ],
    "description": "Premium Xiaomi smartphone with incredible features. Model variant: 512GB, Phantom Black",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 40,
    "title": "14 Ultra - 128GB, Titanium Blue",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 1099,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg"
    ],
    "description": "Premium Xiaomi smartphone with incredible features. Model variant: 128GB, Titanium Blue",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 41,
    "title": "14 Ultra - 256GB, Titanium Blue",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 1199,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg"
    ],
    "description": "Premium Xiaomi smartphone with incredible features. Model variant: 256GB, Titanium Blue",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 42,
    "title": "14 Ultra - 512GB, Titanium Blue",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 1349,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg"
    ],
    "description": "Premium Xiaomi smartphone with incredible features. Model variant: 512GB, Titanium Blue",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 43,
    "title": "14 Ultra - 128GB, Snow White",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 1099,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg"
    ],
    "description": "Premium Xiaomi smartphone with incredible features. Model variant: 128GB, Snow White",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 44,
    "title": "14 Ultra - 256GB, Snow White",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 1199,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg"
    ],
    "description": "Premium Xiaomi smartphone with incredible features. Model variant: 256GB, Snow White",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 45,
    "title": "14 Ultra - 512GB, Snow White",
    "brand": "Xiaomi",
    "category": "smartphones",
    "price": 1349,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg"
    ],
    "description": "Premium Xiaomi smartphone with incredible features. Model variant: 512GB, Snow White",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 46,
    "title": "Xperia 1 V - 128GB, Phantom Black",
    "brand": "Sony",
    "category": "smartphones",
    "price": 1399,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg"
    ],
    "description": "Premium Sony smartphone with incredible features. Model variant: 128GB, Phantom Black",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 47,
    "title": "Xperia 1 V - 256GB, Phantom Black",
    "brand": "Sony",
    "category": "smartphones",
    "price": 1499,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg"
    ],
    "description": "Premium Sony smartphone with incredible features. Model variant: 256GB, Phantom Black",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 48,
    "title": "Xperia 1 V - 512GB, Phantom Black",
    "brand": "Sony",
    "category": "smartphones",
    "price": 1649,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg"
    ],
    "description": "Premium Sony smartphone with incredible features. Model variant: 512GB, Phantom Black",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 49,
    "title": "Xperia 1 V - 128GB, Titanium Blue",
    "brand": "Sony",
    "category": "smartphones",
    "price": 1399,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg"
    ],
    "description": "Premium Sony smartphone with incredible features. Model variant: 128GB, Titanium Blue",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 50,
    "title": "Xperia 1 V - 256GB, Titanium Blue",
    "brand": "Sony",
    "category": "smartphones",
    "price": 1499,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg"
    ],
    "description": "Premium Sony smartphone with incredible features. Model variant: 256GB, Titanium Blue",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 51,
    "title": "Xperia 1 V - 512GB, Titanium Blue",
    "brand": "Sony",
    "category": "smartphones",
    "price": 1649,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg"
    ],
    "description": "Premium Sony smartphone with incredible features. Model variant: 512GB, Titanium Blue",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 52,
    "title": "Xperia 1 V - 128GB, Snow White",
    "brand": "Sony",
    "category": "smartphones",
    "price": 1399,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg"
    ],
    "description": "Premium Sony smartphone with incredible features. Model variant: 128GB, Snow White",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 53,
    "title": "Xperia 1 V - 256GB, Snow White",
    "brand": "Sony",
    "category": "smartphones",
    "price": 1499,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg"
    ],
    "description": "Premium Sony smartphone with incredible features. Model variant: 256GB, Snow White",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 54,
    "title": "Xperia 1 V - 512GB, Snow White",
    "brand": "Sony",
    "category": "smartphones",
    "price": 1649,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg"
    ],
    "description": "Premium Sony smartphone with incredible features. Model variant: 512GB, Snow White",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 55,
    "title": "Galaxy Z Fold 5 - 128GB, Phantom Black",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 1799,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg"
    ],
    "description": "Premium Samsung smartphone with incredible features. Model variant: 128GB, Phantom Black",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 56,
    "title": "Galaxy Z Fold 5 - 256GB, Phantom Black",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 1899,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg"
    ],
    "description": "Premium Samsung smartphone with incredible features. Model variant: 256GB, Phantom Black",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 57,
    "title": "Galaxy Z Fold 5 - 512GB, Phantom Black",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 2049,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg"
    ],
    "description": "Premium Samsung smartphone with incredible features. Model variant: 512GB, Phantom Black",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 58,
    "title": "Galaxy Z Fold 5 - 128GB, Titanium Blue",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 1799,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg"
    ],
    "description": "Premium Samsung smartphone with incredible features. Model variant: 128GB, Titanium Blue",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 59,
    "title": "Galaxy Z Fold 5 - 256GB, Titanium Blue",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 1899,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg"
    ],
    "description": "Premium Samsung smartphone with incredible features. Model variant: 256GB, Titanium Blue",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 60,
    "title": "Galaxy Z Fold 5 - 512GB, Titanium Blue",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 2049,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg"
    ],
    "description": "Premium Samsung smartphone with incredible features. Model variant: 512GB, Titanium Blue",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 61,
    "title": "Galaxy Z Fold 5 - 128GB, Snow White",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 1799,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg"
    ],
    "description": "Premium Samsung smartphone with incredible features. Model variant: 128GB, Snow White",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 62,
    "title": "Galaxy Z Fold 5 - 256GB, Snow White",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 1899,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg"
    ],
    "description": "Premium Samsung smartphone with incredible features. Model variant: 256GB, Snow White",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 63,
    "title": "Galaxy Z Fold 5 - 512GB, Snow White",
    "brand": "Samsung",
    "category": "smartphones",
    "price": 2049,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg"
    ],
    "description": "Premium Samsung smartphone with incredible features. Model variant: 512GB, Snow White",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 64,
    "title": "Phone (2) - 128GB, Phantom Black",
    "brand": "Nothing",
    "category": "smartphones",
    "price": 599,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg"
    ],
    "description": "Premium Nothing smartphone with incredible features. Model variant: 128GB, Phantom Black",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 65,
    "title": "Phone (2) - 256GB, Phantom Black",
    "brand": "Nothing",
    "category": "smartphones",
    "price": 699,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg"
    ],
    "description": "Premium Nothing smartphone with incredible features. Model variant: 256GB, Phantom Black",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 66,
    "title": "Phone (2) - 512GB, Phantom Black",
    "brand": "Nothing",
    "category": "smartphones",
    "price": 849,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg"
    ],
    "description": "Premium Nothing smartphone with incredible features. Model variant: 512GB, Phantom Black",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 67,
    "title": "Phone (2) - 128GB, Titanium Blue",
    "brand": "Nothing",
    "category": "smartphones",
    "price": 599,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg"
    ],
    "description": "Premium Nothing smartphone with incredible features. Model variant: 128GB, Titanium Blue",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 68,
    "title": "Phone (2) - 256GB, Titanium Blue",
    "brand": "Nothing",
    "category": "smartphones",
    "price": 699,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg"
    ],
    "description": "Premium Nothing smartphone with incredible features. Model variant: 256GB, Titanium Blue",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 69,
    "title": "Phone (2) - 512GB, Titanium Blue",
    "brand": "Nothing",
    "category": "smartphones",
    "price": 849,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg"
    ],
    "description": "Premium Nothing smartphone with incredible features. Model variant: 512GB, Titanium Blue",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 70,
    "title": "Phone (2) - 128GB, Snow White",
    "brand": "Nothing",
    "category": "smartphones",
    "price": 599,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg"
    ],
    "description": "Premium Nothing smartphone with incredible features. Model variant: 128GB, Snow White",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 71,
    "title": "Phone (2) - 256GB, Snow White",
    "brand": "Nothing",
    "category": "smartphones",
    "price": 699,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg"
    ],
    "description": "Premium Nothing smartphone with incredible features. Model variant: 256GB, Snow White",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 72,
    "title": "Phone (2) - 512GB, Snow White",
    "brand": "Nothing",
    "category": "smartphones",
    "price": 849,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg"
    ],
    "description": "Premium Nothing smartphone with incredible features. Model variant: 512GB, Snow White",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 73,
    "title": "ROG Phone 8 Pro - 128GB, Phantom Black",
    "brand": "Asus",
    "category": "smartphones",
    "price": 1199,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg"
    ],
    "description": "Premium Asus smartphone with incredible features. Model variant: 128GB, Phantom Black",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 74,
    "title": "ROG Phone 8 Pro - 256GB, Phantom Black",
    "brand": "Asus",
    "category": "smartphones",
    "price": 1299,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg"
    ],
    "description": "Premium Asus smartphone with incredible features. Model variant: 256GB, Phantom Black",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 75,
    "title": "ROG Phone 8 Pro - 512GB, Phantom Black",
    "brand": "Asus",
    "category": "smartphones",
    "price": 1449,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg"
    ],
    "description": "Premium Asus smartphone with incredible features. Model variant: 512GB, Phantom Black",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 76,
    "title": "ROG Phone 8 Pro - 128GB, Titanium Blue",
    "brand": "Asus",
    "category": "smartphones",
    "price": 1199,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg"
    ],
    "description": "Premium Asus smartphone with incredible features. Model variant: 128GB, Titanium Blue",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 77,
    "title": "ROG Phone 8 Pro - 256GB, Titanium Blue",
    "brand": "Asus",
    "category": "smartphones",
    "price": 1299,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg"
    ],
    "description": "Premium Asus smartphone with incredible features. Model variant: 256GB, Titanium Blue",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 78,
    "title": "ROG Phone 8 Pro - 512GB, Titanium Blue",
    "brand": "Asus",
    "category": "smartphones",
    "price": 1449,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg"
    ],
    "description": "Premium Asus smartphone with incredible features. Model variant: 512GB, Titanium Blue",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 79,
    "title": "ROG Phone 8 Pro - 128GB, Snow White",
    "brand": "Asus",
    "category": "smartphones",
    "price": 1199,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg"
    ],
    "description": "Premium Asus smartphone with incredible features. Model variant: 128GB, Snow White",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 80,
    "title": "ROG Phone 8 Pro - 256GB, Snow White",
    "brand": "Asus",
    "category": "smartphones",
    "price": 1299,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg"
    ],
    "description": "Premium Asus smartphone with incredible features. Model variant: 256GB, Snow White",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 81,
    "title": "ROG Phone 8 Pro - 512GB, Snow White",
    "brand": "Asus",
    "category": "smartphones",
    "price": 1449,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg"
    ],
    "description": "Premium Asus smartphone with incredible features. Model variant: 512GB, Snow White",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 82,
    "title": "Edge 50 Pro - 128GB, Phantom Black",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 699,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg"
    ],
    "description": "Premium Motorola smartphone with incredible features. Model variant: 128GB, Phantom Black",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 83,
    "title": "Edge 50 Pro - 256GB, Phantom Black",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 799,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg"
    ],
    "description": "Premium Motorola smartphone with incredible features. Model variant: 256GB, Phantom Black",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 84,
    "title": "Edge 50 Pro - 512GB, Phantom Black",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 949,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg"
    ],
    "description": "Premium Motorola smartphone with incredible features. Model variant: 512GB, Phantom Black",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 85,
    "title": "Edge 50 Pro - 128GB, Titanium Blue",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 699,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg"
    ],
    "description": "Premium Motorola smartphone with incredible features. Model variant: 128GB, Titanium Blue",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 86,
    "title": "Edge 50 Pro - 256GB, Titanium Blue",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 799,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg"
    ],
    "description": "Premium Motorola smartphone with incredible features. Model variant: 256GB, Titanium Blue",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 87,
    "title": "Edge 50 Pro - 512GB, Titanium Blue",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 949,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg"
    ],
    "description": "Premium Motorola smartphone with incredible features. Model variant: 512GB, Titanium Blue",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 88,
    "title": "Edge 50 Pro - 128GB, Snow White",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 699,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg"
    ],
    "description": "Premium Motorola smartphone with incredible features. Model variant: 128GB, Snow White",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 89,
    "title": "Edge 50 Pro - 256GB, Snow White",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 799,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg"
    ],
    "description": "Premium Motorola smartphone with incredible features. Model variant: 256GB, Snow White",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 90,
    "title": "Edge 50 Pro - 512GB, Snow White",
    "brand": "Motorola",
    "category": "smartphones",
    "price": 949,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg"
    ],
    "description": "Premium Motorola smartphone with incredible features. Model variant: 512GB, Snow White",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 91,
    "title": "X100 Pro - 128GB, Phantom Black",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 899,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg"
    ],
    "description": "Premium Vivo smartphone with incredible features. Model variant: 128GB, Phantom Black",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 92,
    "title": "X100 Pro - 256GB, Phantom Black",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 999,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg"
    ],
    "description": "Premium Vivo smartphone with incredible features. Model variant: 256GB, Phantom Black",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 93,
    "title": "X100 Pro - 512GB, Phantom Black",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 1149,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg"
    ],
    "description": "Premium Vivo smartphone with incredible features. Model variant: 512GB, Phantom Black",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 94,
    "title": "X100 Pro - 128GB, Titanium Blue",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 899,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg"
    ],
    "description": "Premium Vivo smartphone with incredible features. Model variant: 128GB, Titanium Blue",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 95,
    "title": "X100 Pro - 256GB, Titanium Blue",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 999,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg"
    ],
    "description": "Premium Vivo smartphone with incredible features. Model variant: 256GB, Titanium Blue",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 96,
    "title": "X100 Pro - 512GB, Titanium Blue",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 1149,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg"
    ],
    "description": "Premium Vivo smartphone with incredible features. Model variant: 512GB, Titanium Blue",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 97,
    "title": "X100 Pro - 128GB, Snow White",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 899,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg"
    ],
    "description": "Premium Vivo smartphone with incredible features. Model variant: 128GB, Snow White",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 98,
    "title": "X100 Pro - 256GB, Snow White",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 999,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg"
    ],
    "description": "Premium Vivo smartphone with incredible features. Model variant: 256GB, Snow White",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 99,
    "title": "X100 Pro - 512GB, Snow White",
    "brand": "Vivo",
    "category": "smartphones",
    "price": 1149,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg"
    ],
    "description": "Premium Vivo smartphone with incredible features. Model variant: 512GB, Snow White",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 100,
    "title": "12 Pro+ - 128GB, Phantom Black",
    "brand": "Realme",
    "category": "smartphones",
    "price": 499,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg"
    ],
    "description": "Premium Realme smartphone with incredible features. Model variant: 128GB, Phantom Black",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 101,
    "title": "12 Pro+ - 256GB, Phantom Black",
    "brand": "Realme",
    "category": "smartphones",
    "price": 599,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg"
    ],
    "description": "Premium Realme smartphone with incredible features. Model variant: 256GB, Phantom Black",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 102,
    "title": "12 Pro+ - 512GB, Phantom Black",
    "brand": "Realme",
    "category": "smartphones",
    "price": 749,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg"
    ],
    "description": "Premium Realme smartphone with incredible features. Model variant: 512GB, Phantom Black",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 103,
    "title": "12 Pro+ - 128GB, Titanium Blue",
    "brand": "Realme",
    "category": "smartphones",
    "price": 499,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg"
    ],
    "description": "Premium Realme smartphone with incredible features. Model variant: 128GB, Titanium Blue",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 104,
    "title": "12 Pro+ - 256GB, Titanium Blue",
    "brand": "Realme",
    "category": "smartphones",
    "price": 599,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg"
    ],
    "description": "Premium Realme smartphone with incredible features. Model variant: 256GB, Titanium Blue",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 105,
    "title": "12 Pro+ - 512GB, Titanium Blue",
    "brand": "Realme",
    "category": "smartphones",
    "price": 749,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg"
    ],
    "description": "Premium Realme smartphone with incredible features. Model variant: 512GB, Titanium Blue",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 106,
    "title": "12 Pro+ - 128GB, Snow White",
    "brand": "Realme",
    "category": "smartphones",
    "price": 499,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg"
    ],
    "description": "Premium Realme smartphone with incredible features. Model variant: 128GB, Snow White",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 107,
    "title": "12 Pro+ - 256GB, Snow White",
    "brand": "Realme",
    "category": "smartphones",
    "price": 599,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg"
    ],
    "description": "Premium Realme smartphone with incredible features. Model variant: 256GB, Snow White",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 108,
    "title": "12 Pro+ - 512GB, Snow White",
    "brand": "Realme",
    "category": "smartphones",
    "price": 749,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg"
    ],
    "description": "Premium Realme smartphone with incredible features. Model variant: 512GB, Snow White",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 109,
    "title": "MacBook Pro 16 (M3) - 16GB RAM, 512GB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 2499,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 16GB RAM, 512GB SSD",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 110,
    "title": "MacBook Pro 16 (M3) - 32GB RAM, 512GB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 2699,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 32GB RAM, 512GB SSD",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 111,
    "title": "MacBook Pro 16 (M3) - 16GB RAM, 1TB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 2699,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 16GB RAM, 1TB SSD",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 112,
    "title": "MacBook Pro 16 (M3) - 32GB RAM, 1TB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 2899,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 32GB RAM, 1TB SSD",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 113,
    "title": "MacBook Pro 16 (M3) - 64GB RAM, 1TB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 3299,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 64GB RAM, 1TB SSD",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 114,
    "title": "MacBook Pro 16 (M3) - 16GB RAM, 2TB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 3099,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 16GB RAM, 2TB SSD",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 115,
    "title": "MacBook Pro 16 (M3) - 32GB RAM, 2TB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 3299,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 32GB RAM, 2TB SSD",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 116,
    "title": "MacBook Pro 16 (M3) - 64GB RAM, 2TB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 3699,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 64GB RAM, 2TB SSD",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 117,
    "title": "MacBook Pro 16 (M3) - 32GB RAM, 4TB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 3899,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 32GB RAM, 4TB SSD",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 118,
    "title": "MacBook Pro 16 (M3) - 64GB RAM, 4TB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 4299,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 64GB RAM, 4TB SSD",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 119,
    "title": "XPS 14 - 16GB RAM, 512GB SSD",
    "brand": "Dell",
    "category": "laptops",
    "price": 1699,
    "thumbnail": "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536",
    "images": [
      "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536"
    ],
    "description": "Premium Dell laptop with incredible features. Model variant: 16GB RAM, 512GB SSD",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 120,
    "title": "XPS 14 - 32GB RAM, 512GB SSD",
    "brand": "Dell",
    "category": "laptops",
    "price": 1899,
    "thumbnail": "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536",
    "images": [
      "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536"
    ],
    "description": "Premium Dell laptop with incredible features. Model variant: 32GB RAM, 512GB SSD",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 121,
    "title": "XPS 14 - 16GB RAM, 1TB SSD",
    "brand": "Dell",
    "category": "laptops",
    "price": 1899,
    "thumbnail": "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536",
    "images": [
      "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536"
    ],
    "description": "Premium Dell laptop with incredible features. Model variant: 16GB RAM, 1TB SSD",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 122,
    "title": "XPS 14 - 32GB RAM, 1TB SSD",
    "brand": "Dell",
    "category": "laptops",
    "price": 2099,
    "thumbnail": "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536",
    "images": [
      "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536"
    ],
    "description": "Premium Dell laptop with incredible features. Model variant: 32GB RAM, 1TB SSD",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 123,
    "title": "XPS 14 - 64GB RAM, 1TB SSD",
    "brand": "Dell",
    "category": "laptops",
    "price": 2499,
    "thumbnail": "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536",
    "images": [
      "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536"
    ],
    "description": "Premium Dell laptop with incredible features. Model variant: 64GB RAM, 1TB SSD",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 124,
    "title": "XPS 14 - 16GB RAM, 2TB SSD",
    "brand": "Dell",
    "category": "laptops",
    "price": 2299,
    "thumbnail": "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536",
    "images": [
      "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536"
    ],
    "description": "Premium Dell laptop with incredible features. Model variant: 16GB RAM, 2TB SSD",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 125,
    "title": "XPS 14 - 32GB RAM, 2TB SSD",
    "brand": "Dell",
    "category": "laptops",
    "price": 2499,
    "thumbnail": "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536",
    "images": [
      "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536"
    ],
    "description": "Premium Dell laptop with incredible features. Model variant: 32GB RAM, 2TB SSD",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 126,
    "title": "XPS 14 - 64GB RAM, 2TB SSD",
    "brand": "Dell",
    "category": "laptops",
    "price": 2899,
    "thumbnail": "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536",
    "images": [
      "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536"
    ],
    "description": "Premium Dell laptop with incredible features. Model variant: 64GB RAM, 2TB SSD",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 127,
    "title": "XPS 14 - 32GB RAM, 4TB SSD",
    "brand": "Dell",
    "category": "laptops",
    "price": 3099,
    "thumbnail": "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536",
    "images": [
      "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536"
    ],
    "description": "Premium Dell laptop with incredible features. Model variant: 32GB RAM, 4TB SSD",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 128,
    "title": "XPS 14 - 64GB RAM, 4TB SSD",
    "brand": "Dell",
    "category": "laptops",
    "price": 3499,
    "thumbnail": "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536",
    "images": [
      "https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536"
    ],
    "description": "Premium Dell laptop with incredible features. Model variant: 64GB RAM, 4TB SSD",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 129,
    "title": "ThinkPad X1 Carbon - 16GB RAM, 512GB SSD",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 1899,
    "thumbnail": "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png",
    "images": [
      "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png"
    ],
    "description": "Premium Lenovo laptop with incredible features. Model variant: 16GB RAM, 512GB SSD",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 130,
    "title": "ThinkPad X1 Carbon - 32GB RAM, 512GB SSD",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 2099,
    "thumbnail": "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png",
    "images": [
      "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png"
    ],
    "description": "Premium Lenovo laptop with incredible features. Model variant: 32GB RAM, 512GB SSD",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 131,
    "title": "ThinkPad X1 Carbon - 16GB RAM, 1TB SSD",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 2099,
    "thumbnail": "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png",
    "images": [
      "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png"
    ],
    "description": "Premium Lenovo laptop with incredible features. Model variant: 16GB RAM, 1TB SSD",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 132,
    "title": "ThinkPad X1 Carbon - 32GB RAM, 1TB SSD",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 2299,
    "thumbnail": "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png",
    "images": [
      "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png"
    ],
    "description": "Premium Lenovo laptop with incredible features. Model variant: 32GB RAM, 1TB SSD",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 133,
    "title": "ThinkPad X1 Carbon - 64GB RAM, 1TB SSD",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 2699,
    "thumbnail": "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png",
    "images": [
      "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png"
    ],
    "description": "Premium Lenovo laptop with incredible features. Model variant: 64GB RAM, 1TB SSD",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 134,
    "title": "ThinkPad X1 Carbon - 16GB RAM, 2TB SSD",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 2499,
    "thumbnail": "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png",
    "images": [
      "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png"
    ],
    "description": "Premium Lenovo laptop with incredible features. Model variant: 16GB RAM, 2TB SSD",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 135,
    "title": "ThinkPad X1 Carbon - 32GB RAM, 2TB SSD",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 2699,
    "thumbnail": "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png",
    "images": [
      "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png"
    ],
    "description": "Premium Lenovo laptop with incredible features. Model variant: 32GB RAM, 2TB SSD",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 136,
    "title": "ThinkPad X1 Carbon - 64GB RAM, 2TB SSD",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 3099,
    "thumbnail": "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png",
    "images": [
      "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png"
    ],
    "description": "Premium Lenovo laptop with incredible features. Model variant: 64GB RAM, 2TB SSD",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 137,
    "title": "ThinkPad X1 Carbon - 32GB RAM, 4TB SSD",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 3299,
    "thumbnail": "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png",
    "images": [
      "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png"
    ],
    "description": "Premium Lenovo laptop with incredible features. Model variant: 32GB RAM, 4TB SSD",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 138,
    "title": "ThinkPad X1 Carbon - 64GB RAM, 4TB SSD",
    "brand": "Lenovo",
    "category": "laptops",
    "price": 3699,
    "thumbnail": "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png",
    "images": [
      "https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png"
    ],
    "description": "Premium Lenovo laptop with incredible features. Model variant: 64GB RAM, 4TB SSD",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 139,
    "title": "ROG Zephyrus G14 - 16GB RAM, 512GB SSD",
    "brand": "Asus",
    "category": "laptops",
    "price": 1599,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250"
    ],
    "description": "Premium Asus laptop with incredible features. Model variant: 16GB RAM, 512GB SSD",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 140,
    "title": "ROG Zephyrus G14 - 32GB RAM, 512GB SSD",
    "brand": "Asus",
    "category": "laptops",
    "price": 1799,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250"
    ],
    "description": "Premium Asus laptop with incredible features. Model variant: 32GB RAM, 512GB SSD",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 141,
    "title": "ROG Zephyrus G14 - 16GB RAM, 1TB SSD",
    "brand": "Asus",
    "category": "laptops",
    "price": 1799,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250"
    ],
    "description": "Premium Asus laptop with incredible features. Model variant: 16GB RAM, 1TB SSD",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 142,
    "title": "ROG Zephyrus G14 - 32GB RAM, 1TB SSD",
    "brand": "Asus",
    "category": "laptops",
    "price": 1999,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250"
    ],
    "description": "Premium Asus laptop with incredible features. Model variant: 32GB RAM, 1TB SSD",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 143,
    "title": "ROG Zephyrus G14 - 64GB RAM, 1TB SSD",
    "brand": "Asus",
    "category": "laptops",
    "price": 2399,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250"
    ],
    "description": "Premium Asus laptop with incredible features. Model variant: 64GB RAM, 1TB SSD",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 144,
    "title": "ROG Zephyrus G14 - 16GB RAM, 2TB SSD",
    "brand": "Asus",
    "category": "laptops",
    "price": 2199,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250"
    ],
    "description": "Premium Asus laptop with incredible features. Model variant: 16GB RAM, 2TB SSD",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 145,
    "title": "ROG Zephyrus G14 - 32GB RAM, 2TB SSD",
    "brand": "Asus",
    "category": "laptops",
    "price": 2399,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250"
    ],
    "description": "Premium Asus laptop with incredible features. Model variant: 32GB RAM, 2TB SSD",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 146,
    "title": "ROG Zephyrus G14 - 64GB RAM, 2TB SSD",
    "brand": "Asus",
    "category": "laptops",
    "price": 2799,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250"
    ],
    "description": "Premium Asus laptop with incredible features. Model variant: 64GB RAM, 2TB SSD",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 147,
    "title": "ROG Zephyrus G14 - 32GB RAM, 4TB SSD",
    "brand": "Asus",
    "category": "laptops",
    "price": 2999,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250"
    ],
    "description": "Premium Asus laptop with incredible features. Model variant: 32GB RAM, 4TB SSD",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 148,
    "title": "ROG Zephyrus G14 - 64GB RAM, 4TB SSD",
    "brand": "Asus",
    "category": "laptops",
    "price": 3399,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250"
    ],
    "description": "Premium Asus laptop with incredible features. Model variant: 64GB RAM, 4TB SSD",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 149,
    "title": "MacBook Air 15 (M3) - 16GB RAM, 512GB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 1299,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 16GB RAM, 512GB SSD",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 150,
    "title": "MacBook Air 15 (M3) - 32GB RAM, 512GB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 1499,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 32GB RAM, 512GB SSD",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 151,
    "title": "MacBook Air 15 (M3) - 16GB RAM, 1TB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 1499,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 16GB RAM, 1TB SSD",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 152,
    "title": "MacBook Air 15 (M3) - 32GB RAM, 1TB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 1699,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 32GB RAM, 1TB SSD",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 153,
    "title": "MacBook Air 15 (M3) - 64GB RAM, 1TB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 2099,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 64GB RAM, 1TB SSD",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 154,
    "title": "MacBook Air 15 (M3) - 16GB RAM, 2TB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 1899,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 16GB RAM, 2TB SSD",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 155,
    "title": "MacBook Air 15 (M3) - 32GB RAM, 2TB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 2099,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 32GB RAM, 2TB SSD",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 156,
    "title": "MacBook Air 15 (M3) - 64GB RAM, 2TB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 2499,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 64GB RAM, 2TB SSD",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 157,
    "title": "MacBook Air 15 (M3) - 32GB RAM, 4TB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 2699,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 32GB RAM, 4TB SSD",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 158,
    "title": "MacBook Air 15 (M3) - 64GB RAM, 4TB SSD",
    "brand": "Apple",
    "category": "laptops",
    "price": 3099,
    "thumbnail": "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg",
    "images": [
      "https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg"
    ],
    "description": "Premium Apple laptop with incredible features. Model variant: 64GB RAM, 4TB SSD",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 159,
    "title": "Spectre x360 14 - 16GB RAM, 512GB SSD",
    "brand": "HP",
    "category": "laptops",
    "price": 1499,
    "thumbnail": "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png",
    "images": [
      "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png"
    ],
    "description": "Premium HP laptop with incredible features. Model variant: 16GB RAM, 512GB SSD",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 160,
    "title": "Spectre x360 14 - 32GB RAM, 512GB SSD",
    "brand": "HP",
    "category": "laptops",
    "price": 1699,
    "thumbnail": "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png",
    "images": [
      "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png"
    ],
    "description": "Premium HP laptop with incredible features. Model variant: 32GB RAM, 512GB SSD",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 161,
    "title": "Spectre x360 14 - 16GB RAM, 1TB SSD",
    "brand": "HP",
    "category": "laptops",
    "price": 1699,
    "thumbnail": "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png",
    "images": [
      "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png"
    ],
    "description": "Premium HP laptop with incredible features. Model variant: 16GB RAM, 1TB SSD",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 162,
    "title": "Spectre x360 14 - 32GB RAM, 1TB SSD",
    "brand": "HP",
    "category": "laptops",
    "price": 1899,
    "thumbnail": "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png",
    "images": [
      "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png"
    ],
    "description": "Premium HP laptop with incredible features. Model variant: 32GB RAM, 1TB SSD",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 163,
    "title": "Spectre x360 14 - 64GB RAM, 1TB SSD",
    "brand": "HP",
    "category": "laptops",
    "price": 2299,
    "thumbnail": "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png",
    "images": [
      "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png"
    ],
    "description": "Premium HP laptop with incredible features. Model variant: 64GB RAM, 1TB SSD",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 164,
    "title": "Spectre x360 14 - 16GB RAM, 2TB SSD",
    "brand": "HP",
    "category": "laptops",
    "price": 2099,
    "thumbnail": "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png",
    "images": [
      "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png"
    ],
    "description": "Premium HP laptop with incredible features. Model variant: 16GB RAM, 2TB SSD",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 165,
    "title": "Spectre x360 14 - 32GB RAM, 2TB SSD",
    "brand": "HP",
    "category": "laptops",
    "price": 2299,
    "thumbnail": "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png",
    "images": [
      "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png"
    ],
    "description": "Premium HP laptop with incredible features. Model variant: 32GB RAM, 2TB SSD",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 166,
    "title": "Spectre x360 14 - 64GB RAM, 2TB SSD",
    "brand": "HP",
    "category": "laptops",
    "price": 2699,
    "thumbnail": "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png",
    "images": [
      "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png"
    ],
    "description": "Premium HP laptop with incredible features. Model variant: 64GB RAM, 2TB SSD",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 167,
    "title": "Spectre x360 14 - 32GB RAM, 4TB SSD",
    "brand": "HP",
    "category": "laptops",
    "price": 2899,
    "thumbnail": "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png",
    "images": [
      "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png"
    ],
    "description": "Premium HP laptop with incredible features. Model variant: 32GB RAM, 4TB SSD",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 168,
    "title": "Spectre x360 14 - 64GB RAM, 4TB SSD",
    "brand": "HP",
    "category": "laptops",
    "price": 3299,
    "thumbnail": "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png",
    "images": [
      "https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png"
    ],
    "description": "Premium HP laptop with incredible features. Model variant: 64GB RAM, 4TB SSD",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 169,
    "title": "Blade 16 - 16GB RAM, 512GB SSD",
    "brand": "Razer",
    "category": "laptops",
    "price": 2999,
    "thumbnail": "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png",
    "images": [
      "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png"
    ],
    "description": "Premium Razer laptop with incredible features. Model variant: 16GB RAM, 512GB SSD",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 170,
    "title": "Blade 16 - 32GB RAM, 512GB SSD",
    "brand": "Razer",
    "category": "laptops",
    "price": 3199,
    "thumbnail": "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png",
    "images": [
      "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png"
    ],
    "description": "Premium Razer laptop with incredible features. Model variant: 32GB RAM, 512GB SSD",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 171,
    "title": "Blade 16 - 16GB RAM, 1TB SSD",
    "brand": "Razer",
    "category": "laptops",
    "price": 3199,
    "thumbnail": "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png",
    "images": [
      "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png"
    ],
    "description": "Premium Razer laptop with incredible features. Model variant: 16GB RAM, 1TB SSD",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 172,
    "title": "Blade 16 - 32GB RAM, 1TB SSD",
    "brand": "Razer",
    "category": "laptops",
    "price": 3399,
    "thumbnail": "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png",
    "images": [
      "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png"
    ],
    "description": "Premium Razer laptop with incredible features. Model variant: 32GB RAM, 1TB SSD",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 173,
    "title": "Blade 16 - 64GB RAM, 1TB SSD",
    "brand": "Razer",
    "category": "laptops",
    "price": 3799,
    "thumbnail": "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png",
    "images": [
      "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png"
    ],
    "description": "Premium Razer laptop with incredible features. Model variant: 64GB RAM, 1TB SSD",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 174,
    "title": "Blade 16 - 16GB RAM, 2TB SSD",
    "brand": "Razer",
    "category": "laptops",
    "price": 3599,
    "thumbnail": "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png",
    "images": [
      "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png"
    ],
    "description": "Premium Razer laptop with incredible features. Model variant: 16GB RAM, 2TB SSD",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 175,
    "title": "Blade 16 - 32GB RAM, 2TB SSD",
    "brand": "Razer",
    "category": "laptops",
    "price": 3799,
    "thumbnail": "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png",
    "images": [
      "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png"
    ],
    "description": "Premium Razer laptop with incredible features. Model variant: 32GB RAM, 2TB SSD",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 176,
    "title": "Blade 16 - 64GB RAM, 2TB SSD",
    "brand": "Razer",
    "category": "laptops",
    "price": 4199,
    "thumbnail": "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png",
    "images": [
      "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png"
    ],
    "description": "Premium Razer laptop with incredible features. Model variant: 64GB RAM, 2TB SSD",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 177,
    "title": "Blade 16 - 32GB RAM, 4TB SSD",
    "brand": "Razer",
    "category": "laptops",
    "price": 4399,
    "thumbnail": "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png",
    "images": [
      "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png"
    ],
    "description": "Premium Razer laptop with incredible features. Model variant: 32GB RAM, 4TB SSD",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 178,
    "title": "Blade 16 - 64GB RAM, 4TB SSD",
    "brand": "Razer",
    "category": "laptops",
    "price": 4799,
    "thumbnail": "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png",
    "images": [
      "https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png"
    ],
    "description": "Premium Razer laptop with incredible features. Model variant: 64GB RAM, 4TB SSD",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 179,
    "title": "Surface Laptop 7 - 16GB RAM, 512GB SSD",
    "brand": "Microsoft",
    "category": "laptops",
    "price": 1199,
    "thumbnail": "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a",
    "images": [
      "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a"
    ],
    "description": "Premium Microsoft laptop with incredible features. Model variant: 16GB RAM, 512GB SSD",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 180,
    "title": "Surface Laptop 7 - 32GB RAM, 512GB SSD",
    "brand": "Microsoft",
    "category": "laptops",
    "price": 1399,
    "thumbnail": "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a",
    "images": [
      "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a"
    ],
    "description": "Premium Microsoft laptop with incredible features. Model variant: 32GB RAM, 512GB SSD",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 181,
    "title": "Surface Laptop 7 - 16GB RAM, 1TB SSD",
    "brand": "Microsoft",
    "category": "laptops",
    "price": 1399,
    "thumbnail": "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a",
    "images": [
      "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a"
    ],
    "description": "Premium Microsoft laptop with incredible features. Model variant: 16GB RAM, 1TB SSD",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 182,
    "title": "Surface Laptop 7 - 32GB RAM, 1TB SSD",
    "brand": "Microsoft",
    "category": "laptops",
    "price": 1599,
    "thumbnail": "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a",
    "images": [
      "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a"
    ],
    "description": "Premium Microsoft laptop with incredible features. Model variant: 32GB RAM, 1TB SSD",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 183,
    "title": "Surface Laptop 7 - 64GB RAM, 1TB SSD",
    "brand": "Microsoft",
    "category": "laptops",
    "price": 1999,
    "thumbnail": "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a",
    "images": [
      "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a"
    ],
    "description": "Premium Microsoft laptop with incredible features. Model variant: 64GB RAM, 1TB SSD",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 184,
    "title": "Surface Laptop 7 - 16GB RAM, 2TB SSD",
    "brand": "Microsoft",
    "category": "laptops",
    "price": 1799,
    "thumbnail": "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a",
    "images": [
      "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a"
    ],
    "description": "Premium Microsoft laptop with incredible features. Model variant: 16GB RAM, 2TB SSD",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 185,
    "title": "Surface Laptop 7 - 32GB RAM, 2TB SSD",
    "brand": "Microsoft",
    "category": "laptops",
    "price": 1999,
    "thumbnail": "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a",
    "images": [
      "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a"
    ],
    "description": "Premium Microsoft laptop with incredible features. Model variant: 32GB RAM, 2TB SSD",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 186,
    "title": "Surface Laptop 7 - 64GB RAM, 2TB SSD",
    "brand": "Microsoft",
    "category": "laptops",
    "price": 2399,
    "thumbnail": "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a",
    "images": [
      "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a"
    ],
    "description": "Premium Microsoft laptop with incredible features. Model variant: 64GB RAM, 2TB SSD",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 187,
    "title": "Surface Laptop 7 - 32GB RAM, 4TB SSD",
    "brand": "Microsoft",
    "category": "laptops",
    "price": 2599,
    "thumbnail": "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a",
    "images": [
      "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a"
    ],
    "description": "Premium Microsoft laptop with incredible features. Model variant: 32GB RAM, 4TB SSD",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 188,
    "title": "Surface Laptop 7 - 64GB RAM, 4TB SSD",
    "brand": "Microsoft",
    "category": "laptops",
    "price": 2999,
    "thumbnail": "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a",
    "images": [
      "https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a"
    ],
    "description": "Premium Microsoft laptop with incredible features. Model variant: 64GB RAM, 4TB SSD",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 189,
    "title": "Gram 14 - 16GB RAM, 512GB SSD",
    "brand": "LG",
    "category": "laptops",
    "price": 1299,
    "thumbnail": "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg"
    ],
    "description": "Premium LG laptop with incredible features. Model variant: 16GB RAM, 512GB SSD",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 190,
    "title": "Gram 14 - 32GB RAM, 512GB SSD",
    "brand": "LG",
    "category": "laptops",
    "price": 1499,
    "thumbnail": "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg"
    ],
    "description": "Premium LG laptop with incredible features. Model variant: 32GB RAM, 512GB SSD",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 191,
    "title": "Gram 14 - 16GB RAM, 1TB SSD",
    "brand": "LG",
    "category": "laptops",
    "price": 1499,
    "thumbnail": "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg"
    ],
    "description": "Premium LG laptop with incredible features. Model variant: 16GB RAM, 1TB SSD",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 192,
    "title": "Gram 14 - 32GB RAM, 1TB SSD",
    "brand": "LG",
    "category": "laptops",
    "price": 1699,
    "thumbnail": "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg"
    ],
    "description": "Premium LG laptop with incredible features. Model variant: 32GB RAM, 1TB SSD",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 193,
    "title": "Gram 14 - 64GB RAM, 1TB SSD",
    "brand": "LG",
    "category": "laptops",
    "price": 2099,
    "thumbnail": "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg"
    ],
    "description": "Premium LG laptop with incredible features. Model variant: 64GB RAM, 1TB SSD",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 194,
    "title": "Gram 14 - 16GB RAM, 2TB SSD",
    "brand": "LG",
    "category": "laptops",
    "price": 1899,
    "thumbnail": "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg"
    ],
    "description": "Premium LG laptop with incredible features. Model variant: 16GB RAM, 2TB SSD",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 195,
    "title": "Gram 14 - 32GB RAM, 2TB SSD",
    "brand": "LG",
    "category": "laptops",
    "price": 2099,
    "thumbnail": "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg"
    ],
    "description": "Premium LG laptop with incredible features. Model variant: 32GB RAM, 2TB SSD",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 196,
    "title": "Gram 14 - 64GB RAM, 2TB SSD",
    "brand": "LG",
    "category": "laptops",
    "price": 2499,
    "thumbnail": "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg"
    ],
    "description": "Premium LG laptop with incredible features. Model variant: 64GB RAM, 2TB SSD",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 197,
    "title": "Gram 14 - 32GB RAM, 4TB SSD",
    "brand": "LG",
    "category": "laptops",
    "price": 2699,
    "thumbnail": "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg"
    ],
    "description": "Premium LG laptop with incredible features. Model variant: 32GB RAM, 4TB SSD",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 198,
    "title": "Gram 14 - 64GB RAM, 4TB SSD",
    "brand": "LG",
    "category": "laptops",
    "price": 3099,
    "thumbnail": "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg"
    ],
    "description": "Premium LG laptop with incredible features. Model variant: 64GB RAM, 4TB SSD",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 199,
    "title": "Zenbook S 13 OLED - 16GB RAM, 512GB SSD",
    "brand": "Acer",
    "category": "laptops",
    "price": 1099,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250"
    ],
    "description": "Premium Acer laptop with incredible features. Model variant: 16GB RAM, 512GB SSD",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 200,
    "title": "Zenbook S 13 OLED - 32GB RAM, 512GB SSD",
    "brand": "Acer",
    "category": "laptops",
    "price": 1299,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250"
    ],
    "description": "Premium Acer laptop with incredible features. Model variant: 32GB RAM, 512GB SSD",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 201,
    "title": "Zenbook S 13 OLED - 16GB RAM, 1TB SSD",
    "brand": "Acer",
    "category": "laptops",
    "price": 1299,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250"
    ],
    "description": "Premium Acer laptop with incredible features. Model variant: 16GB RAM, 1TB SSD",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 202,
    "title": "Zenbook S 13 OLED - 32GB RAM, 1TB SSD",
    "brand": "Acer",
    "category": "laptops",
    "price": 1499,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250"
    ],
    "description": "Premium Acer laptop with incredible features. Model variant: 32GB RAM, 1TB SSD",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 203,
    "title": "Zenbook S 13 OLED - 64GB RAM, 1TB SSD",
    "brand": "Acer",
    "category": "laptops",
    "price": 1899,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250"
    ],
    "description": "Premium Acer laptop with incredible features. Model variant: 64GB RAM, 1TB SSD",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 204,
    "title": "Zenbook S 13 OLED - 16GB RAM, 2TB SSD",
    "brand": "Acer",
    "category": "laptops",
    "price": 1699,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250"
    ],
    "description": "Premium Acer laptop with incredible features. Model variant: 16GB RAM, 2TB SSD",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 205,
    "title": "Zenbook S 13 OLED - 32GB RAM, 2TB SSD",
    "brand": "Acer",
    "category": "laptops",
    "price": 1899,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250"
    ],
    "description": "Premium Acer laptop with incredible features. Model variant: 32GB RAM, 2TB SSD",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 206,
    "title": "Zenbook S 13 OLED - 64GB RAM, 2TB SSD",
    "brand": "Acer",
    "category": "laptops",
    "price": 2299,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250"
    ],
    "description": "Premium Acer laptop with incredible features. Model variant: 64GB RAM, 2TB SSD",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 207,
    "title": "Zenbook S 13 OLED - 32GB RAM, 4TB SSD",
    "brand": "Acer",
    "category": "laptops",
    "price": 2499,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250"
    ],
    "description": "Premium Acer laptop with incredible features. Model variant: 32GB RAM, 4TB SSD",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 208,
    "title": "Zenbook S 13 OLED - 64GB RAM, 4TB SSD",
    "brand": "Acer",
    "category": "laptops",
    "price": 2899,
    "thumbnail": "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250",
    "images": [
      "https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250"
    ],
    "description": "Premium Acer laptop with incredible features. Model variant: 64GB RAM, 4TB SSD",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 209,
    "title": "WH-1000XM5 - Black",
    "brand": "Sony",
    "category": "headphones",
    "price": 398,
    "thumbnail": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sony headphone with incredible features. Model variant: Black",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 210,
    "title": "WH-1000XM5 - White",
    "brand": "Sony",
    "category": "headphones",
    "price": 398,
    "thumbnail": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sony headphone with incredible features. Model variant: White",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 211,
    "title": "WH-1000XM5 - Silver",
    "brand": "Sony",
    "category": "headphones",
    "price": 398,
    "thumbnail": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sony headphone with incredible features. Model variant: Silver",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 212,
    "title": "WH-1000XM5 - Midnight Blue",
    "brand": "Sony",
    "category": "headphones",
    "price": 398,
    "thumbnail": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sony headphone with incredible features. Model variant: Midnight Blue",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 213,
    "title": "WH-1000XM5 - Rose Gold",
    "brand": "Sony",
    "category": "headphones",
    "price": 418,
    "thumbnail": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sony headphone with incredible features. Model variant: Rose Gold",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 214,
    "title": "WH-1000XM5 - Graphite",
    "brand": "Sony",
    "category": "headphones",
    "price": 398,
    "thumbnail": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sony headphone with incredible features. Model variant: Graphite",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 215,
    "title": "WH-1000XM5 - Lunar Light",
    "brand": "Sony",
    "category": "headphones",
    "price": 398,
    "thumbnail": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sony headphone with incredible features. Model variant: Lunar Light",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 216,
    "title": "WH-1000XM5 - Matte Black",
    "brand": "Sony",
    "category": "headphones",
    "price": 398,
    "thumbnail": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sony headphone with incredible features. Model variant: Matte Black",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 217,
    "title": "WH-1000XM5 - Ivory",
    "brand": "Sony",
    "category": "headphones",
    "price": 398,
    "thumbnail": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sony headphone with incredible features. Model variant: Ivory",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 218,
    "title": "WH-1000XM5 - Sand",
    "brand": "Sony",
    "category": "headphones",
    "price": 398,
    "thumbnail": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sony headphone with incredible features. Model variant: Sand",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 219,
    "title": "WH-1000XM5 - Sage",
    "brand": "Sony",
    "category": "headphones",
    "price": 398,
    "thumbnail": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sony headphone with incredible features. Model variant: Sage",
    "discountPercentage": 15,
    "rating": 4.4,
    "stock": 40
  },
  {
    "id": 220,
    "title": "WH-1000XM5 - Navy",
    "brand": "Sony",
    "category": "headphones",
    "price": 398,
    "thumbnail": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sony headphone with incredible features. Model variant: Navy",
    "discountPercentage": 16,
    "rating": 4.5,
    "stock": 57
  },
  {
    "id": 221,
    "title": "WH-1000XM5 - Charcoal",
    "brand": "Sony",
    "category": "headphones",
    "price": 398,
    "thumbnail": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sony headphone with incredible features. Model variant: Charcoal",
    "discountPercentage": 17,
    "rating": 4.6,
    "stock": 74
  },
  {
    "id": 222,
    "title": "WH-1000XM5 - Mint",
    "brand": "Sony",
    "category": "headphones",
    "price": 398,
    "thumbnail": "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sony headphone with incredible features. Model variant: Mint",
    "discountPercentage": 18,
    "rating": 4.7,
    "stock": 91
  },
  {
    "id": 223,
    "title": "AirPods Pro (2nd Gen) - Black",
    "brand": "Apple",
    "category": "headphones",
    "price": 249,
    "thumbnail": "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Apple headphone with incredible features. Model variant: Black",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 224,
    "title": "AirPods Pro (2nd Gen) - White",
    "brand": "Apple",
    "category": "headphones",
    "price": 249,
    "thumbnail": "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Apple headphone with incredible features. Model variant: White",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 225,
    "title": "AirPods Pro (2nd Gen) - Silver",
    "brand": "Apple",
    "category": "headphones",
    "price": 249,
    "thumbnail": "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Apple headphone with incredible features. Model variant: Silver",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 226,
    "title": "AirPods Pro (2nd Gen) - Midnight Blue",
    "brand": "Apple",
    "category": "headphones",
    "price": 249,
    "thumbnail": "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Apple headphone with incredible features. Model variant: Midnight Blue",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 227,
    "title": "AirPods Pro (2nd Gen) - Rose Gold",
    "brand": "Apple",
    "category": "headphones",
    "price": 269,
    "thumbnail": "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Apple headphone with incredible features. Model variant: Rose Gold",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 228,
    "title": "AirPods Pro (2nd Gen) - Graphite",
    "brand": "Apple",
    "category": "headphones",
    "price": 249,
    "thumbnail": "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Apple headphone with incredible features. Model variant: Graphite",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 229,
    "title": "AirPods Pro (2nd Gen) - Lunar Light",
    "brand": "Apple",
    "category": "headphones",
    "price": 249,
    "thumbnail": "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Apple headphone with incredible features. Model variant: Lunar Light",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 230,
    "title": "AirPods Pro (2nd Gen) - Matte Black",
    "brand": "Apple",
    "category": "headphones",
    "price": 249,
    "thumbnail": "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Apple headphone with incredible features. Model variant: Matte Black",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 231,
    "title": "AirPods Pro (2nd Gen) - Ivory",
    "brand": "Apple",
    "category": "headphones",
    "price": 249,
    "thumbnail": "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Apple headphone with incredible features. Model variant: Ivory",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 232,
    "title": "AirPods Pro (2nd Gen) - Sand",
    "brand": "Apple",
    "category": "headphones",
    "price": 249,
    "thumbnail": "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Apple headphone with incredible features. Model variant: Sand",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 233,
    "title": "AirPods Pro (2nd Gen) - Sage",
    "brand": "Apple",
    "category": "headphones",
    "price": 249,
    "thumbnail": "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Apple headphone with incredible features. Model variant: Sage",
    "discountPercentage": 15,
    "rating": 4.4,
    "stock": 40
  },
  {
    "id": 234,
    "title": "AirPods Pro (2nd Gen) - Navy",
    "brand": "Apple",
    "category": "headphones",
    "price": 249,
    "thumbnail": "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Apple headphone with incredible features. Model variant: Navy",
    "discountPercentage": 16,
    "rating": 4.5,
    "stock": 57
  },
  {
    "id": 235,
    "title": "AirPods Pro (2nd Gen) - Charcoal",
    "brand": "Apple",
    "category": "headphones",
    "price": 249,
    "thumbnail": "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Apple headphone with incredible features. Model variant: Charcoal",
    "discountPercentage": 17,
    "rating": 4.6,
    "stock": 74
  },
  {
    "id": 236,
    "title": "AirPods Pro (2nd Gen) - Mint",
    "brand": "Apple",
    "category": "headphones",
    "price": 249,
    "thumbnail": "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Apple headphone with incredible features. Model variant: Mint",
    "discountPercentage": 18,
    "rating": 4.7,
    "stock": 91
  },
  {
    "id": 237,
    "title": "QuietComfort Ultra - Black",
    "brand": "Bose",
    "category": "headphones",
    "price": 429,
    "thumbnail": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Bose headphone with incredible features. Model variant: Black",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 238,
    "title": "QuietComfort Ultra - White",
    "brand": "Bose",
    "category": "headphones",
    "price": 429,
    "thumbnail": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Bose headphone with incredible features. Model variant: White",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 239,
    "title": "QuietComfort Ultra - Silver",
    "brand": "Bose",
    "category": "headphones",
    "price": 429,
    "thumbnail": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Bose headphone with incredible features. Model variant: Silver",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 240,
    "title": "QuietComfort Ultra - Midnight Blue",
    "brand": "Bose",
    "category": "headphones",
    "price": 429,
    "thumbnail": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Bose headphone with incredible features. Model variant: Midnight Blue",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 241,
    "title": "QuietComfort Ultra - Rose Gold",
    "brand": "Bose",
    "category": "headphones",
    "price": 449,
    "thumbnail": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Bose headphone with incredible features. Model variant: Rose Gold",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 242,
    "title": "QuietComfort Ultra - Graphite",
    "brand": "Bose",
    "category": "headphones",
    "price": 429,
    "thumbnail": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Bose headphone with incredible features. Model variant: Graphite",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 243,
    "title": "QuietComfort Ultra - Lunar Light",
    "brand": "Bose",
    "category": "headphones",
    "price": 429,
    "thumbnail": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Bose headphone with incredible features. Model variant: Lunar Light",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 244,
    "title": "QuietComfort Ultra - Matte Black",
    "brand": "Bose",
    "category": "headphones",
    "price": 429,
    "thumbnail": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Bose headphone with incredible features. Model variant: Matte Black",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 245,
    "title": "QuietComfort Ultra - Ivory",
    "brand": "Bose",
    "category": "headphones",
    "price": 429,
    "thumbnail": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Bose headphone with incredible features. Model variant: Ivory",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 246,
    "title": "QuietComfort Ultra - Sand",
    "brand": "Bose",
    "category": "headphones",
    "price": 429,
    "thumbnail": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Bose headphone with incredible features. Model variant: Sand",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 247,
    "title": "QuietComfort Ultra - Sage",
    "brand": "Bose",
    "category": "headphones",
    "price": 429,
    "thumbnail": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Bose headphone with incredible features. Model variant: Sage",
    "discountPercentage": 15,
    "rating": 4.4,
    "stock": 40
  },
  {
    "id": 248,
    "title": "QuietComfort Ultra - Navy",
    "brand": "Bose",
    "category": "headphones",
    "price": 429,
    "thumbnail": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Bose headphone with incredible features. Model variant: Navy",
    "discountPercentage": 16,
    "rating": 4.5,
    "stock": 57
  },
  {
    "id": 249,
    "title": "QuietComfort Ultra - Charcoal",
    "brand": "Bose",
    "category": "headphones",
    "price": 429,
    "thumbnail": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Bose headphone with incredible features. Model variant: Charcoal",
    "discountPercentage": 17,
    "rating": 4.6,
    "stock": 74
  },
  {
    "id": 250,
    "title": "QuietComfort Ultra - Mint",
    "brand": "Bose",
    "category": "headphones",
    "price": 429,
    "thumbnail": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Bose headphone with incredible features. Model variant: Mint",
    "discountPercentage": 18,
    "rating": 4.7,
    "stock": 91
  },
  {
    "id": 251,
    "title": "Momentum 4 - Black",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sennheiser headphone with incredible features. Model variant: Black",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 252,
    "title": "Momentum 4 - White",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sennheiser headphone with incredible features. Model variant: White",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 253,
    "title": "Momentum 4 - Silver",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sennheiser headphone with incredible features. Model variant: Silver",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 254,
    "title": "Momentum 4 - Midnight Blue",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sennheiser headphone with incredible features. Model variant: Midnight Blue",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 255,
    "title": "Momentum 4 - Rose Gold",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 369,
    "thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sennheiser headphone with incredible features. Model variant: Rose Gold",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 256,
    "title": "Momentum 4 - Graphite",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sennheiser headphone with incredible features. Model variant: Graphite",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 257,
    "title": "Momentum 4 - Lunar Light",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sennheiser headphone with incredible features. Model variant: Lunar Light",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 258,
    "title": "Momentum 4 - Matte Black",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sennheiser headphone with incredible features. Model variant: Matte Black",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 259,
    "title": "Momentum 4 - Ivory",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sennheiser headphone with incredible features. Model variant: Ivory",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 260,
    "title": "Momentum 4 - Sand",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sennheiser headphone with incredible features. Model variant: Sand",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 261,
    "title": "Momentum 4 - Sage",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sennheiser headphone with incredible features. Model variant: Sage",
    "discountPercentage": 15,
    "rating": 4.4,
    "stock": 40
  },
  {
    "id": 262,
    "title": "Momentum 4 - Navy",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sennheiser headphone with incredible features. Model variant: Navy",
    "discountPercentage": 16,
    "rating": 4.5,
    "stock": 57
  },
  {
    "id": 263,
    "title": "Momentum 4 - Charcoal",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sennheiser headphone with incredible features. Model variant: Charcoal",
    "discountPercentage": 17,
    "rating": 4.6,
    "stock": 74
  },
  {
    "id": 264,
    "title": "Momentum 4 - Mint",
    "brand": "Sennheiser",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Sennheiser headphone with incredible features. Model variant: Mint",
    "discountPercentage": 18,
    "rating": 4.7,
    "stock": 91
  },
  {
    "id": 265,
    "title": "Tour One M2 - Black",
    "brand": "JBL",
    "category": "headphones",
    "price": 299,
    "thumbnail": "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium JBL headphone with incredible features. Model variant: Black",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 266,
    "title": "Tour One M2 - White",
    "brand": "JBL",
    "category": "headphones",
    "price": 299,
    "thumbnail": "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium JBL headphone with incredible features. Model variant: White",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 267,
    "title": "Tour One M2 - Silver",
    "brand": "JBL",
    "category": "headphones",
    "price": 299,
    "thumbnail": "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium JBL headphone with incredible features. Model variant: Silver",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 268,
    "title": "Tour One M2 - Midnight Blue",
    "brand": "JBL",
    "category": "headphones",
    "price": 299,
    "thumbnail": "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium JBL headphone with incredible features. Model variant: Midnight Blue",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 269,
    "title": "Tour One M2 - Rose Gold",
    "brand": "JBL",
    "category": "headphones",
    "price": 319,
    "thumbnail": "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium JBL headphone with incredible features. Model variant: Rose Gold",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 270,
    "title": "Tour One M2 - Graphite",
    "brand": "JBL",
    "category": "headphones",
    "price": 299,
    "thumbnail": "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium JBL headphone with incredible features. Model variant: Graphite",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 271,
    "title": "Tour One M2 - Lunar Light",
    "brand": "JBL",
    "category": "headphones",
    "price": 299,
    "thumbnail": "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium JBL headphone with incredible features. Model variant: Lunar Light",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 272,
    "title": "Tour One M2 - Matte Black",
    "brand": "JBL",
    "category": "headphones",
    "price": 299,
    "thumbnail": "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium JBL headphone with incredible features. Model variant: Matte Black",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 273,
    "title": "Tour One M2 - Ivory",
    "brand": "JBL",
    "category": "headphones",
    "price": 299,
    "thumbnail": "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium JBL headphone with incredible features. Model variant: Ivory",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 274,
    "title": "Tour One M2 - Sand",
    "brand": "JBL",
    "category": "headphones",
    "price": 299,
    "thumbnail": "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium JBL headphone with incredible features. Model variant: Sand",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 275,
    "title": "Tour One M2 - Sage",
    "brand": "JBL",
    "category": "headphones",
    "price": 299,
    "thumbnail": "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium JBL headphone with incredible features. Model variant: Sage",
    "discountPercentage": 15,
    "rating": 4.4,
    "stock": 40
  },
  {
    "id": 276,
    "title": "Tour One M2 - Navy",
    "brand": "JBL",
    "category": "headphones",
    "price": 299,
    "thumbnail": "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium JBL headphone with incredible features. Model variant: Navy",
    "discountPercentage": 16,
    "rating": 4.5,
    "stock": 57
  },
  {
    "id": 277,
    "title": "Tour One M2 - Charcoal",
    "brand": "JBL",
    "category": "headphones",
    "price": 299,
    "thumbnail": "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium JBL headphone with incredible features. Model variant: Charcoal",
    "discountPercentage": 17,
    "rating": 4.6,
    "stock": 74
  },
  {
    "id": 278,
    "title": "Tour One M2 - Mint",
    "brand": "JBL",
    "category": "headphones",
    "price": 299,
    "thumbnail": "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium JBL headphone with incredible features. Model variant: Mint",
    "discountPercentage": 18,
    "rating": 4.7,
    "stock": 91
  },
  {
    "id": 279,
    "title": "Studio Pro - Black",
    "brand": "Beats",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Beats headphone with incredible features. Model variant: Black",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 280,
    "title": "Studio Pro - White",
    "brand": "Beats",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Beats headphone with incredible features. Model variant: White",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 281,
    "title": "Studio Pro - Silver",
    "brand": "Beats",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Beats headphone with incredible features. Model variant: Silver",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 282,
    "title": "Studio Pro - Midnight Blue",
    "brand": "Beats",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Beats headphone with incredible features. Model variant: Midnight Blue",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 283,
    "title": "Studio Pro - Rose Gold",
    "brand": "Beats",
    "category": "headphones",
    "price": 369,
    "thumbnail": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Beats headphone with incredible features. Model variant: Rose Gold",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 284,
    "title": "Studio Pro - Graphite",
    "brand": "Beats",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Beats headphone with incredible features. Model variant: Graphite",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 285,
    "title": "Studio Pro - Lunar Light",
    "brand": "Beats",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Beats headphone with incredible features. Model variant: Lunar Light",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 286,
    "title": "Studio Pro - Matte Black",
    "brand": "Beats",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Beats headphone with incredible features. Model variant: Matte Black",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 287,
    "title": "Studio Pro - Ivory",
    "brand": "Beats",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Beats headphone with incredible features. Model variant: Ivory",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 288,
    "title": "Studio Pro - Sand",
    "brand": "Beats",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Beats headphone with incredible features. Model variant: Sand",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 289,
    "title": "Studio Pro - Sage",
    "brand": "Beats",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Beats headphone with incredible features. Model variant: Sage",
    "discountPercentage": 15,
    "rating": 4.4,
    "stock": 40
  },
  {
    "id": 290,
    "title": "Studio Pro - Navy",
    "brand": "Beats",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Beats headphone with incredible features. Model variant: Navy",
    "discountPercentage": 16,
    "rating": 4.5,
    "stock": 57
  },
  {
    "id": 291,
    "title": "Studio Pro - Charcoal",
    "brand": "Beats",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Beats headphone with incredible features. Model variant: Charcoal",
    "discountPercentage": 17,
    "rating": 4.6,
    "stock": 74
  },
  {
    "id": 292,
    "title": "Studio Pro - Mint",
    "brand": "Beats",
    "category": "headphones",
    "price": 349,
    "thumbnail": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Beats headphone with incredible features. Model variant: Mint",
    "discountPercentage": 18,
    "rating": 4.7,
    "stock": 91
  },
  {
    "id": 293,
    "title": "Elite 8 Active - Black",
    "brand": "Jabra",
    "category": "headphones",
    "price": 199,
    "thumbnail": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Jabra headphone with incredible features. Model variant: Black",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 294,
    "title": "Elite 8 Active - White",
    "brand": "Jabra",
    "category": "headphones",
    "price": 199,
    "thumbnail": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Jabra headphone with incredible features. Model variant: White",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 295,
    "title": "Elite 8 Active - Silver",
    "brand": "Jabra",
    "category": "headphones",
    "price": 199,
    "thumbnail": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Jabra headphone with incredible features. Model variant: Silver",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 296,
    "title": "Elite 8 Active - Midnight Blue",
    "brand": "Jabra",
    "category": "headphones",
    "price": 199,
    "thumbnail": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Jabra headphone with incredible features. Model variant: Midnight Blue",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 297,
    "title": "Elite 8 Active - Rose Gold",
    "brand": "Jabra",
    "category": "headphones",
    "price": 219,
    "thumbnail": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Jabra headphone with incredible features. Model variant: Rose Gold",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 298,
    "title": "Elite 8 Active - Graphite",
    "brand": "Jabra",
    "category": "headphones",
    "price": 199,
    "thumbnail": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Jabra headphone with incredible features. Model variant: Graphite",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 299,
    "title": "Elite 8 Active - Lunar Light",
    "brand": "Jabra",
    "category": "headphones",
    "price": 199,
    "thumbnail": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Jabra headphone with incredible features. Model variant: Lunar Light",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 300,
    "title": "Elite 8 Active - Matte Black",
    "brand": "Jabra",
    "category": "headphones",
    "price": 199,
    "thumbnail": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Jabra headphone with incredible features. Model variant: Matte Black",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 301,
    "title": "Elite 8 Active - Ivory",
    "brand": "Jabra",
    "category": "headphones",
    "price": 199,
    "thumbnail": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Jabra headphone with incredible features. Model variant: Ivory",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 302,
    "title": "Elite 8 Active - Sand",
    "brand": "Jabra",
    "category": "headphones",
    "price": 199,
    "thumbnail": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Jabra headphone with incredible features. Model variant: Sand",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 303,
    "title": "Elite 8 Active - Sage",
    "brand": "Jabra",
    "category": "headphones",
    "price": 199,
    "thumbnail": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Jabra headphone with incredible features. Model variant: Sage",
    "discountPercentage": 15,
    "rating": 4.4,
    "stock": 40
  },
  {
    "id": 304,
    "title": "Elite 8 Active - Navy",
    "brand": "Jabra",
    "category": "headphones",
    "price": 199,
    "thumbnail": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Jabra headphone with incredible features. Model variant: Navy",
    "discountPercentage": 16,
    "rating": 4.5,
    "stock": 57
  },
  {
    "id": 305,
    "title": "Elite 8 Active - Charcoal",
    "brand": "Jabra",
    "category": "headphones",
    "price": 199,
    "thumbnail": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Jabra headphone with incredible features. Model variant: Charcoal",
    "discountPercentage": 17,
    "rating": 4.6,
    "stock": 74
  },
  {
    "id": 306,
    "title": "Elite 8 Active - Mint",
    "brand": "Jabra",
    "category": "headphones",
    "price": 199,
    "thumbnail": "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80"
    ],
    "description": "Premium Jabra headphone with incredible features. Model variant: Mint",
    "discountPercentage": 18,
    "rating": 4.7,
    "stock": 91
  },
  {
    "id": 307,
    "title": "Watch Ultra 2 - 41mm, GPS",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 799,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: 41mm, GPS",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 308,
    "title": "Watch Ultra 2 - 45mm, GPS",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 829,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: 45mm, GPS",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 309,
    "title": "Watch Ultra 2 - 41mm, Cellular",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 899,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: 41mm, Cellular",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 310,
    "title": "Watch Ultra 2 - 45mm, Cellular",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 929,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: 45mm, Cellular",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 311,
    "title": "Watch Ultra 2 - 41mm, Stainless Steel",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 999,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: 41mm, Stainless Steel",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 312,
    "title": "Watch Ultra 2 - 45mm, Stainless Steel",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 1029,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: 45mm, Stainless Steel",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 313,
    "title": "Watch Ultra 2 - 41mm, Titanium",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 1099,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: 41mm, Titanium",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 314,
    "title": "Watch Ultra 2 - 45mm, Titanium",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 1129,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: 45mm, Titanium",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 315,
    "title": "Watch Ultra 2 - Sport Band",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 799,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: Sport Band",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 316,
    "title": "Watch Ultra 2 - Milanese Loop",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 849,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: Milanese Loop",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 317,
    "title": "Galaxy Watch 6 Classic - 41mm, GPS",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 399,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: 41mm, GPS",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 318,
    "title": "Galaxy Watch 6 Classic - 45mm, GPS",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 429,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: 45mm, GPS",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 319,
    "title": "Galaxy Watch 6 Classic - 41mm, Cellular",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 499,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: 41mm, Cellular",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 320,
    "title": "Galaxy Watch 6 Classic - 45mm, Cellular",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 529,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: 45mm, Cellular",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 321,
    "title": "Galaxy Watch 6 Classic - 41mm, Stainless Steel",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 599,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: 41mm, Stainless Steel",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 322,
    "title": "Galaxy Watch 6 Classic - 45mm, Stainless Steel",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 629,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: 45mm, Stainless Steel",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 323,
    "title": "Galaxy Watch 6 Classic - 41mm, Titanium",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 699,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: 41mm, Titanium",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 324,
    "title": "Galaxy Watch 6 Classic - 45mm, Titanium",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 729,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: 45mm, Titanium",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 325,
    "title": "Galaxy Watch 6 Classic - Sport Band",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 399,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: Sport Band",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 326,
    "title": "Galaxy Watch 6 Classic - Milanese Loop",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 449,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: Milanese Loop",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 327,
    "title": "Epix Pro (Gen 2) - 41mm, GPS",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 899,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: 41mm, GPS",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 328,
    "title": "Epix Pro (Gen 2) - 45mm, GPS",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 929,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: 45mm, GPS",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 329,
    "title": "Epix Pro (Gen 2) - 41mm, Cellular",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 999,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: 41mm, Cellular",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 330,
    "title": "Epix Pro (Gen 2) - 45mm, Cellular",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 1029,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: 45mm, Cellular",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 331,
    "title": "Epix Pro (Gen 2) - 41mm, Stainless Steel",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 1099,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: 41mm, Stainless Steel",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 332,
    "title": "Epix Pro (Gen 2) - 45mm, Stainless Steel",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 1129,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: 45mm, Stainless Steel",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 333,
    "title": "Epix Pro (Gen 2) - 41mm, Titanium",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 1199,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: 41mm, Titanium",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 334,
    "title": "Epix Pro (Gen 2) - 45mm, Titanium",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 1229,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: 45mm, Titanium",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 335,
    "title": "Epix Pro (Gen 2) - Sport Band",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 899,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: Sport Band",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 336,
    "title": "Epix Pro (Gen 2) - Milanese Loop",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 949,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: Milanese Loop",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 337,
    "title": "Pixel Watch 2 - 41mm, GPS",
    "brand": "Google",
    "category": "smartwatches",
    "price": 349,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg"
    ],
    "description": "Premium Google smartwatche with incredible features. Model variant: 41mm, GPS",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 338,
    "title": "Pixel Watch 2 - 45mm, GPS",
    "brand": "Google",
    "category": "smartwatches",
    "price": 379,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg"
    ],
    "description": "Premium Google smartwatche with incredible features. Model variant: 45mm, GPS",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 339,
    "title": "Pixel Watch 2 - 41mm, Cellular",
    "brand": "Google",
    "category": "smartwatches",
    "price": 449,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg"
    ],
    "description": "Premium Google smartwatche with incredible features. Model variant: 41mm, Cellular",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 340,
    "title": "Pixel Watch 2 - 45mm, Cellular",
    "brand": "Google",
    "category": "smartwatches",
    "price": 479,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg"
    ],
    "description": "Premium Google smartwatche with incredible features. Model variant: 45mm, Cellular",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 341,
    "title": "Pixel Watch 2 - 41mm, Stainless Steel",
    "brand": "Google",
    "category": "smartwatches",
    "price": 549,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg"
    ],
    "description": "Premium Google smartwatche with incredible features. Model variant: 41mm, Stainless Steel",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 342,
    "title": "Pixel Watch 2 - 45mm, Stainless Steel",
    "brand": "Google",
    "category": "smartwatches",
    "price": 579,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg"
    ],
    "description": "Premium Google smartwatche with incredible features. Model variant: 45mm, Stainless Steel",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 343,
    "title": "Pixel Watch 2 - 41mm, Titanium",
    "brand": "Google",
    "category": "smartwatches",
    "price": 649,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg"
    ],
    "description": "Premium Google smartwatche with incredible features. Model variant: 41mm, Titanium",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 344,
    "title": "Pixel Watch 2 - 45mm, Titanium",
    "brand": "Google",
    "category": "smartwatches",
    "price": 679,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg"
    ],
    "description": "Premium Google smartwatche with incredible features. Model variant: 45mm, Titanium",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 345,
    "title": "Pixel Watch 2 - Sport Band",
    "brand": "Google",
    "category": "smartwatches",
    "price": 349,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg"
    ],
    "description": "Premium Google smartwatche with incredible features. Model variant: Sport Band",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 346,
    "title": "Pixel Watch 2 - Milanese Loop",
    "brand": "Google",
    "category": "smartwatches",
    "price": 399,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg"
    ],
    "description": "Premium Google smartwatche with incredible features. Model variant: Milanese Loop",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 347,
    "title": "Watch Series 9 - 41mm, GPS",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 399,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: 41mm, GPS",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 348,
    "title": "Watch Series 9 - 45mm, GPS",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 429,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: 45mm, GPS",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 349,
    "title": "Watch Series 9 - 41mm, Cellular",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 499,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: 41mm, Cellular",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 350,
    "title": "Watch Series 9 - 45mm, Cellular",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 529,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: 45mm, Cellular",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 351,
    "title": "Watch Series 9 - 41mm, Stainless Steel",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 599,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: 41mm, Stainless Steel",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 352,
    "title": "Watch Series 9 - 45mm, Stainless Steel",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 629,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: 45mm, Stainless Steel",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 353,
    "title": "Watch Series 9 - 41mm, Titanium",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 699,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: 41mm, Titanium",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 354,
    "title": "Watch Series 9 - 45mm, Titanium",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 729,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: 45mm, Titanium",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 355,
    "title": "Watch Series 9 - Sport Band",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 399,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: Sport Band",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 356,
    "title": "Watch Series 9 - Milanese Loop",
    "brand": "Apple",
    "category": "smartwatches",
    "price": 449,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg"
    ],
    "description": "Premium Apple smartwatche with incredible features. Model variant: Milanese Loop",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 357,
    "title": "Watch 2 - 41mm, GPS",
    "brand": "OnePlus",
    "category": "smartwatches",
    "price": 299,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg"
    ],
    "description": "Premium OnePlus smartwatche with incredible features. Model variant: 41mm, GPS",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 358,
    "title": "Watch 2 - 45mm, GPS",
    "brand": "OnePlus",
    "category": "smartwatches",
    "price": 329,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg"
    ],
    "description": "Premium OnePlus smartwatche with incredible features. Model variant: 45mm, GPS",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 359,
    "title": "Watch 2 - 41mm, Cellular",
    "brand": "OnePlus",
    "category": "smartwatches",
    "price": 399,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg"
    ],
    "description": "Premium OnePlus smartwatche with incredible features. Model variant: 41mm, Cellular",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 360,
    "title": "Watch 2 - 45mm, Cellular",
    "brand": "OnePlus",
    "category": "smartwatches",
    "price": 429,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg"
    ],
    "description": "Premium OnePlus smartwatche with incredible features. Model variant: 45mm, Cellular",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 361,
    "title": "Watch 2 - 41mm, Stainless Steel",
    "brand": "OnePlus",
    "category": "smartwatches",
    "price": 499,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg"
    ],
    "description": "Premium OnePlus smartwatche with incredible features. Model variant: 41mm, Stainless Steel",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 362,
    "title": "Watch 2 - 45mm, Stainless Steel",
    "brand": "OnePlus",
    "category": "smartwatches",
    "price": 529,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg"
    ],
    "description": "Premium OnePlus smartwatche with incredible features. Model variant: 45mm, Stainless Steel",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 363,
    "title": "Watch 2 - 41mm, Titanium",
    "brand": "OnePlus",
    "category": "smartwatches",
    "price": 599,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg"
    ],
    "description": "Premium OnePlus smartwatche with incredible features. Model variant: 41mm, Titanium",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 364,
    "title": "Watch 2 - 45mm, Titanium",
    "brand": "OnePlus",
    "category": "smartwatches",
    "price": 629,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg"
    ],
    "description": "Premium OnePlus smartwatche with incredible features. Model variant: 45mm, Titanium",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 365,
    "title": "Watch 2 - Sport Band",
    "brand": "OnePlus",
    "category": "smartwatches",
    "price": 299,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg"
    ],
    "description": "Premium OnePlus smartwatche with incredible features. Model variant: Sport Band",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 366,
    "title": "Watch 2 - Milanese Loop",
    "brand": "OnePlus",
    "category": "smartwatches",
    "price": 349,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg"
    ],
    "description": "Premium OnePlus smartwatche with incredible features. Model variant: Milanese Loop",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 367,
    "title": "Venu 3 - 41mm, GPS",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 449,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: 41mm, GPS",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 368,
    "title": "Venu 3 - 45mm, GPS",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 479,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: 45mm, GPS",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 369,
    "title": "Venu 3 - 41mm, Cellular",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 549,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: 41mm, Cellular",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 370,
    "title": "Venu 3 - 45mm, Cellular",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 579,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: 45mm, Cellular",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 371,
    "title": "Venu 3 - 41mm, Stainless Steel",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 649,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: 41mm, Stainless Steel",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 372,
    "title": "Venu 3 - 45mm, Stainless Steel",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 679,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: 45mm, Stainless Steel",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 373,
    "title": "Venu 3 - 41mm, Titanium",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 749,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: 41mm, Titanium",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 374,
    "title": "Venu 3 - 45mm, Titanium",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 779,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: 45mm, Titanium",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 375,
    "title": "Venu 3 - Sport Band",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 449,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: Sport Band",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 376,
    "title": "Venu 3 - Milanese Loop",
    "brand": "Garmin",
    "category": "smartwatches",
    "price": 499,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg"
    ],
    "description": "Premium Garmin smartwatche with incredible features. Model variant: Milanese Loop",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 377,
    "title": "GTR 4 - 41mm, GPS",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 199,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg"
    ],
    "description": "Premium Amazfit smartwatche with incredible features. Model variant: 41mm, GPS",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 378,
    "title": "GTR 4 - 45mm, GPS",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 229,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg"
    ],
    "description": "Premium Amazfit smartwatche with incredible features. Model variant: 45mm, GPS",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 379,
    "title": "GTR 4 - 41mm, Cellular",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 299,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg"
    ],
    "description": "Premium Amazfit smartwatche with incredible features. Model variant: 41mm, Cellular",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 380,
    "title": "GTR 4 - 45mm, Cellular",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 329,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg"
    ],
    "description": "Premium Amazfit smartwatche with incredible features. Model variant: 45mm, Cellular",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 381,
    "title": "GTR 4 - 41mm, Stainless Steel",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 399,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg"
    ],
    "description": "Premium Amazfit smartwatche with incredible features. Model variant: 41mm, Stainless Steel",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 382,
    "title": "GTR 4 - 45mm, Stainless Steel",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 429,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg"
    ],
    "description": "Premium Amazfit smartwatche with incredible features. Model variant: 45mm, Stainless Steel",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 383,
    "title": "GTR 4 - 41mm, Titanium",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 499,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg"
    ],
    "description": "Premium Amazfit smartwatche with incredible features. Model variant: 41mm, Titanium",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 384,
    "title": "GTR 4 - 45mm, Titanium",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 529,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg"
    ],
    "description": "Premium Amazfit smartwatche with incredible features. Model variant: 45mm, Titanium",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 385,
    "title": "GTR 4 - Sport Band",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 199,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg"
    ],
    "description": "Premium Amazfit smartwatche with incredible features. Model variant: Sport Band",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 386,
    "title": "GTR 4 - Milanese Loop",
    "brand": "Amazfit",
    "category": "smartwatches",
    "price": 249,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg"
    ],
    "description": "Premium Amazfit smartwatche with incredible features. Model variant: Milanese Loop",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 387,
    "title": "Galaxy Watch 6 - 41mm, GPS",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 299,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: 41mm, GPS",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 388,
    "title": "Galaxy Watch 6 - 45mm, GPS",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 329,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: 45mm, GPS",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 389,
    "title": "Galaxy Watch 6 - 41mm, Cellular",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 399,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: 41mm, Cellular",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 390,
    "title": "Galaxy Watch 6 - 45mm, Cellular",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 429,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: 45mm, Cellular",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 391,
    "title": "Galaxy Watch 6 - 41mm, Stainless Steel",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 499,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: 41mm, Stainless Steel",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 392,
    "title": "Galaxy Watch 6 - 45mm, Stainless Steel",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 529,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: 45mm, Stainless Steel",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 393,
    "title": "Galaxy Watch 6 - 41mm, Titanium",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 599,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: 41mm, Titanium",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 394,
    "title": "Galaxy Watch 6 - 45mm, Titanium",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 629,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: 45mm, Titanium",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 395,
    "title": "Galaxy Watch 6 - Sport Band",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 299,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: Sport Band",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 396,
    "title": "Galaxy Watch 6 - Milanese Loop",
    "brand": "Samsung",
    "category": "smartwatches",
    "price": 349,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg"
    ],
    "description": "Premium Samsung smartwatche with incredible features. Model variant: Milanese Loop",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  },
  {
    "id": 397,
    "title": "Watch 4 Pro - 41mm, GPS",
    "brand": "Huawei",
    "category": "smartwatches",
    "price": 549,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg"
    ],
    "description": "Premium Huawei smartwatche with incredible features. Model variant: 41mm, GPS",
    "discountPercentage": 5,
    "rating": 4.2,
    "stock": 20
  },
  {
    "id": 398,
    "title": "Watch 4 Pro - 45mm, GPS",
    "brand": "Huawei",
    "category": "smartwatches",
    "price": 579,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg"
    ],
    "description": "Premium Huawei smartwatche with incredible features. Model variant: 45mm, GPS",
    "discountPercentage": 6,
    "rating": 4.3,
    "stock": 37
  },
  {
    "id": 399,
    "title": "Watch 4 Pro - 41mm, Cellular",
    "brand": "Huawei",
    "category": "smartwatches",
    "price": 649,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg"
    ],
    "description": "Premium Huawei smartwatche with incredible features. Model variant: 41mm, Cellular",
    "discountPercentage": 7,
    "rating": 4.4,
    "stock": 54
  },
  {
    "id": 400,
    "title": "Watch 4 Pro - 45mm, Cellular",
    "brand": "Huawei",
    "category": "smartwatches",
    "price": 679,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg"
    ],
    "description": "Premium Huawei smartwatche with incredible features. Model variant: 45mm, Cellular",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 71
  },
  {
    "id": 401,
    "title": "Watch 4 Pro - 41mm, Stainless Steel",
    "brand": "Huawei",
    "category": "smartwatches",
    "price": 749,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg"
    ],
    "description": "Premium Huawei smartwatche with incredible features. Model variant: 41mm, Stainless Steel",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 88
  },
  {
    "id": 402,
    "title": "Watch 4 Pro - 45mm, Stainless Steel",
    "brand": "Huawei",
    "category": "smartwatches",
    "price": 779,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg"
    ],
    "description": "Premium Huawei smartwatche with incredible features. Model variant: 45mm, Stainless Steel",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 105
  },
  {
    "id": 403,
    "title": "Watch 4 Pro - 41mm, Titanium",
    "brand": "Huawei",
    "category": "smartwatches",
    "price": 849,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg"
    ],
    "description": "Premium Huawei smartwatche with incredible features. Model variant: 41mm, Titanium",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 122
  },
  {
    "id": 404,
    "title": "Watch 4 Pro - 45mm, Titanium",
    "brand": "Huawei",
    "category": "smartwatches",
    "price": 879,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg"
    ],
    "description": "Premium Huawei smartwatche with incredible features. Model variant: 45mm, Titanium",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 139
  },
  {
    "id": 405,
    "title": "Watch 4 Pro - Sport Band",
    "brand": "Huawei",
    "category": "smartwatches",
    "price": 549,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg"
    ],
    "description": "Premium Huawei smartwatche with incredible features. Model variant: Sport Band",
    "discountPercentage": 13,
    "rating": 4.2,
    "stock": 156
  },
  {
    "id": 406,
    "title": "Watch 4 Pro - Milanese Loop",
    "brand": "Huawei",
    "category": "smartwatches",
    "price": 599,
    "thumbnail": "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg",
    "images": [
      "https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg"
    ],
    "description": "Premium Huawei smartwatche with incredible features. Model variant: Milanese Loop",
    "discountPercentage": 14,
    "rating": 4.3,
    "stock": 23
  }
]

export async function getCatalogProducts() {
  return customProducts
}

export async function getProducts(req: Request, res: Response) {
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
