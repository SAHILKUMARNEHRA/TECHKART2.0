import type { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { env } from './env'
import { signToken, verifyToken } from './jwt'
import { createUserEmail, findUserByEmail, findUserByGoogleId, findUserById, upsertGoogleUser } from './db'

type SafeUser = { id: string; email: string | null; name: string | null }

function safeUser(u: { id: string; email: string | null; name: string | null }): SafeUser {
  return { id: u.id, email: u.email, name: u.name }
}

function setAuthCookie(res: Response, token: string) {
  const isProd = process.env.NODE_ENV === 'production'
  res.cookie('tk_token', token, {
    httpOnly: true,
    sameSite: isProd ? 'none' : 'lax',
    secure: isProd,
    path: '/',
  })
}

export async function getUserFromRequest(req: Request): Promise<SafeUser | null> {
  const token = req.cookies?.tk_token as string | undefined
  if (!token) return null
  try {
    const payload = verifyToken(token)
    const user = await findUserById(payload.sub)
    return user ? safeUser(user) : null
  } catch {
    return null
  }
}

export function requireAuth() {
  return async (req: Request, res: Response, next: (err?: unknown) => void) => {
    const user = await getUserFromRequest(req)
    if (!user) {
      res.status(401).json({ message: 'Unauthorized' })
      return
    }
    ;(req as any).user = user
    next()
  }
}

export async function postRegister(req: Request, res: Response) {
  const email = String(req.body?.email ?? '').trim().toLowerCase()
  const password = String(req.body?.password ?? '')
  const name = String(req.body?.name ?? '').trim()

  if (!email || !password || !name) {
    res.status(400).json({ message: 'Missing fields' })
    return
  }

  const existing = await findUserByEmail(email)
  if (existing) {
    res.status(409).json({ message: 'Email already in use' })
    return
  }

  const passwordHash = await bcrypt.hash(password, 10)
  const user = await createUserEmail({ email, passwordHash, name })
  const token = signToken(user.id)
  setAuthCookie(res, token)
  res.json({ user: safeUser(user) })
}

export async function postLogin(req: Request, res: Response) {
  const email = String(req.body?.email ?? '').trim().toLowerCase()
  const password = String(req.body?.password ?? '')

  if (!email || !password) {
    res.status(400).json({ message: 'Missing fields' })
    return
  }

  const user = await findUserByEmail(email)
  if (!user || !user.password_hash) {
    res.status(401).json({ message: 'Invalid credentials' })
    return
  }

  const ok = await bcrypt.compare(password, user.password_hash)
  if (!ok) {
    res.status(401).json({ message: 'Invalid credentials' })
    return
  }

  const token = signToken(user.id)
  setAuthCookie(res, token)
  res.json({ user: safeUser(user) })
}

export async function postLogout(_req: Request, res: Response) {
  res.clearCookie('tk_token', { path: '/' })
  res.json({ ok: true })
}

export async function getMe(req: Request, res: Response) {
  const user = await getUserFromRequest(req)
  res.json({ user })
}

export function setupGoogleAuth() {
  const clientID = env.GOOGLE_CLIENT_ID
  const clientSecret = env.GOOGLE_CLIENT_SECRET
  const callbackURL = env.GOOGLE_CALLBACK_URL
  if (!clientID || !clientSecret || !callbackURL) return { enabled: false as const }

  passport.use(
    new GoogleStrategy(
      { clientID, clientSecret, callbackURL },
      async (_accessToken, _refreshToken, profile, done) => {
        try {
          const googleId = profile.id
          const email = profile.emails?.[0]?.value ?? null
          const name = profile.displayName ?? null
          const user = await upsertGoogleUser({ googleId, email, name })
          done(null, safeUser(user))
        } catch (e) {
          done(e as Error)
        }
      },
    ),
  )

  return { enabled: true as const }
}

export function googleCallbackSuccess(req: Request, res: Response) {
  const user = req.user as SafeUser | undefined
  if (!user) {
    res.redirect(env.GOOGLE_SUCCESS_REDIRECT)
    return
  }
  const token = signToken(user.id)
  setAuthCookie(res, token)
  res.redirect(env.GOOGLE_SUCCESS_REDIRECT)
}
