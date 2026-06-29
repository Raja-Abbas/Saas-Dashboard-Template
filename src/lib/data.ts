export const stats = [
  {
    label: "Total Revenue",
    value: 284500,
    change: 12.5,
    format: "currency" as const,
  },
  {
    label: "Active Users",
    value: 12847,
    change: 8.2,
    format: "number" as const,
  },
  {
    label: "Conversion Rate",
    value: 4.8,
    change: -0.3,
    format: "percent" as const,
  },
  {
    label: "Churn Rate",
    value: 2.1,
    change: -0.8,
    format: "percent" as const,
  },
];

export const revenueData = [
  { month: "Jan", revenue: 18200, users: 8200 },
  { month: "Feb", revenue: 21400, users: 8900 },
  { month: "Mar", revenue: 19800, users: 9100 },
  { month: "Apr", revenue: 24100, users: 9800 },
  { month: "May", revenue: 27600, users: 10500 },
  { month: "Jun", revenue: 31200, users: 11200 },
  { month: "Jul", revenue: 29800, users: 11800 },
  { month: "Aug", revenue: 33400, users: 12100 },
  { month: "Sep", revenue: 36100, users: 12400 },
  { month: "Oct", revenue: 38900, users: 12600 },
  { month: "Nov", revenue: 41200, users: 12750 },
  { month: "Dec", revenue: 43800, users: 12847 },
];

export const trafficSources = [
  { name: "Organic", value: 42, color: "#6366f1" },
  { name: "Direct", value: 28, color: "#22d3ee" },
  { name: "Referral", value: 18, color: "#a78bfa" },
  { name: "Paid", value: 12, color: "#f472b6" },
];

export const customers = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah@techflow.io",
    company: "TechFlow",
    plan: "Enterprise",
    status: "active" as const,
    mrr: 2499,
    joined: "2024-03-12",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    email: "marcus@buildscale.com",
    company: "BuildScale",
    plan: "Pro",
    status: "active" as const,
    mrr: 499,
    joined: "2024-05-28",
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    email: "elena@novastart.io",
    company: "NovaStart",
    plan: "Pro",
    status: "trial" as const,
    mrr: 0,
    joined: "2025-01-15",
  },
  {
    id: "4",
    name: "James Wilson",
    email: "james@datapeak.co",
    company: "DataPeak",
    plan: "Enterprise",
    status: "active" as const,
    mrr: 2499,
    joined: "2023-11-02",
  },
  {
    id: "5",
    name: "Aisha Patel",
    email: "aisha@growthlab.app",
    company: "GrowthLab",
    plan: "Starter",
    status: "active" as const,
    mrr: 99,
    joined: "2024-08-19",
  },
  {
    id: "6",
    name: "Tom Becker",
    email: "tom@cloudnine.dev",
    company: "CloudNine",
    plan: "Pro",
    status: "churned" as const,
    mrr: 0,
    joined: "2024-01-08",
  },
  {
    id: "7",
    name: "Lisa Park",
    email: "lisa@metric.io",
    company: "MetricIO",
    plan: "Enterprise",
    status: "active" as const,
    mrr: 2499,
    joined: "2024-06-30",
  },
  {
    id: "8",
    name: "David Kim",
    email: "david@launchpad.co",
    company: "LaunchPad",
    plan: "Starter",
    status: "trial" as const,
    mrr: 0,
    joined: "2025-02-01",
  },
];

export const recentOrders = [
  { id: "ORD-9281", customer: "TechFlow", amount: 2499, status: "completed", date: "2 min ago" },
  { id: "ORD-9280", customer: "BuildScale", amount: 499, status: "completed", date: "18 min ago" },
  { id: "ORD-9279", customer: "NovaStart", amount: 499, status: "pending", date: "1 hr ago" },
  { id: "ORD-9278", customer: "GrowthLab", amount: 99, status: "completed", date: "3 hrs ago" },
  { id: "ORD-9277", customer: "MetricIO", amount: 2499, status: "completed", date: "5 hrs ago" },
];

export const activityFeed = [
  { id: "1", text: "New enterprise signup — TechFlow", time: "2m ago", type: "signup" },
  { id: "2", text: "Payment received $2,499 from DataPeak", time: "14m ago", type: "payment" },
  { id: "3", text: "Trial started — NovaStart (Pro plan)", time: "1h ago", type: "trial" },
  { id: "4", text: "Churn alert — CloudNine cancelled Pro", time: "2h ago", type: "churn" },
  { id: "5", text: "API usage spike +34% — MetricIO", time: "4h ago", type: "alert" },
  { id: "6", text: "New integration enabled — Stripe webhooks", time: "6h ago", type: "system" },
];

export const topProducts = [
  { name: "Pro Plan", subscribers: 4821, revenue: 2407689, growth: 14.2 },
  { name: "Enterprise", subscribers: 312, revenue: 779688, growth: 22.8 },
  { name: "Starter", subscribers: 7714, revenue: 763686, growth: 6.1 },
  { name: "Add-on: Analytics", subscribers: 1893, revenue: 189300, growth: 31.5 },
];

export const navItems = [
  { href: "/", label: "Overview", icon: "LayoutDashboard" },
  { href: "/analytics", label: "Analytics", icon: "BarChart3" },
  { href: "/customers", label: "Customers", icon: "Users" },
  { href: "/revenue", label: "Revenue", icon: "DollarSign" },
  { href: "/settings", label: "Settings", icon: "Settings" },
];
