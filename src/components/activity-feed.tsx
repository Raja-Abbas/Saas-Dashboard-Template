import { activityFeed } from "@/lib/data";
import {
  AlertTriangle,
  CreditCard,
  LogIn,
  Settings,
  UserPlus,
} from "lucide-react";

const typeConfig = {
  signup: { icon: UserPlus, color: "text-emerald-400 bg-emerald-500/10" },
  payment: { icon: CreditCard, color: "text-accent-light bg-accent-muted" },
  trial: { icon: LogIn, color: "text-cyan-400 bg-cyan-500/10" },
  churn: { icon: AlertTriangle, color: "text-red-400 bg-red-500/10" },
  alert: { icon: AlertTriangle, color: "text-amber-400 bg-amber-500/10" },
  system: { icon: Settings, color: "text-zinc-400 bg-zinc-500/10" },
};

export function ActivityFeed() {
  return (
    <div className="card p-5">
      <h3 className="font-semibold">Activity Feed</h3>
      <p className="text-sm text-zinc-500">Real-time platform events</p>
      <div className="mt-4 space-y-3">
        {activityFeed.map((item) => {
          const config = typeConfig[item.type as keyof typeof typeConfig];
          const Icon = config.icon;
          return (
            <div key={item.id} className="flex items-start gap-3">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${config.color}`}
              >
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-zinc-300">{item.text}</p>
                <p className="text-xs text-zinc-600">{item.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
