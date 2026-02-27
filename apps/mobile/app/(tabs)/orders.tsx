import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Package, Sprout, TrendingUp, Clock, CheckCircle, XCircle, AlertTriangle, ChevronRight } from 'lucide-react-native';
import { useFonts } from 'expo-font';

export default function OrdersScreen() {
  const orders = [
    {
      id: "AGS-2024-0842",
      product: "Tomato Seeds (Hybrid)",
      quantity: "5 kg",
      vendor: "AgroMart Supplies Pvt Ltd",
      amount: "₹4,200",
      status: "delivered", // delivered, shipped, processing, pending, disputed
      date: "Nov 21, 2024",
      savings: "₹800"
    },
    {
      id: "AGS-2024-0835",
      product: "NPK Fertilizer 20:20:0",
      quantity: "25 kg",
      vendor: "KisanBazar Direct",
      amount: "₹3,250",
      status: "shipped",
      date: "Nov 18, 2024",
      savings: "₹420"
    },
    {
      id: "AGS-2024-0821",
      product: "Ragi Seeds",
      quantity: "10 kg",
      vendor: "Organic Farms Co.",
      amount: "₹1,800",
      status: "processing",
      date: "Nov 15, 2024",
      savings: "₹150"
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'delivered': return 'bg-[#22C55E]';
      case 'shipped': return 'bg-[#F59E0B]';
      case 'processing': return 'bg-[#3B82F6]';
      case 'pending': return 'bg-[#EF4444]';
      case 'disputed': return 'bg-[#EF4444]';
      default: return 'bg-[#9CA3AF]';
    }
  };

  const getStatusTextColor = (status) => {
    switch(status) {
      case 'delivered': return 'text-[#22C55E]';
      case 'shipped': return 'text-[#F59E0B]';
      case 'processing': return 'text-[#3B82F6]';
      case 'pending': return 'text-[#EF4444]';
      case 'disputed': return 'text-[#EF4444]';
      default: return 'text-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'delivered': return 'Delivered';
      case 'shipped': return 'Out for Delivery';
      case 'processing': return 'Processing';
      case 'pending': return 'Payment Pending';
      case 'disputed': return 'Disputed';
      default: return status;
    }
  };

  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-Bold': require('@expo-google-fonts/plus-jakarta-sans/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-Regular': require('@expo-google-fonts/plus-jakarta-sans/PlusJakartaSans-Regular.ttf'),
    'Inter-Regular': require('@expo-google-fonts/inter/Inter-Regular.ttf'),
    'Inter-Bold': require('@expo-google-fonts/inter/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1 bg-[#FCF6F5]">
      {/* Header */}
      <View className="w-full h-20 bg-[#2C5F2D] flex-row items-center justify-between px-6">
        <Text className="text-[#FCF6F5] text-[20px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          My Orders
        </Text>
        <View className="bg-[#FCF6F5]/12 rounded-full px-2 py-1">
          <Text className="text-[#FCF6F5] text-[12px]">3 orders</Text>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView className="flex-1 p-5" showsVerticalScrollIndicator={false}>
        {orders.map((order, index) => (
          <TouchableOpacity key={index} className="bg-[#EDE8DF] rounded-[20px] p-4 mb-4" onPress={() => console.log(`View order ${order.id}`)}>
            {/* Order Status and Date */}
            <View className="flex-row justify-between items-center mb-2">
              <View className={`${getStatusColor(order.status)} rounded-full px-3 py-1`}>
                <Text className="text-[#FCF6F5] text-[12px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                  {getStatusText(order.status)}
                </Text>
              </View>
              <Text className="text-[#2C5F2D] text-[12px]" style={{ fontFamily: 'Inter-Regular' }}>
                {order.date}
              </Text>
            </View>
            
            {/* Product Name */}
            <Text className="text-[#2C5F2D] text-[16px] font-bold mb-2" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              {order.product}
            </Text>
            
            {/* Order Details */}
            <Text className="text-[#2C5F2D] text-[13px] mb-2" style={{ fontFamily: 'Inter-Regular' }}>
              {order.quantity} · {order.vendor} · {order.amount}
            </Text>
            
            {/* Savings and Chevron */}
            <View className="flex-row justify-between items-center">
              <Text className="text-[#2C5F2D] text-[13px]" style={{ fontFamily: 'Inter-Regular' }}>
                Saved ₹{order.savings} with cluster
              </Text>
              <ChevronRight size={20} color="#2C5F2D" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}


