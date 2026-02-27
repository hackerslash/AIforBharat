import { router } from "expo-router";
import { AlertTriangle } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { AppHeader } from "../../components/AppHeader";

export default function PaymentFailed() {
  return (
    <View className="flex-1 bg-cream">
      <AppHeader title="Payment Failed" />
      <View className="flex-1 items-center justify-center px-6">
        <AlertTriangle size={72} color="#EF4444" />
        <Text className="mt-4 text-2xl font-bold text-primary">Payment failed</Text>
        <Text className="mt-2 text-center text-sm text-[#A0A0A0]">Something went wrong while processing payment.</Text>
        <TouchableOpacity onPress={() => router.replace('/payment')} className="mt-6 h-14 w-full items-center justify-center rounded-full bg-primary"><Text className="text-white">Try Again</Text></TouchableOpacity>
      </View>
    </View>
  );
}

