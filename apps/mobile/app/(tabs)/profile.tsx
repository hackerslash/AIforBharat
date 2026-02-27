import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { 
  ArrowLeft, CheckCircle, MapPin, Layers, Sprout, 
  Wallet, Globe, Bell, ShieldCheck, MessageCircle, 
  Info, Pencil, LogOut, User, ChevronRight
} from 'lucide-react-native';
import { useFonts } from 'expo-font';

export default function ProfileScreen() {
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
      <View className="w-full h-52 bg-[#2C5F2D] pt-12 px-6 items-center">
        <View className="flex-row items-center w-full mb-3">
          <TouchableOpacity>
            <ArrowLeft size={24} color="#FCF6F5" />
          </TouchableOpacity>
          <Text className="text-[#FCF6F5] text-[18px] font-bold ml-2" style={{ fontFamily: 'Inter-Bold' }}>
            Profile
          </Text>
        </View>
        
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200' }}
          className="w-18 h-18 rounded-full mb-3"
        />
        
        <Text className="text-[#FCF6F5] text-[20px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          Ramesh Kumar
        </Text>
        <Text className="text-[#FCF6F5] text-opacity-70 text-[13px]" style={{ fontFamily: 'Inter-Regular' }}>
          Mandya District, Karnataka
        </Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView className="flex-1 -mt-10 px-6" showsVerticalScrollIndicator={false}>
        {/* Profile Completeness Card */}
        <View className="bg-[#EDE8DF] rounded-2xl p-4 flex-row items-center gap-3 mb-6">
          <CheckCircle size={24} color="#2C5F2D" />
          <View>
            <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
              Profile 80% Complete
            </Text>
            <Text className="text-[#2C5F2D] text-[13px]" style={{ fontFamily: 'Inter-Regular' }}>
              Add UPI ID to complete setup
            </Text>
          </View>
        </View>

        {/* Farm Details Section */}
        <Text className="text-[#2C5F2D] font-bold text-[16px] mb-3" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          Farm Details
        </Text>
        
        <View className="bg-[#EDE8DF] rounded-[20px] mb-6">
          {/* Farm Location */}
          <View className="flex-row items-center p-4 border-b border-[#D4CFC8]">
            <MapPin size={20} color="#2C5F2D" className="mr-3" />
            <View className="flex-1">
              <Text className="text-gray-500 text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                Village / District
              </Text>
              <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                Belavangala, Mandya Dist.
              </Text>
            </View>
          </View>
          
          {/* Land Area */}
          <View className="flex-row items-center p-4 border-b border-[#D4CFC8]">
            <Layers size={20} color="#2C5F2D" className="mr-3" />
            <View className="flex-1">
              <Text className="text-gray-500 text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                Land Area
              </Text>
              <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                2.1 Acres
              </Text>
            </View>
          </View>
          
          {/* Crops Grown */}
          <View className="flex-row items-center p-4">
            <Sprout size={20} color="#2C5F2D" className="mr-3" />
            <View className="flex-1">
              <Text className="text-gray-500 text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                Crops Grown
              </Text>
              <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                Tomato, Ragi
              </Text>
            </View>
          </View>
        </View>

        {/* Impact Section */}
        <Text className="text-[#2C5F2D] font-bold text-[16px] mb-3" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          Your Impact
        </Text>
        
        <View className="flex-row gap-3 mb-6">
          <View className="bg-[#2C5F2D] rounded-[20px] p-4 flex-1 items-center">
            <Text className="text-[#FCF6F5] text-[22px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              ₹3,240
            </Text>
            <Text className="text-[#FCF6F5] text-[13px]" style={{ fontFamily: 'Inter-Regular' }}>
              Total Savings
            </Text>
          </View>
          
          <View className="bg-[#EDE8DF] rounded-[20px] p-4 flex-1 items-center">
            <Text className="text-[#2C5F2D] text-[22px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              3
            </Text>
            <Text className="text-[#2C5F2D] text-[13px]" style={{ fontFamily: 'Inter-Regular' }}>
              Orders Placed
            </Text>
          </View>
        </View>

        {/* Payment & Preferences Section */}
        <Text className="text-[#2C5F2D] font-bold text-[16px] mb-3" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          Payment & Preferences
        </Text>
        
        <View className="bg-[#EDE8DF] rounded-[20px] mb-6">
          {/* UPI ID */}
          <View className="flex-row items-center p-4 border-b border-[#D4CFC8]">
            <Wallet size={20} color="#2C5F2D" className="mr-3" />
            <View className="flex-1">
              <Text className="text-gray-500 text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                UPI ID
              </Text>
              <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                ramesh@upi ✓ Verified
              </Text>
            </View>
          </View>
          
          {/* Language Preference */}
          <View className="flex-row items-center p-4">
            <Globe size={20} color="#2C5F2D" className="mr-3" />
            <View className="flex-1">
              <Text className="text-gray-500 text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                Language Preference
              </Text>
              <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                Kannada
              </Text>
            </View>
          </View>
        </View>

        {/* Settings Section */}
        <Text className="text-[#2C5F2D] font-bold text-[16px] mb-3" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          Settings
        </Text>
        
        <View className="bg-[#EDE8DF] rounded-[20px] mb-6">
          {/* Notification Settings */}
          <TouchableOpacity className="flex-row items-center p-4 border-b border-[#D4CFC8]">
            <Bell size={20} color="#2C5F2D" className="mr-3" />
            <View className="flex-1">
              <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                Notification Settings
              </Text>
            </View>
            <ChevronRight size={20} color="#2C5F2D" />
          </TouchableOpacity>
          
          {/* Manage Farm Locations */}
          <TouchableOpacity className="flex-row items-center p-4 border-b border-[#D4CFC8]">
            <MapPin size={20} color="#2C5F2D" className="mr-3" />
            <View className="flex-1">
              <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                Manage Farm Locations
              </Text>
            </View>
            <ChevronRight size={20} color="#2C5F2D" />
          </TouchableOpacity>
          
          {/* Privacy & Data */}
          <TouchableOpacity className="flex-row items-center p-4 border-b border-[#D4CFC8]">
            <ShieldCheck size={20} color="#2C5F2D" className="mr-3" />
            <View className="flex-1">
              <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                Privacy & Data
              </Text>
            </View>
            <ChevronRight size={20} color="#2C5F2D" />
          </TouchableOpacity>
          
          {/* Help & Support */}
          <TouchableOpacity className="flex-row items-center p-4 border-b border-[#D4CFC8]">
            <MessageCircle size={20} color="#2C5F2D" className="mr-3" />
            <View className="flex-1">
              <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                Help & Support
              </Text>
            </View>
            <ChevronRight size={20} color="#2C5F2D" />
          </TouchableOpacity>
          
          {/* About AgriSetu */}
          <TouchableOpacity className="flex-row items-center p-4">
            <Info size={20} color="#2C5F2D" className="mr-3" />
            <View className="flex-1">
              <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                About AgriSetu
              </Text>
            </View>
            <ChevronRight size={20} color="#2C5F2D" />
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity className="bg-[#2C5F2D] rounded-full h-13 flex-row items-center justify-center mb-4">
          <Pencil size={20} color="#FCF6F5" />
          <Text className="text-[#FCF6F5] ml-2 text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity className="bg-[#EDE8DF] rounded-full h-13 flex-row items-center justify-center">
          <LogOut size={20} color="#EF4444" />
          <Text className="text-[#EF4444] ml-2 text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
