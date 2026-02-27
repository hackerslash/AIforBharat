import Link from "next/link";

export default function NewGigPage() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-2xl font-bold text-primary">Gig Editor</h2>
        <Link href="/vendor/gigs" className="rounded-xl bg-beige px-4 py-2 text-sm text-primary">Back to Gigs</Link>
      </div>
      <div className="rounded-2xl bg-white p-6">
        <div className="grid grid-cols-2 gap-4">
          {['Product Name','Category','Price per Unit','Quantity Range','Delivery SLA','Certifications'].map((f)=><input key={f} placeholder={f} className="h-12 rounded-xl border border-beige px-4" />)}
        </div>
        <textarea placeholder="Description" className="mt-4 min-h-32 w-full rounded-xl border border-beige p-4" />
        <div className="mt-4 flex justify-end gap-2">
          <button className="rounded-xl bg-beige px-4 py-2 text-sm text-primary">Save Draft</button>
          <button className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white">Publish Gig</button>
        </div>
      </div>
    </div>
  );
}
