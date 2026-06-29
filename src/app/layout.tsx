import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DashboardShell } from "@/components/dashboard-shell";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "PulseMetrics — SaaS Analytics Dashboard",
  description:
    "Production-grade SaaS admin dashboard built with Next.js, TypeScript, Tailwind CSS, and Recharts.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <DashboardShell>{children}</DashboardShell>
      </body>
    </html>
  );
}
