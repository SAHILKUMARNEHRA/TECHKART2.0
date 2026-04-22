import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CheckCircle2, MapPin, Wallet } from 'lucide-react'
import Button from '@/components/Button'
import EmptyState from '@/components/EmptyState'
import Skeleton from '@/components/Skeleton'
import AuthModal from '@/components/AuthModal'
import { useAuthStore } from '@/stores/authStore'
import { useCartStore } from '@/stores/cartStore'
import { useCatalogStore } from '@/stores/catalogStore'
import { useToastStore } from '@/stores/toastStore'
import { apiGetAddresses, type Address } from '@/api/addresses'
import { apiPlaceOrder } from '@/api/orders'
import { formatInr, toInrFromUsd } from '@/utils/money'

type PayMethod = 'upi' | 'cod'

export default function Checkout() {
  const navigate = useNavigate()
  const user = useAuthStore((s) => s.user)
  const loadAll = useCatalogStore((s) => s.loadAll)
  const products = useCatalogStore((s) => s.products)
  const items = useCartStore((s) => s.items)
  const clearCart = useCartStore((s) => s.clear)
  const toast = useToastStore((s) => s.push)

  const [authOpen, setAuthOpen] = useState(false)
  const [addresses, setAddresses] = useState<Address[] | null>(null)
  const [selectedAddressId, setSelectedAddressId] = useState<string>('')
  const [payMethod, setPayMethod] = useState<PayMethod>('cod')
  const [upiId, setUpiId] = useState('')
  const [placing, setPlacing] = useState(false)
  const [success, setSuccess] = useState<{ orderId: string; etaMin: number; etaMax: number } | null>(null)

  const [addrLabel, setAddrLabel] = useState('Home')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [pincode, setPincode] = useState('')

  useEffect(() => {
    void loadAll()
  }, [loadAll])

  useEffect(() => {
    if (!user) {
      setAddresses(null)
      return
    }
    ;(async () => {
      try {
        const list = await apiGetAddresses()
        setAddresses(list)
        setSelectedAddressId(list[0]?.id ?? '')
      } catch {
        setAddresses([])
      }
    })()
  }, [user])

  const lines = useMemo(() => {
    return items
      .map((it) => {
        const p = products.find((x) => x.id === it.productId)
        if (!p) return null
        const mrp = toInrFromUsd(p.price)
        const price = Math.round(mrp * (1 - p.discountPercentage / 100))
        return { product: p, qty: it.qty, unit: price, lineTotal: price * it.qty }
      })
      .filter(Boolean)
  }, [items, products])

  const subtotal = useMemo(() => lines.reduce((a, l) => a + l!.lineTotal, 0), [lines])
  const delivery = subtotal >= 499 ? 0 : 49
  const total = subtotal + delivery

  if (items.length === 0 && !success) {
    return (
      <EmptyState
        title="Nothing to checkout"
        description="Your cart is empty."
        action={
          <Link to="/products">
            <Button>Browse products</Button>
          </Link>
        }
      />
    )
  }

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-5 shadow-neon backdrop-blur-md">
            <div className="font-display text-xl font-bold text-white">Checkout</div>
            <div className="mt-1 text-sm text-slate-400">Confirm address and payment.</div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-5 shadow-neon backdrop-blur-md">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-tk-primary-2" />
              <div className="font-display text-lg font-semibold text-white">Delivery address</div>
            </div>

            {!user ? (
              <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-800/40 p-4 shadow-sm">
                <div className="text-sm font-semibold text-white">Sign in to continue</div>
                <div className="mt-1 text-sm text-slate-400">Addresses and orders are saved to your account.</div>
                <Button className="mt-4 h-11 bg-tk-primary hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]" onClick={() => setAuthOpen(true)}>
                  Login / Register
                </Button>
              </div>
            ) : addresses === null ? (
              <div className="mt-4 grid gap-2">
                <Skeleton className="h-14 w-full rounded-2xl" />
                <Skeleton className="h-14 w-full rounded-2xl" />
              </div>
            ) : (
              <div className="mt-4 grid gap-3">
                {addresses.length ? (
                  <div className="grid gap-2">
                    {addresses.map((a) => (
                      <label
                        key={a.id}
                        className="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-800 bg-slate-800/40 p-4 shadow-sm transition hover:bg-slate-800/60"
                      >
                        <input
                          type="radio"
                          name="address"
                          checked={selectedAddressId === a.id}
                          onChange={() => setSelectedAddressId(a.id)}
                          className="mt-1 h-4 w-4 accent-blue-500"
                        />
                        <div className="min-w-0">
                          <div className="text-sm font-semibold text-white">{a.label}</div>
                          <div className="mt-1 text-sm text-slate-300">
                            {a.full_name} · {a.phone}
                          </div>
                          <div className="mt-1 text-sm text-slate-400">
                            {a.line1}
                            {a.line2 ? `, ${a.line2}` : ''}, {a.city}, {a.state} - {a.pincode}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-2xl border border-slate-800 bg-slate-800/40 p-4 text-sm text-slate-300 shadow-sm">
                    No saved addresses yet. Add one below.
                  </div>
                )}

                {selectedAddressId ? (
                  <div className="text-xs text-slate-500">You can manage addresses in Profile (max 3).</div>
                ) : (
                  <div className="rounded-2xl border border-slate-800 bg-slate-800/40 p-4 shadow-sm">
                    <div className="text-sm font-semibold text-white">Add a new address</div>
                    <div className="mt-3 grid gap-2">
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          value={addrLabel}
                          onChange={(e) => setAddrLabel(e.target.value)}
                          placeholder="Label (Home/Work)"
                          className="h-11 rounded-xl border border-slate-700/50 bg-slate-950/50 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-tk-primary/50 focus:ring-4 focus:ring-tk-primary/20"
                        />
                        <input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone"
                          className="h-11 rounded-xl border border-slate-700/50 bg-slate-950/50 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-tk-primary/50 focus:ring-4 focus:ring-tk-primary/20"
                        />
                      </div>
                      <input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full name"
                        className="h-11 rounded-xl border border-slate-700/50 bg-slate-950/50 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-tk-primary/50 focus:ring-4 focus:ring-tk-primary/20"
                      />
                      <input
                        value={line1}
                        onChange={(e) => setLine1(e.target.value)}
                        placeholder="Address line 1"
                        className="h-11 rounded-xl border border-slate-700/50 bg-slate-950/50 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-tk-primary/50 focus:ring-4 focus:ring-tk-primary/20"
                      />
                      <input
                        value={line2}
                        onChange={(e) => setLine2(e.target.value)}
                        placeholder="Address line 2 (optional)"
                        className="h-11 rounded-xl border border-slate-700/50 bg-slate-950/50 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-tk-primary/50 focus:ring-4 focus:ring-tk-primary/20"
                      />
                      <div className="grid grid-cols-3 gap-2">
                        <input
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="City"
                          className="h-11 rounded-xl border border-slate-700/50 bg-slate-950/50 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-tk-primary/50 focus:ring-4 focus:ring-tk-primary/20"
                        />
                        <input
                          value={state}
                          onChange={(e) => setState(e.target.value)}
                          placeholder="State"
                          className="h-11 rounded-xl border border-slate-700/50 bg-slate-950/50 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-tk-primary/50 focus:ring-4 focus:ring-tk-primary/20"
                        />
                        <input
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value)}
                          placeholder="Pincode"
                          className="h-11 rounded-xl border border-slate-700/50 bg-slate-950/50 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-tk-primary/50 focus:ring-4 focus:ring-tk-primary/20"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-5 shadow-neon backdrop-blur-md">
            <div className="flex items-center gap-2">
              <Wallet size={18} className="text-tk-primary-2" />
              <div className="font-display text-lg font-semibold text-white">Payment</div>
            </div>

            <div className="mt-4 grid gap-2">
              <label className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-800/40 p-4 shadow-sm transition hover:bg-slate-800/60">
                <div>
                  <div className="text-sm font-semibold text-white">UPI</div>
                  <div className="mt-1 text-sm text-slate-400">Pay instantly (simulated)</div>
                </div>
                <input
                  type="radio"
                  name="pay"
                  checked={payMethod === 'upi'}
                  onChange={() => setPayMethod('upi')}
                  className="h-4 w-4 accent-blue-500"
                />
              </label>
              {payMethod === 'upi' ? (
                <input
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="UPI ID (optional)"
                  className="h-11 rounded-xl border border-slate-700/50 bg-slate-950/50 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-tk-primary/50 focus:ring-4 focus:ring-tk-primary/20"
                />
              ) : null}

              <label className="flex cursor-pointer items-center justify-between gap-3 rounded-2xl border border-slate-800 bg-slate-800/40 p-4 shadow-sm transition hover:bg-slate-800/60">
                <div>
                  <div className="text-sm font-semibold text-white">Cash on Delivery</div>
                  <div className="mt-1 text-sm text-slate-400">Pay when delivered</div>
                </div>
                <input
                  type="radio"
                  name="pay"
                  checked={payMethod === 'cod'}
                  onChange={() => setPayMethod('cod')}
                  className="h-4 w-4 accent-blue-500"
                />
              </label>
            </div>
          </div>
        </div>

        <div className="sticky top-20 space-y-4">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-neon backdrop-blur-md">
            <div className="font-display text-2xl font-bold text-white">Order summary</div>
            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-white">{formatInr(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Delivery</span>
                <span className="font-bold text-emerald-400">{delivery === 0 ? 'Free' : formatInr(delivery)}</span>
              </div>
              <div className="mt-4 border-t border-slate-700/50 pt-4 flex items-center justify-between">
                <span className="font-bold text-white">Total</span>
                <span className="font-display text-2xl font-bold text-white">{formatInr(total)}</span>
              </div>
            </div>

            <Button
              className="mt-8 h-12 w-full bg-tk-primary hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]"
              disabled={placing || !user}
              onClick={async () => {
                if (!user) {
                  setAuthOpen(true)
                  return
                }
                if (!selectedAddressId) {
                  if (!fullName || !phone || !line1 || !city || !state || !pincode) {
                    toast('Please fill address details')
                    return
                  }
                }

                setPlacing(true)
                try {
                  const out = await apiPlaceOrder({
                    paymentMethod: payMethod,
                    items: items.map((i) => ({ productId: i.productId, qty: i.qty })),
                    ...(selectedAddressId
                      ? { addressId: selectedAddressId }
                      : {
                          address: {
                            label: addrLabel || 'Home',
                            fullName,
                            phone,
                            line1,
                            line2: line2 || undefined,
                            city,
                            state,
                            pincode,
                          },
                        }),
                  })
                  clearCart()
                  setSuccess({ orderId: out.orderId, etaMin: out.etaDaysMin, etaMax: out.etaDaysMax })
                } catch (e: any) {
                  const msg = e?.response?.data?.message ?? 'Order failed'
                  toast(msg)
                } finally {
                  setPlacing(false)
                }
              }}
            >
              {placing ? 'Placing order…' : 'Pay & Place order'}
            </Button>

            {!user ? <div className="mt-2 text-center text-xs text-slate-500">Login is required to place an order.</div> : null}
          </div>
        </div>
      </div>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />

      {success ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm" />
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-800 bg-slate-900/95 p-6 shadow-neon backdrop-blur-xl">
            <div className="flex items-start gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-500/25">
                <CheckCircle2 size={20} />
              </div>
              <div className="min-w-0">
                <div className="font-display text-xl font-bold text-white">Congratulations! Order placed.</div>
                <div className="mt-1 text-sm text-slate-400">
                  Delivered in {success.etaMin}–{success.etaMax} days. For delivery-related issues, contact the delivery partner.
                </div>
                <div className="mt-2 text-xs text-slate-500">Order ID: {success.orderId}</div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                className="h-11 flex-1 bg-tk-primary hover:bg-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                onClick={() => {
                  setSuccess(null)
                  navigate('/account')
                }}
              >
                View orders
              </Button>
              <Button
                className="h-11 flex-1"
                variant="secondary"
                onClick={() => {
                  setSuccess(null)
                  navigate('/products')
                }}
              >
                Continue shopping
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
