import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const clusters = [
  { name: "Tomato Seeds", farmers: 9, district: "Mandya", progress: 76, price: "?840/kg" },
  { name: "Ragi Seeds", farmers: 7, district: "Mysore", progress: 54, price: "?620/kg" },
  { name: "NPK Fertilizer", farmers: 5, district: "Hassan", progress: 39, price: "?420/kg" },
];

export default function AvailableClusters() {
  return (
    <View className="flex-1 bg-cream">
      <View className="h-20 items-start justify-end bg-primary px-6 pb-4"><Text className="text-lg font-semibold text-white">Available Clusters</Text></View>
      <ScrollView className="p-4">
        <Text className="mb-3 text-base font-bold text-primary">Clusters near you</Text>
        {clusters.map((c) => (
          <View key={c.name} className="mb-4 rounded-[20px] bg-beige p-4">
            <Text className="text-base font-bold text-primary">{c.name}</Text>
            <Text className="mt-1 text-sm text-primary">{c.farmers} farmers · {c.district}</Text>
            <View className="mt-2 h-2 rounded-full bg-muted"><View className="h-2 rounded-full bg-primary" style={{ width: `${c.progress}%` }} /></View>
            <Text className="mt-2 text-sm text-primary">{c.price}</Text>
            <TouchableOpacity onPress={() => router.push('/(tabs)/cluster')} className="mt-3 h-11 items-center justify-center rounded-full bg-primary"><Text className="text-white">Join Cluster</Text></TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
