import axios from 'axios'

type EbayEnv = 'sandbox' | 'production'

function ebayBase(e: EbayEnv) {
  return e === 'sandbox' ? 'https://api.sandbox.ebay.com' : 'https://api.ebay.com'
}

function ebayAuthBase(e: EbayEnv) {
  return e === 'sandbox' ? 'https://api.sandbox.ebay.com' : 'https://api.ebay.com'
}

const scope = 'https://api.ebay.com/oauth/api_scope'

let tokenCache: { token: string; expMs: number; env: EbayEnv } | null = null

export function isEbayEnabled() {
  return !!process.env.EBAY_CLIENT_ID && !!process.env.EBAY_CLIENT_SECRET
}

async function getAppToken(ebayEnv: EbayEnv) {
  const now = Date.now()
  if (tokenCache && tokenCache.env === ebayEnv && now < tokenCache.expMs - 30_000) return tokenCache.token

  const clientId = process.env.EBAY_CLIENT_ID
  const clientSecret = process.env.EBAY_CLIENT_SECRET
  if (!clientId || !clientSecret) throw new Error('eBay keys not configured')

  try {
    const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
    const res = await axios.post(
      `${ebayAuthBase(ebayEnv)}/identity/v1/oauth2/token`,
      new URLSearchParams({
        grant_type: 'client_credentials',
        scope,
      }),
      {
        headers: {
          Authorization: `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        timeout: 15000,
      },
    )

    const accessToken = res.data?.access_token as string
    const expiresIn = Number(res.data?.expires_in ?? 7200)
    tokenCache = { token: accessToken, expMs: now + expiresIn * 1000, env: ebayEnv }
    return accessToken
  } catch {
    throw new Error('eBay auth failed')
  }
}

function categoryIdForTechCategory(cat: string) {
  if (cat === 'smartphones') return '9355'
  if (cat === 'laptops') return '177'
  if (cat === 'tablets') return '171485'
  if (cat === 'smartwatches') return '178893'
  return null
}

export async function ebaySearch(params: { q: string; techCategory?: string; limit?: number }) {
  const ebayEnv = (process.env.EBAY_ENV ?? 'sandbox') as EbayEnv
  const token = await getAppToken(ebayEnv)

  const limit = Math.max(1, Math.min(10, params.limit ?? 6))
  const categoryId = params.techCategory ? categoryIdForTechCategory(params.techCategory) : null

  const url = `${ebayBase(ebayEnv)}/buy/browse/v1/item_summary/search`
  let res
  try {
    res = await axios.get(url, {
      params: {
        q: params.q,
        limit,
        ...(categoryId ? { category_ids: categoryId } : {}),
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
      timeout: 15000,
    })
  } catch {
    throw new Error('eBay browse search failed')
  }

  const items = (res.data?.itemSummaries ?? []) as any[]
  return items.map((it) => ({
    title: it.title ?? '',
    price: it.price?.value ? `${it.price.value} ${it.price.currency}` : null,
    url: it.itemWebUrl ?? null,
    image: it.image?.imageUrl ?? null,
    condition: it.condition ?? null,
  }))
}
