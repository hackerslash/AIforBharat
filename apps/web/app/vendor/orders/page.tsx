import Link from "next/link";
const rows = [
  ["AGS-2024-0842", "Tomato Seeds (Hybrid)", "cluster_5001", "10", "50 kg", "Rs 42,000", "Ready"],
  ["AGS-2024-0843", "Urea - 50kg", "cluster_5002", "8", "100 kg", "Rs 4,200", "Processing"],
  ["AGS-2024-0844", "Ragi Seeds", "cluster_5003", "11", "80 kg", "Rs 18,400", "Delivered"],
];

const statusClass: Record<string, string> = {
  Received: "bg-gray-100 text-gray-600",
  Processing: "bg-amber-100 text-amber-700",
  Ready: "bg-blue-100 text-blue-700",
  Shipped: "bg-orange-100 text-orange-700",
  Delivered: "bg-green-100 text-green-700",
  Disputed: "bg-red-100 text-red-700",
};

export default function OrdersPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <input className="h-11 w-80 rounded-xl border border-[#EDE8DF] bg-white px-4 text-sm outline-none" placeholder="Search order, product, cluster..." />
        <select className="h-11 rounded-xl border border-[#EDE8DF] bg-white px-4 text-sm text-[#A0A0A0]">
          <option>Status</option>
          <option>Processing</option>
          <option>Ready</option>
          <option>Delivered</option>
        </select>
      </div>
      <div className="overflow-hidden rounded-2xl bg-white">
        <table className="w-full text-sm">
          <thead className="bg-vendorBg text-left text-[#A0A0A0]">
            <tr>{["Order ID", "Product", "Cluster", "Farmers", "Quantity", "Amount", "Status", "Action"].map((h) => <th key={h} className="px-4 py-3 font-medium">{h}</th>)}</tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-t border-[#F2EEE8]">
                <td className="px-4 py-3 font-semibold text-primary">{r[0]}</td>
                <td className="px-4 py-3 text-primary">{r[1]}</td>
                <td className="px-4 py-3">{r[2]}</td>
                <td className="px-4 py-3">{r[3]}</td>
                <td className="px-4 py-3">{r[4]}</td>
                <td className="px-4 py-3 font-semibold text-primary">{r[5]}</td>
                <td className="px-4 py-3"><span className={`rounded-full px-2 py-1 text-xs ${statusClass[r[6]]}`}>{r[6]}</span></td>
                <td className="px-4 py-3"><Link href={`/vendor/orders/${r[0]}`} className="rounded-lg bg-primary px-3 py-1.5 text-xs text-white">View</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-right text-sm text-[#A0A0A0]">Page 1 of 4</div>
    </div>
  );
}

