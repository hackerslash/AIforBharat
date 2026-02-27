'use client';

import { useState } from 'react';
import { Calendar, TrendingUp, Package, IndianRupee, MapPin } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const revenueData = [
  { name: 'Jan', revenue: 120000 },
  { name: 'Feb', revenue: 135000 },
  { name: 'Mar', revenue: 142000 },
  { name: 'Apr', revenue: 158000 },
  { name: 'May', revenue: 175000 },
  { name: 'Jun', revenue: 192000 },
  { name: 'Jul', revenue: 210000 },
  { name: 'Aug', revenue: 225000 },
  { name: 'Sep', revenue: 248000 },
  { name: 'Oct', revenue: 265000 },
  { name: 'Nov', revenue: 282000 },
  { name: 'Dec', revenue: 310000 },
];

const productData = [
  { name: 'Tomato Seeds', sales: 125 },
  { name: 'Urea Fertilizer', sales: 98 },
  { name: 'Ragi Seeds', sales: 87 },
  { name: 'NPK Fertilizer', sales: 76 },
  { name: 'DAP Fertilizer', sales: 65 },
  { name: 'Soil Testing', sales: 54 },
];

const districtData = [
  { name: 'Mandya', value: 35 },
  { name: 'Mysore', value: 25 },
  { name: 'Bangalore', value: 20 },
  { name: 'Hassan', value: 15 },
  { name: 'Chitradurga', value: 10 },
  { name: 'Davanagere', value: 8 },
];

const COLORS = ['#2C5F2D', '#E69A28', '#A7C7E7', '#9BBB59', '#C5E0B4', '#FFF2CC'];

export default function AnalyticsPage() {
  const [dateRange, setDateRange] = useState('Last 12 months');

  return (
    <div className="p-7">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[#2C5F2D] text-2xl font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Analytics</h1>
        <div className="flex items-center gap-2">
          <Calendar size={20} className="text-[#2C5F2D]" />
          <select 
            className="px-3 py-2 bg-white rounded-lg border border-[#EDE8DF] focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last 12 months</option>
          </select>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Trend Chart */}
        <div className="bg-white rounded-2xl p-5">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Revenue Trend</h2>
            <div className="flex items-center gap-1 text-[#2C5F2D]">
              <IndianRupee size={16} />
              <span className="text-sm">Revenue (₹)</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Revenue']} />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#2C5F2D" 
                strokeWidth={3} 
                dot={{ stroke: '#2C5F2D', strokeWidth: 2, r: 4 }} 
                activeDot={{ r: 6, stroke: '#fff', strokeWidth: 2 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Top Products Chart */}
        <div className="bg-white rounded-2xl p-5">
          <h2 className="text-[#2C5F2D] font-bold mb-5" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Top Products</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="sales" fill="#2C5F2D" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* District-wise Sales */}
        <div className="bg-white rounded-2xl p-5">
          <h2 className="text-[#2C5F2D] font-bold mb-5" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Sales by District</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={districtData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="value">
                {districtData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Rating Trend Placeholder */}
        <div className="bg-white rounded-2xl p-5">
          <h2 className="text-[#2C5F2D] font-bold mb-5" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Rating Trend Over Time</h2>
          <div className="h-80 flex items-center justify-center bg-[#FCF6F5] rounded-xl">
            <div className="text-center">
              <TrendingUp size={48} className="text-[#2C5F2D] mx-auto mb-3" />
              <p className="text-[#2C5F2D] font-medium">Rating trend visualization coming soon</p>
              <p className="text-gray-500 text-sm mt-1">Average rating: 4.4/5 stars</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
