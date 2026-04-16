import { USD_TO_INR } from '@/constants/techkart'

export function toInrFromUsd(usd: number) {
  return Math.round(usd * USD_TO_INR)
}

export function formatInr(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

