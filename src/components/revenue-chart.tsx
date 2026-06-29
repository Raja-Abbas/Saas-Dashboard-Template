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

export function RevenueChart() {
  return (
    <div className="card p-5">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Revenue Overview</h3>
          <p className="text-sm text-zinc-500">Monthly recurring revenue trend</p>
        </div>
        <div className="flex gap-1 rounded-lg border border-surface-border p-1 text-xs">
          {["7D", "30D", "90D", "1Y"].map((p, i) => (
            <button
              key={p}
              className={`rounded-md px-2.5 py-1 ${
                i === 3
                  ? "bg-accent-muted text-accent-light"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData}>
            <defs>
              <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#6366f1" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2f42" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#71717a", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#71717a", fontSize: 12 }}
              tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
            />
            <Tooltip
              contentStyle={{
                background: "#161922",
                border: "1px solid #2a2f42",
                borderRadius: "8px",
                fontSize: "13px",
              }}
              formatter={(value: number) => [
                `$${value.toLocaleString()}`,
                "Revenue",
              ]}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#6366f1"
              strokeWidth={2}
              fill="url(#revenueGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
