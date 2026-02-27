import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AppHeader } from "../../components/AppHeader";

export default function PaymentWaiting() {
  const [left, setLeft] = useState(24 * 60 * 60);

  useEffect(() => {
    const id = setInterval(() => setLeft((v) => (v > 0 ? v - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);

  const hh = String(Math.floor(left / 3600)).padStart(2, "0");
  const mm = String(Math.floor((left % 3600) / 60)).padStart(2, "0");
  const ss = String(left % 60).padStart(2, "0");

  return (
    <View className="flex-1 bg-cream">
      <AppHeader title="Payment Waiting" />
      <View className="p-6">
        <Text className="text-base text-primary">Waiting for cluster completion before escrow release</Text>
        <Text className="mt-3 text-2xl font-bold text-primary">{hh}:{mm}:{ss}</Text>
        <TouchableOpacity onPress={() => router.push('/payment/success')} className="mt-6 h-14 items-center justify-center rounded-full bg-primary"><Text className="text-white">Simulate Success</Text></TouchableOpacity>
      </View>
    </View>
  );
}
