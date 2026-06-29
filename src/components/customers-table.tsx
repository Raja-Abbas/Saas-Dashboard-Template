"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { customers } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

const statusStyles = {
  active: "bg-emerald-500/10 text-emerald-400",
  trial: "bg-cyan-500/10 text-cyan-400",
  churned: "bg-red-500/10 text-red-400",
};

export function CustomersTable() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "trial" | "churned">("all");

  const filtered = customers.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.company.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "all" || c.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-col gap-4 border-b border-surface-border p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-semibold">Customers</h3>
          <p className="text-sm text-zinc-500">{filtered.length} total accounts</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="rounded-lg border border-surface-border bg-surface py-2 pl-9 pr-3 text-sm outline-none focus:border-accent/50"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value as typeof filter)}
            className="rounded-lg border border-surface-border bg-surface px-3 text-sm outline-none"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="trial">Trial</option>
            <option value="churned">Churned</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-surface-border text-left text-xs text-zinc-500">
              <th className="px-5 py-3 font-medium">Customer</th>
              <th className="px-5 py-3 font-medium">Plan</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">MRR</th>
              <th className="px-5 py-3 font-medium">Joined</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr
                key={c.id}
                className="border-b border-surface-border/50 transition-colors hover:bg-surface-overlay/50"
              >
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-muted text-xs font-medium text-accent-light">
                      {c.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-medium">{c.name}</p>
                      <p className="text-xs text-zinc-500">{c.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-zinc-400">{c.plan}</td>
                <td className="px-5 py-3.5">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${
                      statusStyles[c.status]
                    }`}
                  >
                    {c.status}
                  </span>
                </td>
                <td className="px-5 py-3.5 font-medium">
                  {c.mrr > 0 ? formatCurrency(c.mrr) : "—"}
                </td>
                <td className="px-5 py-3.5 text-zinc-500">{c.joined}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
