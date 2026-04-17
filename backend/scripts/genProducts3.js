const fs = require('fs');

const baseMobiles = [
  { b: 'Apple', t: 'iPhone 15 Pro Max', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg', p: 1199 },
  { b: 'Samsung', t: 'Galaxy S24 Ultra', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-1.jpg', p: 1299 },
  { b: 'Google', t: 'Pixel 8 Pro', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg', p: 999 },
  { b: 'OnePlus', t: '12', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg', p: 799 },
  { b: 'Xiaomi', t: '14 Ultra', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg', p: 1099 },
  { b: 'Sony', t: 'Xperia 1 V', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg', p: 1399 },
  { b: 'Samsung', t: 'Galaxy Z Fold 5', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-z-fold5-5g.jpg', p: 1799 },
  { b: 'Nothing', t: 'Phone (2)', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2.jpg', p: 599 },
  { b: 'Asus', t: 'ROG Phone 8 Pro', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/asus-rog-phone-8-pro.jpg', p: 1199 },
  { b: 'Motorola', t: 'Edge 50 Pro', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg', p: 699 },
  { b: 'Vivo', t: 'X100 Pro', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg', p: 899 },
  { b: 'Realme', t: '12 Pro+', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg', p: 499 }
];

const baseLaptops = [
  { b: 'Apple', t: 'MacBook Pro 16 (M3)', u: 'https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg', p: 2499 },
  { b: 'Dell', t: 'XPS 14', u: 'https://images.weserv.nl/?url=https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/14-9440/media-gallery/silver/touch/notebook-xps-14-9440-t-slv-gallery-1.psd?fmt=png-alpha&wid=536', p: 1699 },
  { b: 'Lenovo', t: 'ThinkPad X1 Carbon', u: 'https://images.weserv.nl/?url=https://p1-ofp.static.pub//fes/cms/2024/02/21/j5p9v87z57w1c9v6q2l5f9k4s8m0h1493035.png', p: 1899 },
  { b: 'Asus', t: 'ROG Zephyrus G14', u: 'https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/9C22B43D-4F18-479D-A33A-E6E60706F79F/w250', p: 1599 },
  { b: 'Apple', t: 'MacBook Air 15 (M3)', u: 'https://images.weserv.nl/?url=https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mba15-midnight-select-202306?wid=904&hei=840&fmt=jpeg', p: 1299 },
  { b: 'HP', t: 'Spectre x360 14', u: 'https://images.weserv.nl/?url=https://ssl-product-images.www8-hp.com/digmedialib/prodimg/mut_assets/cg_400x400/c08920173.png', p: 1499 },
  { b: 'Razer', t: 'Blade 16', u: 'https://images.weserv.nl/?url=https://assets3.razerzone.com/p0k5A8P3u9sD3r2H0k6G4x5y1bE=/300x300/https%3A%2F%2Fhybrismediacp.razerzone.com%2Fsys_master%2Froot%2Fh9a%2Fh6a%2F9676643205150%2Frazer-blade-16-2024-mercury-500x500.png', p: 2999 },
  { b: 'Microsoft', t: 'Surface Laptop 7', u: 'https://images.weserv.nl/?url=https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW1k0GZ?ver=9c4a', p: 1199 },
  { b: 'LG', t: 'Gram 14', u: 'https://images.weserv.nl/?url=https://www.lg.com/us/images/laptops/md06253456/gallery/desktop-01.jpg', p: 1299 },
  { b: 'Acer', t: 'Zenbook S 13 OLED', u: 'https://images.weserv.nl/?url=https://dlcdnwebimgs.asus.com/gain/F3C1853B-3286-4554-94E5-3ED5F78A8DBB/w250', p: 1099 }
];

const baseHeadphones = [
  { b: 'Sony', t: 'WH-1000XM5', u: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80', p: 398 },
  { b: 'Apple', t: 'AirPods Pro (2nd Gen)', u: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=500&q=80', p: 249 },
  { b: 'Bose', t: 'QuietComfort Ultra', u: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=500&q=80', p: 429 },
  { b: 'Sennheiser', t: 'Momentum 4', u: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80', p: 349 },
  { b: 'JBL', t: 'Tour One M2', u: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=80', p: 299 },
  { b: 'Beats', t: 'Studio Pro', u: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80', p: 349 },
  { b: 'Jabra', t: 'Elite 8 Active', u: 'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=500&q=80', p: 199 }
];

const baseWatches = [
  { b: 'Apple', t: 'Watch Ultra 2', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-ultra-2.jpg', p: 799 },
  { b: 'Samsung', t: 'Galaxy Watch 6 Classic', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6-classic.jpg', p: 399 },
  { b: 'Garmin', t: 'Epix Pro (Gen 2)', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-epix-pro-gen2.jpg', p: 899 },
  { b: 'Google', t: 'Pixel Watch 2', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/google-pixel-watch-2.jpg', p: 349 },
  { b: 'Apple', t: 'Watch Series 9', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/apple-watch-series-9.jpg', p: 399 },
  { b: 'OnePlus', t: 'Watch 2', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/oneplus-watch-2.jpg', p: 299 },
  { b: 'Garmin', t: 'Venu 3', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/garmin-venu-3.jpg', p: 449 },
  { b: 'Amazfit', t: 'GTR 4', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/amazfit-gtr-4.jpg', p: 199 },
  { b: 'Samsung', t: 'Galaxy Watch 6', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-watch6.jpg', p: 299 },
  { b: 'Huawei', t: 'Watch 4 Pro', u: 'https://images.weserv.nl/?url=https://fdn2.gsmarena.com/vv/bigpic/huawei-watch-4-pro.jpg', p: 549 }
];

const products = [];
let id = 1;

function addVariants(baseList, category, variants) {
  baseList.forEach(base => {
    variants.forEach((v, idx) => {
      products.push({
        id: id++,
        title: `${base.t} - ${v.label}`,
        brand: base.b,
        category: category,
        price: base.p + v.priceAdd,
        thumbnail: base.u,
        images: [base.u],
        description: `Premium ${base.b} ${category.slice(0,-1)} with incredible features. Model variant: ${v.label}`,
        discountPercentage: 5 + (idx % 15),
        rating: parseFloat((4.2 + (idx % 8) * 0.1).toFixed(1)),
        stock: 20 + (idx * 17) % 150
      });
    });
  });
}

// 12 base phones * 9 variants = 108 phones
addVariants(baseMobiles, 'smartphones', [
  { label: '128GB, Phantom Black', priceAdd: 0 },
  { label: '256GB, Phantom Black', priceAdd: 100 },
  { label: '512GB, Phantom Black', priceAdd: 250 },
  { label: '128GB, Titanium Blue', priceAdd: 0 },
  { label: '256GB, Titanium Blue', priceAdd: 100 },
  { label: '512GB, Titanium Blue', priceAdd: 250 },
  { label: '128GB, Snow White', priceAdd: 0 },
  { label: '256GB, Snow White', priceAdd: 100 },
  { label: '512GB, Snow White', priceAdd: 250 },
]);

// 10 base laptops * 10 variants = 100 laptops
addVariants(baseLaptops, 'laptops', [
  { label: '16GB RAM, 512GB SSD', priceAdd: 0 },
  { label: '32GB RAM, 512GB SSD', priceAdd: 200 },
  { label: '16GB RAM, 1TB SSD', priceAdd: 200 },
  { label: '32GB RAM, 1TB SSD', priceAdd: 400 },
  { label: '64GB RAM, 1TB SSD', priceAdd: 800 },
  { label: '16GB RAM, 2TB SSD', priceAdd: 600 },
  { label: '32GB RAM, 2TB SSD', priceAdd: 800 },
  { label: '64GB RAM, 2TB SSD', priceAdd: 1200 },
  { label: '32GB RAM, 4TB SSD', priceAdd: 1400 },
  { label: '64GB RAM, 4TB SSD', priceAdd: 1800 },
]);

// 7 base headphones * 14 variants = 98 headphones
addVariants(baseHeadphones, 'headphones', [
  { label: 'Black', priceAdd: 0 },
  { label: 'White', priceAdd: 0 },
  { label: 'Silver', priceAdd: 0 },
  { label: 'Midnight Blue', priceAdd: 0 },
  { label: 'Rose Gold', priceAdd: 20 },
  { label: 'Graphite', priceAdd: 0 },
  { label: 'Lunar Light', priceAdd: 0 },
  { label: 'Matte Black', priceAdd: 0 },
  { label: 'Ivory', priceAdd: 0 },
  { label: 'Sand', priceAdd: 0 },
  { label: 'Sage', priceAdd: 0 },
  { label: 'Navy', priceAdd: 0 },
  { label: 'Charcoal', priceAdd: 0 },
  { label: 'Mint', priceAdd: 0 },
]);

// 10 base watches * 10 variants = 100 watches
addVariants(baseWatches, 'smartwatches', [
  { label: '41mm, GPS', priceAdd: 0 },
  { label: '45mm, GPS', priceAdd: 30 },
  { label: '41mm, Cellular', priceAdd: 100 },
  { label: '45mm, Cellular', priceAdd: 130 },
  { label: '41mm, Stainless Steel', priceAdd: 200 },
  { label: '45mm, Stainless Steel', priceAdd: 230 },
  { label: '41mm, Titanium', priceAdd: 300 },
  { label: '45mm, Titanium', priceAdd: 330 },
  { label: 'Sport Band', priceAdd: 0 },
  { label: 'Milanese Loop', priceAdd: 50 },
]);

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

const customProducts: Product[] = ${JSON.stringify(products, null, 2)}

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
`;
fs.writeFileSync('src/products.ts', code);
