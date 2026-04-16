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

const customProducts: Product[] = [
  // Smartphones
  {
    id: 1001,
    title: 'Apple iPhone 15 Pro Max',
    description: 'The ultimate iPhone featuring aerospace-grade titanium, A17 Pro chip, and the most advanced Pro camera system ever.',
    price: 1199,
    discountPercentage: 5,
    rating: 4.9,
    stock: 120,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg',
    images: ['https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg']
  },
  {
    id: 1002,
    title: 'Samsung Galaxy S24 Ultra',
    description: 'Galaxy AI is here. Welcome to the era of mobile AI. With Galaxy S24 Ultra in your hands, you can unleash whole new levels of creativity.',
    price: 1299,
    discountPercentage: 8,
    rating: 4.8,
    stock: 85,
    brand: 'Samsung',
    category: 'smartphones',
    thumbnail: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg',
    images: ['https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg']
  },
  {
    id: 1003,
    title: 'Google Pixel 8 Pro',
    description: 'The best of Google AI. Powerful Tensor G3 chip, advanced cameras, and 7 years of OS updates.',
    price: 999,
    discountPercentage: 10,
    rating: 4.7,
    stock: 150,
    brand: 'Google',
    category: 'smartphones',
    thumbnail: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg',
    images: ['https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg']
  },
  {
    id: 1004,
    title: 'OnePlus 12',
    description: 'Smooth Beyond Belief. Snapdragon 8 Gen 3, Hasselblad Camera for Mobile, and ultra-fast charging.',
    price: 799,
    discountPercentage: 6,
    rating: 4.6,
    stock: 200,
    brand: 'OnePlus',
    category: 'smartphones',
    thumbnail: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg',
    images: ['https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg']
  },
  {
    id: 1005,
    title: 'Xiaomi 14 Ultra',
    description: 'Co-engineered with Leica. Professional-grade quad camera system and stunning AMOLED display.',
    price: 1099,
    discountPercentage: 12,
    rating: 4.7,
    stock: 90,
    brand: 'Xiaomi',
    category: 'smartphones',
    thumbnail: 'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg',
    images: ['https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg']
  },
  {
    id: 1006,
    title: 'Sony Xperia 1 V',
    description: 'Professional camera technology in a smartphone. Features a next-gen Exmor T mobile sensor.',
    price: 1399,
    discountPercentage: 4,
    rating: 4.5,
    stock: 45,
    brand: 'Sony',
    category: 'smartphones',
    thumbnail: 'https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg',
    images: ['https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg']
  },
  {
    id: 1007,
    title: 'Samsung Galaxy Z Fold 5',
    description: 'The ultimate foldable experience. Multitask like a pro with a massive inner screen.',
    price: 1799,
    discountPercentage: 15,
    rating: 4.8,
    stock: 60,
    brand: 'Samsung',
    category: 'smartphones',
    thumbnail: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg',
    images: ['https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg']
  },
  {
    id: 1008,
    title: 'Nothing Phone (2)',
    description: 'Iconic transparent design with Glyph Interface. Powered by Snapdragon 8+ Gen 1.',
    price: 599,
    discountPercentage: 8,
    rating: 4.5,
    stock: 300,
    brand: 'Nothing',
    category: 'smartphones',
    thumbnail: 'https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg',
    images: ['https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg']
  },
  {
    id: 1009,
    title: 'Asus ROG Phone 8 Pro',
    description: 'The ultimate gaming phone. Unmatched cooling, massive battery, and gaming triggers.',
    price: 1199,
    discountPercentage: 5,
    rating: 4.7,
    stock: 75,
    brand: 'Asus',
    category: 'smartphones',
    thumbnail: 'https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg',
    images: ['https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg']
  },
  {
    id: 1010,
    title: 'Motorola Edge 50 Pro',
    description: 'Beautifully crafted with Pantone validated colors and a gorgeous curved display.',
    price: 699,
    discountPercentage: 10,
    rating: 4.4,
    stock: 120,
    brand: 'Motorola',
    category: 'smartphones',
    thumbnail: 'https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg',
    images: ['https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg']
  },

  // Laptops
  {
    id: 2001,
    title: 'Apple MacBook Pro 16" (M3 Max)',
    description: 'Mind-blowing. Head-turning. The most advanced Mac ever with M3 Max chip.',
    price: 3499,
    discountPercentage: 0,
    rating: 4.9,
    stock: 40,
    brand: 'Apple',
    category: 'laptops',
    thumbnail: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1698169223815',
    images: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1698169223815']
  },
  {
    id: 2002,
    title: 'Dell XPS 14',
    description: 'A perfect balance of power and portability, featuring Intel Core Ultra processors.',
    price: 1699,
    discountPercentage: 10,
    rating: 4.7,
    stock: 85,
    brand: 'Dell',
    category: 'laptops',
    thumbnail: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=536&qlt=100,1&resMode=sharp2&size=536,402&chrss=full',
    images: ['https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=536&qlt=100,1&resMode=sharp2&size=536,402&chrss=full']
  },
  {
    id: 2003,
    title: 'Lenovo ThinkPad X1 Carbon Gen 12',
    description: 'Premium business laptop with aerospace-grade carbon fiber and all-day battery life.',
    price: 1899,
    discountPercentage: 15,
    rating: 4.8,
    stock: 110,
    brand: 'Lenovo',
    category: 'laptops',
    thumbnail: 'https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png',
    images: ['https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png']
  },
  {
    id: 2004,
    title: 'ASUS ROG Zephyrus G14 (2024)',
    description: 'Ultra-sleek gaming powerhouse with an OLED display and RTX 40-series graphics.',
    price: 1599,
    discountPercentage: 5,
    rating: 4.8,
    stock: 65,
    brand: 'Asus',
    category: 'laptops',
    thumbnail: 'https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250',
    images: ['https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250']
  },
  {
    id: 2005,
    title: 'Apple MacBook Air 15" (M3)',
    description: 'Supercharged by M3. Lean. Mean. M3 machine. With a stunning 15-inch Liquid Retina display.',
    price: 1299,
    discountPercentage: 0,
    rating: 4.9,
    stock: 200,
    brand: 'Apple',
    category: 'laptops',
    thumbnail: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684518479433',
    images: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1684518479433']
  },
  {
    id: 2006,
    title: 'HP Spectre x360 14',
    description: 'Versatile 2-in-1 laptop with stunning OLED display and premium craftsmanship.',
    price: 1499,
    discountPercentage: 12,
    rating: 4.6,
    stock: 90,
    brand: 'HP',
    category: 'laptops',
    thumbnail: 'https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png',
    images: ['https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png']
  },
  {
    id: 2007,
    title: 'Razer Blade 16',
    description: 'Desktop-grade performance in a laptop chassis. Features the world\'s first dual-mode Mini-LED display.',
    price: 2999,
    discountPercentage: 0,
    rating: 4.7,
    stock: 30,
    brand: 'Razer',
    category: 'laptops',
    thumbnail: 'https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png',
    images: ['https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png']
  },
  {
    id: 2008,
    title: 'Microsoft Surface Laptop 7',
    description: 'Copilot+ PC featuring Snapdragon X Elite for incredible battery life and AI capabilities.',
    price: 1199,
    discountPercentage: 5,
    rating: 4.5,
    stock: 150,
    brand: 'Microsoft',
    category: 'laptops',
    thumbnail: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a',
    images: ['https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a']
  },
  {
    id: 2009,
    title: 'LG Gram 14',
    description: 'Incredibly lightweight and powerful. Weighs under 1kg with a gorgeous IPS display.',
    price: 1299,
    discountPercentage: 15,
    rating: 4.6,
    stock: 70,
    brand: 'LG',
    category: 'laptops',
    thumbnail: 'https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg',
    images: ['https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg']
  },
  {
    id: 2010,
    title: 'Acer Zenbook S 13 OLED',
    description: 'Ultraportable design with an exceptional OLED screen and long-lasting battery.',
    price: 1099,
    discountPercentage: 8,
    rating: 4.7,
    stock: 100,
    brand: 'Acer',
    category: 'laptops',
    thumbnail: 'https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250',
    images: ['https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250']
  },

  // Tablets
  {
    id: 3001,
    title: 'Apple iPad Pro 13" (M4)',
    description: 'Outrageous performance. Incredibly thin. Featuring the groundbreaking Ultra Retina XDR display.',
    price: 1299,
    discountPercentage: 0,
    rating: 4.9,
    stock: 150,
    brand: 'Apple',
    category: 'tablets',
    thumbnail: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-13-select-wifi-spaceblack-202405?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1713308273620',
    images: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-13-select-wifi-spaceblack-202405?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1713308273620']
  },
  {
    id: 3002,
    title: 'Samsung Galaxy Tab S9 Ultra',
    description: 'The largest Dynamic AMOLED 2X display. IP68 water and dust resistant. S Pen included.',
    price: 1199,
    discountPercentage: 10,
    rating: 4.8,
    stock: 80,
    brand: 'Samsung',
    category: 'tablets',
    thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-x910nzaeinu/gallery/in-galaxy-tab-s9-ultra-wifi-x910-sm-x910nzaeinu-537827827?$650_519_PNG$',
    images: ['https://images.samsung.com/is/image/samsung/p6pim/in/sm-x910nzaeinu/gallery/in-galaxy-tab-s9-ultra-wifi-x910-sm-x910nzaeinu-537827827?$650_519_PNG$']
  },
  {
    id: 3003,
    title: 'Apple iPad Air 11" (M2)',
    description: 'Supercharged by M2. Landscape front camera. Beautiful Liquid Retina display.',
    price: 599,
    discountPercentage: 5,
    rating: 4.8,
    stock: 250,
    brand: 'Apple',
    category: 'tablets',
    thumbnail: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-11-select-wifi-blue-202405?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1713306894082',
    images: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-11-select-wifi-blue-202405?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1713306894082']
  },
  {
    id: 3004,
    title: 'Google Pixel Tablet',
    description: 'The tablet that\'s always ready to help, and doubles as a smart display with the Charging Speaker Dock.',
    price: 499,
    discountPercentage: 15,
    rating: 4.5,
    stock: 120,
    brand: 'Google',
    category: 'tablets',
    thumbnail: 'https://lh3.googleusercontent.com/P1yXz-4Z-rX-Yw5w2O4A8j_g7pZ6N0q6v9T0a7d9q1G8k4V7m8_Q4s2o6r4k8l1s6f0w5=w600',
    images: ['https://lh3.googleusercontent.com/P1yXz-4Z-rX-Yw5w2O4A8j_g7pZ6N0q6v9T0a7d9q1G8k4V7m8_Q4s2o6r4k8l1s6f0w5=w600']
  },
  {
    id: 3005,
    title: 'OnePlus Pad 2',
    description: 'Incredibly smooth 144Hz display, powerful Snapdragon processor, and elegant unibody design.',
    price: 499,
    discountPercentage: 10,
    rating: 4.6,
    stock: 95,
    brand: 'OnePlus',
    category: 'tablets',
    thumbnail: 'https://image01.oneplus.net/ebp/202406/18/1-m00-5e-65-cbaigmy1t8mabe6faads0i_a5k0154.png',
    images: ['https://image01.oneplus.net/ebp/202406/18/1-m00-5e-65-cbaigmy1t8mabe6faads0i_a5k0154.png']
  },
  {
    id: 3006,
    title: 'Samsung Galaxy Tab S9 FE',
    description: 'Vibrant display, long-lasting battery, and S Pen included for creative minds.',
    price: 449,
    discountPercentage: 12,
    rating: 4.5,
    stock: 180,
    brand: 'Samsung',
    category: 'tablets',
    thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-x510nzaeinu/gallery/in-galaxy-tab-s9-fe-sm-x510-sm-x510nzaeinu-538466657?$650_519_PNG$',
    images: ['https://images.samsung.com/is/image/samsung/p6pim/in/sm-x510nzaeinu/gallery/in-galaxy-tab-s9-fe-sm-x510-sm-x510nzaeinu-538466657?$650_519_PNG$']
  },
  {
    id: 3007,
    title: 'Lenovo Tab P12 Pro',
    description: 'Immersive 12.6" 2K AMOLED display and premium audio for entertainment and productivity.',
    price: 599,
    discountPercentage: 20,
    rating: 4.4,
    stock: 60,
    brand: 'Lenovo',
    category: 'tablets',
    thumbnail: 'https://p2-ofp.static.pub/ShareResource/we/Products/tablets/lenovo-tab-p12-pro/lenovo-tab-p12-pro-hero.png',
    images: ['https://p2-ofp.static.pub/ShareResource/we/Products/tablets/lenovo-tab-p12-pro/lenovo-tab-p12-pro-hero.png']
  },
  {
    id: 3008,
    title: 'Apple iPad mini (6th gen)',
    description: 'Mega power. Mini sized. All-screen design with A15 Bionic chip.',
    price: 499,
    discountPercentage: 10,
    rating: 4.8,
    stock: 220,
    brand: 'Apple',
    category: 'tablets',
    thumbnail: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-select-wifi-starlight-202109?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1629840742000',
    images: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-select-wifi-starlight-202109?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1629840742000']
  },
  {
    id: 3009,
    title: 'Xiaomi Pad 6',
    description: 'Flagship-level performance with a 144Hz WQHD+ eye-care display.',
    price: 399,
    discountPercentage: 15,
    rating: 4.5,
    stock: 130,
    brand: 'Xiaomi',
    category: 'tablets',
    thumbnail: 'https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-pad-6/specs-01.png',
    images: ['https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-pad-6/specs-01.png']
  },
  {
    id: 3010,
    title: 'Microsoft Surface Pro 11',
    description: 'The most flexible 2-in-1 device, now with Copilot+ AI capabilities.',
    price: 999,
    discountPercentage: 0,
    rating: 4.6,
    stock: 85,
    brand: 'Microsoft',
    category: 'tablets',
    thumbnail: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k6I2?ver=714a',
    images: ['https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k6I2?ver=714a']
  },

  // Smartwatches
  {
    id: 4001,
    title: 'Apple Watch Ultra 2',
    description: 'The most rugged and capable Apple Watch. Now with the magical double tap gesture.',
    price: 799,
    discountPercentage: 5,
    rating: 4.9,
    stock: 100,
    brand: 'Apple',
    category: 'smartwatches',
    thumbnail: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra2-titanium-alpine-indigo-s9-m_GEO_IN?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1693333333333',
    images: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra2-titanium-alpine-indigo-s9-m_GEO_IN?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1693333333333']
  },
  {
    id: 4002,
    title: 'Samsung Galaxy Watch 6 Classic',
    description: 'The rotating bezel is back. Classic design meets advanced health tracking.',
    price: 399,
    discountPercentage: 15,
    rating: 4.7,
    stock: 140,
    brand: 'Samsung',
    category: 'smartwatches',
    thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-r950nzkainu/gallery/in-galaxy-watch6-classic-r950-sm-r950nzkainu-537406456?$650_519_PNG$',
    images: ['https://images.samsung.com/is/image/samsung/p6pim/in/sm-r950nzkainu/gallery/in-galaxy-watch6-classic-r950-sm-r950nzkainu-537406456?$650_519_PNG$']
  },
  {
    id: 4003,
    title: 'Garmin Epix Pro (Gen 2)',
    description: 'Ultimate high-performance smartwatch with an AMOLED display and built-in flashlight.',
    price: 899,
    discountPercentage: 0,
    rating: 4.8,
    stock: 45,
    brand: 'Garmin',
    category: 'smartwatches',
    thumbnail: 'https://res.garmin.com/en/products/010-02803-00/g/rf-front-97f394f4-5f5f-4a0b-99f5-19e83e6b5c38.png',
    images: ['https://res.garmin.com/en/products/010-02803-00/g/rf-front-97f394f4-5f5f-4a0b-99f5-19e83e6b5c38.png']
  },
  {
    id: 4004,
    title: 'Google Pixel Watch 2',
    description: 'Help by Google. Health by Fitbit. The best of both worlds on your wrist.',
    price: 349,
    discountPercentage: 10,
    rating: 4.5,
    stock: 200,
    brand: 'Google',
    category: 'smartwatches',
    thumbnail: 'https://lh3.googleusercontent.com/yE4g0_xJ8l7q2j5h5z4k8t6q0v1b3n8m5c2z9x0v6b8n4m5c2z9x0v6b8n4m5c2z9x0v6b=w600',
    images: ['https://lh3.googleusercontent.com/yE4g0_xJ8l7q2j5h5z4k8t6q0v1b3n8m5c2z9x0v6b8n4m5c2z9x0v6b8n4m5c2z9x0v6b=w600']
  },
  {
    id: 4005,
    title: 'Apple Watch Series 9',
    description: 'Smarter. Brighter. Mightier. With the new S9 chip and a brighter display.',
    price: 399,
    discountPercentage: 5,
    rating: 4.8,
    stock: 300,
    brand: 'Apple',
    category: 'smartwatches',
    thumbnail: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s9-aluminum-midnight-sport-band-midnight-m_GEO_IN?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1693333333333',
    images: ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s9-aluminum-midnight-sport-band-midnight-m_GEO_IN?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1693333333333']
  },
  {
    id: 4006,
    title: 'OnePlus Watch 2',
    description: 'Your Partner in Time. Dual-engine architecture for 100-hour battery life.',
    price: 299,
    discountPercentage: 15,
    rating: 4.6,
    stock: 120,
    brand: 'OnePlus',
    category: 'smartwatches',
    thumbnail: 'https://image01.oneplus.net/ebp/202402/20/1-m00-5c-7b-cbaigmxw9u-abz-laaek6p5u2h0689.png',
    images: ['https://image01.oneplus.net/ebp/202402/20/1-m00-5c-7b-cbaigmxw9u-abz-laaek6p5u2h0689.png']
  },
  {
    id: 4007,
    title: 'Garmin Venu 3',
    description: 'Premium GPS smartwatch with an AMOLED display and up to 14 days of battery.',
    price: 449,
    discountPercentage: 0,
    rating: 4.7,
    stock: 80,
    brand: 'Garmin',
    category: 'smartwatches',
    thumbnail: 'https://res.garmin.com/en/products/010-02784-00/g/rf-front-4f6c4b2e-0d1a-4c2f-8a5d-2b4b4b4b4b4b.png',
    images: ['https://res.garmin.com/en/products/010-02784-00/g/rf-front-4f6c4b2e-0d1a-4c2f-8a5d-2b4b4b4b4b4b.png']
  },
  {
    id: 4008,
    title: 'Amazfit Smartwatch GTR 4',
    description: 'Fitness made easy. Large AMOLED display and incredibly long battery life.',
    price: 199,
    discountPercentage: 20,
    rating: 4.4,
    stock: 250,
    brand: 'Amazfit',
    category: 'smartwatches',
    thumbnail: 'https://www.amazfit.com/cdn/shop/products/gtr4-1.png',
    images: ['https://www.amazfit.com/cdn/shop/products/gtr4-1.png']
  },
  {
    id: 4009,
    title: 'Samsung Galaxy Watch 6',
    description: 'Everyday health tracking with a larger screen and thinner bezel.',
    price: 299,
    discountPercentage: 10,
    rating: 4.6,
    stock: 180,
    brand: 'Samsung',
    category: 'smartwatches',
    thumbnail: 'https://images.samsung.com/is/image/samsung/p6pim/in/sm-r930nzsainu/gallery/in-galaxy-watch6-r930-sm-r930nzsainu-537406456?$650_519_PNG$',
    images: ['https://images.samsung.com/is/image/samsung/p6pim/in/sm-r930nzsainu/gallery/in-galaxy-watch6-r930-sm-r930nzsainu-537406456?$650_519_PNG$']
  },
  {
    id: 4010,
    title: 'Fossil Gen 6 Smartwatch',
    description: 'Classic watch design powered with Wear OS by Google.',
    price: 229,
    discountPercentage: 30,
    rating: 4.3,
    stock: 90,
    brand: 'Fossil',
    category: 'smartwatches',
    thumbnail: 'https://fossil.scene7.com/is/image/FossilPartners/FTW4059_main?$sfcc_fos_large$',
    images: ['https://fossil.scene7.com/is/image/FossilPartners/FTW4059_main?$sfcc_fos_large$']
  }
]

async function getCatalog() {
  return customProducts
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
