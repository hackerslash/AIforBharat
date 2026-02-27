import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Star } from "lucide-react-native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { AppHeader } from "../../../components/AppHeader";

export default function RateOrder() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [rating, setRating] = useState(4);

  return (
    <View className="flex-1 bg-cream">
      <AppHeader title={`Order #${id ?? 'AGS-2024-0842'}`} />
      <View className="p-6">
        <View className="rounded-[20px] bg-primary p-5"><Text className="text-white">Delivered</Text><Text className="text-white/70">Delivered on Nov 21</Text></View>
        <View className="mt-4 rounded-[20px] bg-beige p-4"><Text className="text-base font-bold text-primary">Rate Your Experience</Text><View className="mt-3 flex-row gap-2">{[1,2,3,4,5].map((n) => <TouchableOpacity key={n} onPress={() => setRating(n)}><Star size={26} color={n <= rating ? "#E69A28" : "#D4CFC8"} fill={n <= rating ? "#E69A28" : "transparent"} /></TouchableOpacity>)}</View><TextInput placeholder="Write a review (optional)" multiline className="mt-4 min-h-[90px] rounded-xl bg-cream p-3 text-primary" /></View>
        <TouchableOpacity className="mt-5 h-14 items-center justify-center rounded-full bg-primary"><Text className="text-white">Submit Review</Text></TouchableOpacity>
      </View>
    </View>
  );
}
