import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Animated } from 'react-native';
import { 
  Sprout, Bell, User, Package, MapPin, Wallet, 
  Users, CheckCircle, MapPinned, Mic, ChevronRight
} from 'lucide-react-native';
import { useFonts } from 'expo-font';

export default function HomeScreen() {
  const [pulseAnim] = useState(new Animated.Value(1));
  
  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-Bold': require('@expo-google-fonts/plus-jakarta-sans/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-Regular': require('@expo-google-fonts/plus-jakarta-sans/PlusJakartaSans-Regular.ttf'),
    'Inter-Regular': require('@expo-google-fonts/inter/Inter-Regular.ttf'),
    'Inter-Bold': require('@expo-google-fonts/inter/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  // Start pulse animation for the mic button
  React.useEffect(() => {
    const pulse = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { 
          toValue: 1.2, 
          duration: 1000, 
          useNativeDriver: true 
        }),
        Animated.timing(pulseAnim, { 
          toValue: 1, 
          duration: 1000, 
          useNativeDriver: true 
        }),
      ])
    );
    
    pulse.start();
    
    return () => pulse.stop();
  }, []);

  return (
    <View className="flex-1 bg-[#FCF6F5]">
      {/* Header */}
      <View className="w-full h-20 bg-[#2C5F2D] flex-row items-center justify-between px-6">
        <View className="flex-row items-center gap-3">
          <Sprout size={24} color="#FCF6F5" />
          <Text className="text-[#FCF6F5] text-[18px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
            AgriSetu
          </Text>
        </View>
        
        <View className="flex-row items-center gap-4">
          <TouchableOpacity>
            <Bell size={24} color="#FCF6F5" />
          </TouchableOpacity>
          
          <TouchableOpacity className="w-8 h-8 rounded-full bg-[#FCF6F5]/20 items-center justify-center">
            <Text className="text-[#FCF6F5] font-bold">RK</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView className="flex-1 p-5" showsVerticalScrollIndicator={false}>
        {/* Greeting Card */}
        <View className="bg-[#2C5F2D] rounded-[20px] p-5 mb-4">
          <Text className="text-[#FCF6F5] text-[20px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
            Good morning, Ramesh 🌱
          </Text>
          <Text className="text-[#FCF6F5] text-opacity-70 text-[13px]" style={{ fontFamily: 'Inter-Regular' }}>
            Mandya District · 2.1 acres
          </Text>
        </View>

        {/* Active Order Banner */}
        <View className="bg-[#EDE8DF] rounded-[20px] p-4 mb-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <Package size={20} color="#2C5F2D" />
              <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'Inter-Regular' }}>
                Tomato Seeds — In Transit
              </Text>
            </View>
            <ChevronRight size={20} color="#2C5F2D" />
          </View>
          <Text className="text-[#E69A28] text-[13px] mt-1" style={{ fontFamily: 'Inter-Regular' }}>
            Arriving Today by 5 PM
          </Text>
        </View>

        {/* Voice Order CTA */}
        <TouchableOpacity className="bg-[#2C5F2D] rounded-[20px] p-5 mb-4">
          <View className="flex-row items-center justify-between">
            <View>
              <View className="flex-row items-center gap-2 mb-1">
                <Mic size={28} color="#FCF6F5" />
                <Text className="text-[#FCF6F5] text-[18px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                  Place Voice Order
                </Text>
              </View>
              <Text className="text-[#FCF6F5] text-opacity-70 text-[13px]" style={{ fontFamily: 'Inter-Regular' }}>
                Tap to order in your language
              </Text>
            </View>
            
            <Animated.View 
              style={{ 
                transform: [{ scale: pulseAnim }],
                width: 48,
                height: 48,
                borderRadius: 24,
                backgroundColor: 'rgba(252, 246, 245, 0.2)',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <View className="w-12 h-12 rounded-full bg-[#FCF6F5] items-center justify-center">
                <Mic size={24} color="#2C5F2D" />
              </View>
            </Animated.View>
          </View>
        </TouchableOpacity>

        {/* Cluster Status Card */}
        <View className="bg-[#EDE8DF] rounded-[20px] p-4 mb-4">
          <View className="flex-row items-center gap-2 mb-2">
            <Users size={20} color="#2C5F2D" />
            <Text className="text-[#2C5F2D] font-bold text-[16px]" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              Your Cluster
            </Text>
          </View>
          <Text className="text-[#2C5F2D] text-[13px] mb-3" style={{ fontFamily: 'Inter-Regular' }}>
            You + 9 farmers · Mandya
          </Text>
          
          {/* Progress Bar */}
          <View className="w-full h-2 bg-[#D4CFC8] rounded-full mb-2">
            <View className="h-2 bg-[#2C5F2D] rounded-full w-[76%]" />
          </View>
          
          <Text className="text-[#E69A28] text-[13px]" style={{ fontFamily: 'Inter-Regular' }}>
            38 of 50 kg collected · 12 kg to go
          </Text>
        </View>

        {/* Quick Actions Row */}
        <View className="flex-row gap-3 mb-4">
          <TouchableOpacity className="bg-[#EDE8DF] rounded-[20px] p-4 flex-1 items-center">
            <Package size={24} color="#2C5F2D" />
            <Text className="text-[#2C5F2D] text-[13px] mt-2" style={{ fontFamily: 'Inter-Regular' }}>
              My Orders
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-[#EDE8DF] rounded-[20px] p-4 flex-1 items-center">
            <MapPinned size={24} color="#2C5F2D" />
            <Text className="text-[#2C5F2D] text-[13px] mt-2" style={{ fontFamily: 'Inter-Regular' }}>
              Track
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-[#EDE8DF] rounded-[20px] p-4 flex-1 items-center">
            <Wallet size={24} color="#2C5F2D" />
            <Text className="text-[#2C5F2D] text-[13px] mt-2" style={{ fontFamily: 'Inter-Regular' }}>
              Pay
            </Text>
          </TouchableOpacity>
        </View>

        {/* Impact Stats Row */}
        <View className="flex-row gap-3">
          <View className="bg-[#EDE8DF] rounded-[20px] p-4 flex-1 items-center">
            <Text className="text-[#2C5F2D] text-[22px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              ₹3,240
            </Text>
            <Text className="text-[#2C5F2D] text-[13px] mt-1" style={{ fontFamily: 'Inter-Regular' }}>
              Saved
            </Text>
          </View>
          
          <View className="bg-[#EDE8DF] rounded-[20px] p-4 flex-1 items-center">
            <Text className="text-[#2C5F2D] text-[22px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              3
            </Text>
            <Text className="text-[#2C5F2D] text-[13px] mt-1" style={{ fontFamily: 'Inter-Regular' }}>
              Orders
            </Text>
          </View>
          
          <View className="bg-[#EDE8DF] rounded-[20px] p-4 flex-1 items-center">
            <Text className="text-[#2C5F2D] text-[22px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              0%
            </Text>
            <Text className="text-[#2C5F2D] text-[13px] mt-1" style={{ fontFamily: 'Inter-Regular' }}>
              Waste
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}


