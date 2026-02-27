import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { CheckCircle, Users, PackageCheck } from 'lucide-react-native';
import { useFonts } from 'expo-font';

export default function PaymentSuccessScreen() {
  const [scaleAnim] = React.useState(new Animated.Value(0));
  const [confettiAnim] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(confettiAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

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
    <View className="flex-1 bg-[#2C5F2D]">
      {/* Confetti effect placeholder */}
      <View className="absolute inset-0 z-0" />
      
      <View className="flex-1 items-center justify-center p-6">
        <View className="items-center">
          {/* Animated Checkmark */}
          <Animated.View 
            style={{ transform: [{ scale: scaleAnim }] }}
            className="w-24 h-24 bg-[#22C55E] rounded-full items-center justify-center mb-6"
          >
            <CheckCircle size={60} color="#FCF6F5" />
          </Animated.View>
          
          <Text className="text-[#FCF6F5] text-[28px] font-bold mb-2" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
            Order Confirmed!
          </Text>
          
          <Text className="text-[#FCF6F5] text-opacity-70 text-[16px] text-center mb-8" style={{ fontFamily: 'Inter-Regular' }}>
            All 10 farmers have completed payment
          </Text>
          
          {/* All farmers paid badges */}
          <View className="flex-row flex-wrap justify-center gap-3 mb-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
              <View key={num} className="w-12 h-12 bg-[#22C55E] rounded-full items-center justify-center">
                <Text className="text-[#FCF6F5] font-bold">{num}</Text>
              </View>
            ))}
          </View>
          
          <Text className="text-[#FCF6F5] text-[18px] font-bold mb-8" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
            AgroMart Supplies Pvt Ltd
          </Text>
          <Text className="text-[#FCF6F5] text-opacity-70 text-[16px] mb-8" style={{ fontFamily: 'Inter-Regular' }}>
            Processing your order
          </Text>
          
          <TouchableOpacity 
            className="bg-[#22C55E] rounded-full h-14 w-full max-w-xs items-center justify-center"
            onPress={() => console.log('Track Order')}
          >
            <Text className="text-[#FCF6F5] text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
              Track Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
