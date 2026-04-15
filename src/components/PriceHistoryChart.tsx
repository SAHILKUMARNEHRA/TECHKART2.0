import { useMemo } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js'
import type { PricePoint } from '@/types/catalog'
import { formatInr } from '@/utils/money'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler)

export default function PriceHistoryChart({ points }: { points: PricePoint[] }) {
  const data = useMemo(() => {
    return {
      labels: points.map((p) => p.date.slice(5)),
      datasets: [
        {
          label: 'Price',
          data: points.map((p) => p.priceInr),
          borderColor: '#1d5cff',
          backgroundColor: 'rgba(29, 92, 255, 0.12)',
          fill: true,
          borderWidth: 2,
          pointRadius: 0,
          tension: 0.35,
        },
      ],
    }
  }, [points])

  return (
    <div className="rounded-2xl border border-tk-border bg-white/70 p-4 shadow-soft">
      <div className="flex items-center justify-between gap-3">
        <div className="font-display text-base font-semibold text-slate-900">Price History</div>
        <div className="text-xs text-slate-500">{points.length} days</div>
      </div>
      <div className="mt-3 h-48">
        <Line
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                callbacks: {
                  label: (ctx) => formatInr(Number(ctx.raw)),
                },
              },
              legend: { display: false },
            },
            scales: {
              x: { display: false },
              y: {
                ticks: { callback: (v) => formatInr(Number(v)) },
                grid: { color: 'rgba(15, 23, 42, 0.06)' },
              },
            },
          }}
        />
      </div>
    </div>
  )
}

