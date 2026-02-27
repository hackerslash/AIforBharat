import { router } from "expo-router";
import { Users } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

export default function EmptyCluster() {
  return (
    <View className="flex-1 items-center justify-center bg-cream px-6">
      <Users size={80} color="#2C5F2D" />
      <Text className="mt-6 text-xl font-bold text-primary">No cluster in your area yet</Text>
      <Text className="mt-2 text-sm text-[#A0A0A0]">Be the first to start one!</Text>
      <TouchableOpacity onPress={() => router.push('/(tabs)/voice')} className="mt-6 h-14 w-full items-center justify-center rounded-full bg-primary"><Text className="text-white">Place Voice Order</Text></TouchableOpacity>
    </View>
  );
}
