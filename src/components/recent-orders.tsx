import { recentOrders } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

const statusStyles = {
  completed: "bg-emerald-500/10 text-emerald-400",
  pending: "bg-amber-500/10 text-amber-400",
  failed: "bg-red-500/10 text-red-400",
};

export function RecentOrders() {
  return (
    <div className="card p-5">
      <h3 className="font-semibold">Recent Transactions</h3>
      <p className="text-sm text-zinc-500">Latest payment activity</p>
      <div className="mt-4 space-y-3">
        {recentOrders.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between rounded-lg border border-surface-border bg-surface px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium">{order.customer}</p>
              <p className="text-xs text-zinc-500">
                {order.id} · {order.date}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">
                {formatCurrency(order.amount)}
              </p>
              <span
                className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium capitalize ${
                  statusStyles[order.status as keyof typeof statusStyles]
                }`}
              >
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
