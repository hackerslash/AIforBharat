import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ShieldCheck, Sprout } from 'lucide-react-native';
import { useFonts } from 'expo-font';

export default function LandingScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-Bold': require('@expo-google-fonts/plus-jakarta-sans/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-Regular': require('@expo-google-fonts/plus-jakarta-sans/PlusJakartaSans-Regular.ttf'),
    'Inter-Regular': require('@expo-google-fonts/inter/Inter-Regular.ttf'),
    'Inter-Bold': require('@expo-google-fonts/inter/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const languages = [
    { code: 'hi', name: 'हिंदी', active: selectedLanguage === 'hi' },
    { code: 'kn', name: 'ಕನ್ನಡ', active: selectedLanguage === 'kn' },
    { code: 'ta', name: 'தமிழ்', active: selectedLanguage === 'ta' },
    { code: 'bn', name: 'বাংলা', active: selectedLanguage === 'bn' },
    { code: 'te', name: 'తెలుగు', active: selectedLanguage === 'te' },
    { code: 'en', name: 'English', active: selectedLanguage === 'en' },
  ];

  const handleLanguageSelect = (langCode: string) => {
    setSelectedLanguage(langCode);
  };

  const handleLoginPress = () => {
    // Navigate to phone login screen
    console.log('Navigate to phone login');
  };

  return (
    <View className="flex-1 bg-[#FCF6F5]">
      {/* Top Hero Section */}
      <View className="w-full h-[480px] bg-[#2C5F2D] pt-[60px] items-center">
        {/* Logo */}
        <View className="w-[72px] h-[72px] rounded-full bg-[#FCF6F5] items-center justify-center mb-4">
          <Sprout size={36} color="#2C5F2D" />
        </View>
        
        {/* App name */}
        <Text className="text-[#FCF6F5] text-[40px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          AgriSetu
        </Text>
        
        {/* Tagline */}
        <Text className="text-[#FCF6F5] text-opacity-70 text-[16px] mt-2" style={{ fontFamily: 'Inter-Regular' }}>
          Collective Farming Power
        </Text>
        
        {/* Stats row */}
        <View className="flex-row justify-around w-full mt-[60px]">
          <View className="bg-white bg-opacity-12 rounded-2xl p-[14px] items-center w-[100px]">
            <Text className="text-[22px] text-[#FCF6F5] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>10-25%</Text>
            <Text className="text-[11px] text-[#FCF6F5] font-semibold mt-1" style={{ fontFamily: 'Inter-Regular' }}>Cost Savings</Text>
          </View>
          
          <View className="bg-white bg-opacity-12 rounded-2xl p-[14px] items-center w-[100px]">
            <Text className="text-[22px] text-[#FCF6F5] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>86%</Text>
            <Text className="text-[11px] text-[#FCF6F5] font-semibold mt-1" style={{ fontFamily: 'Inter-Regular' }}>Farmers Served</Text>
          </View>
          
          <View className="bg-white bg-opacity-12 rounded-2xl p-[14px] items-center w-[100px]">
            <Text className="text-[22px] text-[#FCF6F5] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>40-50%</Text>
            <Text className="text-[11px] text-[#FCF6F5] font-semibold mt-1" style={{ fontFamily: 'Inter-Regular' }}>Carbon Saved</Text>
          </View>
        </View>
      </View>

      {/* Bottom Sheet */}
      <View className="w-full flex-1 bg-[#FCF6F5] rounded-tl-[32px] rounded-tr-[32px] pt-[32px] px-[24px] pb-[40px]" style={{ gap: 24 }}>
        {/* Sheet handle */}
        <View className="w-[40px] h-[4px] bg-[#FCF6F5] rounded-full self-center" />
        
        {/* Title */}
        <Text className="text-[#2C5F2D] text-[28px] font-bold text-center" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          Welcome to AgriSetu
        </Text>
        
        {/* Subtitle */}
        <Text className="text-[14px] text-center text-[#2C5F2D] leading-relaxed" style={{ fontFamily: 'Inter-Regular' }}>
          Empowering farmers with collective buying power.
          Login with your Aadhaar to get started.
        </Text>
        
        {/* Language selector */}
        <Text className="text-[13px] text-center text-[#2C5F2D] font-bold" style={{ fontFamily: 'Inter-Regular' }}>
          Select Language / भाषा चुनें
        </Text>
        
        {/* Language grid */}
        <View className="flex-row flex-wrap justify-center gap-2">
          {languages.map((lang) => (
            <TouchableOpacity
              key={lang.code}
              onPress={() => handleLanguageSelect(lang.code)}
              className={`rounded-full px-3.5 py-2 ${
                lang.active ? 'bg-[#2C5F2D]' : 'bg-[#EDE8DF]'
              }`}
            >
              <Text 
                className={`${lang.active ? 'text-[#FCF6F5]' : 'text-[#2C5F2D]'}`}
                style={{ fontFamily: 'Inter-Regular' }}
              >
                {lang.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        
        {/* Login button */}
        <TouchableOpacity 
          onPress={handleLoginPress}
          className="bg-[#2C5F2D] rounded-full h-14 flex-row items-center justify-center mt-2"
        >
          <ShieldCheck size={20} color="#FCF6F5" />
          <Text className="text-[#FCF6F5] ml-2 text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
            Login with Aadhaar
          </Text>
        </TouchableOpacity>
        
        {/* OTP link */}
        <TouchableOpacity className="mt-4">
          <Text className="text-[#2C5F2D] text-center" style={{ fontFamily: 'Inter-Regular' }}>
            Use OTP instead →
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
