import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import { env } from './env'
import { dbInit, dbPing } from './db'
import { getMe, googleCallbackSuccess, postLogin, postLogout, postRegister, requireAuth, setupGoogleAuth } from './auth'
import { getProductById, getProducts } from './products'
import { deleteAddress, getAddresses, postAddress } from './addresses'
import { getOrderById, getOrders, postOrder } from './orders'

async function main() {
  await dbPing()
  await dbInit()

  const app = express()

  const origins = env.WEB_ORIGIN.split(',').map((s) => s.trim()).filter(Boolean)
  app.use(
    cors({
      origin: origins.length <= 1 ? origins[0] : origins,
      credentials: true,
    }),
  )
  app.use(express.json())
  app.use(cookieParser())

  const google = setupGoogleAuth()
  if (google.enabled) {
    app.use(passport.initialize())
    app.get('/api/auth/google', passport.authenticate('google', { scope: ['profile', 'email'], session: false }))
    app.get(
      '/api/auth/google/callback',
      passport.authenticate('google', { session: false, failureRedirect: env.GOOGLE_SUCCESS_REDIRECT }),
      googleCallbackSuccess,
    )
  } else {
    app.get('/api/auth/google', (_req, res) => res.status(503).json({ message: 'Google auth not configured' }))
  }

  app.get('/api/health', (_req, res) => res.json({ ok: true }))

  app.post('/api/auth/register', postRegister)
  app.post('/api/auth/login', postLogin)
  app.post('/api/auth/logout', postLogout)
  app.get('/api/auth/me', getMe)

  app.get('/api/products', getProducts)
  app.get('/api/products/:id', getProductById)

  app.get('/api/addresses', requireAuth(), getAddresses)
  app.post('/api/addresses', requireAuth(), postAddress)
  app.delete('/api/addresses/:id', requireAuth(), deleteAddress)

  app.get('/api/orders', requireAuth(), getOrders)
  app.get('/api/orders/:id', requireAuth(), getOrderById)
  app.post('/api/orders', requireAuth(), postOrder)

  app.listen(env.API_PORT, () => {
    console.log(`TechKart API listening on http://localhost:${env.API_PORT}`)
  })
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : 'Server failed to start')
  process.exit(1)
})
