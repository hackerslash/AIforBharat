import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Users, Mic } from 'lucide-react-native';
import { useFonts } from 'expo-font';

export default function ClusterEmptyScreen() {
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
    <View className="flex-1 bg-[#FCF6F5] items-center justify-center p-6">
      <View className="items-center">
        <View className="w-20 h-20 bg-[#2C5F2D] rounded-full items-center justify-center mb-6">
          <Users size={40} color="#FCF6F5" />
        </View>
        
        <Text className="text-[#2C5F2D] text-[24px] font-bold text-center mb-2" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          No cluster in your area yet
        </Text>
        
        <Text className="text-gray-500 text-[16px] text-center mb-8" style={{ fontFamily: 'Inter-Regular' }}>
          Be the first to start one!
        </Text>
        
        <TouchableOpacity className="bg-[#2C5F2D] rounded-full h-14 w-full max-w-xs items-center justify-center">
          <View className="flex-row items-center">
            <Mic size={20} color="#FCF6F5" />
            <Text className="text-[#FCF6F5] ml-2 text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
              Place Voice Order
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
