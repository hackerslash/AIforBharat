import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ArrowLeft, Mic, Pencil, Calendar, MapPin } from 'lucide-react-native';
import { useFonts } from 'expo-font';

export default function OrderConfirmationScreen() {
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
      <View className="w-full h-20 bg-[#2C5F2D] flex-row items-center px-6">
        <TouchableOpacity>
          <ArrowLeft size={24} color="#FCF6F5" />
        </TouchableOpacity>
        <Text className="text-[#FCF6F5] text-[20px] font-bold ml-4" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          Confirm Your Order
        </Text>
      </View>

      <View className="flex-1 p-6">
        {/* AI Banner */}
        <View className="bg-[#2C5F2D] rounded-[14px] px-4 py-3.5 flex-row gap-2.5 items-center mb-6">
          <Mic size={18} color="#FCF6F5" />
          <Text className="text-[#FCF6F5] text-[13px] leading-relaxed" style={{ fontFamily: 'Inter-Regular' }}>
            AI extracted from your voice. Review & Confirm
          </Text>
        </View>

        {/* Form Card */}
        <View className="bg-[#EDE8DF] rounded-[20px] mb-6">
          {/* Product Row */}
          <View className="flex-row items-center justify-between p-4 border-b border-[#D4CFC8]">
            <View>
              <Text className="text-gray-500 text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                PRODUCT
              </Text>
              <Text className="text-[#2C5F2D] text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                Tomato Seeds (Hybrid)
              </Text>
            </View>
            <TouchableOpacity>
              <Pencil size={20} color="#2C5F2D" />
            </TouchableOpacity>
          </View>

          {/* Quantity Row */}
          <View className="flex-row items-center justify-between p-4 border-b border-[#D4CFC8]">
            <View>
              <Text className="text-gray-500 text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                QUANTITY
              </Text>
              <Text className="text-[#2C5F2D] text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                5 kg
              </Text>
            </View>
            <TouchableOpacity>
              <Pencil size={20} color="#2C5F2D" />
            </TouchableOpacity>
          </View>

          {/* Delivery Date Row */}
          <View className="flex-row items-center justify-between p-4 border-b border-[#D4CFC8]">
            <View>
              <Text className="text-gray-500 text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                DELIVERY DATE
              </Text>
              <Text className="text-[#2C5F2D] text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                Next Week (Nov 28)
              </Text>
            </View>
            <TouchableOpacity>
              <Calendar size={20} color="#2C5F2D" />
            </TouchableOpacity>
          </View>

          {/* Delivery Location Row */}
          <View className="flex-row items-center justify-between p-4 border-b border-[#D4CFC8]">
            <View>
              <Text className="text-gray-500 text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                DELIVERY LOCATION
              </Text>
              <Text className="text-[#2C5F2D] text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                Mandya Mandi, Gate 2
              </Text>
            </View>
            <TouchableOpacity>
              <MapPin size={20} color="#2C5F2D" />
            </TouchableOpacity>
          </View>

          {/* Special Instructions Row */}
          <View className="flex-row items-center justify-between p-4">
            <View>
              <Text className="text-gray-500 text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                SPECIAL INSTRUCTIONS
              </Text>
              <Text className="text-[#2C5F2D] text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                Certified organic only
              </Text>
            </View>
            <TouchableOpacity>
              <Pencil size={20} color="#2C5F2D" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Confirm Button */}
        <TouchableOpacity className="bg-[#2C5F2D] rounded-full h-14 items-center justify-center">
          <Text className="text-[#FCF6F5] text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
            Confirm
          </Text>
        </TouchableOpacity>

        {/* Note */}
        <Text className="text-gray-500 text-[13px] text-center mt-4" style={{ fontFamily: 'Inter-Regular' }}>
          Tap any field to edit before confirming
        </Text>
      </View>
    </View>
  );
}
