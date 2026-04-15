import 'dotenv/config'

function required(name: string, value: string | undefined) {
  if (!value) throw new Error(`Missing env: ${name}`)
  return value
}

function optionalOrDevDefault(name: string, value: string | undefined) {
  if (value) return value
  if (process.env.NODE_ENV === 'production') throw new Error(`Missing env: ${name}`)
  return 'dev_secret_change_me'
}

export const env = {
  API_PORT: Number(process.env.PORT ?? process.env.API_PORT ?? 5174),
  WEB_ORIGIN: process.env.WEB_ORIGIN ?? 'http://localhost:5173',
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: optionalOrDevDefault('JWT_SECRET', process.env.JWT_SECRET),
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN ?? '7d',
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
  GOOGLE_SUCCESS_REDIRECT: process.env.GOOGLE_SUCCESS_REDIRECT ?? 'http://localhost:5173/auth/callback',
}
