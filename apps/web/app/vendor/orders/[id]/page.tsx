import Link from "next/link";

export default function OrderDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="grid grid-cols-[1fr_320px] gap-4">
      <div className="rounded-2xl bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-heading text-2xl font-bold text-primary">Order {params.id}</h2>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs text-amber-700">Processing</span>
        </div>
        <p className="text-sm text-[#A0A0A0]">Urea - 50kg · cluster_5001 · 10 farmers</p>
        <div className="mt-5 grid grid-cols-3 gap-4 text-sm">
          <div className="rounded-xl bg-vendorBg p-4"><p className="text-[#A0A0A0]">Quantity</p><p className="font-semibold text-primary">100 kg</p></div>
          <div className="rounded-xl bg-vendorBg p-4"><p className="text-[#A0A0A0]">Amount</p><p className="font-semibold text-primary">?4,200</p></div>
          <div className="rounded-xl bg-vendorBg p-4"><p className="text-[#A0A0A0]">Delivery Date</p><p className="font-semibold text-primary">28 Feb 2026</p></div>
        </div>
        <div className="mt-6 flex gap-2">
          <button className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white">Mark as Ready</button>
          <Link href={`/vendor/orders/${params.id}/reject`} className="rounded-xl bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">Reject Order</Link>
        </div>
      </div>
      <div className="rounded-2xl bg-white p-5">
        <h3 className="font-heading text-lg font-bold text-primary">Timeline</h3>
        <div className="mt-4 space-y-3 text-sm text-primary">
          <p>Order Received</p>
          <p>Processing</p>
          <p className="text-[#A0A0A0]">Ready for Delivery</p>
          <p className="text-[#A0A0A0]">Delivered</p>
        </div>
      </div>
    </div>
  );
}
