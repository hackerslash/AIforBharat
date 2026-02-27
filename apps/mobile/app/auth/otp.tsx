import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { MessageSquare } from "lucide-react-native";
import { Text, TextInput, View } from "react-native";
import { PrimaryButton } from "../../components/PrimaryButton";

export default function OtpScreen() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(42);
  const refs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    const interval = setInterval(() => setTimer((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (otp.every(Boolean)) {
      const id = setTimeout(() => router.replace("/auth/onboarding"), 500);
      return () => clearTimeout(id);
    }
  }, [otp]);

  const update = (value: string, index: number) => {
    const next = [...otp];
    next[index] = value.slice(-1);
    setOtp(next);
    if (value && index < 5) refs.current[index + 1]?.focus();
  };

  return (
    <View className="flex-1 bg-primary">
      <View className="h-[260px] items-center justify-center gap-3">
        <MessageSquare size={32} color="#FCF6F5" />
        <Text className="text-3xl font-bold text-white">Verify your number</Text>
        <Text className="text-sm text-white/70">OTP sent to +91 98765 43210</Text>
      </View>
      <View className="flex-1 rounded-t-[32px] bg-cream px-6 pb-10 pt-8">
        <Text className="text-2xl font-bold text-primary">Enter 6-digit OTP</Text>
        <Text className="mt-2 text-sm text-[#A0A0A0]">Valid for 10 minutes. Don&apos;t share with anyone.</Text>
        <View className="mt-7 flex-row justify-between">
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(r) => { refs.current[index] = r; }}
              maxLength={1}
              keyboardType="number-pad"
              className={`h-[60px] w-[52px] rounded-[14px] text-center text-2xl font-bold ${digit ? "bg-primary text-white" : "bg-beige text-primary"}`}
              value={digit}
              onChangeText={(value) => update(value, index)}
            />
          ))}
        </View>
        <Text className="mt-6 text-center text-sm text-[#A0A0A0]">Didn&apos;t receive OTP? <Text className="font-semibold text-primary">Resend in 0:{String(timer).padStart(2, "0")}</Text></Text>
        <View className="mt-8"><PrimaryButton label="Verify & Continue" onPress={() => router.replace('/auth/onboarding')} /></View>
      </View>
    </View>
  );
}
