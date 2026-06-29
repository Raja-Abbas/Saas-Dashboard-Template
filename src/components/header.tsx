"use client";

import { Bell, Menu, Search } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="flex h-16 items-center justify-between gap-4 border-b border-surface-border bg-surface px-4 lg:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-zinc-400 hover:bg-surface-overlay lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
          <input
            type="search"
            placeholder="Search customers, orders..."
            className="w-64 rounded-lg border border-surface-border bg-surface-raised py-2 pl-9 pr-4 text-sm text-zinc-200 outline-none placeholder:text-zinc-600 focus:border-accent/50 lg:w-80"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
                <ThemeToggle />
        <button className="relative rounded-lg p-2 text-zinc-400 hover:bg-surface-overlay">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-accent" />
        </button>
        <div className="flex items-center gap-2.5 rounded-lg border border-surface-border bg-surface-raised py-1.5 pl-1.5 pr-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-accent to-violet-600 text-xs font-bold text-white">
            RA
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-medium">Raja Abbas</p>
            <p className="text-[10px] text-zinc-500">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
