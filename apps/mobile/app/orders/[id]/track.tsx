import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ArrowLeft, EllipsisVertical, MapPin, PackageCheck, TriangleAlert, Check } from 'lucide-react-native';
import { useFonts } from 'expo-font';

export default function TrackOrderScreen() {
  const timelineSteps = [
    { 
      title: "Order Confirmed", 
      time: "Nov 20 · 10:32 AM", 
      completed: true, 
      icon: "check" 
    },
    { 
      title: "Packed", 
      time: "Nov 20 · 2:15 PM", 
      completed: true, 
      icon: "check" 
    },
    { 
      title: "Out for Delivery (Now!)", 
      time: "Nov 21 · Arriving today by 5 PM", 
      completed: false, 
      active: true,
      icon: "square" 
    },
    { 
      title: "Delivered", 
      time: "Tap to confirm receipt", 
      completed: false, 
      pending: true,
      icon: "dot" 
    }
  ];

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
        <TouchableOpacity>
          <ArrowLeft size={24} color="#FCF6F5" />
        </TouchableOpacity>
        <Text className="text-[#FCF6F5] text-[20px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          Track Order
        </Text>
        <TouchableOpacity>
          <EllipsisVertical size={24} color="#FCF6F5" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 p-6" showsVerticalScrollIndicator={false}>
        {/* Status Card */}
        <View className="bg-[#2C5F2D] rounded-[20px] p-5 mb-6" style={{ gap: 14 }}>
          <View>
            <Text className="text-[#FCF6F5] text-opacity-70" style={{ fontFamily: 'Inter-Regular' }}>
              Order #AGS-2024-0842
            </Text>
            <View className="flex-row items-center gap-2 mt-1">
              <View className="bg-[#2C5F2D]/19 rounded-full px-2 py-1 flex-row items-center">
                <View className="w-2 h-2 rounded-full bg-[#FCF6F5] mr-1" />
                <Text className="text-[#FCF6F5] text-[11px]">Out for Delivery</Text>
              </View>
            </View>
          </View>
          
          <Text className="text-[#FCF6F5] text-[18px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
            Tomato Seeds (Hybrid)
          </Text>
          
          <Text className="text-[#FCF6F5] text-opacity-70 text-[13px]" style={{ fontFamily: 'Inter-Regular' }}>
            AgroMart Supplies Pvt Ltd · Arriving Today
          </Text>
          
          <View className="bg-[#FCF6F5]/12 rounded-full px-3 py-2 flex-row items-center gap-2">
            <MapPin size={16} color="#FCF6F5" />
            <Text className="text-[#FCF6F5] text-[13px]">Delivery Point: Mandya Mandi · 2.3 km</Text>
          </View>
        </View>

        {/* Order Timeline */}
        <View className="mb-6">
          <Text className="text-[#2C5F2D] text-[16px] font-bold mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
            Order Timeline
          </Text>
          
          {timelineSteps.map((step, index) => (
            <View key={index} className="flex-row mb-6">
              {/* Left column with dot and line */}
              <View className="w-6 items-center mr-3">
                <View 
                  className={`w-6 h-6 rounded-full ${
                    step.completed ? 'bg-[#2C5F2D]' : 
                    step.active ? 'bg-[#2C5F2D]' : 
                    'bg-[#FCF6F5]'
                  } items-center justify-center`}
                >
                  {step.icon === 'check' && (
                    <Check size={16} color="#FCF6F5" />
                  )}
                  {step.icon === 'square' && step.active && (
                    <View className="w-3 h-3 bg-[#FCF6F5]" />
                  )}
                  {step.icon === 'dot' && !step.pending && (
                    <View className="w-2 h-2 rounded-full bg-[#D4CFC8]" />
                  )}
                </View>
                
                {index < timelineSteps.length - 1 && (
                  <View 
                    className={`w-0.5 flex-1 mt-2 ${
                      step.completed ? 'bg-[#2C5F2D]' : 
                      step.active ? 'bg-[#2C5F2D]' : 
                      'bg-[#D4CFC8]'
                    }`}
                    style={{
                      borderStyle: step.active ? 'dashed' : 'solid'
                    }}
                  />
                )}
              </View>
              
              {/* Right column with content */}
              <View className="flex-1 pb-4">
                <Text 
                  className={`${
                    step.active ? 'text-[#2C5F2D] font-bold' : 
                    step.completed ? 'text-[#2C5F2D]' : 
                    'text-gray-400'
                  }`}
                  style={{ fontFamily: step.active ? 'PlusJakartaSans-Bold' : 'Inter-Regular' }}
                >
                  {step.title}
                </Text>
                <Text 
                  className={step.completed ? 'text-[#2C5F2D]' : 'text-gray-400'}
                  style={{ fontFamily: 'Inter-Regular' }}
                >
                  {step.time}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* Confirm Delivery Button */}
        <TouchableOpacity className="bg-[#2C5F2D] rounded-full h-14 flex-row items-center justify-center gap-2 mb-6">
          <PackageCheck size={20} color="#FCF6F5" />
          <Text className="text-[#FCF6F5] text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
            Confirm Delivery Received
          </Text>
        </TouchableOpacity>

        {/* Impact Card */}
        <View className="bg-[#EDE8DF] rounded-[20px] p-5 mb-6">
          <Text className="text-[#2C5F2D] text-[14px] font-bold mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
            Your Impact This Order
          </Text>
          
          <View className="flex-row justify-between">
            <View className="items-center flex-1 border-r border-[#D4CFC8]">
              <Text className="text-[#2C5F2D] text-[22px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                ₹800
              </Text>
              <Text className="text-[#2C5F2D] text-[13px]" style={{ fontFamily: 'Inter-Regular' }}>
                Saved
              </Text>
            </View>
            
            <View className="items-center flex-1 border-r border-[#D4CFC8]">
              <Text className="text-[#2C5F2D] text-[22px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                12 kg
              </Text>
              <Text className="text-[#2C5F2D] text-[13px]" style={{ fontFamily: 'Inter-Regular' }}>
                CO₂ Saved
              </Text>
            </View>
            
            <View className="items-center flex-1">
              <Text className="text-[#2C5F2D] text-[22px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                0%
              </Text>
              <Text className="text-[#2C5F2D] text-[13px]" style={{ fontFamily: 'Inter-Regular' }}>
                Waste
              </Text>
            </View>
          </View>
        </View>

        {/* Raise Dispute */}
        <TouchableOpacity className="bg-[#EDE8DF] rounded-2xl px-5 py-3 flex-row items-center gap-2">
          <TriangleAlert size={20} color="#EF4444" />
          <Text className="text-[#EF4444] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
            Raise a dispute
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}


