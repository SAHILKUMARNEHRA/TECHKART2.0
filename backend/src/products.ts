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
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 136,
    "thumbnail": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Samsung Galaxy S24 Ultra",
    "brand": "Samsung",
    "price": 1299,
    "id": 1002,
    "category": "smartphones",
    "description": "Latest Samsung smartphone with incredible features.",
    "discountPercentage": 11,
    "rating": 4.5,
    "stock": 180,
    "thumbnail": "https://images.unsplash.com/photo-1598327105650-80327663e2c6?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1598327105650-80327663e2c6?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Google Pixel 8 Pro",
    "brand": "Google",
    "price": 999,
    "id": 1003,
    "category": "smartphones",
    "description": "Latest Google smartphone with incredible features.",
    "discountPercentage": 5,
    "rating": 4.9,
    "stock": 70,
    "thumbnail": "https://images.unsplash.com/photo-1533228100840-081b3af53203?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1533228100840-081b3af53203?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "OnePlus 12",
    "brand": "OnePlus",
    "price": 799,
    "id": 1004,
    "category": "smartphones",
    "description": "Latest OnePlus smartphone with incredible features.",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 189,
    "thumbnail": "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&w=500&q=80"
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
    "rating": 4.6,
    "stock": 214,
    "thumbnail": "https://images.unsplash.com/photo-1523206489230-c6224d4bef95?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1523206489230-c6224d4bef95?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Sony Xperia 1 V",
    "brand": "Sony",
    "price": 1399,
    "id": 1006,
    "category": "smartphones",
    "description": "Latest Sony smartphone with incredible features.",
    "discountPercentage": 0,
    "rating": 4.6,
    "stock": 162,
    "thumbnail": "https://images.unsplash.com/photo-1575037614876-c385124f5a3e?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1575037614876-c385124f5a3e?auto=format&fit=crop&w=500&q=80"
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
    "rating": 4.6,
    "stock": 151,
    "thumbnail": "https://images.unsplash.com/photo-1556656793-89a4c47d7c67?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1556656793-89a4c47d7c67?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Nothing Phone (2)",
    "brand": "Nothing",
    "price": 599,
    "id": 1008,
    "category": "smartphones",
    "description": "Latest Nothing smartphone with incredible features.",
    "discountPercentage": 11,
    "rating": 4.6,
    "stock": 91,
    "thumbnail": "https://images.unsplash.com/photo-1601784551446-20c9e07cdbc0?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbc0?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Asus ROG Phone 8 Pro",
    "brand": "Asus",
    "price": 1199,
    "id": 1009,
    "category": "smartphones",
    "description": "Latest Asus smartphone with incredible features.",
    "discountPercentage": 7,
    "rating": 4.9,
    "stock": 150,
    "thumbnail": "https://images.unsplash.com/photo-1585060544812-6b45742c222c?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742c222c?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Motorola Edge 50 Pro",
    "brand": "Motorola",
    "price": 699,
    "id": 1010,
    "category": "smartphones",
    "description": "Latest Motorola smartphone with incredible features.",
    "discountPercentage": 2,
    "rating": 4.6,
    "stock": 210,
    "thumbnail": "https://images.unsplash.com/photo-1505156868547-9b1e7fd040ce?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1505156868547-9b1e7fd040ce?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Apple iPhone 14 Pro",
    "brand": "Apple",
    "price": 999,
    "id": 1011,
    "category": "smartphones",
    "description": "Latest Apple smartphone with incredible features.",
    "discountPercentage": 0,
    "rating": 4.6,
    "stock": 191,
    "thumbnail": "https://images.unsplash.com/photo-1592840496152-09559c5d0186?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1592840496152-09559c5d0186?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Samsung Galaxy A55 5G",
    "brand": "Samsung",
    "price": 499,
    "id": 1012,
    "category": "smartphones",
    "description": "Latest Samsung smartphone with incredible features.",
    "discountPercentage": 14,
    "rating": 4.8,
    "stock": 141,
    "thumbnail": "https://images.unsplash.com/photo-1610945415250-71716e255f02?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1610945415250-71716e255f02?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Vivo X100 Pro",
    "brand": "Vivo",
    "price": 899,
    "id": 1013,
    "category": "smartphones",
    "description": "Latest Vivo smartphone with incredible features.",
    "discountPercentage": 9,
    "rating": 4.6,
    "stock": 210,
    "thumbnail": "https://images.unsplash.com/photo-1512499616203-b5af07db8ce5?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512499616203-b5af07db8ce5?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "iQOO 12 5G",
    "brand": "iQOO",
    "price": 649,
    "id": 1014,
    "category": "smartphones",
    "description": "Latest iQOO smartphone with incredible features.",
    "discountPercentage": 2,
    "rating": 4.8,
    "stock": 199,
    "thumbnail": "https://images.unsplash.com/photo-1580933924726-5b4d455e378c?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1580933924726-5b4d455e378c?auto=format&fit=crop&w=500&q=80"
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
    "rating": 4.8,
    "stock": 230,
    "thumbnail": "https://images.unsplash.com/photo-1603791244033-912a2dfcbf79?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1603791244033-912a2dfcbf79?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Apple MacBook Pro 16\" (M3 Max)",
    "brand": "Apple",
    "price": 3499,
    "id": 2001,
    "category": "laptops",
    "description": "Powerful Apple laptop for productivity and gaming.",
    "discountPercentage": 1,
    "rating": 4.7,
    "stock": 117,
    "thumbnail": "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Dell XPS 14",
    "brand": "Dell",
    "price": 1699,
    "id": 2002,
    "category": "laptops",
    "description": "Powerful Dell laptop for productivity and gaming.",
    "discountPercentage": 7,
    "rating": 4.8,
    "stock": 242,
    "thumbnail": "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Lenovo ThinkPad X1 Carbon Gen 12",
    "brand": "Lenovo",
    "price": 1899,
    "id": 2003,
    "category": "laptops",
    "description": "Powerful Lenovo laptop for productivity and gaming.",
    "discountPercentage": 1,
    "rating": 4.5,
    "stock": 75,
    "thumbnail": "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "ASUS ROG Zephyrus G14 (2024)",
    "brand": "Asus",
    "price": 1599,
    "id": 2004,
    "category": "laptops",
    "description": "Powerful Asus laptop for productivity and gaming.",
    "discountPercentage": 0,
    "rating": 4.6,
    "stock": 90,
    "thumbnail": "https://images.unsplash.com/photo-1531297122-e12aec1425e4?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1531297122-e12aec1425e4?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Apple MacBook Air 15\" (M3)",
    "brand": "Apple",
    "price": 1299,
    "id": 2005,
    "category": "laptops",
    "description": "Powerful Apple laptop for productivity and gaming.",
    "discountPercentage": 11,
    "rating": 4.8,
    "stock": 107,
    "thumbnail": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "HP Spectre x360 14",
    "brand": "HP",
    "price": 1499,
    "id": 2006,
    "category": "laptops",
    "description": "Powerful HP laptop for productivity and gaming.",
    "discountPercentage": 5,
    "rating": 4.8,
    "stock": 81,
    "thumbnail": "https://images.unsplash.com/photo-1541807084-5e66085a2109?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1541807084-5e66085a2109?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Razer Blade 16",
    "brand": "Razer",
    "price": 2999,
    "id": 2007,
    "category": "laptops",
    "description": "Powerful Razer laptop for productivity and gaming.",
    "discountPercentage": 11,
    "rating": 4.6,
    "stock": 168,
    "thumbnail": "https://images.unsplash.com/photo-1587614382346-4a56f2f120f2?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1587614382346-4a56f2f120f2?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Microsoft Surface Laptop 7",
    "brand": "Microsoft",
    "price": 1199,
    "id": 2008,
    "category": "laptops",
    "description": "Powerful Microsoft laptop for productivity and gaming.",
    "discountPercentage": 0,
    "rating": 4.5,
    "stock": 57,
    "thumbnail": "https://images.unsplash.com/photo-1611186871340-8b65287e81cc?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1611186871340-8b65287e81cc?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "LG Gram 14",
    "brand": "LG",
    "price": 1299,
    "id": 2009,
    "category": "laptops",
    "description": "Powerful LG laptop for productivity and gaming.",
    "discountPercentage": 8,
    "rating": 4.6,
    "stock": 125,
    "thumbnail": "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Acer Zenbook S 13 OLED",
    "brand": "Acer",
    "price": 1099,
    "id": 2010,
    "category": "laptops",
    "description": "Powerful Acer laptop for productivity and gaming.",
    "discountPercentage": 0,
    "rating": 4.9,
    "stock": 207,
    "thumbnail": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Alienware m16 R2",
    "brand": "Alienware",
    "price": 1699,
    "id": 2011,
    "category": "laptops",
    "description": "Powerful Alienware laptop for productivity and gaming.",
    "discountPercentage": 8,
    "rating": 4.7,
    "stock": 214,
    "thumbnail": "https://images.unsplash.com/photo-1504707748692-419802cf3e51?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1504707748692-419802cf3e51?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "MSI Stealth 14 Studio",
    "brand": "MSI",
    "price": 1499,
    "id": 2012,
    "category": "laptops",
    "description": "Powerful MSI laptop for productivity and gaming.",
    "discountPercentage": 2,
    "rating": 4.5,
    "stock": 220,
    "thumbnail": "https://images.unsplash.com/photo-1515002161962-d9f783186259?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1515002161962-d9f783186259?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Gigabyte AERO 14 OLED",
    "brand": "Gigabyte",
    "price": 1399,
    "id": 2013,
    "category": "laptops",
    "description": "Powerful Gigabyte laptop for productivity and gaming.",
    "discountPercentage": 0,
    "rating": 4.8,
    "stock": 65,
    "thumbnail": "https://images.unsplash.com/photo-1550389332-9653db3c6d17?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1550389332-9653db3c6d17?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Samsung Galaxy Book 4 Pro",
    "brand": "Samsung",
    "price": 1449,
    "id": 2014,
    "category": "laptops",
    "description": "Powerful Samsung laptop for productivity and gaming.",
    "discountPercentage": 5,
    "rating": 4.8,
    "stock": 111,
    "thumbnail": "https://images.unsplash.com/photo-1569422325992-06b2512bc85c?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1569422325992-06b2512bc85c?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Framework Laptop 13",
    "brand": "Framework",
    "price": 1049,
    "id": 2015,
    "category": "laptops",
    "description": "Powerful Framework laptop for productivity and gaming.",
    "discountPercentage": 14,
    "rating": 4.9,
    "stock": 246,
    "thumbnail": "https://images.unsplash.com/photo-1585247226500-111059f38f71?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1585247226500-111059f38f71?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Apple iPad Pro 13\" (M4)",
    "brand": "Apple",
    "price": 1299,
    "id": 3001,
    "category": "tablets",
    "description": "Versatile Apple tablet for work and play.",
    "discountPercentage": 0,
    "rating": 4.6,
    "stock": 72,
    "thumbnail": "https://images.unsplash.com/photo-1544244015-0422a4659b83?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1544244015-0422a4659b83?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Samsung Galaxy Tab S9 Ultra",
    "brand": "Samsung",
    "price": 1199,
    "id": 3002,
    "category": "tablets",
    "description": "Versatile Samsung tablet for work and play.",
    "discountPercentage": 14,
    "rating": 4.8,
    "stock": 139,
    "thumbnail": "https://images.unsplash.com/photo-1585790053232-a423f0515f4d?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1585790053232-a423f0515f4d?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Apple iPad Air 11\" (M2)",
    "brand": "Apple",
    "price": 599,
    "id": 3003,
    "category": "tablets",
    "description": "Versatile Apple tablet for work and play.",
    "discountPercentage": 1,
    "rating": 4.6,
    "stock": 211,
    "thumbnail": "https://images.unsplash.com/photo-1561154464839-813c9e05e55e?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1561154464839-813c9e05e55e?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Google Pixel Tablet",
    "brand": "Google",
    "price": 499,
    "id": 3004,
    "category": "tablets",
    "description": "Versatile Google tablet for work and play.",
    "discountPercentage": 4,
    "rating": 4.9,
    "stock": 108,
    "thumbnail": "https://images.unsplash.com/photo-1607316930063-e525162a8335?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1607316930063-e525162a8335?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "OnePlus Pad 2",
    "brand": "OnePlus",
    "price": 499,
    "id": 3005,
    "category": "tablets",
    "description": "Versatile OnePlus tablet for work and play.",
    "discountPercentage": 9,
    "rating": 4.7,
    "stock": 241,
    "thumbnail": "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Samsung Galaxy Tab S9 FE",
    "brand": "Samsung",
    "price": 449,
    "id": 3006,
    "category": "tablets",
    "description": "Versatile Samsung tablet for work and play.",
    "discountPercentage": 10,
    "rating": 4.5,
    "stock": 98,
    "thumbnail": "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=500&q=80"
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
    "stock": 232,
    "thumbnail": "https://images.unsplash.com/photo-1580828369247-f70362f67646?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1580828369247-f70362f67646?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Apple iPad mini (6th gen)",
    "brand": "Apple",
    "price": 499,
    "id": 3008,
    "category": "tablets",
    "description": "Versatile Apple tablet for work and play.",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 185,
    "thumbnail": "https://images.unsplash.com/photo-1611565431647-81765c928420?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1611565431647-81765c928420?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Xiaomi Pad 6",
    "brand": "Xiaomi",
    "price": 399,
    "id": 3009,
    "category": "tablets",
    "description": "Versatile Xiaomi tablet for work and play.",
    "discountPercentage": 6,
    "rating": 4.9,
    "stock": 212,
    "thumbnail": "https://images.unsplash.com/photo-1542994468-b80c5e744e83?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1542994468-b80c5e744e83?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Microsoft Surface Pro 11",
    "brand": "Microsoft",
    "price": 999,
    "id": 3010,
    "category": "tablets",
    "description": "Versatile Microsoft tablet for work and play.",
    "discountPercentage": 10,
    "rating": 4.6,
    "stock": 237,
    "thumbnail": "https://images.unsplash.com/photo-1527663266205-d1448b18a4a5?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1527663266205-d1448b18a4a5?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Amazon Fire Max 11",
    "brand": "Amazon",
    "price": 229,
    "id": 3011,
    "category": "tablets",
    "description": "Versatile Amazon tablet for work and play.",
    "discountPercentage": 7,
    "rating": 4.5,
    "stock": 117,
    "thumbnail": "https://images.unsplash.com/photo-1551276063-a2100dc0f00a?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1551276063-a2100dc0f00a?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Remarkable 2",
    "brand": "Remarkable",
    "price": 399,
    "id": 3012,
    "category": "tablets",
    "description": "Versatile Remarkable tablet for work and play.",
    "discountPercentage": 6,
    "rating": 4.8,
    "stock": 156,
    "thumbnail": "https://images.unsplash.com/photo-1598442805404-585802a75ec0?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1598442805404-585802a75ec0?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Boox Note Air 3",
    "brand": "Boox",
    "price": 399,
    "id": 3013,
    "category": "tablets",
    "description": "Versatile Boox tablet for work and play.",
    "discountPercentage": 7,
    "rating": 4.5,
    "stock": 130,
    "thumbnail": "https://images.unsplash.com/photo-1600861194942-8d0f1eb252d4?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1600861194942-8d0f1eb252d4?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Honor Pad 9",
    "brand": "Honor",
    "price": 349,
    "id": 3014,
    "category": "tablets",
    "description": "Versatile Honor tablet for work and play.",
    "discountPercentage": 8,
    "rating": 4.5,
    "stock": 75,
    "thumbnail": "https://images.unsplash.com/photo-1612404730960-5c71577fca11?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1612404730960-5c71577fca11?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Vivo Pad 3 Pro",
    "brand": "Vivo",
    "price": 449,
    "id": 3015,
    "category": "tablets",
    "description": "Versatile Vivo tablet for work and play.",
    "discountPercentage": 6,
    "rating": 4.8,
    "stock": 237,
    "thumbnail": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Apple Watch Ultra 2",
    "brand": "Apple",
    "price": 799,
    "id": 4001,
    "category": "smartwatches",
    "description": "Advanced Apple smartwatch with health tracking.",
    "discountPercentage": 12,
    "rating": 4.9,
    "stock": 157,
    "thumbnail": "https://images.unsplash.com/photo-1434493789847-2f02b3112b32?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1434493789847-2f02b3112b32?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Samsung Galaxy Watch 6 Classic",
    "brand": "Samsung",
    "price": 399,
    "id": 4002,
    "category": "smartwatches",
    "description": "Advanced Samsung smartwatch with health tracking.",
    "discountPercentage": 8,
    "rating": 4.6,
    "stock": 186,
    "thumbnail": "https://images.unsplash.com/photo-1508685002900-2f9f688e1467?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1508685002900-2f9f688e1467?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Garmin Epix Pro (Gen 2)",
    "brand": "Garmin",
    "price": 899,
    "id": 4003,
    "category": "smartwatches",
    "description": "Advanced Garmin smartwatch with health tracking.",
    "discountPercentage": 8,
    "rating": 4.6,
    "stock": 199,
    "thumbnail": "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Google Pixel Watch 2",
    "brand": "Google",
    "price": 349,
    "id": 4004,
    "category": "smartwatches",
    "description": "Advanced Google smartwatch with health tracking.",
    "discountPercentage": 0,
    "rating": 4.6,
    "stock": 83,
    "thumbnail": "https://images.unsplash.com/photo-1509741102003-ca59ec6a661f?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509741102003-ca59ec6a661f?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Apple Watch Series 9",
    "brand": "Apple",
    "price": 399,
    "id": 4005,
    "category": "smartwatches",
    "description": "Advanced Apple smartwatch with health tracking.",
    "discountPercentage": 10,
    "rating": 4.8,
    "stock": 65,
    "thumbnail": "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "OnePlus Watch 2",
    "brand": "OnePlus",
    "price": 299,
    "id": 4006,
    "category": "smartwatches",
    "description": "Advanced OnePlus smartwatch with health tracking.",
    "discountPercentage": 10,
    "rating": 4.7,
    "stock": 66,
    "thumbnail": "https://images.unsplash.com/photo-1517502396347-195b05216e5f?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1517502396347-195b05216e5f?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Garmin Venu 3",
    "brand": "Garmin",
    "price": 449,
    "id": 4007,
    "category": "smartwatches",
    "description": "Advanced Garmin smartwatch with health tracking.",
    "discountPercentage": 4,
    "rating": 4.8,
    "stock": 197,
    "thumbnail": "https://images.unsplash.com/photo-1546868871869-7090b82f0fa5?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1546868871869-7090b82f0fa5?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Amazfit GTR 4",
    "brand": "Amazfit",
    "price": 199,
    "id": 4008,
    "category": "smartwatches",
    "description": "Advanced Amazfit smartwatch with health tracking.",
    "discountPercentage": 8,
    "rating": 4.7,
    "stock": 158,
    "thumbnail": "https://images.unsplash.com/photo-1511370235398-c209c894c489?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1511370235398-c209c894c489?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Samsung Galaxy Watch 6",
    "brand": "Samsung",
    "price": 299,
    "id": 4009,
    "category": "smartwatches",
    "description": "Advanced Samsung smartwatch with health tracking.",
    "discountPercentage": 4,
    "rating": 4.7,
    "stock": 194,
    "thumbnail": "https://images.unsplash.com/photo-1555541584-63307b22a014?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1555541584-63307b22a014?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Fossil Gen 6 Smartwatch",
    "brand": "Fossil",
    "price": 229,
    "id": 4010,
    "category": "smartwatches",
    "description": "Advanced Fossil smartwatch with health tracking.",
    "discountPercentage": 14,
    "rating": 4.6,
    "stock": 131,
    "thumbnail": "https://images.unsplash.com/photo-1603504351657-36e655d496a3?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1603504351657-36e655d496a3?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Huawei Watch 4 Pro",
    "brand": "Huawei",
    "price": 549,
    "id": 4011,
    "category": "smartwatches",
    "description": "Advanced Huawei smartwatch with health tracking.",
    "discountPercentage": 13,
    "rating": 4.8,
    "stock": 178,
    "thumbnail": "https://images.unsplash.com/photo-1584661858548-c89b7e7046e0?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1584661858548-c89b7e7046e0?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "TicWatch Pro 5",
    "brand": "Mobvoi",
    "price": 349,
    "id": 4012,
    "category": "smartwatches",
    "description": "Advanced Mobvoi smartwatch with health tracking.",
    "discountPercentage": 11,
    "rating": 4.9,
    "stock": 125,
    "thumbnail": "https://images.unsplash.com/photo-1572111306350-f8f4135ab258?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1572111306350-f8f4135ab258?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Suunto 9 Peak Pro",
    "brand": "Suunto",
    "price": 499,
    "id": 4013,
    "category": "smartwatches",
    "description": "Advanced Suunto smartwatch with health tracking.",
    "discountPercentage": 13,
    "rating": 4.5,
    "stock": 67,
    "thumbnail": "https://images.unsplash.com/photo-1578345945377-fec5db70e8cb?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1578345945377-fec5db70e8cb?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Polar Vantage V3",
    "brand": "Polar",
    "price": 599,
    "id": 4014,
    "category": "smartwatches",
    "description": "Advanced Polar smartwatch with health tracking.",
    "discountPercentage": 4,
    "rating": 4.8,
    "stock": 142,
    "thumbnail": "https://images.unsplash.com/photo-1610486007412-f7ce3a207221?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1610486007412-f7ce3a207221?auto=format&fit=crop&w=500&q=80"
    ]
  },
  {
    "title": "Apple Watch SE (2nd Gen)",
    "brand": "Apple",
    "price": 249,
    "id": 4015,
    "category": "smartwatches",
    "description": "Advanced Apple smartwatch with health tracking.",
    "discountPercentage": 1,
    "rating": 4.9,
    "stock": 58,
    "thumbnail": "https://images.unsplash.com/photo-1509191060930-4e12c19c9b13?auto=format&fit=crop&w=500&q=80",
    "images": [
      "https://images.unsplash.com/photo-1509191060930-4e12c19c9b13?auto=format&fit=crop&w=500&q=80"
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
