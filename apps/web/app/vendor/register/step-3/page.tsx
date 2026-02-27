import Link from "next/link";

export default function RegisterStep3() {
  return (
    <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8">
      <h2 className="font-heading text-2xl font-bold text-primary">Vendor Registration - Step 3</h2>
      <p className="mt-1 text-sm text-[#A0A0A0]">Service coverage and categories</p>
      <div className="mt-6 grid grid-cols-2 gap-4">
        {['Primary District','Secondary District','Categories Offered','Minimum Order Qty'].map((f)=><input key={f} placeholder={f} className="h-12 rounded-xl border border-beige px-4" />)}
      </div>
      <div className="mt-6 flex justify-between"><Link href="/vendor/register/step-2" className="rounded-xl bg-beige px-4 py-2 text-sm font-semibold text-primary">Back</Link><Link href="/vendor/dashboard" className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white">Submit & Enter Dashboard</Link></div>
    </div>
  );
}
