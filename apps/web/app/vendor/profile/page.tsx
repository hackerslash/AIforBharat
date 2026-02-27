export default function VendorProfilePage() {
  return (
    <div className="grid grid-cols-[1fr_360px] gap-4">
      <div className="rounded-2xl bg-white p-6">
        <h2 className="font-heading text-2xl font-bold text-primary">Profile & Settings</h2>
        <div className="mt-5 grid grid-cols-2 gap-4">
          {['Business Name','Owner Name','Support Email','Support Phone','Primary Address','GSTIN'].map((f)=><input key={f} placeholder={f} className="h-12 rounded-xl border border-beige px-4" />)}
        </div>
        <button className="mt-5 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white">Save Changes</button>
      </div>
      <div className="rounded-2xl bg-white p-5">
        <h3 className="font-heading text-lg font-bold text-primary">Compliance</h3>
        <div className="mt-4 space-y-3 text-sm">
          <p className="rounded-xl bg-vendorBg p-3 text-primary">GST Verified</p>
          <p className="rounded-xl bg-vendorBg p-3 text-primary">Bank Account Verified</p>
          <p className="rounded-xl bg-vendorBg p-3 text-primary">KYC Pending Refresh</p>
        </div>
      </div>
    </div>
  );
}
