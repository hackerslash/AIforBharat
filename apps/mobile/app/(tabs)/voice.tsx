import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { Audio } from 'expo-av';
import { ArrowLeft, History, Mic, Type, RefreshCw, Check } from 'lucide-react-native';
import { useFonts } from 'expo-font';

export default function VoiceOrderingScreen() {
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [transcription, setTranscription] = useState<string | null>(null);
  const [extractedOrder, setExtractedOrder] = useState<any>(null);
  const [pulseAnim] = useState(new Animated.Value(1));
  const [isRecording, setIsRecording] = useState(false);

  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-Bold': require('@expo-google-fonts/plus-jakarta-sans/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-Regular': require('@expo-google-fonts/plus-jakarta-sans/PlusJakartaSans-Regular.ttf'),
    'Inter-Regular': require('@expo-google-fonts/inter/Inter-Regular.ttf'),
    'Inter-Bold': require('@expo-google-fonts/inter/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const startRecording = async () => {
    try {
      setIsRecording(true);
      
      // Request permissions
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });
      
      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      
      setRecording(recording);
      
      // Start pulse animation
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, { 
            toValue: 1.3, 
            duration: 800, 
            useNativeDriver: true 
          }),
          Animated.timing(pulseAnim, { 
            toValue: 1, 
            duration: 800, 
            useNativeDriver: true 
          }),
        ])
      ).start();
    } catch (error) {
      console.error('Error starting recording:', error);
      setIsRecording(false);
    }
  };

  const stopRecording = async () => {
    try {
      if (recording) {
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        console.log('Recording URI:', uri);
        
        // Simulate transcription result
        setTranscription("Nange 5kg tomato seeds bekku next week ge");
        
        // Extract order details
        setExtractedOrder({
          product: "Tomato Seeds",
          quantity: "5 kg",
          delivery: "Next Week"
        });
        
        setIsRecording(false);
      }
    } catch (error) {
      console.error('Error stopping recording:', error);
      setIsRecording(false);
    }
  };

  const handleRecordPressIn = () => {
    startRecording();
  };

  const handleRecordPressOut = () => {
    stopRecording();
  };

  const handleReRecord = () => {
    setTranscription(null);
    setExtractedOrder(null);
  };

  const handleConfirmOrder = () => {
    console.log('Confirming order:', extractedOrder);
  };

  return (
    <View className="flex-1 bg-[#FCF6F5]">
      {/* Header */}
      <View className="w-full h-20 bg-[#2C5F2D] flex-row items-center justify-between px-6">
        <TouchableOpacity>
          <ArrowLeft size={24} color="#FCF6F5" />
        </TouchableOpacity>
        
        <Text className="text-[#FCF6F5] text-[20px] font-bold text-center" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          Voice Order
        </Text>
        
        <TouchableOpacity>
          <History size={24} color="#FCF6F5" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View className="flex-1 items-center justify-center p-6" style={{ gap: 24 }}>
        <Text className="text-[#2C5F2D] text-[15px] text-center leading-relaxed" style={{ fontFamily: 'Inter-Regular' }}>
          Tap the mic and speak your order in your language
        </Text>
        
        {/* Mic Visual */}
        <View className="items-center">
          <View className="w-55 h-55 bg-[#FCF6F5] rounded-full items-center justify-center">
            <View 
              className={`w-40 h-40 rounded-full items-center justify-center ${
                isRecording ? 'bg-[#2C5F2D]/19' : 'bg-[#2C5F2D]/19'
              }`}
            >
              <Animated.View 
                style={[
                  { 
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: '#2C5F2D',
                    alignItems: 'center',
                    justifyContent: 'center'
                  },
                  { transform: [{ scale: isRecording ? pulseAnim : 1 }] }
                ]}
              >
                <TouchableOpacity
                  onPressIn={handleRecordPressIn}
                  onPressOut={handleRecordPressOut}
                  className="w-30 h-30 rounded-full bg-[#2C5F2D] items-center justify-center"
                >
                  <Mic size={48} color="#FCF6F5" />
                </TouchableOpacity>
              </Animated.View>
            </View>
          </View>
        </View>
        
        <Text className="text-[#2C5F2D] text-[13px] text-center" style={{ fontFamily: 'Inter-Regular' }}>
          Tap to record · 22 languages
        </Text>
        
        {/* Transcription Card */}
        {transcription && (
          <View className="bg-[#EDE8DF] rounded-[20px] p-5 w-full">
            <View className="flex-row items-center gap-2 mb-3">
              <Type size={20} color="#2C5F2D" />
              <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                Transcription
              </Text>
              <Text className="text-[#2C5F2D] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                92% match
              </Text>
            </View>
            <Text className="text-[#2C5F2D] text-[15px]" style={{ fontFamily: 'Inter-Regular' }}>
              {transcription}
            </Text>
          </View>
        )}
        
        {/* Extracted Order Card */}
        {extractedOrder && (
          <View className="bg-[#2C5F2D] rounded-[20px] p-5 w-full">
            <Text className="text-[#FCF6F5] text-[14px] font-bold mb-3" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              Extracted Order Details
            </Text>
            
            <View className="grid grid-cols-2 gap-2">
              <View className="bg-[#FCF6F5]/12 rounded-xl px-3.5 py-2.5">
                <Text className="text-[#FCF6F5] text-[13px] mb-1" style={{ fontFamily: 'Inter-Bold' }}>
                  Product
                </Text>
                <Text className="text-[#FCF6F5] text-[15px]" style={{ fontFamily: 'Inter-Regular' }}>
                  {extractedOrder.product}
                </Text>
              </View>
              
              <View className="bg-[#FCF6F5]/12 rounded-xl px-3.5 py-2.5">
                <Text className="text-[#FCF6F5] text-[13px] mb-1" style={{ fontFamily: 'Inter-Bold' }}>
                  Quantity
                </Text>
                <Text className="text-[#FCF6F5] text-[15px]" style={{ fontFamily: 'Inter-Regular' }}>
                  {extractedOrder.quantity}
                </Text>
              </View>
            </View>
            
            <View className="bg-[#FCF6F5]/12 rounded-xl px-3.5 py-2.5 mt-2">
              <Text className="text-[#FCF6F5] text-[13px] mb-1" style={{ fontFamily: 'Inter-Bold' }}>
                Delivery Date
              </Text>
              <Text className="text-[#FCF6F5] text-[15px]" style={{ fontFamily: 'Inter-Regular' }}>
                {extractedOrder.delivery}
              </Text>
            </View>
          </View>
        )}
        
        {/* Action Buttons Row */}
        {extractedOrder && (
          <View className="flex-row gap-3 w-full">
            <TouchableOpacity 
              onPress={handleReRecord}
              className="bg-[#EDE8DF] rounded-full h-13 flex-1 flex-row items-center justify-center gap-2"
            >
              <RefreshCw size={20} color="#2C5F2D" />
              <Text className="text-[#2C5F2D] text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                Re-record
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              onPress={handleConfirmOrder}
              className="bg-[#2C5F2D] rounded-full h-13 flex-1 flex-row items-center justify-center gap-2"
            >
              <Check size={20} color="#FCF6F5" />
              <Text className="text-[#FCF6F5] text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
                Confirm Order
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
