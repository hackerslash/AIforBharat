import { router } from "expo-router";
import { Bell, Mic, Package, Users } from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useAppContext } from "../../context/AppContext";

export default function HomeScreen() {
  const { user, cluster } = useAppContext();
  return (
    <View className="flex-1 bg-cream">
      <View className="h-20 flex-row items-end justify-between bg-primary px-6 pb-4">
        <Text className="text-lg font-bold text-white">AgriSetu</Text>
        <Bell color="#FCF6F5" size={20} />
      </View>
      <ScrollView className="px-4 pt-4">
        <View className="mb-4 rounded-[20px] bg-primary p-5">
          <Text className="text-xl font-bold text-white">Good morning, {user.name.split(" ")[0]} ??</Text>
          <Text className="text-sm text-white/70">{user.district} · {user.landArea} acres</Text>
        </View>
        <TouchableOpacity onPress={() => router.push('/orders/AGS-2024-0842/track')} className="mb-4 rounded-[20px] bg-beige p-4">
          <View className="flex-row items-center gap-2"><Package size={18} color="#2C5F2D" /><Text className="font-semibold text-primary">Tomato Seeds - In Transit</Text></View>
          <Text className="mt-2 text-sm text-amber">Arriving Today by 5 PM</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/(tabs)/voice')} className="mb-4 rounded-[20px] bg-primary p-5">
          <View className="flex-row items-center gap-2"><Mic size={24} color="#FCF6F5" /><Text className="text-lg font-bold text-white">Place Voice Order</Text></View>
          <Text className="mt-1 text-sm text-white/70">Tap to order in your language</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/(tabs)/cluster')} className="mb-4 rounded-[20px] bg-beige p-4">
          <View className="flex-row items-center justify-between"><Text className="text-base font-bold text-primary">Your Cluster</Text><Users size={18} color="#2C5F2D" /></View>
          <Text className="mt-1 text-sm text-primary">You + 9 farmers · {cluster.district}</Text>
          <View className="mt-2 h-2 rounded-full bg-muted"><View className="h-2 w-3/4 rounded-full bg-primary" /></View>
          <Text className="mt-2 text-sm text-amber">38 of 50 kg collected · 12 kg to go</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
