import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useAppContext } from "../../context/AppContext";

export default function ClusterTab() {
  const { cluster, vendors } = useAppContext();
  return (
    <View className="flex-1 bg-cream">
      <View className="h-20 items-start justify-end bg-primary px-6 pb-4"><Text className="text-lg font-semibold text-white">Your Cluster</Text></View>
      <View className="h-[220px] bg-[#C8E6C9] p-4"><Text className="text-xs font-semibold text-primary">Mandya District, Karnataka</Text></View>
      <ScrollView className="p-4">
        <View className="rounded-[20px] bg-primary p-5"><Text className="text-base font-bold text-white">You + 9 farmers in {cluster.district}</Text><Text className="text-sm text-white/70">need 50kg Tomato Seeds</Text></View>
        <View className="mt-4 rounded-[20px] bg-beige p-4"><Text className="text-base font-bold text-primary">Tomato Seeds - Demand</Text><Text className="mt-1 text-primary">Required 50 kg · Filled 38 kg · Still needed 12 kg</Text><View className="mt-3 h-3 rounded-full bg-[#C8C2B5]"><View className="h-3 w-3/4 rounded-full bg-primary" /></View></View>
        <Text className="mt-4 text-base font-bold text-primary">Vote for Vendor</Text>
        {vendors.map((v) => (
          <TouchableOpacity key={v.id} className="mt-3 rounded-[20px] bg-beige p-4">
            <Text className="font-semibold text-primary">{v.name}</Text>
            <Text className="text-sm text-primary">? {v.rating} · {v.distance}km · ?{v.pricePerKg}/kg · {v.deliveryDays} days</Text>
            <Text className="mt-1 text-sm text-primary">{v.votes} of {v.totalVotes} votes</Text>
            <View className="mt-2 h-2 rounded-full bg-muted"><View className="h-2 rounded-full bg-primary" style={{ width: `${(v.votes / v.totalVotes) * 100}%` }} /></View>
            <TouchableOpacity className="mt-3 h-11 items-center justify-center rounded-full bg-primary"><Text className="text-white">Vote for this Vendor</Text></TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
