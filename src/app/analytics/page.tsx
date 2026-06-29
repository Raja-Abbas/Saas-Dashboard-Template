"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { revenueData, topProducts } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Analytics</h1>
        <p className="text-sm text-zinc-500">
          Deep dive into user growth, engagement, and product performance.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          { label: "Page Views", value: "2.4M", change: "+18%" },
          { label: "Avg. Session", value: "4m 32s", change: "+5%" },
          { label: "Bounce Rate", value: "32.1%", change: "-3%" },
        ].map((m) => (
          <div key={m.label} className="card-hover p-5">
            <p className="text-sm text-zinc-500">{m.label}</p>
            <p className="mt-2 text-2xl font-semibold">{m.value}</p>
            <p className="mt-1 text-xs text-emerald-400">{m.change}</p>
          </div>
        ))}
      </div>

      <div className="card p-5">
        <h3 className="font-semibold">User Growth</h3>
        <p className="text-sm text-zinc-500">Monthly active users</p>
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2f42" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: "#71717a", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#71717a", fontSize: 12 }} axisLine={false} tickLine={false} />
              <Tooltip
                contentStyle={{ background: "#161922", border: "1px solid #2a2f42", borderRadius: "8px" }}
              />
              <Line type="monotone" dataKey="users" stroke="#22d3ee" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card p-5">
        <h3 className="mb-4 font-semibold">Product Performance</h3>
        <div className="space-y-4">
          {topProducts.map((p) => (
            <div key={p.name} className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{p.name}</span>
                  <span className="text-zinc-500">{formatCurrency(p.revenue)}</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-border">
                  <div
                    className="h-full rounded-full bg-accent"
                    style={{ width: `${(p.subscribers / 8000) * 100}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-zinc-500">
                  {p.subscribers.toLocaleString()} subscribers · +{p.growth}% growth
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-5">
        <h3 className="font-semibold">Revenue by Month</h3>
        <div className="mt-4 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2f42" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: "#71717a", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#71717a", fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip contentStyle={{ background: "#161922", border: "1px solid #2a2f42", borderRadius: "8px" }} />
              <Bar dataKey="revenue" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
