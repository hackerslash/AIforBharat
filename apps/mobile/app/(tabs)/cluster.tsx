import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { 
  ArrowLeft, Users, Sprout, Clock4, Lock, 
  Share2, User as UserIcon, Store, Shield, 
  ChevronLeft, ChevronRight, Heart, Star
} from 'lucide-react-native';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useFonts } from 'expo-font';

export default function ClusterScreen() {
  const [currentVendorIndex, setCurrentVendorIndex] = useState(0);
  
  const vendors = [
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

  const nextVendor = () => {
    setCurrentVendorIndex(prev => (prev + 1) % vendors.length);
  };

  const prevVendor = () => {
    setCurrentVendorIndex(prev => (prev - 1 + vendors.length) % vendors.length);
  };

  const currentVendor = vendors[currentVendorIndex];

  return (
    <GestureHandlerRootView className="flex-1 bg-[#FCF6F5]">
      <View className="flex-1 bg-[#FCF6F5]">
        {/* Header */}
        <View className="w-full h-20 bg-[#2C5F2D] flex-row items-center justify-between px-6">
          <TouchableOpacity>
            <ArrowLeft size={24} color="#FCF6F5" />
          </TouchableOpacity>
          
          <Text className="text-[#FCF6F5] text-[20px] font-bold text-center" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
            Your Cluster
          </Text>
          
          <TouchableOpacity>
            <Share2 size={24} color="#FCF6F5" />
          </TouchableOpacity>
        </View>

        {/* Map Area */}
        <View className="w-full h-75 bg-[#EDE8DF] relative">
          {/* Placeholder for map */}
          <View className="absolute top-0 left-0 p-4">
            <Text className="text-[#2C5F2D] text-[12px] font-bold" style={{ fontFamily: 'Inter-Regular' }}>
              Mandya District, Karnataka
            </Text>
          </View>
          
          {/* Circular overlay representing cluster radius */}
          <View className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-50 h-50 rounded-full bg-[#2C5F2D] opacity-20" />
          
          {/* Pin markers for farmers */}
          <View className="absolute top-1/3 left-1/3 w-10 h-10 bg-[#2C5F2D] rounded-full items-center justify-center">
            <UserIcon size={16} color="#FCF6F5" />
          </View>
          <View className="absolute top-2/3 left-2/5 w-8 h-8 bg-[#2C5F2D] rounded-full items-center justify-center">
            <UserIcon size={12} color="#FCF6F5" />
          </View>
          <View className="absolute top-1/4 left-3/4 w-10 h-10 bg-[#2C5F2D] rounded-full items-center justify-center">
            <UserIcon size={16} color="#FCF6F5" />
          </View>
          <View className="absolute top-3/5 left-1/4 w-8 h-8 bg-[#2C5F2D] rounded-full items-center justify-center">
            <UserIcon size={12} color="#FCF6F5" />
          </View>
          <View className="absolute top-2/5 left-4/5 w-8 h-8 bg-[#2C5F2D] rounded-full items-center justify-center">
            <UserIcon size={12} color="#FCF6F5" />
          </View>
        </View>

        {/* Bottom Panel */}
        <ScrollView className="flex-1 px-6 py-4" showsVerticalScrollIndicator={false}>
          {/* Cluster Banner */}
          <View className="bg-[#2C5F2D] rounded-[20px] p-5 flex-row items-center gap-4 mb-4">
            <View className="w-12 h-12 rounded-full bg-[#FCF6F5]/12 items-center justify-center">
              <Users size={24} color="#FCF6F5" />
            </View>
            <View>
              <Text className="text-[#FCF6F5] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                You + 9 farmers in Mandya
              </Text>
              <Text className="text-[#FCF6F5] text-opacity-70" style={{ fontFamily: 'Inter-Regular' }}>
                need 50kg Tomato Seeds
              </Text>
            </View>
          </View>

          {/* Progress Card */}
          <View className="bg-[#EDE8DF] rounded-[20px] px-4.5 py-4 mb-4" style={{ gap: 14 }}>
            <View className="flex-row items-center gap-2">
              <Sprout size={20} color="#2C5F2D" />
              <Text className="text-[#2C5F2D] font-bold text-[14px]" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                Tomato Seeds — Demand
              </Text>
              <View className="bg-[#2C5F2D] rounded-full px-2 py-1 flex-row items-center">
                <View className="w-2 h-2 rounded-full bg-[#FCF6F5] mr-1" />
                <Text className="text-[#FCF6F5] text-[11px]">Forming</Text>
              </View>
            </View>
            
            {/* Stats Row */}
            <View className="flex-row justify-between">
              <View className="items-center flex-1 border-r border-[#D4CFC8]">
                <Text className="text-[#2C5F2D] text-[22px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                  50 kg
                </Text>
                <Text className="text-[#2C5F2D] text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                  REQUIRED
                </Text>
              </View>
              
              <View className="items-center flex-1 border-r border-[#D4CFC8]">
                <Text className="text-[#2C5F2D] text-[22px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                  38 kg
                </Text>
                <Text className="text-[#2C5F2D] text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                  FILLED
                </Text>
              </View>
              
              <View className="items-center flex-1">
                <Text className="text-[#E69A28] text-[22px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                  12 kg
                </Text>
                <Text className="text-[#E69A28] text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                  STILL NEEDED
                </Text>
              </View>
            </View>
            
            {/* Progress Bar */}
            <View className="w-full h-3 bg-[#C8C2B5] rounded-full mb-2">
              <View className="h-3 bg-[#2C5F2D] rounded-full w-[76%]" />
            </View>
            
            <View className="flex-row justify-between">
              <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'Inter-Regular' }}>
                38 kg collected · 76% filled
              </Text>
              <View className="flex-row items-center gap-1">
                <Clock4 size={16} color="#E69A28" />
                <Text className="text-[#E69A28]" style={{ fontFamily: 'Inter-Regular' }}>
                  12 kg to go
                </Text>
              </View>
            </View>
          </View>

          {/* Vendor Voting Section */}
          <View>
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-[#2C5F2D] font-bold text-[16px]" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                Vote for Vendor
              </Text>
              <Text className="text-gray-500 text-[12px]" style={{ fontFamily: 'Inter-Regular' }}>
                Swipe left/right to compare vendors
              </Text>
            </View>
            
            {/* Vendor Card */}
            <View className="bg-[#EDE8DF] rounded-[20px] p-4 mb-6" style={{ gap: 14 }}>
              <View className="flex-row items-start gap-2">
                <View className="bg-[#2C5F2D] rounded-full px-2 py-1">
                  <Text className="text-[#FCF6F5] text-[11px] font-bold">#1</Text>
                </View>
                <View className="bg-[#2C5F2D] rounded-full px-2 py-1">
                  <Text className="text-[#FCF6F5] text-[11px]">Recommended Vendor</Text>
                </View>
              </View>
              
              <View className="flex-row items-center gap-3">
                <View className="w-11 h-11 rounded-full bg-[#2C5F2D] items-center justify-center">
                  <Store size={20} color="#FCF6F5" />
                </View>
                
                <View className="flex-1">
                  <Text className="text-[#2C5F2D] font-bold text-[14px]" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                    {currentVendor.name}
                  </Text>
                  <View className="flex-row items-center gap-1 mt-1">
                    <Star size={12} color="#F59E0B" fill="#F59E0B" />
                    <Text className="text-[#2C5F2D] text-[12px]">{currentVendor.rating}</Text>
                    <Text className="text-[#2C5F2D] text-[12px]">· {currentVendor.distance}km · </Text>
                    {currentVendor.certs.map((cert, idx) => (
                      <Text key={idx} className="text-[#2C5F2D] text-[12px] bg-[#2C5F2D] text-[#FCF6F5] px-1 rounded text-xs">
                        {cert}
                      </Text>
                    ))}
                  </View>
                </View>
              </View>
              
              <View className="flex-row justify-between items-center">
                <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                  ₹{currentVendor.pricePerKg}/kg
                </Text>
                <Text className="text-[#2C5F2D] text-[13px]">· {currentVendor.deliveryDays} days</Text>
              </View>
              
              {/* Vote Progress */}
              <View>
                <Text className="text-[#2C5F2D] text-[12px] mb-1" style={{ fontFamily: 'Inter-Regular' }}>
                  {currentVendor.votes} of {currentVendor.totalVotes} votes · {Math.round((currentVendor.votes/currentVendor.totalVotes)*100)}%
                </Text>
                <View className="w-full h-2 bg-[#D4CFC8] rounded-full">
                  <View 
                    className="h-2 bg-[#2C5F2D] rounded-full" 
                    style={{ width: `${(currentVendor.votes/currentVendor.totalVotes)*100}%` }}
                  />
                </View>
              </View>
              
              <TouchableOpacity className="bg-[#2C5F2D] rounded-full h-11 items-center justify-center">
                <Text className="text-[#FCF6F5] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                  Vote for this Vendor
                </Text>
              </TouchableOpacity>
            </View>
            
            {/* Dot Pagination */}
            <View className="flex-row justify-center gap-2 mb-6">
              {vendors.map((_, index) => (
                <View
                  key={index}
                  className={`h-1.75 ${
                    index === currentVendorIndex ? 'w-5 bg-[#2C5F2D]' : 'w-1.75 bg-[#D4CFC8]'
                  } rounded-full`}
                />
              ))}
            </View>
            
            {/* Navigation Arrows */}
            <View className="flex-row justify-between">
              <TouchableOpacity 
                onPress={prevVendor}
                className="w-12 h-12 rounded-full bg-[#EDE8DF] items-center justify-center"
              >
                <ChevronLeft size={24} color="#2C5F2D" />
              </TouchableOpacity>
              
              <TouchableOpacity 
                onPress={nextVendor}
                className="w-12 h-12 rounded-full bg-[#EDE8DF] items-center justify-center"
              >
                <ChevronRight size={24} color="#2C5F2D" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Locked Payment Button */}
          <TouchableOpacity className="bg-[#EDE8DF] rounded-full h-13 flex-row items-center justify-center gap-2 mt-6">
            <Lock size={20} color="#A0A0A0" />
            <Text className="text-gray-500 text-[13px]" style={{ fontFamily: 'Inter-Regular' }}>
              Payment unlocks after requirement completes
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
}
