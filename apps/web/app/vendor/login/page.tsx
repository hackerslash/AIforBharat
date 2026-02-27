import Link from "next/link";
import { ArrowRight, Building2, CreditCard, EyeOff, Lock, Mail, ShieldCheck, Sprout } from "lucide-react";

export default function VendorLoginPage() {
  return (
    <div className="flex min-h-screen">
      <section className="flex w-1/2 flex-col justify-between bg-primary px-[60px] py-16 text-white">
        <div className="space-y-12">
          <div className="flex items-center gap-2">
            <Sprout className="h-8 w-8" />
            <span className="font-heading text-2xl font-bold">AgriSetu</span>
          </div>
          <div className="space-y-5">
            <h1 className="font-heading text-5xl font-extrabold leading-[1.15]">Grow your business with India&apos;s farmers.</h1>
            <p className="max-w-xl text-base leading-relaxed text-white/75">Join 200+ verified vendors supplying quality agricultural inputs to farmer clusters across India. Bid on bulk orders, get guaranteed payments via escrow.</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            {[["200+", "Verified Vendors"], ["Rs 2.4 Cr", "Orders Processed"], ["86%", "Farmers Reached"]].map((s) => (
              <div key={s[1]} className="rounded-2xl bg-white/10 p-4">
                <p className="font-heading text-3xl font-bold">{s[0]}</p>
                <p className="text-sm text-white/70">{s[1]}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <ShieldCheck className="h-4 w-4" />
            Government-verified vendors only · AgriStack compliant · NABARD-aligned
          </div>
        </div>
      </section>
      <section className="flex w-1/2 items-center justify-center bg-white">
        <div className="w-[440px] space-y-6 rounded-2xl bg-white p-10">
          <div>
            <h2 className="font-heading text-3xl font-bold text-primary">Vendor Portal</h2>
            <p className="mt-1 text-sm text-[#A0A0A0]">Sign in to manage your bids, orders, and payments.</p>
          </div>
          <div className="space-y-4">
            <label className="space-y-1.5 text-sm font-medium text-primary">
              <span>Business Email</span>
              <span className="flex h-[52px] items-center gap-2 rounded-xl border border-beige bg-vendorBg px-4 text-[#A0A0A0]"><Mail className="h-4 w-4" />vendor@agrimart.in</span>
            </label>
            <label className="space-y-1.5 text-sm font-medium text-primary">
              <span>Password</span>
              <span className="flex h-[52px] items-center justify-between rounded-xl border border-beige bg-vendorBg px-4 text-[#A0A0A0]"><span className="flex items-center gap-2"><Lock className="h-4 w-4" />••••••••••••</span><EyeOff className="h-4 w-4" /></span>
            </label>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#A0A0A0]">Remember me</span>
            <span className="font-medium text-primary">Forgot password?</span>
          </div>
          <Link href="/vendor/dashboard" className="flex h-[52px] items-center justify-center gap-2 rounded-xl bg-primary font-heading text-sm font-bold text-white">Sign In <ArrowRight className="h-4 w-4" /></Link>
          <div className="text-center text-sm text-[#A0A0A0]">or continue with</div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-vendorBg text-primary"><Building2 className="h-4 w-4" />GSTIN Login</button>
            <button className="flex h-12 items-center justify-center gap-2 rounded-xl bg-vendorBg text-primary"><CreditCard className="h-4 w-4" />DigiLocker</button>
          </div>
          <div className="text-center text-sm text-[#A0A0A0]">New Vendor? <Link href="/vendor/register/step-1" className="font-semibold text-primary">Register as Vendor</Link></div>
        </div>
      </section>
    </div>
  );
}

