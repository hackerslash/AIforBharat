"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Briefcase, Calendar, IndianRupee, LayoutDashboard, Package, Settings, Sprout, TrendingUp } from "lucide-react";

const nav = [
  { href: "/vendor/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/vendor/gigs", label: "Gigs", icon: Briefcase, badge: "3" },
  { href: "/vendor/orders", label: "Orders", icon: Package },
  { href: "/vendor/payments", label: "Payments", icon: IndianRupee },
  { href: "/vendor/analytics", label: "Analytics", icon: TrendingUp },
  { href: "/vendor/settings", label: "Settings", icon: Settings },
];

function titleFromPath(pathname: string) {
  if (pathname.includes("dashboard")) return "Dashboard";
  if (pathname.includes("gigs")) return "Gigs";
  if (pathname.includes("orders")) return "Orders";
  if (pathname.includes("payments")) return "Payments";
  if (pathname.includes("analytics")) return "Analytics";
  return "Vendor Portal";
}

export default function VendorLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/vendor/login") {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-vendorBg">
      <aside className="flex h-screen w-60 flex-col justify-between bg-white px-4 py-8">
        <div>
          <div className="mb-8 flex items-center gap-2">
            <Sprout className="h-6 w-6 text-primary" />
            <div>
              <p className="font-heading text-lg font-bold text-primary">AgriSetu</p>
              <p className="text-xs text-[#A0A0A0]">Vendor</p>
            </div>
          </div>
          <nav className="space-y-2">
            {nav.map((item) => {
              const Icon = item.icon;
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex h-11 items-center justify-between rounded-xl px-3.5 ${active ? "bg-primary text-white" : "text-[#A0A0A0]"}`}
                >
                  <span className="flex items-center gap-2.5 text-sm font-medium">
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </span>
                  {item.badge ? <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">{item.badge}</span> : null}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-2.5 rounded-xl bg-vendorBg px-3 py-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">AM</div>
          <div>
            <p className="text-sm font-semibold text-primary">AgroMart Pvt Ltd</p>
            <p className="text-xs text-[#A0A0A0]">Verified Vendor</p>
          </div>
        </div>
      </aside>
      <main className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-[72px] items-center justify-between bg-white px-8">
          <h1 className="font-heading text-2xl font-bold text-primary">{titleFromPath(pathname)}</h1>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-vendorBg px-3 py-2 text-sm text-primary">
              <Calendar className="h-4 w-4" />
              Feb 2026
            </div>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-vendorBg text-primary">
              <Bell className="h-4 w-4" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">AM</button>
          </div>
        </header>
        <section className="flex-1 overflow-y-auto p-7">{children}</section>
      </main>
    </div>
  );
}
