import { router } from "expo-router";
import { ShieldCheck, Sprout } from "lucide-react-native";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { PrimaryButton } from "../../components/PrimaryButton";

export default function PhoneLogin() {
  return (
    <View className="flex-1 bg-primary">
      <View className="h-[260px] items-center justify-center gap-3">
        <View className="h-16 w-16 items-center justify-center rounded-full bg-cream/15"><Sprout size={30} color="#FCF6F5" /></View>
        <Text className="text-3xl font-bold text-white">AgriSetu</Text>
        <Text className="text-sm text-white/70">Enter your mobile number to continue</Text>
      </View>
      <View className="flex-1 rounded-t-[32px] bg-cream px-6 pb-10 pt-8">
        <Text className="text-2xl font-bold text-primary">What&apos;s your mobile number?</Text>
        <Text className="mt-2 text-sm text-primary">We&apos;ll send a one-time password to verify your identity.</Text>
        <View className="mt-6 h-14 flex-row items-center gap-3 rounded-2xl bg-beige px-4">
          <Text className="font-semibold text-primary">IN +91</Text>
          <View className="h-6 w-px bg-muted" />
          <TextInput keyboardType="number-pad" placeholder="98765 43210" className="flex-1 text-base text-primary" />
        </View>
        <Text className="mt-2 text-sm text-[#A0A0A0]">You will receive an OTP on this number</Text>
        <View className="mt-4 flex-row items-center gap-2 rounded-xl bg-beige p-4">
          <ShieldCheck size={16} color="#2C5F2D" />
          <Text className="text-xs text-primary">Linked to your Aadhaar for secure verification</Text>
        </View>
        <View className="mt-8"><PrimaryButton label="Send OTP" onPress={() => router.push('/auth/otp')} /></View>
        <TouchableOpacity className="mt-4 items-center" onPress={() => router.push('/auth/otp')}><Text className="text-sm text-primary">Use Aadhaar OTP instead</Text></TouchableOpacity>
      </View>
    </View>
  );
}
