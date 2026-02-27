'use client';

import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Building2, CreditCard, Sprout, ShieldCheck } from 'lucide-react';

export default function VendorLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login with:', { email, password });
  };

  return (
    <div className="flex h-screen">
      {/* Left Panel - Branding */}
      <div className="w-1/2 bg-[#2C5F2D] p-16 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-16">
            <Sprout size={32} className="text-white" />
            <h1 className="text-white text-2xl font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>AgriSetu</h1>
          </div>
          
          <div>
            <h2 className="text-white text-[44px] font-bold leading-[1.15]" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              Grow your business<br />with India&apos;s farmers.
            </h2>
            <p className="text-white text-opacity-70 text-lg mt-4 leading-relaxed">
              Join 200+ verified vendors supplying quality agricultural inputs to farmer clusters across India. Bid on bulk orders, get guaranteed payments via escrow.
            </p>
          </div>
        </div>
        
        <div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white bg-opacity-10 rounded-2xl p-4">
              <p className="text-white text-2xl font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>200+</p>
              <p className="text-white text-opacity-70 text-sm" style={{ fontFamily: 'Inter-Regular' }}>Verified Vendors</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-2xl p-4">
              <p className="text-white text-2xl font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>₹2.4 Cr</p>
              <p className="text-white text-opacity-70 text-sm" style={{ fontFamily: 'Inter-Regular' }}>Orders Processed</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-2xl p-4">
              <p className="text-white text-2xl font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>86%</p>
              <p className="text-white text-opacity-70 text-sm" style={{ fontFamily: 'Inter-Regular' }}>Farmers Reached</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-white text-opacity-70 text-sm">
            <ShieldCheck size={16} className="text-white text-opacity-70" />
            <p>Government-verified vendors only | AgriStack compliant | NABARD-aligned</p>
          </div>
        </div>
      </div>
      
      {/* Right Panel - Login Form */}
      <div className="w-1/2 bg-white flex items-center justify-center">
        <div className="w-[440px] bg-white rounded-2xl p-10">
          <h1 className="text-[#2C5F2D] text-2xl font-bold mb-2" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Vendor Portal</h1>
          <p className="text-gray-500 text-sm mb-6 leading-snug">Sign in to manage your bids, orders, and payments.</p>
          
          <form onSubmit={handleSubmit}>
            {/* Business Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Business Email</label>
              <div className="relative">
                <Mail size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2C5F2D]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#F7F5F0] border border-[#EDE8DF] rounded-xl h-13 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent"
                  placeholder="business@example.com"
                />
              </div>
            </div>
            
            {/* Password Field */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
              <div className="relative">
                <Lock size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2C5F2D]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#F7F5F0] border border-[#EDE8DF] rounded-xl h-13 pl-12 pr-12 focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff size={20} className="text-[#2C5F2D]" />
                  ) : (
                    <Eye size={20} className="text-[#2C5F2D]" />
                  )}
                </button>
              </div>
            </div>
            
            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#2C5F2D] focus:ring-[#2C5F2D] border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-[#2C5F2D] hover:underline">Forgot password?</a>
            </div>
            
            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-[#2C5F2D] hover:bg-green-800 rounded-xl h-13 flex items-center justify-center gap-2 text-white font-medium"
            >
              Sign In <ArrowRight size={20} />
            </button>
          </form>
          
          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          
          {/* Social Login Options */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button className="bg-[#F7F5F0] rounded-xl h-12 flex items-center justify-center gap-2">
              <Building2 size={20} className="text-[#2C5F2D]" />
              <span className="text-[#2C5F2D] text-sm">GSTIN Login</span>
            </button>
            <button className="bg-[#F7F5F0] rounded-xl h-12 flex items-center justify-center gap-2">
              <CreditCard size={20} className="text-[#2C5F2D]" />
              <span className="text-[#2C5F2D] text-sm">DigiLocker</span>
            </button>
          </div>
          
          {/* New Vendor Link */}
          <div className="text-center">
            <a href="#" className="text-[#2C5F2D] hover:underline text-sm">New Vendor? Register as Vendor</a>
          </div>
        </div>
      </div>
    </div>
  );
}

