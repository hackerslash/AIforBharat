'use client';

import { useState } from 'react';
import { Package, Briefcase, IndianRupee, Star, TrendingUp, Eye, Building, Truck, CheckCircle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jun', revenue: 112 },
  { name: 'Jul', revenue: 148 },
  { name: 'Aug', revenue: 126 },
  { name: 'Sep', revenue: 168 },
  { name: 'Oct', revenue: 152 },
  { name: 'Nov', revenue: 180 },
];

export default function DashboardPage() {
  const [greeting] = useState("Good morning, AgroMart");

  const metrics = [
    { title: "Published Gigs", value: "3", subtitle: "All visible to farmers", icon: Briefcase, color: "text-[#2C5F2D]", bgColor: "bg-[#2C5F2D]/10" },
    { title: "Orders This Month", value: "18", subtitle: "+24% vs last month", icon: Package, color: "text-[#2C5F2D]", bgColor: "bg-[#2C5F2D]/10" },
    { title: "Total Revenue", value: "₹2.84L", subtitle: "₹54,600 in escrow", icon: IndianRupee, color: "text-[#2C5F2D]", bgColor: "bg-[#2C5F2D]/10" },
    { title: "Avg Rating", value: "4.4 ★", subtitle: "Based on 142 orders", icon: Star, color: "text-[#2C5F2D]", bgColor: "bg-[#2C5F2D]/10" },
  ];

  const recentOrders = [
    { product: "Tomato Seeds (Hybrid)", farmers: "13 farmers", city: "Mandya", status: "delivered", statusColor: "bg-[#22C55E]/10", statusText: "text-[#22C55E]" },
    { product: "NPK Fertilizer 20:20:0", farmers: "8 farmers", city: "Hassan", status: "shipped", statusColor: "bg-[#F59E0B]/10", statusText: "text-[#F59E0B]" },
    { product: "Ragi Seeds", farmers: "11 farmers", city: "Mysore", status: "confirmed", statusColor: "bg-[#3B82F6]/10", statusText: "text-[#3B82F6]" },
  ];

  const ordersRequiringAction = [
    { category: "Fertilizer", categoryColor: "text-[#F59E0B]", status: "Order Received", statusColor: "text-gray-500", product: "Urea - 50kg", quantity: "100 kg", clusterId: "cluster_5001", date: "26 Feb 2026", amount: "₹4,200", buttonLabel: "Mark as Processing", buttonColor: "bg-[#2C5F2D]", action: () => console.log('Mark urea as processing') },
    { category: "Seeds", categoryColor: "text-[#22C55E]", status: "Processing", statusColor: "text-[#22C55E]", product: "Hybrid Tomato Seeds Pack", quantity: "50 packs", clusterId: "cluster_5001", amount: "₹32,500", buttonLabel: "Mark as Ready for Delivery", buttonColor: "bg-[#2C5F2D]", action: () => console.log('Mark tomato seeds as ready') },
    { category: "Service", categoryColor: "text-gray-500", status: "Ready for Delivery", statusColor: "text-[#F59E0B]", product: "Soil Testing Service", quantity: "1 service", clusterId: "cluster_5002", amount: "₹1,200", buttonLabel: "View Details", buttonColor: "bg-[#EDE8DF]", action: () => console.log('View soil testing details') },
  ];

  return (
    <div className="flex-1 p-7 overflow-y-auto">
      {/* Greeting Row */}
      <div className="flex justify-between items-center mb-7">
        <div>
          <h1 className="text-[#2C5F2D] text-2xl font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
            {greeting}
          </h1>
          <p className="text-gray-500">You have 3 published gigs and 1 new order awaiting action.</p>
        </div>
        <button className="bg-[#2C5F2D] rounded-xl px-4.5 py-2.5 flex items-center gap-2.5">
          <Briefcase size={16} color="white" />
          <span className="text-white text-sm">Manage Gigs</span>
        </button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-2xl p-5" style={{ gap: 12 }}>
            <p className="text-gray-500 text-sm">{metric.title}</p>
            <div className="flex items-center gap-3">
              <div className={`${metric.bgColor} rounded-lg p-3`}>
                <metric.icon size={32} className={metric.color} />
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>{metric.value}</p>
                <p className="text-gray-500 text-sm flex items-center gap-1">
                  {metric.subtitle.includes('+') && <TrendingUp size={12} className="text-green-500" />}
                  {metric.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mid Row - Charts and Recent Orders */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Monthly Revenue Chart */}
        <div className="bg-white rounded-2xl p-5">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Monthly Revenue</h2>
            <div className="flex items-center gap-1 text-[#2C5F2D]">
              <div className="w-3 h-3 rounded-full bg-[#2C5F2D]"></div>
              <span className="text-sm">Revenue (₹)</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar dataKey="revenue" fill="#2C5F2D" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-2xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Recent Orders</h2>
            <a href="#" className="text-[#2C5F2D] text-sm">View all →</a>
          </div>
          <div className="border-t border-[#EDE8DF] pt-4">
            {recentOrders.map((order, index) => (
              <div key={index} className="flex justify-between items-center py-3">
                <div>
                  <p className="font-medium">{order.product}</p>
                  <p className="text-gray-500 text-sm">{order.farmers} · {order.city}</p>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-xs ${order.statusColor} ${order.statusText}`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Orders Requiring Action */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Recent Orders — Action Required</h2>
          <a href="#" className="text-[#2C5F2D] text-sm">View all orders →</a>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {ordersRequiringAction.map((order, index) => (
            <div key={index} className="bg-white rounded-2xl p-5" style={{ gap: 14 }}>
              <div className="flex justify-between">
                <span className={`px-2 py-1 rounded-full text-xs ${order.categoryColor} border ${order.categoryColor.replace('text-', 'border-')}`}>
                  {order.category}
                </span>
                <span className={`text-xs ${order.statusColor} px-2 py-1 rounded-full`}>
                  {order.status}
                </span>
              </div>
              <p className="font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>{order.product}</p>
              <p className="text-gray-500 text-sm">{order.quantity} · {order.clusterId} · {order.date}</p>
              <p className="text-[#2C5F2D] font-bold">Total: {order.amount}</p>
              <button 
                className={`${order.buttonColor} rounded-xl h-10 flex items-center justify-center`}
                onClick={order.action}
              >
                <span className="text-white text-sm font-medium">{order.buttonLabel}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
