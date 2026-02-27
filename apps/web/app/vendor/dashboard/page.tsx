import { Briefcase, Eye, IndianRupee, Package, Star, TrendingUp } from "lucide-react";
import { RevenueBarChart } from "@/components/charts";
import { actionOrders, monthlyRevenue, recentOrders } from "@/lib/vendor-data";

const metrics = [
  { label: "Published Gigs", icon: Briefcase, value: "3", trend: "All visible to farmers", trendIcon: Eye },
  { label: "Orders This Month", icon: Package, value: "18", trend: "+24% vs last month", trendIcon: TrendingUp },
  { label: "Total Revenue", icon: IndianRupee, value: "?2.84L", trend: "?54,600 in escrow" },
  { label: "Avg Rating", icon: Star, value: "4.4 ?", trend: "Based on 142 orders" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-heading text-2xl font-bold text-primary">Good morning, AgroMart</h2>
          <p className="text-sm text-[#A0A0A0]">You have 3 published gigs and 1 new order awaiting action.</p>
        </div>
        <button className="rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white">Manage Gigs</button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {metrics.map((card) => (
          <div key={card.label} className="rounded-2xl bg-white p-5">
            <p className="text-sm text-[#A0A0A0]">{card.label}</p>
            <div className="mt-3 flex items-center justify-between">
              <p className="font-heading text-3xl font-bold text-primary">{card.value}</p>
              <div className="rounded-lg bg-primary/10 p-2"><card.icon className="h-5 w-5 text-primary" /></div>
            </div>
            <p className="mt-3 flex items-center gap-1 text-xs text-[#A0A0A0]">{card.trendIcon ? <card.trendIcon className="h-3.5 w-3.5 text-[#22C55E]" /> : null}{card.trend}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[1fr_340px] gap-4">
        <div className="rounded-2xl bg-white p-5">
          <p className="mb-4 font-heading text-lg font-bold text-primary">Monthly Revenue</p>
          <RevenueBarChart data={monthlyRevenue} />
        </div>
        <div className="rounded-2xl bg-white p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="font-heading text-lg font-bold text-primary">Recent Orders</p>
            <span className="text-sm text-primary">View all ?</span>
          </div>
          <div className="space-y-3">
            {recentOrders.map((order) => (
              <div key={order.id} className="rounded-xl border border-[#F1ECE3] p-3">
                <p className="text-sm font-semibold text-primary">{order.product}</p>
                <p className="text-xs text-[#A0A0A0]">{order.meta}</p>
                <span className={`mt-2 inline-flex rounded-full px-2 py-1 text-xs ${order.statusClass}`}>{order.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-heading text-lg font-bold text-primary">Recent Orders - Action Required</h3>
          <span className="text-sm text-primary">View all orders ?</span>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {actionOrders.map((order) => (
            <div key={order.product} className="space-y-3 rounded-2xl bg-white p-5">
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full bg-beige px-2 py-1 text-primary">{order.category}</span>
                <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">{order.status}</span>
              </div>
              <p className="font-heading text-base font-bold text-primary">{order.product}</p>
              <p className="text-xs text-[#A0A0A0]">{order.qty} · {order.cluster} · {order.date}</p>
              <p className="font-heading text-lg font-bold text-primary">Total: {order.total}</p>
              <button className={`h-10 w-full rounded-xl text-sm font-semibold ${order.ctaClass}`}>{order.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
