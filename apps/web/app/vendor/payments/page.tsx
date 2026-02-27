'use client';

import { useState } from 'react';
import { IndianRupee, Calendar, Clock, PackageCheck, AlertTriangle } from 'lucide-react';

export default function PaymentsPage() {
  const [payments] = useState([
    {
      id: "PYMT-001",
      orderId: "AGS-2024-0842",
      amount: "₹4,200",
      status: "released",
      releaseDate: "Dec 1, 2024",
      customer: "Ramesh Kumar"
    },
    {
      id: "PYMT-002", 
      orderId: "AGS-2024-0835",
      amount: "₹3,250",
      status: "released",
      releaseDate: "Nov 28, 2024",
      customer: "Suresh Patel"
    },
    {
      id: "PYMT-003",
      orderId: "AGS-2024-0821",
      amount: "₹1,800",
      status: "pending",
      releaseDate: "Nov 25, 2024",
      customer: "Geeta Devi"
    },
    {
      id: "PYMT-004",
      orderId: "AGS-2024-0815",
      amount: "₹1,250",
      status: "in_escrow",
      releaseDate: "Nov 22, 2024",
      customer: "Mahesh Gupta"
    }
  ]);

  const summaryData = [
    { title: "Total Received", amount: "₹2.84L", icon: IndianRupee, color: "text-[#22C55E]" },
    { title: "In Escrow", amount: "₹54,600", icon: PackageCheck, color: "text-[#2C5F2D]" },
    { title: "Pending Release", amount: "₹18,400", icon: Clock, color: "text-[#F59E0B]" }
  ];

  const statusColors = {
    'released': 'bg-[#22C55E]/10 text-[#22C5E5]',
    'pending': 'bg-[#F59E0B]/10 text-[#F59E0B]',
    'in_escrow': 'bg-[#2C5F2D]/10 text-[#2C5F2D]'
  };

  return (
    <div className="p-7">
      <h1 className="text-[#2C5F2D] text-2xl font-bold mb-6" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Payments</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {summaryData.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="bg-[#F7F5F0] p-3 rounded-lg">
                <item.icon size={24} className={item.color} />
              </div>
              <div>
                <p className="text-gray-500 text-sm">{item.title}</p>
                <p className="text-2xl font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>{item.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Escrow Explanation Banner */}
      <div className="bg-[#F7F5F0] rounded-2xl p-5 mb-6 flex items-start gap-3">
        <AlertTriangle size={24} className="text-[#2C5F2D] mt-0.5" />
        <div>
          <h3 className="font-bold text-[#2C5F2D]" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Escrow Protection</h3>
          <p className="text-gray-600 text-sm mt-1">
            Funds are held securely in escrow and released to you 24 hours after the farmer confirms delivery receipt. 
            This ensures trust in the transaction while protecting your interests.
          </p>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full">
          <thead className="bg-[#F7F5F0]">
            <tr>
              <th className="py-4 px-6 text-left text-gray-500 text-sm font-medium">Payment ID</th>
              <th className="py-4 px-6 text-left text-gray-500 text-sm font-medium">Order ID</th>
              <th className="py-4 px-6 text-left text-gray-500 text-sm font-medium">Customer</th>
              <th className="py-4 px-6 text-left text-gray-500 text-sm font-medium">Amount</th>
              <th className="py-4 px-6 text-left text-gray-500 text-sm font-medium">Status</th>
              <th className="py-4 px-6 text-left text-gray-500 text-sm font-medium">Release Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="border-t border-[#F7F5F0] hover:bg-gray-50">
                <td className="py-4 px-6 text-sm">{payment.id}</td>
                <td className="py-4 px-6 text-sm">{payment.orderId}</td>
                <td className="py-4 px-6">
                  <div className="font-medium">{payment.customer}</div>
                </td>
                <td className="py-4 px-6 font-medium">₹{payment.amount}</td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[payment.status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800'}`}>
                    {payment.status === 'released' ? <PackageCheck size={12} /> : 
                     payment.status === 'pending' ? <Clock size={12} /> : 
                     <PackageCheck size={12} />}
                    {payment.status === 'released' ? 'Released' : 
                     payment.status === 'pending' ? 'Pending' : 
                     'In Escrow'}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm">{payment.releaseDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
