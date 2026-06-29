import { StatsCards } from "@/components/stats-cards";
import { RevenueChart } from "@/components/revenue-chart";
import { TrafficChart } from "@/components/traffic-chart";
import { RecentOrders } from "@/components/recent-orders";
import { ActivityFeed } from "@/components/activity-feed";

export default function OverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
        <p className="text-sm text-zinc-500">
          Welcome back. Here&apos;s what&apos;s happening with your platform.
        </p>
      </div>

      <StatsCards />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>
        <TrafficChart />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <RecentOrders />
        <ActivityFeed />
      </div>
    </div>
  );
}
