import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { AppHeader } from "../../components/AppHeader";

const fields = [
  ["PRODUCT", "Tomato Seeds (Hybrid)"],
  ["QUANTITY", "5 kg"],
  ["DELIVERY DATE", "Next Week (Nov 28)"],
  ["DELIVERY LOCATION", "Mandya Mandi, Gate 2"],
  ["SPECIAL INSTRUCTIONS", "Certified organic only"],
];

export default function ConfirmOrder() {
  return (
    <View className="flex-1 bg-cream">
      <AppHeader title="Confirm Your Order" />
      <View className="p-6">
        <View className="rounded-[14px] bg-primary p-4"><Text className="text-sm text-white">AI extracted from your voice. Review & Confirm</Text></View>
        <View className="mt-4 rounded-[20px] bg-beige p-4">
          {fields.map((f, i) => (
            <View key={f[0]} className={`${i < fields.length - 1 ? "mb-3 border-b border-muted pb-3" : ""}`}>
              <Text className="text-xs font-semibold text-[#A0A0A0]">{f[0]}</Text>
              <Text className="text-base font-semibold text-primary">{f[1]}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity onPress={() => router.push('/clusters/available')} className="mt-6 h-14 items-center justify-center rounded-full bg-primary"><Text className="text-white">Confirm</Text></TouchableOpacity>
        <Text className="mt-3 text-center text-sm text-[#A0A0A0]">Tap any field to edit before confirming</Text>
      </View>
    </View>
  );
}
