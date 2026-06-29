"use client";

import type { ElementType } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  ChevronLeft,
  DollarSign,
  LayoutDashboard,
  Settings,
  Users,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/lib/data";

const icons: Record<string, ElementType> = {
  LayoutDashboard,
  BarChart3,
  Users,
  DollarSign,
  Settings,
};

export function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-surface-border bg-surface transition-transform lg:static lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center gap-2.5 border-b border-surface-border px-5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white shadow-glow">
            <Zap className="h-4 w-4" />
          </div>
          <div>
            <p className="text-sm font-semibold">PulseMetrics</p>
            <p className="text-[10px] text-zinc-500">SaaS Analytics</p>
          </div>
          <button
            onClick={onClose}
            className="ml-auto rounded-lg p-1 text-zinc-500 hover:bg-surface-overlay lg:hidden"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-1 p-3">
          {navItems.map((item) => {
            const Icon = icons[item.icon];
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors",
                  active
                    ? "bg-accent-muted font-medium text-accent-light"
                    : "text-zinc-400 hover:bg-surface-overlay hover:text-zinc-200"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-surface-border p-4">
          <div className="rounded-lg bg-accent-muted p-3">
            <p className="text-xs font-medium text-accent-light">Pro Plan</p>
            <p className="mt-0.5 text-[11px] text-zinc-500">
              12,847 / 50,000 users
            </p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-surface-border">
              <div className="h-full w-[26%] rounded-full bg-accent" />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
