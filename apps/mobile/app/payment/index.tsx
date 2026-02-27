import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { AppHeader } from "../../components/AppHeader";

export default function PaymentIndex() {
  return (
    <View className="flex-1 bg-cream">
      <AppHeader title="Secure Payment" />
      <View className="p-6">
        <View className="rounded-[20px] bg-beige p-4"><Text className="text-base font-bold text-primary">Escrow Payment</Text><Text className="mt-2 text-sm text-primary">Amount: Rs 4,200</Text><Text className="text-sm text-primary">Vendor: AgroMart Supplies Pvt Ltd</Text></View>
        <TouchableOpacity onPress={() => router.push('/payment/waiting')} className="mt-6 h-14 items-center justify-center rounded-full bg-primary"><Text className="text-white">Pay Securely</Text></TouchableOpacity>
      </View>
    </View>
  );
}

