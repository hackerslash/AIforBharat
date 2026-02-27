import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Sprout, User, MapPin, Layers, Wallet, Globe } from 'lucide-react-native';
import { useFonts } from 'expo-font';

const { width } = Dimensions.get('window');

export default function OnboardingScreen() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    village: '',
    district: '',
    landArea: '',
    crops: [],
    upiId: '',
    language: 'en',
  });

  const [fontsLoaded] = useFonts({
    'PlusJakartaSans-Bold': require('@expo-google-fonts/plus-jakarta-sans/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-Regular': require('@expo-google-fonts/plus-jakarta-sans/PlusJakartaSans-Regular.ttf'),
    'Inter-Regular': require('@expo-google-fonts/inter/Inter-Regular.ttf'),
    'Inter-Bold': require('@expo-google-fonts/inter/Inter-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const cropOptions = ['Tomato', 'Ragi', 'Wheat', 'Rice', 'Sugarcane', 'Cotton', 'Jowar'];

  const handleCropToggle = (crop) => {
    setFormData(prev => ({
      ...prev,
      crops: prev.crops.includes(crop)
        ? prev.crops.filter(c => c !== crop)
        : [...prev.crops, crop]
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Complete onboarding
      console.log('Complete onboarding:', formData);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <View className="flex-1 gap-6">
            <Text className="text-[#2C5F2D] text-[22px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              Tell us about yourself
            </Text>
            
            <View className="bg-[#EDE8DF] rounded-2xl p-4 gap-2">
              <Text className="text-gray-500 text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                Farmer name
              </Text>
              <TextInput
                className="text-[#2C5F2D] text-[16px] font-bold"
                style={{ fontFamily: 'Inter-Bold' }}
                placeholder="Enter your name"
                value={formData.name}
                onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
              />
            </View>
            
            <View className="bg-[#EDE8DF] rounded-2xl p-4 gap-2">
              <Text className="text-gray-500 text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                Village
              </Text>
              <TextInput
                className="text-[#2C5F2D] text-[16px] font-bold"
                style={{ fontFamily: 'Inter-Bold' }}
                placeholder="Enter your village"
                value={formData.village}
                onChangeText={(text) => setFormData(prev => ({ ...prev, village: text }))}
              />
            </View>
            
            <View className="bg-[#EDE8DF] rounded-2xl p-4 gap-2">
              <Text className="text-gray-500 text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                District
              </Text>
              <TextInput
                className="text-[#2C5F2D] text-[16px] font-bold"
                style={{ fontFamily: 'Inter-Bold' }}
                placeholder="Enter your district"
                value={formData.district}
                onChangeText={(text) => setFormData(prev => ({ ...prev, district: text }))}
              />
            </View>
          </View>
        );
      case 2:
        return (
          <View className="flex-1 gap-6">
            <Text className="text-[#2C5F2D] text-[22px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              Farm details
            </Text>
            
            <View className="bg-[#EDE8DF] rounded-2xl p-4 gap-2">
              <Text className="text-gray-500 text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                Land area (acres)
              </Text>
              <TextInput
                className="text-[#2C5F2D] text-[16px] font-bold"
                style={{ fontFamily: 'Inter-Bold' }}
                placeholder="Enter land area in acres"
                value={formData.landArea}
                onChangeText={(text) => setFormData(prev => ({ ...prev, landArea: text }))}
                keyboardType="numeric"
              />
            </View>
            
            <View className="bg-[#EDE8DF] rounded-2xl p-4 gap-2">
              <Text className="text-gray-500 text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                Crops grown
              </Text>
              
              <View className="flex-row flex-wrap gap-2 mt-2">
                {cropOptions.map(crop => (
                  <TouchableOpacity
                    key={crop}
                    onPress={() => handleCropToggle(crop)}
                    className={`px-4 py-2 rounded-full ${
                      formData.crops.includes(crop) 
                        ? 'bg-[#2C5F2D] border border-[#2C5F2D]' 
                        : 'bg-[#EDE8DF] border border-[#D4CFC8]'
                    }`}
                  >
                    <Text 
                      className={`font-medium ${
                        formData.crops.includes(crop) 
                          ? 'text-[#FCF6F5]' 
                          : 'text-[#2C5F2D]'
                      }`}
                      style={{ fontFamily: 'Inter-Regular' }}
                    >
                      {crop}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        );
      case 3:
        return (
          <View className="flex-1 gap-6">
            <Text className="text-[#2C5F2D] text-[22px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              Payment & preferences
            </Text>
            
            <View className="bg-[#EDE8DF] rounded-2xl p-4 gap-2">
              <Text className="text-gray-500 text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                UPI ID
              </Text>
              <TextInput
                className="text-[#2C5F2D] text-[16px] font-bold"
                style={{ fontFamily: 'Inter-Bold' }}
                placeholder="Enter your UPI ID"
                value={formData.upiId}
                onChangeText={(text) => setFormData(prev => ({ ...prev, upiId: text }))}
              />
            </View>
            
            <View className="bg-[#EDE8DF] rounded-2xl p-4 gap-2">
              <Text className="text-gray-500 text-[11px] font-bold uppercase" style={{ fontFamily: 'Inter-Bold' }}>
                Language preference
              </Text>
              
              <View className="flex-row flex-wrap gap-2 mt-2">
                {['हिंदी', 'ಕನ್ನಡ', 'தமிழ்', 'বাংলা', 'తెలుగు', 'English'].map(lang => {
                  const langCode = ['हिंदी', 'ಕನ್ನಡ', 'தமிழ்', 'বাংলা', 'తెలుగు', 'English'].indexOf(lang);
                  const langCodes = ['hi', 'kn', 'ta', 'bn', 'te', 'en'];
                  const code = langCodes[langCode];
                  
                  return (
                    <TouchableOpacity
                      key={code}
                      onPress={() => setFormData(prev => ({ ...prev, language: code }))}
                      className={`px-4 py-2 rounded-full ${
                        formData.language === code 
                          ? 'bg-[#2C5F2D] border border-[#2C5F2D]' 
                          : 'bg-[#EDE8DF] border border-[#D4CFC8]'
                      }`}
                    >
                      <Text 
                        className={`font-medium ${
                          formData.language === code 
                            ? 'text-[#FCF6F5]' 
                            : 'text-[#2C5F2D]'
                        }`}
                        style={{ fontFamily: 'Inter-Regular' }}
                      >
                        {lang}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
        );
    }
  };

  return (
    <View className="flex-1 bg-[#FCF6F5] pt-10 px-6">
      {/* Header */}
      <View className="mb-6">
        <View className="flex-row items-center mb-4">
          <View className="w-8 h-8 rounded-full bg-[#2C5F2D] items-center justify-center mr-3">
            <Text className="text-[#FCF6F5] font-bold" style={{ fontFamily: 'Inter-Bold' }}>1</Text>
          </View>
          <View className={`flex-1 h-1 ${currentStep >= 2 ? 'bg-[#2C5F2D]' : 'bg-[#D4CFC8]'}`} />
          <View className="w-8 h-8 rounded-full bg-[#2C5F2D] items-center justify-center mx-3">
            <Text className="text-[#FCF6F5] font-bold" style={{ fontFamily: 'Inter-Bold' }}>{currentStep >= 2 ? '2' : ''}</Text>
          </View>
          <View className={`flex-1 h-1 ${currentStep >= 3 ? 'bg-[#2C5F2D]' : 'bg-[#D4CFC8]'}`} />
          <View className="w-8 h-8 rounded-full bg-[#2C5F2D] items-center justify-center ml-3">
            <Text className="text-[#FCF6F5] font-bold" style={{ fontFamily: 'Inter-Bold' }}>{currentStep >= 3 ? '3' : ''}</Text>
          </View>
        </View>
        
        <Text className="text-[#2C5F2D] text-center text-[16px] font-bold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          Step {currentStep} of 3
        </Text>
      </View>

      {/* Step content */}
      <ScrollView className="flex-1">
        {renderStep()}
      </ScrollView>

      {/* Navigation buttons */}
      <View className="flex-row justify-between mt-6">
        {currentStep > 1 ? (
          <TouchableOpacity 
            onPress={handlePrev}
            className="bg-[#EDE8DF] rounded-full h-14 flex-1 mr-2 items-center justify-center"
          >
            <Text className="text-[#2C5F2D] text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
              Previous
            </Text>
          </TouchableOpacity>
        ) : (
          <View className="flex-1 mr-2" />
        )}
        
        <TouchableOpacity 
          onPress={handleNext}
          className="bg-[#2C5F2D] rounded-full h-14 flex-1 ml-2 items-center justify-center"
        >
          <Text className="text-[#FCF6F5] text-[16px] font-bold" style={{ fontFamily: 'Inter-Bold' }}>
            {currentStep === 3 ? 'Complete Setup' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
