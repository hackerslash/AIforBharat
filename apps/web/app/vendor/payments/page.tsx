const paymentRows = [
  ["AGS-2024-0842", "?42,000", "In Escrow", "28 Feb 2026"],
  ["AGS-2024-0836", "?18,400", "Released", "22 Feb 2026"],
  ["AGS-2024-0831", "?9,200", "Pending", "01 Mar 2026"],
];

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        {["Total Received", "In Escrow", "Pending Release"].map((label, i) => (
          <div key={label} className="rounded-2xl bg-white p-5">
            <p className="text-sm text-[#A0A0A0]">{label}</p>
            <p className="mt-2 font-heading text-3xl font-bold text-primary">{["?2.84L", "?54,600", "?9,200"][i]}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl bg-[#2C5F2D]/10 p-4 text-sm text-primary">Funds released 24h after delivery confirmed by farmer</div>
      <div className="overflow-hidden rounded-2xl bg-white">
        <table className="w-full text-sm">
          <thead className="bg-vendorBg text-left text-[#A0A0A0]"><tr>{["Order ID", "Amount", "Status", "Release Date"].map((h) => <th key={h} className="px-4 py-3 font-medium">{h}</th>)}</tr></thead>
          <tbody>{paymentRows.map((r) => <tr key={r[0]} className="border-t border-[#F2EEE8]"><td className="px-4 py-3 font-semibold text-primary">{r[0]}</td><td className="px-4 py-3">{r[1]}</td><td className="px-4 py-3">{r[2]}</td><td className="px-4 py-3">{r[3]}</td></tr>)}</tbody>
        </table>
      </div>
    </div>
  );
}
