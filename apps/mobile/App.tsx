import React from 'react';
import { AppProvider } from './context/AppContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { ExpoRoot } from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'PlusJakartaSans-Bold': require('@expo-google-fonts/plus-jakarta-sans/PlusJakartaSans-Bold.ttf'),
    'PlusJakartaSans-Regular': require('@expo-google-fonts/plus-jakarta-sans/PlusJakartaSans-Regular.ttf'),
    'Inter-Regular': require('@expo-google-fonts/inter/Inter-Regular.ttf'),
    'Inter-Bold': require('@expo-google-fonts/inter/Inter-Bold.ttf'),
    'NotoSansDevanagari': require('./assets/fonts/NotoSansDevanagari-Regular.ttf'), // Placeholder
    'NotoSansKannada': require('./assets/fonts/NotoSansKannada-Regular.ttf'),     // Placeholder
    'NotoSansTamil': require('./assets/fonts/NotoSansTamil-Regular.ttf'),         // Placeholder
    'NotoSansBengali': require('./assets/fonts/NotoSansBengali-Regular.ttf'),     // Placeholder
    'NotoSansTelugu': require('./assets/fonts/NotoSansTelugu-Regular.ttf'),       // Placeholder
  });

  React.useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AppProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <ExpoRoot />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </AppProvider>
  );
}
