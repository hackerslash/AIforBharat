import Link from "next/link";

export default function RegisterStep1() {
  return (
    <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8">
      <h2 className="font-heading text-2xl font-bold text-primary">Vendor Registration - Step 1</h2>
      <p className="mt-1 text-sm text-[#A0A0A0]">Business information</p>
      <div className="mt-6 grid grid-cols-2 gap-4">
        {['Business Name','Owner Name','GSTIN','Business Email'].map((f)=><input key={f} placeholder={f} className="h-12 rounded-xl border border-beige px-4" />)}
      </div>
      <div className="mt-6 flex justify-end"><Link href="/vendor/register/step-2" className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white">Continue</Link></div>
    </div>
  );
}
