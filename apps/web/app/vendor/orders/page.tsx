'use client';

import { useState } from 'react';
import { Search, Calendar, Package, PackageCheck, Truck, Clock, AlertTriangle, IndianRupee, Eye } from 'lucide-react';

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [dateRange, setDateRange] = useState('Last 30 days');

  const orders = [
    {
      id: "AGS-2024-0842",
      product: "Tomato Seeds (Hybrid)",
      cluster: "cluster_5001",
      farmers: 13,
      quantity: "5 kg",
      amount: "₹4,200",
      status: "delivered",
      date: "Nov 21, 2024",
      customer: "Ramesh Kumar"
    },
    {
      id: "AGS-2024-0835",
      product: "NPK Fertilizer 20:20:0",
      cluster: "cluster_5002",
      farmers: 8,
      quantity: "25 kg",
      amount: "₹3,250",
      status: "shipped",
      date: "Nov 18, 2024",
      customer: "Suresh Patel"
    },
    {
      id: "AGS-2024-0821",
      product: "Ragi Seeds",
      cluster: "cluster_5003",
      farmers: 11,
      quantity: "10 kg",
      amount: "₹1,800",
      status: "confirmed",
      date: "Nov 15, 2024",
      customer: "Geeta Devi"
    },
    {
      id: "AGS-2024-0815",
      product: "Urea Fertilizer",
      cluster: "cluster_5004",
      farmers: 15,
      quantity: "50 kg",
      amount: "₹1,250",
      status: "processing",
      date: "Nov 12, 2024",
      customer: "Mahesh Gupta"
    },
    {
      id: "AGS-2024-0805",
      product: "DAP Fertilizer",
      cluster: "cluster_5005",
      farmers: 7,
      quantity: "20 kg",
      amount: "₹2,400",
      status: "disputed",
      date: "Nov 10, 2024",
      customer: "Anita Sharma"
    }
  ];

  const statusColors = {
    'received': 'bg-gray-100 text-gray-800',
    'processing': 'bg-[#F59E0B]/10 text-[#F59E0B]',
    'ready': 'bg-blue-100 text-blue-800',
    'shipped': 'bg-orange-100 text-orange-800',
    'delivered': 'bg-[#22C55E]/10 text-[#22C55E]',
    'disputed': 'bg-[#EF4444]/10 text-[#EF4444]'
  };

  const statusIcons = {
    'delivered': PackageCheck,
    'shipped': Truck,
    'confirmed': Clock,
    'processing': Clock,
    'disputed': AlertTriangle
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.product.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || order.status === statusFilter.toLowerCase();
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-7">
      <h1 className="text-[#2C5F2D] text-2xl font-bold mb-6" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Orders</h1>
      
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="relative flex-1 min-w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-[#EDE8DF] focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <select 
          className="px-4 py-3 bg-white rounded-xl border border-[#EDE8DF] focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent"
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
        >
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
        
        <select 
          className="px-4 py-3 bg-white rounded-xl border border-[#EDE8DF] focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] focus:border-transparent"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option>All</option>
          <option>Received</option>
          <option>Processing</option>
          <option>Ready</option>
          <option>Shipped</option>
          <option>Delivered</option>
          <option>Disputed</option>
        </select>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full">
          <thead className="bg-[#F7F5F0]">
            <tr>
              <th className="py-4 px-6 text-left text-gray-500 text-sm font-medium">Order ID</th>
              <th className="py-4 px-6 text-left text-gray-500 text-sm font-medium">Product</th>
              <th className="py-4 px-6 text-left text-gray-500 text-sm font-medium">Cluster</th>
              <th className="py-4 px-6 text-left text-gray-500 text-sm font-medium">Farmers</th>
              <th className="py-4 px-6 text-left text-gray-500 text-sm font-medium">Quantity</th>
              <th className="py-4 px-6 text-left text-gray-500 text-sm font-medium">Amount</th>
              <th className="py-4 px-6 text-left text-gray-500 text-sm font-medium">Status</th>
              <th className="py-4 px-6 text-left text-gray-500 text-sm font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => {
              const StatusIcon = statusIcons[order.status as keyof typeof statusIcons] || Package;
              return (
                <tr key={order.id} className="border-t border-[#F7F5F0] hover:bg-gray-50">
                  <td className="py-4 px-6 text-sm">{order.id}</td>
                  <td className="py-4 px-6">
                    <div>
                      <div className="font-medium">{order.product}</div>
                      <div className="text-gray-500 text-sm">{order.customer}</div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm">{order.cluster}</td>
                  <td className="py-4 px-6 text-sm">{order.farmers}</td>
                  <td className="py-4 px-6 text-sm">{order.quantity}</td>
                  <td className="py-4 px-6 font-medium">₹{order.amount}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[order.status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800'}`}>
                      <StatusIcon size={12} />
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <button className="p-2 rounded-lg bg-[#F7F5F0]">
                      <Eye size={16} className="text-[#2C5F2D]" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-between items-center mt-6">
        <div className="text-gray-500 text-sm">
          Showing 1 to {filteredOrders.length} of {filteredOrders.length} entries
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-2 bg-[#F7F5F0] rounded-lg text-sm">Previous</button>
          <button className="px-3 py-2 bg-[#2C5F2D] text-white rounded-lg text-sm">1</button>
          <button className="px-3 py-2 bg-[#F7F5F0] rounded-lg text-sm">Next</button>
        </div>
      </div>
    </div>
  );
}
