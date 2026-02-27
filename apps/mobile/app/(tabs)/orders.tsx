import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const orders = [
  { id: "AGS-2024-0842", status: "Delivered", product: "Tomato Seeds (Hybrid)", details: "5 kg · AgroMart · ?4,200" },
  { id: "AGS-2024-0843", status: "Out for Delivery", product: "NPK Fertilizer", details: "10 kg · AgroMart · ?2,800" },
  { id: "AGS-2024-0844", status: "Payment Pending", product: "Ragi Seeds", details: "8 kg · KisanBazar · ?1,650" },
];

export default function OrdersTab() {
  return (
    <View className="flex-1 bg-cream">
      <View className="h-20 items-start justify-end bg-primary px-6 pb-4"><Text className="text-lg font-semibold text-white">My Orders</Text></View>
      <ScrollView className="p-4">
        {orders.map((o) => (
          <TouchableOpacity key={o.id} onPress={() => router.push(`/orders/${o.id}/track`)} className="mb-4 rounded-[20px] bg-beige p-4">
            <Text className="text-xs text-[#A0A0A0]">{o.status}</Text>
            <Text className="mt-1 text-base font-bold text-primary">{o.product}</Text>
            <Text className="mt-1 text-sm text-primary">{o.details}</Text>
            <Text className="mt-2 text-sm text-primary">Saved ?800 with cluster ?</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
