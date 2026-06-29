"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { revenueData } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export default function RevenuePage() {
  const totalMrr = revenueData[revenueData.length - 1].revenue;
  const arr = totalMrr * 12;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Revenue</h1>
        <p className="text-sm text-zinc-500">
          MRR, ARR, and financial performance metrics.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="card-hover p-5">
          <p className="text-sm text-zinc-500">Monthly Recurring Revenue</p>
          <p className="mt-2 text-3xl font-semibold">{formatCurrency(totalMrr)}</p>
          <p className="mt-1 text-xs text-emerald-400">+12.5% from last month</p>
        </div>
        <div className="card-hover p-5">
          <p className="text-sm text-zinc-500">Annual Run Rate</p>
          <p className="mt-2 text-3xl font-semibold">{formatCurrency(arr)}</p>
          <p className="mt-1 text-xs text-emerald-400">+12.5% YoY projected</p>
        </div>
        <div className="card-hover p-5">
          <p className="text-sm text-zinc-500">Avg. Revenue Per User</p>
          <p className="mt-2 text-3xl font-semibold">$22.14</p>
          <p className="mt-1 text-xs text-emerald-400">+2.1% from last month</p>
        </div>
      </div>

      <div className="card p-5">
        <h3 className="font-semibold">MRR Growth</h3>
        <p className="text-sm text-zinc-500">12-month recurring revenue trend</p>
        <div className="mt-4 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="mrrGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2f42" vertical={false} />
              <XAxis dataKey="month" tick={{ fill: "#71717a", fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#71717a", fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v / 1000}k`} />
              <Tooltip contentStyle={{ background: "#161922", border: "1px solid #2a2f42", borderRadius: "8px" }} formatter={(v: number) => [formatCurrency(v), "MRR"]} />
              <Area type="monotone" dataKey="revenue" stroke="#22d3ee" strokeWidth={2} fill="url(#mrrGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {[
          { plan: "Starter", mrr: 763686, users: 7714, pct: 27 },
          { plan: "Pro", mrr: 2407689, users: 4821, pct: 85 },
          { plan: "Enterprise", mrr: 779688, users: 312, pct: 27 },
        ].map((p) => (
          <div key={p.plan} className="card p-5">
            <div className="flex items-center justify-between">
              <h4 className="font-medium">{p.plan}</h4>
              <span className="text-sm text-zinc-500">{p.users.toLocaleString()} users</span>
            </div>
            <p className="mt-2 text-2xl font-semibold">{formatCurrency(p.mrr)}</p>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-surface-border">
              <div className="h-full rounded-full bg-accent" style={{ width: `${p.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
