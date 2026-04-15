import jwt from 'jsonwebtoken'
import type { SignOptions } from 'jsonwebtoken'
import { env } from './env'

export type JwtPayload = {
  sub: string
}

export function signToken(userId: string) {
  const expiresIn = env.JWT_EXPIRES_IN as SignOptions['expiresIn']
  return jwt.sign({ sub: userId } satisfies JwtPayload, env.JWT_SECRET, { expiresIn })
}

export function verifyToken(token: string): JwtPayload {
  return jwt.verify(token, env.JWT_SECRET) as JwtPayload
}
