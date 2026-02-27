import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ArrowLeft, Filter, Users, Sprout, Clock4 } from 'lucide-react-native';
import { useFonts } from 'expo-font';

export default function AvailableClustersScreen() {
  const clusters = [
    {
      id: "c1",
      product: "Tomato Seeds",
      farmers: 12,
      district: "Mandya",
      requiredQty: 50,
      filledQty: 38,
      pricePerKg: 840,
    },
    {
      id: "c2",
      product: "Ragi Seeds",
      farmers: 8,
      district: "Mysore",
      requiredQty: 30,
      filledQty: 15,
      pricePerKg: 650,
    },
    {
      id: "c3",
      product: "NPK Fertilizer",
      farmers: 15,
      district: "Bangalore Rural",
      requiredQty: 100,
      filledQty: 75,
      pricePerKg: 25,
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
        <Text className="text-[#FCF6F5] text-[20px] font-bold text-center" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          Available Clusters
        </Text>
        <TouchableOpacity>
          <Filter size={24} color="#FCF6F5" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 p-5" showsVerticalScrollIndicator={false}>
        <Text className="text-[#2C5F2D] text-[16px] font-bold mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          Clusters near you
          <Text className="text-[#2C5F2D] text-[14px] font-normal"> (3)</Text>
        </Text>

        {clusters.map((cluster, index) => (
          <View key={cluster.id} className="bg-[#EDE8DF] rounded-[20px] p-4 mb-4">
            <Text className="text-[#2C5F2D] text-[16px] font-bold mb-2" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              {cluster.product}
            </Text>
            
            <Text className="text-[#2C5F2D] text-[13px] mb-3" style={{ fontFamily: 'Inter-Regular' }}>
              {cluster.farmers} farmers · {cluster.district}
            </Text>
            
            {/* Progress Bar */}
            <View className="w-full h-3 bg-[#D4CFC8] rounded-full mb-3">
              <View 
                className="h-3 bg-[#2C5F2D] rounded-full" 
                style={{ width: `${(cluster.filledQty / cluster.requiredQty) * 100}%` }}
              />
            </View>
            
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-[#2C5F2D] text-[13px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                ₹{cluster.pricePerKg}/kg
              </Text>
              <Text className="text-[#2C5F2D] text-[13px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                {cluster.filledQty}/{cluster.requiredQty} kg
              </Text>
            </View>
            
            <TouchableOpacity className="bg-[#2C5F2D] rounded-full h-11 items-center justify-center">
              <Text className="text-[#FCF6F5] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                Join Cluster
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
