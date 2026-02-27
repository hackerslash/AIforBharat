import { router } from "expo-router";
import { CheckCircle2 } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { AppHeader } from "../../components/AppHeader";

export default function PaymentSuccess() {
  return (
    <View className="flex-1 bg-cream">
      <AppHeader title="Payment Success" />
      <View className="flex-1 items-center justify-center px-6">
        <CheckCircle2 size={72} color="#22C55E" />
        <Text className="mt-4 text-2xl font-bold text-primary">All paid securely</Text>
        <Text className="mt-2 text-center text-sm text-[#A0A0A0]">Escrow locked. Vendor will be paid after delivery confirmation.</Text>
        <TouchableOpacity onPress={() => router.replace('/(tabs)/orders')} className="mt-6 h-14 w-full items-center justify-center rounded-full bg-primary"><Text className="text-white">Go to Orders</Text></TouchableOpacity>
      </View>
    </View>
  );
}
