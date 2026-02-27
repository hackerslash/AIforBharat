import { View, Text, TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { router } from "expo-router";

export function AppHeader({ title }: { title: string }) {
  return (
    <View className="h-20 flex-row items-center bg-primary px-6 pt-6">
      <TouchableOpacity onPress={() => router.back()} className="mr-3">
        <ArrowLeft color="#FCF6F5" size={22} />
      </TouchableOpacity>
      <Text className="text-lg font-semibold text-white">{title}</Text>
    </View>
  );
}
