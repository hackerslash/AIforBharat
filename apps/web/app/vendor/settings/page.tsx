import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl bg-white p-6">
        <h2 className="font-heading text-2xl font-bold text-primary">Settings</h2>
        <p className="mt-2 text-sm text-[#A0A0A0]">Profile, notifications, and compliance settings.</p>
      </div>
      <Link href="/vendor/profile" className="inline-flex rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white">Open Profile & Settings</Link>
    </div>
  );
}
