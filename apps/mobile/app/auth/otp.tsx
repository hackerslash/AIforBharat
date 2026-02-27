import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MessageSquare, Sprout } from 'lucide-react-native';
import { useFonts } from 'expo-font';

export default function OTPVerificationScreen() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(42);
  const [isResending, setIsResending] = useState(false);
  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  
  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-Bold': require('@expo-google-fonts/plus-jakarta-sans/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-Regular': require('@expo-google-fonts/plus-jakarta-sans/PlusJakartaSans-Regular.ttf'),
    'Inter-Regular': require('@expo-google-fonts/inter/Inter-Regular.ttf'),
    'Inter-Bold': require('@expo-google-fonts/inter/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  // Handle OTP input change
  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if value is entered and not the last one
      if (value && index < 5) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  // Handle backspace to move to previous input
  const handleKeyPress = (index, event) => {
    if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  // Resend OTP handler
  const handleResendOTP = () => {
    if (resendTimer <= 0) {
      setIsResending(true);
      setResendTimer(42);
      
      const interval = setInterval(() => {
        setResendTimer(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsResending(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  // Verify OTP handler
  const handleVerifyOTP = () => {
    const otpString = otp.join('');
    if (otpString.length === 6) {
      console.log('Verify OTP:', otpString);
      // Navigate to onboarding screen
    }
  };

  return (
    <View className="flex-1 bg-[#FCF6F5]">
      {/* Hero section */}
      <View className="w-full h-[260px] bg-[#2C5F2D] items-center justify-center pt-10">
        <View className="w-[64px] h-[64px] rounded-full bg-[#FCF6F5] bg-opacity-12 items-center justify-center mb-4">
          <MessageSquare size={32} color="#FCF6F5" />
        </View>
        
        <Text className="text-[#FCF6F5] text-[28px] font-bold mb-2" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          Verify your number
        </Text>
        
        <Text className="text-[#FCF6F5] text-opacity-70 text-[14px] text-center px-6" style={{ fontFamily: 'Inter-Regular' }}>
          OTP sent to +91 98765 43210
        </Text>
      </View>

      {/* Bottom Sheet */}
      <View className="w-full flex-1 bg-[#FCF6F5] rounded-tl-[32px] rounded-tr-[32px] pt-[32px] px-[24px] pb-[40px]" style={{ gap: 28 }}>
        {/* Title */}
        <Text className="text-[#2C5F2D] text-[22px] font-bold text-center" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          Enter 6-digit OTP
        </Text>
        
        <Text className="text-[14px] text-center text-gray-500 leading-relaxed px-4" style={{ fontFamily: 'Inter-Regular' }}>
          Valid for 10 minutes. Don't share with anyone.
        </Text>
        
        {/* OTP Box Row */}
        <View className="flex-row justify-between w-full max-w-xs mx-auto">
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={inputRefs[index]}
              className={`w-[52px] h-[60px] rounded-[14px] text-center text-[24px] font-bold ${
                digit ? 'bg-[#2C5F2D] text-[#FCF6F5]' : 'bg-[#EDE8DF] text-[#2C5F2D]'
              }`}
              style={{
                fontFamily: 'Inter-Bold',
                borderColor: digit ? '#2C5F2D' : '#D4CFC8',
                borderWidth: digit ? 0 : 1,
              }}
              value={digit}
              onChangeText={(value) => handleOtpChange(index, value)}
              onKeyPress={(event) => handleKeyPress(index, event)}
              keyboardType="number-pad"
              maxLength={1}
              textAlign="center"
            />
          ))}
        </View>
        
        {/* Resend row */}
        <View className="flex-row justify-center gap-2">
          <Text className="text-gray-500 text-[14px]" style={{ fontFamily: 'Inter-Regular' }}>
            Didn't receive OTP?
          </Text>
          <TouchableOpacity disabled={resendTimer > 0} onPress={handleResendOTP}>
            <Text className={`text-[#2C5F2D] text-[14px] ${resendTimer > 0 ? 'opacity-50' : 'underline'}`} style={{ fontFamily: 'Inter-Regular' }}>
              {resendTimer > 0 ? `Resend in 0:${resendTimer.toString().padStart(2, '0')}` : 'Resend'}
            </Text>
          </TouchableOpacity>
        </View>
        
        {/* Verify button */}
        <TouchableOpacity 
          onPress={handleVerifyOTP}
          className="bg-[#2C5F2D] rounded-full h-14 w-full items-center justify-center"
          disabled={otp.some(digit => !digit)}
        >
          <Text className={`text-[#FCF6F5] text-[16px] font-bold ${otp.some(digit => !digit) ? 'opacity-50' : ''}`} style={{ fontFamily: 'Inter-Bold' }}>
            Verify & Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
