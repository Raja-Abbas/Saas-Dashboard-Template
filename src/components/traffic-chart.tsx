"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { trafficSources } from "@/lib/data";

export function TrafficChart() {
  return (
    <div className="card p-5">
      <h3 className="font-semibold">Traffic Sources</h3>
      <p className="text-sm text-zinc-500">User acquisition breakdown</p>
      <div className="mt-4 h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={trafficSources}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={3}
              dataKey="value"
            >
              {trafficSources.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "#161922",
                border: "1px solid #2a2f42",
                borderRadius: "8px",
                fontSize: "13px",
              }}
              formatter={(value: number) => [`${value}%`, "Share"]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {trafficSources.map((s) => (
          <div key={s.name} className="flex items-center gap-2 text-xs">
            <div
              className="h-2.5 w-2.5 rounded-full"
              style={{ background: s.color }}
            />
            <span className="text-zinc-400">{s.name}</span>
            <span className="ml-auto font-medium">{s.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
