import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { XCircle } from 'lucide-react-native';
import { useFonts } from 'expo-font';

export default function PaymentFailedScreen() {
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
        <View className="w-20 h-20 bg-[#EF4444] rounded-full items-center justify-center mb-6">
          <XCircle size={50} color="#FCF6F5" />
        </View>
        
        <Text className="text-[#EF4444] text-[24px] font-bold mb-2" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          Payment Failed
        </Text>
        
        <Text className="text-gray-500 text-[16px] text-center mb-8" style={{ fontFamily: 'Inter-Regular' }}>
          There was an issue processing your payment. Please try again.
        </Text>
        
        <TouchableOpacity 
          className="bg-[#2C5F2D] rounded-full h-14 w-full max-w-xs items-center justify-center mb-4"
          onPress={() => console.log('Retry Payment')}
        >
          <Text className="text-[#FCF6F5] text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
            Retry Payment
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="border border-[#EF4444] rounded-full h-14 w-full max-w-xs items-center justify-center"
          onPress={() => console.log('Cancel Order')}
        >
          <Text className="text-[#EF4444] text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
            Cancel Order
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
