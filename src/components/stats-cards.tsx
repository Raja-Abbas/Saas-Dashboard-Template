import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn, formatCurrency, formatNumber } from "@/lib/utils";
import { stats } from "@/lib/data";

export function StatsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const positive = stat.change >= 0;
        const display =
          stat.format === "currency"
            ? formatCurrency(stat.value)
            : stat.format === "percent"
              ? `${stat.value}%`
              : formatNumber(stat.value);

        return (
          <div key={stat.label} className="card-hover p-5">
            <p className="text-sm text-zinc-500">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">
              {display}
            </p>
            <div
              className={cn(
                "mt-2 flex items-center gap-1 text-xs font-medium",
                positive ? "text-emerald-400" : "text-red-400"
              )}
            >
              {positive ? (
                <ArrowUpRight className="h-3.5 w-3.5" />
              ) : (
                <ArrowDownRight className="h-3.5 w-3.5" />
              )}
              {Math.abs(stat.change)}% vs last month
            </div>
          </div>
        );
      })}
    </div>
  );
}
