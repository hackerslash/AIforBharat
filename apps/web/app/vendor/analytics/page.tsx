import { RevenueBarChart, RevenueLineChart } from "@/components/charts";
import { monthlyRevenue } from "@/lib/vendor-data";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-2xl font-bold text-primary">Analytics</h2>
        <button className="rounded-xl bg-white px-4 py-2 text-sm text-primary">Last 6 months</button>
      </div>
      <div className="rounded-2xl bg-white p-5">
        <h3 className="mb-3 font-heading text-lg font-bold text-primary">Revenue Trend</h3>
        <RevenueLineChart data={monthlyRevenue} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-white p-5">
          <h3 className="mb-3 font-heading text-lg font-bold text-primary">Top Products</h3>
          <RevenueBarChart data={monthlyRevenue} />
        </div>
        <div className="rounded-2xl bg-white p-5">
          <h3 className="mb-3 font-heading text-lg font-bold text-primary">District-wise Sales</h3>
          <div className="flex h-64 items-center justify-center rounded-xl bg-vendorBg text-[#A0A0A0]">Heatmap placeholder</div>
          <h3 className="mb-2 mt-4 font-heading text-lg font-bold text-primary">Rating Trend</h3>
          <div className="rounded-xl bg-vendorBg p-4 text-sm text-[#A0A0A0]">4.4 ? 4.6 average this quarter</div>
        </div>
      </div>
    </div>
  );
}
