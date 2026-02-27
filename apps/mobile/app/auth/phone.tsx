import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { ShieldCheck, Sprout } from 'lucide-react-native';
import { useFonts } from 'expo-font';

export default function PhoneLoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-Bold': require('@expo-google-fonts/plus-jakarta-sans/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-Regular': require('@expo-google-fonts/plus-jakarta-sans/PlusJakartaSans-Regular.ttf'),
    'Inter-Regular': require('@expo-google-fonts/inter/Inter-Regular.ttf'),
    'Inter-Bold': require('@expo-google-fonts/inter/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleSendOTP = () => {
    // Navigate to OTP screen
    console.log('Navigate to OTP screen');
  };

  return (
    <View className="flex-1 bg-[#FCF6F5]">
      {/* Hero section */}
      <View className="w-full h-[260px] bg-[#2C5F2D] items-center justify-center pt-10">
        <View className="w-[64px] h-[64px] rounded-full bg-[#FCF6F5] bg-opacity-12 items-center justify-center mb-4">
          <Sprout size={32} color="#FCF6F5" />
        </View>
        
        <Text className="text-[#FCF6F5] text-[28px] font-bold mb-2" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          AgriSetu
        </Text>
        
        <Text className="text-[#FCF6F5] text-opacity-70 text-[14px] text-center px-6" style={{ fontFamily: 'Inter-Regular' }}>
          Enter your mobile number to continue
        </Text>
      </View>

      {/* Bottom Sheet */}
      <View className="w-full flex-1 bg-[#FCF6F5] rounded-tl-[32px] rounded-tr-[32px] pt-[32px] px-[24px] pb-[40px]" style={{ gap: 24 }}>
        {/* Title */}
        <Text className="text-[#2C5F2D] text-[22px] font-bold text-center" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          What's your mobile number?
        </Text>
        
        <Text className="text-[14px] text-center text-[#2C5F2D] leading-relaxed px-4" style={{ fontFamily: 'Inter-Regular' }}>
          We'll send a one-time password to verify your identity.
        </Text>
        
        {/* Input field */}
        <View className="bg-[#EDE8DF] rounded-2xl h-14 px-4 flex-row items-center gap-3">
          <Text className="text-[#2C5F2D] text-[16px] font-bold" style={{ fontFamily: 'Inter-Regular' }}>IN +91</Text>
          <View className="h-6 w-px bg-[#2C5F2D] opacity-50" />
          <TextInput
            className="flex-1 text-[16px] text-[#2C5F2D] font-bold"
            style={{ fontFamily: 'Inter-Regular' }}
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            maxLength={10}
          />
        </View>
        
        <Text className="text-[13px] text-center text-gray-500" style={{ fontFamily: 'Inter-Regular' }}>
          You will receive an OTP on this number
        </Text>
        
        {/* Aadhaar note */}
        <View className="bg-[#EDE8DF] rounded-xl px-4 py-3 flex-row items-center gap-2">
          <ShieldCheck size={18} color="#2C5F2D" />
          <Text className="text-[13px] text-[#2C5F2D]" style={{ fontFamily: 'Inter-Regular' }}>
            Linked to your Aadhaar for secure verification
          </Text>
        </View>
        
        {/* Send OTP button */}
        <TouchableOpacity 
          onPress={handleSendOTP}
          className="bg-[#2C5F2D] rounded-full h-14 w-full items-center justify-center"
        >
          <Text className="text-[#FCF6F5] text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
            Send OTP
          </Text>
        </TouchableOpacity>
        
        {/* Aadhaar link */}
        <TouchableOpacity className="mt-2">
          <Text className="text-[#2C5F2D] text-center underline" style={{ fontFamily: 'Inter-Regular' }}>
            Use Aadhaar OTP instead
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
