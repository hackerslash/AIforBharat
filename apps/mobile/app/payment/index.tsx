import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ArrowLeft, Lock, Shield, Users, Smartphone, CreditCard, QrCode, Wallet, IndianRupee, Store } from 'lucide-react-native';
import { useFonts } from 'expo-font';

export default function PaymentScreen() {
  const [timeLeft, setTimeLeft] = useState(86400); // 24h in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

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
          Secure Payment
        </Text>
        <TouchableOpacity>
          <Lock size={24} color="#FCF6F5" />
        </TouchableOpacity>
      </View>

      <View className="flex-1 p-6">
        {/* Countdown Timer Banner */}
        <View className="bg-[#2C5F2D] rounded-[20px] h-[86px] justify-center items-center mb-6">
          <Text className="text-[#FCF6F5] text-opacity-70 text-[11px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
            TIME LEFT TO PAY
          </Text>
          <Text className="text-[#FCF6F5] text-[34px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
            {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
          </Text>
          <View className="flex-row justify-between w-40 mt-1">
            <Text className="text-[#FCF6F5] text-opacity-44 text-[12px]" style={{ fontFamily: 'Inter-Regular' }}>
              HRS
            </Text>
            <Text className="text-[#FCF6F5] text-opacity-44 text-[12px]" style={{ fontFamily: 'Inter-Regular' }}>
              MIN
            </Text>
            <Text className="text-[#FCF6F5] text-opacity-44 text-[12px]" style={{ fontFamily: 'Inter-Regular' }}>
              SEC
            </Text>
          </View>
        </View>

        {/* Escrow Badge */}
        <View className="bg-[#EDE8DF] rounded-2xl px-5 py-3.5 flex-row items-center gap-3 mb-6">
          <Shield size={20} color="#2C5F2D" />
          <View>
            <Text className="text-[#2C5F2D] font-bold text-[14px]" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              Your money is safe
            </Text>
            <Text className="text-[#2C5F2D] text-[12px]" style={{ fontFamily: 'Inter-Regular' }}>
              Released only after delivery confirmation
            </Text>
          </View>
        </View>

        {/* Order Summary */}
        <Text className="text-[#2C5F2D] text-[16px] font-bold mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          Order Summary
        </Text>

        {/* Order Card */}
        <View className="bg-[#EDE8DF] rounded-[20px] p-5 mb-6" style={{ gap: 14 }}>
          {/* Vendor Row */}
          <View className="flex-row items-center gap-3">
            <View className="w-11 h-11 bg-[#2C5F2D] rounded-full items-center justify-center">
              <Store size={20} color="#FCF6F5" />
            </View>
            <View className="flex-1">
              <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                AgroMart Supplies Pvt Ltd
              </Text>
              <View className="flex-row gap-2 mt-1">
                <Text className="text-[#2C5F2D] text-[11px] bg-[#2C5F2D] text-[#FCF6F5] px-2 py-1 rounded">
                  ISI
                </Text>
                <Text className="text-[#2C5F2D] text-[11px] bg-[#2C5F2D] text-[#FCF6F5] px-2 py-1 rounded">
                  Agmark
                </Text>
              </View>
            </View>
          </View>

          {/* Divider */}
          <View className="h-px bg-[#D4CFC8]" />

          {/* Price Rows */}
          <View className="flex-row justify-between">
            <Text className="text-[#2C5F2D]" style={{ fontFamily: 'Inter-Regular' }}>
              Product
            </Text>
            <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
              Tomato Seeds (5 kg)
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-[#2C5F2D]" style={{ fontFamily: 'Inter-Regular' }}>
              Unit Price
            </Text>
            <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
              ₹840/kg
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-[#2C5F2D]" style={{ fontFamily: 'Inter-Regular' }}>
              Your Share
            </Text>
            <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
              5 kg
            </Text>
          </View>

          {/* Divider */}
          <View className="h-px bg-[#D4CFC8]" />

          {/* Total Row */}
          <View className="flex-row justify-between">
            <Text className="text-[#2C5F2D] font-bold text-[15px]" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              Your Total
            </Text>
            <Text className="text-[#2C5F2D] font-bold text-[22px]" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              ₹4,200
            </Text>
          </View>
        </View>

        {/* Cluster Payment Status */}
        <View className="bg-[#EDE8DF] rounded-2xl px-5 py-3.5 flex-row items-center gap-3 mb-6">
          <Users size={20} color="#2C5F2D" />
          <View className="flex-1">
            <View className="flex-row justify-between">
              <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                7 of 10 farmers paid
              </Text>
              <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                70%
              </Text>
            </View>
            <View className="w-full h-1.5 bg-[#D4CFC8] rounded-full mt-2">
              <View className="h-1.5 bg-[#2C5F2D] rounded-full w-[70%]" />
            </View>
            <Text className="text-gray-500 text-[12px] mt-2" style={{ fontFamily: 'Inter-Regular' }}>
              Waiting for 3 more farmers — order confirmed when all pay
            </Text>
          </View>
        </View>

        {/* UPI Apps Row */}
        <View className="flex-row justify-between mb-6">
          <TouchableOpacity className="bg-[#EDE8DF] rounded-2xl py-3 flex-1 items-center gap-1.5 mx-1">
            <Smartphone size={20} color="#2C5F2D" />
            <Text className="text-[#2C5F2D] text-[12px]" style={{ fontFamily: 'Inter-Regular' }}>
              PhonePe
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#EDE8DF] rounded-2xl py-3 flex-1 items-center gap-1.5 mx-1">
            <CreditCard size={20} color="#2C5F2D" />
            <Text className="text-[#2C5F2D] text-[12px]" style={{ fontFamily: 'Inter-Regular' }}>
              GPay
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#EDE8DF] rounded-2xl py-3 flex-1 items-center gap-1.5 mx-1">
            <QrCode size={20} color="#2C5F2D" />
            <Text className="text-[#2C5F2D] text-[12px]" style={{ fontFamily: 'Inter-Regular' }}>
              Scan QR
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-[#EDE8DF] rounded-2xl py-3 flex-1 items-center gap-1.5 mx-1">
            <Wallet size={20} color="#2C5F2D" />
            <Text className="text-[#2C5F2D] text-[12px]" style={{ fontFamily: 'Inter-Regular' }}>
              BHIM
            </Text>
          </TouchableOpacity>
        </View>

        {/* Pay Now Button */}
        <TouchableOpacity className="bg-[#2C5F2D] rounded-full h-14 flex-row items-center justify-center gap-2">
          <Lock size={20} color="#FCF6F5" />
          <Text className="text-[#FCF6F5] text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
            Pay ₹4,200 Securely
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


