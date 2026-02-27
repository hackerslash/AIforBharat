'use client';

import { useState } from 'react';
import { ShieldCheck, MapPin, Bell, CreditCard, Globe, Key, Eye, EyeOff, Building2 } from 'lucide-react';

export default function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "AgroMart Supplies Pvt Ltd",
    ownerName: "Rajesh Kumar",
    email: "contact@agromart.in",
    phone: "+91 98765 43210",
    gstin: "12ABCDE1234F1Z5",
    address: "123, Market Road, Mandya, Karnataka",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Update settings:', formData);
  };

  return (
    <div className="p-7">
      <h1 className="text-[#2C5F2D] text-2xl font-bold mb-6" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Settings</h1>
      
      <form onSubmit={handleSubmit} className="max-w-3xl">
        {/* Business Information Section */}
        <div className="bg-white rounded-2xl p-5 mb-6">
          <h2 className="text-[#2C5F2D] font-bold text-lg mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Business Information</h2>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="businessName">
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                className="w-full bg-[#F7F5F0] border border-[#EDE8DF] rounded-xl h-12 px-4 focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="ownerName">
                Owner Name
              </label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                className="w-full bg-[#F7F5F0] border border-[#EDE8DF] rounded-xl h-12 px-4 focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="gstin">
                GSTIN
              </label>
              <input
                type="text"
                id="gstin"
                name="gstin"
                value={formData.gstin}
                onChange={handleChange}
                className="w-full bg-[#F7F5F0] border border-[#EDE8DF] rounded-xl h-12 px-4 focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#F7F5F0] border border-[#EDE8DF] rounded-xl h-12 px-4 focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent"
              />
            </div>
          </div>
        </div>
        
        {/* Address Section */}
        <div className="bg-white rounded-2xl p-5 mb-6">
          <h2 className="text-[#2C5F2D] font-bold text-lg mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Address</h2>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="address">
              Business Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className="w-full bg-[#F7F5F0] border border-[#EDE8DF] rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent"
            />
          </div>
        </div>
        
        {/* Contact Information Section */}
        <div className="bg-white rounded-2xl p-5 mb-6">
          <h2 className="text-[#2C5F2D] font-bold text-lg mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Contact Information</h2>
          
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
              Business Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#F7F5F0] border border-[#EDE8DF] rounded-xl h-12 px-4 focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent"
            />
          </div>
        </div>
        
        {/* Security Section */}
        <div className="bg-white rounded-2xl p-5 mb-6">
          <h2 className="text-[#2C5F2D] font-bold text-lg mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Security</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="newPassword">
                New Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full bg-[#F7F5F0] border border-[#EDE8DF] rounded-xl h-12 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent"
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
            
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="confirmNewPassword">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmNewPassword"
                name="confirmNewPassword"
                value={formData.confirmNewPassword}
                onChange={handleChange}
                className="w-full bg-[#F7F5F0] border border-[#EDE8DF] rounded-xl h-12 px-4 focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent"
              />
            </div>
          </div>
        </div>
        
        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#2C5F2D] hover:bg-green-800 rounded-xl h-12 px-6 text-white font-medium"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
