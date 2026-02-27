import { router, useLocalSearchParams } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { AppHeader } from "../../../components/AppHeader";

const timeline = [
  "Order Confirmed - Nov 20 · 10:32 AM",
  "Packed - Nov 20 · 2:15 PM",
  "Out for Delivery (Now!) - arriving by 5 PM",
  "Delivered - Tap to confirm receipt",
];

export default function TrackOrder() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View className="flex-1 bg-cream">
      <AppHeader title={`Order #${id ?? "AGS-2024-0842"}`} />
      <View className="p-6">
        <View className="rounded-[20px] bg-primary p-5"><Text className="text-white">Tomato Seeds (Hybrid)</Text><Text className="text-white/70">AgroMart Supplies Pvt Ltd</Text></View>
        <View className="mt-4 rounded-[20px] bg-beige p-4">
          {timeline.map((t, i) => <Text key={t} className={`mb-2 text-sm ${i < 3 ? "text-primary" : "text-[#A0A0A0]"}`}>• {t}</Text>)}
        </View>
        <TouchableOpacity onPress={() => router.push(`/orders/${id ?? 'AGS-2024-0842'}/rate`)} className="mt-5 h-14 items-center justify-center rounded-full bg-primary"><Text className="text-white">Confirm Delivery</Text></TouchableOpacity>
      </View>
    </View>
  );
}
