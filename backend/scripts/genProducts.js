const fs = require('fs');

const u = (url) => 'https://wsrv.nl/?url=' + encodeURIComponent(url);

const laptopsBrands = ['Apple', 'Dell', 'Lenovo', 'HP', 'Asus', 'Acer', 'MSI', 'Razer', 'Microsoft', 'Samsung'];
const laptopsSeries = ['Pro', 'Air', 'XPS', 'ThinkPad', 'Yoga', 'Spectre', 'Envy', 'ROG', 'TUF', 'Predator', 'Swift', 'Blade', 'Surface'];
const laptopsCpu = ['Intel i5', 'Intel i7', 'Intel i9', 'AMD Ryzen 5', 'AMD Ryzen 7', 'AMD Ryzen 9', 'Apple M2', 'Apple M3'];

const mobilesBrands = ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi', 'Vivo', 'Oppo', 'Realme', 'Motorola', 'Nothing'];
const mobilesSeries = ['iPhone 13', 'iPhone 14', 'iPhone 15', 'Galaxy S23', 'Galaxy S24', 'Pixel 7', 'Pixel 8', 'Nord', 'Edge', 'X90'];
const mobilesSuffix = ['Pro', 'Max', 'Ultra', 'Plus', '5G', 'Lite', 'FE'];

const headphonesBrands = ['Sony', 'Bose', 'Sennheiser', 'Apple', 'JBL', 'Beats', 'Jabra', 'Skullcandy', 'Marshall'];
const headphonesSeries = ['WH-1000XM5', 'QuietComfort', 'Momentum', 'AirPods', 'Live', 'Elite', 'Crusher', 'Major'];
const headphonesSuffix = ['Pro', 'Max', 'Wireless', 'ANC', 'Over-Ear', 'Earbuds'];

const watchesBrands = ['Apple', 'Samsung', 'Garmin', 'Fitbit', 'Amazfit', 'Fossil', 'Huawei', 'Noise', 'boAt'];
const watchesSeries = ['Watch Series 9', 'Watch Ultra', 'Galaxy Watch 6', 'Fenix 7', 'Venu 3', 'Versa 4', 'GTR 4', 'ColorFit'];

const phoneImgs = [
  '81Os1SDWpcL._AC_UY327_FMwebp_QL65_.jpg', '71CXhVhpM0L._AC_UY327_FMwebp_QL65_.jpg', 
  '71BvE1K4BFL._AC_UY327_FMwebp_QL65_.jpg', '717Qo4MH97L._AC_UY327_FMwebp_QL65_.jpg', 
  '716H-L1AdfL._AC_UY327_FMwebp_QL65_.jpg'
];

const laptopImgs = [
  '71pC69I3lzL._AC_UY327_FMwebp_QL65_.jpg', '71kK1G90P2L._AC_UY327_FMwebp_QL65_.jpg', 
  '71vDCEzV-eL._AC_UY327_FMwebp_QL65_.jpg', '71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg', 
  '71S-XjIaHPL._AC_UY327_FMwebp_QL65_.jpg'
];

const headphoneImgs = [
  '61+sREJjNPL._AC_UY327_FMwebp_QL65_.jpg', '51+e7xyBicL._AC_UY327_FMwebp_QL65_.jpg',
  '71+L1zT9mVL._AC_UY327_FMwebp_QL65_.jpg', '61O9tN6-mGL._AC_UY327_FMwebp_QL65_.jpg',
  '61vNlP7XUuL._AC_UY327_FMwebp_QL65_.jpg'
];

const watchImgs = [
  '81xXDsT7b0L._AC_UY327_FMwebp_QL65_.jpg', '61Uv5X0+T-L._AC_UY327_FMwebp_QL65_.jpg', 
  '71XkO1E5N8L._AC_UY327_FMwebp_QL65_.jpg', '61oJvI7R6WL._AC_UY327_FMwebp_QL65_.jpg', 
  '61pZ+5LzL+L._AC_UY327_FMwebp_QL65_.jpg'
];

const getUrl = (arr, i) => `https://m.media-amazon.com/images/I/${arr[i % arr.length]}`;

function randomPick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function randomInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

const products = [];
let id = 1;

for (let i = 0; i < 100; i++) {
  const b = randomPick(mobilesBrands);
  const s = randomPick(mobilesSeries);
  const x = randomPick(mobilesSuffix);
  const title = `${b} ${s} ${x}`;
  products.push({
    id: id++, title, brand: b, category: 'smartphones',
    price: randomInt(300, 1500),
    thumbnail: getUrl(phoneImgs, i), images: [getUrl(phoneImgs, i)],
    description: `High performance ${b} mobile phone with advanced camera and fast processing.`,
    discountPercentage: randomInt(5, 25), rating: (4.0 + Math.random()).toFixed(1), stock: randomInt(10, 500)
  });
}

for (let i = 0; i < 100; i++) {
  const b = randomPick(laptopsBrands);
  const s = randomPick(laptopsSeries);
  const c = randomPick(laptopsCpu);
  const title = `${b} ${s} 14" ${c}`;
  products.push({
    id: id++, title, brand: b, category: 'laptops',
    price: randomInt(600, 3500),
    thumbnail: getUrl(laptopImgs, i), images: [getUrl(laptopImgs, i)],
    description: `Powerful ${b} laptop for gaming and productivity with ${c}.`,
    discountPercentage: randomInt(5, 20), rating: (4.0 + Math.random()).toFixed(1), stock: randomInt(10, 200)
  });
}

for (let i = 0; i < 100; i++) {
  const b = randomPick(headphonesBrands);
  const s = randomPick(headphonesSeries);
  const x = randomPick(headphonesSuffix);
  const title = `${b} ${s} ${x}`;
  products.push({
    id: id++, title, brand: b, category: 'headphones',
    price: randomInt(50, 400),
    thumbnail: getUrl(headphoneImgs, i), images: [getUrl(headphoneImgs, i)],
    description: `Premium ${b} audio experience with active noise cancellation.`,
    discountPercentage: randomInt(10, 30), rating: (4.0 + Math.random()).toFixed(1), stock: randomInt(20, 800)
  });
}

for (let i = 0; i < 100; i++) {
  const b = randomPick(watchesBrands);
  const s = randomPick(watchesSeries);
  const title = `${b} ${s}`;
  products.push({
    id: id++, title, brand: b, category: 'smartwatches',
    price: randomInt(100, 800),
    thumbnail: getUrl(watchImgs, i), images: [getUrl(watchImgs, i)],
    description: `Smart fitness tracking ${b} watch with AMOLED display.`,
    discountPercentage: randomInt(5, 40), rating: (4.0 + Math.random()).toFixed(1), stock: randomInt(50, 600)
  });
}

const code = `import type { Request, Response } from 'express'

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

const customProducts: Product[] = ${JSON.stringify(products, null, 2).replace(/"rating": "([0-9.]+)"/g, '"rating": $1')}

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
`;
fs.writeFileSync('backend/src/products.ts', code);
