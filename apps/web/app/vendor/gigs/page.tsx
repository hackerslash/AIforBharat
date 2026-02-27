'use client';

import { useState } from 'react';
import { Plus, Edit, Eye, Package, ShoppingCart, Wrench, IndianRupee } from 'lucide-react';

export default function GigsPage() {
  const [filter, setFilter] = useState('All');
  const [gigs, setGigs] = useState([
    {
      id: 1,
      name: "Tomato Seeds",
      category: "Seeds",
      price: 840,
      unit: "kg",
      minQuantity: 10,
      maxQuantity: 100,
      description: "High-quality hybrid tomato seeds suitable for monsoon season",
      active: true
    },
    {
      id: 2,
      name: "Urea Fertilizer",
      category: "Fertilizer",
      price: 25,
      unit: "kg",
      minQuantity: 25,
      maxQuantity: 1000,
      description: "Premium quality urea fertilizer with high nitrogen content",
      active: true
    },
    {
      id: 3,
      name: "Soil Testing Service",
      category: "Service",
      price: 500,
      unit: "service",
      minQuantity: 1,
      maxQuantity: 100,
      description: "Comprehensive soil health assessment with recommendations",
      active: false
    }
  ]);

  const categories = ['All', 'Seeds', 'Fertilizer', 'Equipment', 'Service'];
  const filters = ['All', 'Active', 'Closed', 'Draft'];

  const toggleGigStatus = (id: number) => {
    setGigs(gigs.map(gig => 
      gig.id === id ? { ...gig, active: !gig.active } : gig
    ));
  };

  return (
    <div className="p-7">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-[#2C5F2D] text-2xl font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>My Gigs</h1>
        <button className="bg-[#2C5F2D] rounded-xl px-4 py-2.5 flex items-center gap-2">
          <Plus size={20} color="white" />
          <span className="text-white">New Gig</span>
        </button>
      </div>

      <div className="flex gap-2 mb-6">
        {filters.map((f) => (
          <button
            key={f}
            className={`px-4 py-2 rounded-xl text-sm ${
              filter === f 
                ? 'bg-[#2C5F2D] text-white' 
                : 'bg-[#EDE8DF] text-[#2C5F2D]'
            }`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gigs.map((gig) => (
          <div key={gig.id} className="bg-white rounded-2xl p-5">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  gig.category === 'Seeds' ? 'text-[#22C55E] bg-[#22C55E]/10' :
                  gig.category === 'Fertilizer' ? 'text-[#F59E0B] bg-[#F59E0B]/10' :
                  'text-gray-500 bg-gray-100'
                }`}>
                  {gig.category}
                </span>
                <h3 className="font-bold text-lg mt-2" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>{gig.name}</h3>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-[#F7F5F0]">
                  <Edit size={16} className="text-[#2C5F2D]" />
                </button>
                <button className="p-2 rounded-lg bg-[#F7F5F0]">
                  <Eye size={16} className="text-[#2C5F2D]" />
                </button>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm mb-4">{gig.description}</p>
            
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-gray-500 text-xs">Price per unit</p>
                <p className="font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>₹{gig.price}/{gig.unit}</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs">Quantity Range</p>
                <p className="font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>{gig.minQuantity}-{gig.maxQuantity} {gig.unit}</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <button 
                className={`rounded-full w-12 h-6 flex items-center p-1 ${
                  gig.active ? 'bg-[#2C5F2D] justify-end' : 'bg-gray-300 justify-start'
                }`}
                onClick={() => toggleGigStatus(gig.id)}
              >
                <div className="bg-white w-4 h-4 rounded-full"></div>
              </button>
              <span className={`text-sm ${gig.active ? 'text-[#2C5F2D]' : 'text-gray-500'}`}>
                {gig.active ? 'Active' : 'Paused'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
