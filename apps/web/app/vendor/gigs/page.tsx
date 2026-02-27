import Link from "next/link";
const gigs = [
  { product: "Tomato Seeds", category: "Seeds", price: "Rs 840/kg", range: "20-100 kg", status: "Active" },
  { product: "Urea", category: "Fertilizer", price: "Rs 42/kg", range: "50-500 kg", status: "Active" },
  { product: "Soil Testing", category: "Service", price: "Rs 1,200/service", range: "1-20 services", status: "Draft" },
];

export default function GigsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-2xl font-bold text-primary">My Gigs</h2>
        <Link href="/vendor/gigs/new" className="rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white">New Gig</Link>
      </div>
      <div className="flex gap-2 text-sm">
        {["All", "Active", "Closed", "Draft"].map((tab) => <button key={tab} className={`rounded-full px-4 py-2 ${tab === "All" ? "bg-primary text-white" : "bg-white text-[#A0A0A0]"}`}>{tab}</button>)}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {gigs.map((gig) => (
          <div key={gig.product} className="space-y-3 rounded-2xl bg-white p-5">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-lg font-bold text-primary">{gig.product}</h3>
              <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">{gig.status}</span>
            </div>
            <p className="text-sm text-[#A0A0A0]">{gig.category}</p>
            <p className="text-sm text-primary">Price: {gig.price}</p>
            <p className="text-sm text-primary">Qty Range: {gig.range}</p>
            <div className="flex gap-2">
              <button className="h-10 flex-1 rounded-xl bg-beige text-sm text-primary">Edit</button>
              <button className="h-10 flex-1 rounded-xl bg-primary text-sm text-white">View Bids</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

