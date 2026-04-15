import pg from 'pg'
import { env } from './env'

const { Pool } = pg

const isPgEnabled = !!env.DATABASE_URL

export const pool = isPgEnabled
  ? new Pool({
      connectionString: env.DATABASE_URL,
      max: 5,
    })
  : null

export async function dbPing() {
  if (!pool) return
  await pool.query('select 1 as ok')
}

export async function dbInit() {
  if (!pool) return
  await pool.query(`
    create table if not exists users (
      id bigserial primary key,
      email text unique,
      password_hash text,
      name text,
      google_id text unique,
      created_at timestamptz not null default now()
    );

    create table if not exists addresses (
      id bigserial primary key,
      user_id bigint not null references users(id) on delete cascade,
      label text not null,
      full_name text not null,
      phone text not null,
      line1 text not null,
      line2 text,
      city text not null,
      state text not null,
      pincode text not null,
      created_at timestamptz not null default now()
    );

    create table if not exists orders (
      id bigserial primary key,
      user_id bigint not null references users(id) on delete cascade,
      address_snapshot jsonb not null,
      payment_method text not null,
      payment_status text not null,
      total_inr integer not null,
      eta_days_min integer not null default 3,
      eta_days_max integer not null default 5,
      created_at timestamptz not null default now()
    );

    create table if not exists order_items (
      id bigserial primary key,
      order_id bigint not null references orders(id) on delete cascade,
      product_id integer not null,
      title text not null,
      thumbnail text,
      category text not null,
      brand text,
      unit_price_inr integer not null,
      qty integer not null,
      line_total_inr integer not null
    );
  `)
}

export type DbUser = {
  id: string
  email: string | null
  name: string | null
  google_id: string | null
  password_hash: string | null
}

type MemUser = DbUser & { created_at: string }

let memId = 1
const memUsers: MemUser[] = []

export async function findUserByEmail(email: string): Promise<DbUser | null> {
  if (!pool) {
    return memUsers.find((u) => (u.email ?? '').toLowerCase() === email.toLowerCase()) ?? null
  }
  const res = await pool.query(`select id::text, email, name, google_id, password_hash from users where email = $1 limit 1`, [
    email,
  ])
  return res.rows[0] ?? null
}

export async function findUserById(id: string): Promise<DbUser | null> {
  if (!pool) {
    return memUsers.find((u) => u.id === id) ?? null
  }
  const res = await pool.query(`select id::text, email, name, google_id, password_hash from users where id = $1 limit 1`, [id])
  return res.rows[0] ?? null
}

export async function findUserByGoogleId(googleId: string): Promise<DbUser | null> {
  if (!pool) {
    return memUsers.find((u) => u.google_id === googleId) ?? null
  }
  const res = await pool.query(
    `select id::text, email, name, google_id, password_hash from users where google_id = $1 limit 1`,
    [googleId],
  )
  return res.rows[0] ?? null
}

export async function createUserEmail(params: { email: string; passwordHash: string; name: string }) {
  if (!pool) {
    const user: MemUser = {
      id: String(memId++),
      email: params.email,
      name: params.name,
      google_id: null,
      password_hash: params.passwordHash,
      created_at: new Date().toISOString(),
    }
    memUsers.push(user)
    return user
  }

  const res = await pool.query(
    `insert into users (email, password_hash, name) values ($1, $2, $3)
     returning id::text, email, name, google_id, password_hash`,
    [params.email, params.passwordHash, params.name],
  )
  return res.rows[0] as DbUser
}

export async function upsertGoogleUser(params: { googleId: string; email: string | null; name: string | null }) {
  if (!pool) {
    const existing = memUsers.find((u) => u.google_id === params.googleId)
    if (existing) {
      existing.email = params.email
      existing.name = params.name
      return existing
    }
    const user: MemUser = {
      id: String(memId++),
      email: params.email,
      name: params.name,
      google_id: params.googleId,
      password_hash: null,
      created_at: new Date().toISOString(),
    }
    memUsers.push(user)
    return user
  }

  const res = await pool.query(
    `insert into users (google_id, email, name) values ($1, $2, $3)
     on conflict (google_id)
     do update set email = excluded.email, name = excluded.name
     returning id::text, email, name, google_id, password_hash`,
    [params.googleId, params.email, params.name],
  )
  return res.rows[0] as DbUser
}
