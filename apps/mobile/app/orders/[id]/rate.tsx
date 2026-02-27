import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { ArrowLeft, Star, Package, IndianRupee } from 'lucide-react-native';
import { useFonts } from 'expo-font';

export default function RateOrderScreen() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-Bold': require('@expo-google-fonts/plus-jakarta-sans/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-Regular': require('@expo-google-fonts/plus-jakarta-sans/PlusJakartaSans-Regular.ttf'),
    'Inter-Regular': require('@expo-google-fonts/inter/Inter-Regular.ttf'),
    'Inter-Bold': require('@expo-google-fonts/inter/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleStarPress = (starIndex) => {
    setRating(starIndex);
  };

  return (
    <View className="flex-1 bg-[#FCF6F5]">
      {/* Header */}
      <View className="w-full h-20 bg-[#2C5F2D] flex-row items-center px-6">
        <TouchableOpacity>
          <ArrowLeft size={24} color="#FCF6F5" />
        </TouchableOpacity>
        <Text className="text-[#FCF6F5] text-[20px] font-bold ml-4" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          Order #AGS-2024-0842
        </Text>
      </View>

      <ScrollView className="flex-1 p-6" showsVerticalScrollIndicator={false}>
        {/* Status Card */}
        <View className="bg-[#2C5F2D] rounded-[20px] p-5 mb-6">
          <View className="bg-[#2C5F2D]/19 rounded-full px-2 py-1 w-20 mb-3">
            <Text className="text-[#FCF6F5] text-[11px] text-center">Delivered</Text>
          </View>
          <Text className="text-[#FCF6F5] text-[18px] font-bold mb-2" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
            Tomato Seeds (Hybrid)
          </Text>
          <Text className="text-[#FCF6F5] text-opacity-70" style={{ fontFamily: 'Inter-Regular' }}>
            AgroMart Supplies Pvt Ltd
          </Text>
          <Text className="text-[#FCF6F5] text-opacity-70" style={{ fontFamily: 'Inter-Regular' }}>
            Delivered on Nov 21
          </Text>
        </View>

        {/* Impact Card */}
        <View className="bg-[#EDE8DF] rounded-[20px] p-4 mb-6" style={{ gap: 14 }}>
          <Text className="text-[#2C5F2D] text-[14px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
            Your Impact
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

        {/* Rate Your Experience */}
        <View className="bg-[#EDE8DF] rounded-[20px] p-4 mb-6">
          <Text className="text-[#2C5F2D] text-[16px] font-bold mb-4" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
            Rate Your Experience
          </Text>
          
          <View className="flex-row justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
                <Star 
                  size={40} 
                  color={star <= rating ? '#E69A28' : '#D4CFC8'} 
                  fill={star <= rating ? '#E69A28' : 'transparent'}
                />
              </TouchableOpacity>
            ))}
          </View>
          
          <TextInput
            className="bg-[#FCF6F5] rounded-xl p-4 min-h-24"
            style={{ fontFamily: 'Inter-Regular' }}
            placeholder="Share your experience with this vendor (optional)"
            multiline
            value={review}
            onChangeText={setReview}
          />
        </View>

        {/* Submit Review Button */}
        <TouchableOpacity className="bg-[#2C5F2D] rounded-full h-14 items-center justify-center mb-6">
          <Text className="text-[#FCF6F5] text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
            Submit Review
          </Text>
        </TouchableOpacity>

        {/* Cluster Settlement Note */}
        <View className="bg-[#EDE8DF] rounded-xl p-4">
          <Text className="text-[#2C5F2D] text-center" style={{ fontFamily: 'Inter-Regular' }}>
            Escrow released to AgroMart Supplies Pvt Ltd
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
