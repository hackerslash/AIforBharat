'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Briefcase, Package, IndianRupee, TrendingUp, Settings, Sprout, Calendar, Bell, User } from 'lucide-react';

export default function VendorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { href: '/vendor/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/vendor/gigs', label: 'Gigs', icon: Briefcase },
    { href: '/vendor/orders', label: 'Orders', icon: Package },
    { href: '/vendor/payments', label: 'Payments', icon: IndianRupee },
    { href: '/vendor/analytics', label: 'Analytics', icon: TrendingUp },
    { href: '/vendor/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-[#F7F5F0]">
      {/* Sidebar */}
      <div className="w-60 h-screen bg-white flex flex-col justify-between py-8 px-0">
        {/* Top section */}
        <div>
          {/* Logo */}
          <div className="px-6 mb-8 flex items-center gap-2.5">
            <Sprout size={26} className="text-[#2C5F2D]" />
            <div>
              <h1 className="text-[#2C5F2D] font-bold text-[18px]" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>AgriSetu</h1>
              <p className="text-gray-500 text-[11px]">Vendor</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="px-0">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2.5 h-11 rounded-xl px-4 my-1 ${
                    isActive 
                      ? 'bg-[#2C5F2D] text-white' 
                      : 'text-gray-500 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} className={isActive ? 'text-white' : 'text-gray-500'} />
                  <span className={isActive ? 'text-white' : 'text-gray-500'}>{item.label}</span>
                  {item.label === 'Gigs' && !isActive && (
                    <span className="ml-auto bg-[#2C5F2D]/10 text-[#2C5F2D] text-xs px-2 py-0.5 rounded-full">3</span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom section - Vendor Card */}
        <div className="mx-6 mb-7 bg-[#F7F5F0] rounded-xl px-3 py-2.5 flex items-center gap-2.5">
          <div className="w-9 h-9 bg-[#2C5F2D] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">AM</span>
          </div>
          <div>
            <p className="font-bold text-[13px]" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>AgroMart Pvt Ltd</p>
            <p className="text-gray-500 text-[11px]">Verified Vendor</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="h-18 bg-white px-8 flex items-center justify-between">
          <h1 className="text-[#2C5F2D] font-bold text-[20px]" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
            {pathname.includes('/dashboard') && 'Dashboard'}
            {pathname.includes('/gigs') && 'My Gigs'}
            {pathname.includes('/orders') && 'Orders'}
            {pathname.includes('/payments') && 'Payments'}
            {pathname.includes('/analytics') && 'Analytics'}
            {pathname.includes('/settings') && 'Settings'}
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#F7F5F0] rounded-lg px-3 py-2">
              <Calendar size={16} className="text-[#2C5F2D]" />
              <span className="text-[#2C5F2D] text-sm">Feb 2026</span>
            </div>
            <button className="w-9 h-9 bg-[#F7F5F0] rounded-full flex items-center justify-center">
              <Bell size={20} className="text-[#2C5F2D]" />
            </button>
            <button className="w-9 h-9 bg-[#F7F5F0] rounded-full flex items-center justify-center">
              <User size={20} className="text-[#2C5F2D]" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-[#F7F5F0] overflow-y-auto p-7">
          {children}
        </div>
      </div>
    </div>
  );
}
