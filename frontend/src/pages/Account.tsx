import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, MapPin, Package, Plus, Trash2 } from 'lucide-react'
import Button from '@/components/Button'
import EmptyState from '@/components/EmptyState'
import Skeleton from '@/components/Skeleton'
import AuthModal from '@/components/AuthModal'
import { useAuthStore } from '@/stores/authStore'
import { useToastStore } from '@/stores/toastStore'
import { apiCreateAddress, apiDeleteAddress, apiGetAddresses, type Address } from '@/api/addresses'
import { apiGetOrders, type Order } from '@/api/orders'
import { formatInr } from '@/utils/money'

type Tab = 'addresses' | 'orders'

export default function Account() {
  const user = useAuthStore((s) => s.user)
  const toast = useToastStore((s) => s.push)
  const [authOpen, setAuthOpen] = useState(false)
  const [tab, setTab] = useState<Tab>('addresses')

  const [addresses, setAddresses] = useState<Address[] | null>(null)
  const [orders, setOrders] = useState<Order[] | null>(null)

  const [label, setLabel] = useState('Home')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [pincode, setPincode] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    if (!user) {
      setAddresses(null)
      setOrders(null)
      return
    }
    ;(async () => {
      try {
        setAddresses(await apiGetAddresses())
      } catch {
        setAddresses([])
      }
    })()
    ;(async () => {
      try {
        setOrders(await apiGetOrders())
      } catch {
        setOrders([])
      }
    })()
  }, [user])

  const displayName = useMemo(() => user?.name ?? user?.email ?? 'Buyer', [user])

  if (!user) {
    return (
      <>
        <EmptyState
          title="Sign in to view profile"
          description="Addresses and past orders are saved to your account."
          action={
            <Button onClick={() => setAuthOpen(true)} className="h-11">
              Login / Register
            </Button>
          }
        />
        <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
      </>
    )
  }

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-[1fr_360px] lg:items-start">
        <div className="space-y-4">
          <div className="rounded-3xl border border-tk-border bg-white/60 p-5 shadow-soft backdrop-blur-sm">
            <div className="font-display text-2xl font-bold tracking-tight text-slate-900">Profile</div>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-slate-700">
              <span className="inline-flex h-9 items-center rounded-xl bg-slate-900/5 px-3 font-semibold">{displayName}</span>
              {user.email ? <span className="text-slate-500">{user.email}</span> : null}
            </div>
          </div>

          <div className="rounded-3xl border border-tk-border bg-white/60 p-2 shadow-soft backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setTab('addresses')}
                className={
                  tab === 'addresses'
                    ? 'inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-tk-primary px-4 text-sm font-semibold text-white'
                    : 'inline-flex h-11 items-center justify-center gap-2 rounded-2xl px-4 text-sm font-semibold text-slate-700 hover:bg-white/60'
                }
              >
                <MapPin size={16} /> Addresses
              </button>
              <button
                onClick={() => setTab('orders')}
                className={
                  tab === 'orders'
                    ? 'inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-tk-primary px-4 text-sm font-semibold text-white'
                    : 'inline-flex h-11 items-center justify-center gap-2 rounded-2xl px-4 text-sm font-semibold text-slate-700 hover:bg-white/60'
                }
              >
                <Package size={16} /> Orders
              </button>
            </div>
          </div>

          {tab === 'addresses' ? (
            <div className="rounded-3xl border border-tk-border bg-white/60 p-5 shadow-soft backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="font-display text-lg font-semibold text-slate-900">Saved addresses</div>
                <div className="text-xs text-slate-500">Max 3</div>
              </div>

              {addresses === null ? (
                <div className="mt-4 grid gap-2">
                  <Skeleton className="h-16 w-full rounded-2xl" />
                  <Skeleton className="h-16 w-full rounded-2xl" />
                </div>
              ) : (
                <div className="mt-4 grid gap-3">
                  {addresses.length ? (
                    addresses.map((a) => (
                      <div key={a.id} className="rounded-2xl border border-tk-border bg-white/70 p-4 shadow-sm">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-slate-900">{a.label}</div>
                            <div className="mt-1 text-sm text-slate-700">
                              {a.full_name} · {a.phone}
                            </div>
                            <div className="mt-1 text-sm text-slate-600">
                              {a.line1}
                              {a.line2 ? `, ${a.line2}` : ''}, {a.city}, {a.state} - {a.pincode}
                            </div>
                          </div>
                          <button
                            onClick={async () => {
                              try {
                                await apiDeleteAddress(a.id)
                                setAddresses((prev) => (prev ? prev.filter((x) => x.id !== a.id) : prev))
                                toast('Address deleted')
                              } catch (e: any) {
                                toast(e?.response?.data?.message ?? 'Delete failed')
                              }
                            }}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-tk-border bg-white/70 text-slate-700 shadow-sm transition hover:bg-white hover:shadow-md"
                            aria-label="Delete address"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-2xl border border-tk-border bg-white/70 p-4 text-sm text-slate-700 shadow-sm">
                      No addresses saved yet.
                    </div>
                  )}
                </div>
              )}

              <div className="mt-5 rounded-2xl border border-tk-border bg-white/70 p-4 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-semibold text-slate-900">Add new address</div>
                  <div className="inline-flex items-center gap-2 text-xs text-slate-500">
                    <Home size={14} /> Saved to profile
                  </div>
                </div>
                <div className="mt-3 grid gap-2">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      value={label}
                      onChange={(e) => setLabel(e.target.value)}
                      placeholder="Label (Home/Work)"
                      className="h-11 rounded-xl border border-tk-border bg-white/80 px-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-200/40"
                    />
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone"
                      className="h-11 rounded-xl border border-tk-border bg-white/80 px-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-200/40"
                    />
                  </div>
                  <input
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full name"
                    className="h-11 rounded-xl border border-tk-border bg-white/80 px-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-200/40"
                  />
                  <input
                    value={line1}
                    onChange={(e) => setLine1(e.target.value)}
                    placeholder="Address line 1"
                    className="h-11 rounded-xl border border-tk-border bg-white/80 px-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-200/40"
                  />
                  <input
                    value={line2}
                    onChange={(e) => setLine2(e.target.value)}
                    placeholder="Address line 2 (optional)"
                    className="h-11 rounded-xl border border-tk-border bg-white/80 px-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-200/40"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="City"
                      className="h-11 rounded-xl border border-tk-border bg-white/80 px-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-200/40"
                    />
                    <input
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      placeholder="State"
                      className="h-11 rounded-xl border border-tk-border bg-white/80 px-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-200/40"
                    />
                    <input
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="Pincode"
                      className="h-11 rounded-xl border border-tk-border bg-white/80 px-3 text-sm outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-200/40"
                    />
                  </div>
                  <Button
                    className="mt-1 h-11"
                    disabled={saving}
                    onClick={async () => {
                      if (!fullName || !phone || !line1 || !city || !state || !pincode) {
                        toast('Please fill all required fields')
                        return
                      }
                      setSaving(true)
                      try {
                        const a = await apiCreateAddress({
                          label: label || 'Home',
                          fullName,
                          phone,
                          line1,
                          line2: line2 || undefined,
                          city,
                          state,
                          pincode,
                        })
                        setAddresses((prev) => (prev ? [a, ...prev] : [a]))
                        setFullName('')
                        setPhone('')
                        setLine1('')
                        setLine2('')
                        setCity('')
                        setState('')
                        setPincode('')
                        toast('Address saved')
                      } catch (e: any) {
                        toast(e?.response?.data?.message ?? 'Save failed')
                      } finally {
                        setSaving(false)
                      }
                    }}
                  >
                    <Plus size={16} /> {saving ? 'Saving…' : 'Save address'}
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="rounded-3xl border border-tk-border bg-white/60 p-5 shadow-soft backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="font-display text-lg font-semibold text-slate-900">Past orders</div>
                <Link to="/products" className="text-sm font-semibold text-blue-700 hover:underline">
                  Shop more
                </Link>
              </div>

              {orders === null ? (
                <div className="mt-4 grid gap-2">
                  <Skeleton className="h-20 w-full rounded-2xl" />
                  <Skeleton className="h-20 w-full rounded-2xl" />
                </div>
              ) : orders.length === 0 ? (
                <div className="mt-4 rounded-2xl border border-tk-border bg-white/70 p-4 text-sm text-slate-700 shadow-sm">
                  No orders yet.
                </div>
              ) : (
                <div className="mt-4 grid gap-3">
                  {orders.map((o) => (
                    <details key={o.id} className="group rounded-2xl border border-tk-border bg-white/70 p-4 shadow-sm open:bg-white">
                      <summary className="cursor-pointer list-none">
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div className="min-w-0">
                            <div className="text-sm font-semibold text-slate-900">
                              {o.items?.[0]?.title ?? 'Order'} {o.items?.length > 1 ? `+${o.items.length - 1} more` : ''}
                            </div>
                            <div className="mt-1 text-xs text-slate-500">
                              {new Date(o.created_at).toLocaleString()} · {o.payment_method.toUpperCase()} · {o.payment_status}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-bold text-slate-900">{formatInr(o.total_inr)}</div>
                            <div className="mt-1 text-xs text-slate-500">
                              ETA {o.eta_days_min}–{o.eta_days_max} days
                            </div>
                          </div>
                        </div>
                      </summary>
                      <div className="mt-4 grid gap-3">
                        <div className="rounded-2xl border border-tk-border bg-white/70 p-4">
                          <div className="text-xs font-semibold text-slate-500">Delivery address</div>
                          <div className="mt-2 text-sm text-slate-700">
                            {o.address_snapshot?.fullName} · {o.address_snapshot?.phone}
                          </div>
                          <div className="mt-1 text-sm text-slate-600">
                            {o.address_snapshot?.line1}
                            {o.address_snapshot?.line2 ? `, ${o.address_snapshot?.line2}` : ''}, {o.address_snapshot?.city},{' '}
                            {o.address_snapshot?.state} - {o.address_snapshot?.pincode}
                          </div>
                        </div>

                        <div className="rounded-2xl border border-tk-border bg-white/70 p-4">
                          <div className="text-xs font-semibold text-slate-500">Items</div>
                          <div className="mt-3 grid gap-2">
                            {o.items.map((it) => (
                              <div key={`${o.id}_${it.productId}`} className="flex items-center justify-between gap-3 text-sm">
                                <div className="min-w-0">
                                  <div className="tk-clamp-2 font-semibold text-slate-900">{it.title}</div>
                                  <div className="mt-1 text-xs text-slate-500">
                                    Qty {it.qty} · {it.category}
                                  </div>
                                </div>
                                <div className="text-sm font-bold text-slate-900">{formatInr(it.lineTotalInr)}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="sticky top-20 space-y-4">
          <div className="rounded-3xl border border-tk-border bg-white/60 p-5 shadow-soft backdrop-blur-sm">
            <div className="font-display text-lg font-semibold text-slate-900">Quick actions</div>
            <div className="mt-4 grid gap-2">
              <Link to="/products">
                <Button className="h-11 w-full" variant="secondary">
                  Continue shopping
                </Button>
              </Link>
              <Link to="/cart">
                <Button className="h-11 w-full" variant="secondary">
                  Go to cart
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

