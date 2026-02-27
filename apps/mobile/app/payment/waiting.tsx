import React from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { CheckCircle, Users } from 'lucide-react-native';
import { useFonts } from 'expo-font';

export default function PaymentWaitingScreen() {
  const [scaleAnim] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
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
    <View className="flex-1 bg-[#FCF6F5] items-center justify-center p-6">
      <View className="items-center">
        {/* Animated Checkmark */}
        <Animated.View 
          style={{ transform: [{ scale: scaleAnim }] }}
          className="w-20 h-20 bg-[#22C55E] rounded-full items-center justify-center mb-6"
        >
          <CheckCircle size={50} color="#FCF6F5" />
        </Animated.View>
        
        <Text className="text-[#2C5F2D] text-[24px] font-bold mb-2" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          Payment Received!
        </Text>
        
        <Text className="text-gray-500 text-[14px] text-center mb-8" style={{ fontFamily: 'Inter-Regular' }}>
          Waiting for 7 more farmers to complete payment
        </Text>
        
        {/* Cluster Progress */}
        <View className="w-full max-w-xs mb-8">
          <View className="flex-row justify-between mb-2">
            <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              Cluster Progress
            </Text>
            <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              6 of 10 farmers paid
            </Text>
          </View>
          <View className="w-full h-3 bg-[#D4CFC8] rounded-full">
            <View className="h-3 bg-[#2C5F2D] rounded-full w-[60%]" />
          </View>
        </View>
        
        <TouchableOpacity 
          className="bg-[#2C5F2D] rounded-full h-14 w-full max-w-xs items-center justify-center mb-4"
          onPress={() => console.log('View Order Status')}
        >
          <Text className="text-[#FCF6F5] text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
            View Order Status
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          className="w-full max-w-xs items-center"
          onPress={() => console.log('Go back to home')}
        >
          <Text className="text-[#2C5F2D] text-[16px] underline" style={{ fontFamily: 'Inter-Regular' }}>
            Back to Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
