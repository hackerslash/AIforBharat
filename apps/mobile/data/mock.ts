export const MOCK_USER = {
  name: "Ramesh Kumar",
  phone: "+91 98765 43210",
  district: "Mandya District, Karnataka",
  village: "Belavangala",
  landArea: 2.1,
  crops: ["Tomato", "Ragi"],
  upiId: "ramesh@upi",
  language: "kn" as const,
  totalSavings: 3240,
  ordersPlaced: 3,
  avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
};

export const MOCK_CLUSTER = {
  id: "cluster_5001",
  district: "Mandya",
  totalFarmers: 10,
  joinedFarmers: 9,
  product: "Tomato Seeds",
  requiredQty: 50,
  filledQty: 38,
  status: "forming",
};

export const MOCK_VENDORS = [
  {
    id: "v1",
    name: "AgroMart Supplies Pvt Ltd",
    rating: 4.7,
    distance: 12,
    certs: ["ISI", "Agmark"],
    pricePerKg: 840,
    deliveryDays: 3,
    votes: 7,
    totalVotes: 10,
    recommended: true,
  },
  {
    id: "v2",
    name: "KisanBazar Direct",
    rating: 4.3,
    distance: 8,
    certs: ["ISI"],
    pricePerKg: 860,
    deliveryDays: 2,
    votes: 2,
    totalVotes: 10,
    recommended: false,
  },
];

export const MOCK_ORDER = {
  id: "AGS-2024-0842",
  product: "Tomato Seeds (Hybrid)",
  quantity: 5,
  unit: "kg",
  pricePerKg: 840,
  total: 4200,
  vendor: "AgroMart Supplies Pvt Ltd",
  status: "out_for_delivery",
  savings: 800,
  co2Saved: 12,
};
