"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    churn: true,
    payments: true,
    weekly: false,
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
        <p className="text-sm text-zinc-500">
          Manage your workspace preferences and integrations.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card p-5">
          <h3 className="font-semibold">Profile</h3>
          <div className="mt-4 space-y-4">
            <Field label="Company Name" defaultValue="PulseMetrics Inc." />
            <Field label="Admin Email" defaultValue="admin@pulsemetrics.io" />
            <Field label="Timezone" defaultValue="UTC-5 (EST)" />
          </div>
        </div>

        <div className="card p-5">
          <h3 className="font-semibold">Notifications</h3>
          <div className="mt-4 space-y-3">
            {Object.entries(notifications).map(([key, value]) => (
              <label
                key={key}
                className="flex items-center justify-between rounded-lg border border-surface-border px-4 py-3"
              >
                <span className="text-sm capitalize">{key} alerts</span>
                <input
                  type="checkbox"
                  checked={value}
                  onChange={() =>
                    setNotifications((prev) => ({
                      ...prev,
                      [key]: !prev[key as keyof typeof prev],
                    }))
                  }
                  className="h-4 w-4 rounded accent-accent"
                />
              </label>
            ))}
          </div>
        </div>

        <div className="card p-5 lg:col-span-2">
          <h3 className="font-semibold">Integrations</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {["Stripe", "Slack", "Segment", "Intercom", "HubSpot", "Zapier"].map(
              (name) => (
                <div
                  key={name}
                  className="flex items-center justify-between rounded-lg border border-surface-border px-4 py-3"
                >
                  <span className="text-sm font-medium">{name}</span>
                  <button className="rounded-md bg-accent-muted px-2.5 py-1 text-xs font-medium text-accent-light hover:bg-accent/30">
                    Connect
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        <div className="card border-red-500/20 p-5 lg:col-span-2">
          <h3 className="font-semibold text-red-400">Danger Zone</h3>
          <p className="mt-1 text-sm text-zinc-500">
            Permanently delete your workspace and all associated data.
          </p>
          <button className="mt-4 rounded-lg border border-red-500/30 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10">
            Delete Workspace
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  defaultValue,
}: {
  label: string;
  defaultValue: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs text-zinc-500">{label}</label>
      <input
        defaultValue={defaultValue}
        className="w-full rounded-lg border border-surface-border bg-surface px-3 py-2 text-sm outline-none focus:border-accent/50"
      />
    </div>
  );
}
