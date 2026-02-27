import Link from "next/link";

export default function RejectOrderPage({ params }: { params: { id: string } }) {
  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6">
      <h2 className="font-heading text-2xl font-bold text-primary">Reject Order {params.id}</h2>
      <p className="mt-1 text-sm text-[#A0A0A0]">Provide a clear reason and supporting note.</p>
      <select className="mt-4 h-12 w-full rounded-xl border border-beige px-4">
        <option>Out of stock</option>
        <option>Service area mismatch</option>
        <option>Invalid pricing terms</option>
      </select>
      <textarea className="mt-4 min-h-32 w-full rounded-xl border border-beige p-4" placeholder="Additional notes" />
      <div className="mt-5 flex justify-end gap-2">
        <Link href={`/vendor/orders/${params.id}`} className="rounded-xl bg-beige px-4 py-2 text-sm text-primary">Cancel</Link>
        <Link href={`/vendor/orders/${params.id}/reject/confirm`} className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white">Confirm Rejection</Link>
      </div>
    </div>
  );
}
