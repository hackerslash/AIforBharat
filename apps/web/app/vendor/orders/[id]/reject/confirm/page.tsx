import Link from "next/link";

export default function RejectConfirmPage({ params }: { params: { id: string } }) {
  return (
    <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 text-center">
      <h2 className="font-heading text-2xl font-bold text-primary">Order Rejected</h2>
      <p className="mt-2 text-sm text-[#A0A0A0]">Order {params.id} was rejected and farmers have been notified.</p>
      <Link href="/vendor/orders" className="mt-6 inline-flex rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white">Back to Orders</Link>
    </div>
  );
}
