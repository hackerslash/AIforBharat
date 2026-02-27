import { router } from "expo-router";
import { ShieldCheck, Sprout } from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import { useAppContext } from "../context/AppContext";

const languages = [
  { code: "hi", label: "?????" },
  { code: "kn", label: "?????" },
  { code: "ta", label: "?????" },
  { code: "bn", label: "?????" },
  { code: "te", label: "??????" },
  { code: "en", label: "English" },
] as const;

export default function LandingScreen() {
  const { language, setLanguage } = useAppContext();

  return (
    <ScrollView className="flex-1 bg-primary" contentContainerStyle={{ flexGrow: 1 }}>
      <View className="h-[480px] px-8 pb-10 pt-16">
        <View className="h-[72px] w-[72px] items-center justify-center rounded-full bg-cream">
          <Sprout size={34} color="#2C5F2D" />
        </View>
        <Text className="mt-4 text-[40px] font-extrabold text-cream">AgriSetu</Text>
        <Text className="text-base text-cream/70">Collective Farming Power</Text>
      </View>
      <View className="flex-1 rounded-t-[32px] bg-cream px-6 pb-10 pt-8">
        <Text className="text-[28px] font-bold text-primary">Welcome to AgriSetu</Text>
        <Text className="mt-2 text-sm leading-6 text-primary">Empowering farmers with collective buying power. Login with your Aadhaar to get started.</Text>
        <Text className="mt-5 text-sm font-semibold text-primary">Select Language / ???? ?????</Text>
        <View className="mt-3 flex-row flex-wrap gap-2">
          {languages.map((l) => {
            const active = l.code === language;
            return (
              <TouchableOpacity
                key={l.code}
                className={`rounded-full px-4 py-2 ${active ? "bg-primary" : "bg-beige"}`}
                onPress={() => setLanguage(l.code)}
              >
                <Text className={`font-semibold ${active ? "text-cream" : "text-primary"}`}>{l.label}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View className="mt-6">
          <PrimaryButton label="Login with Aadhaar" onPress={() => router.push("/auth/phone")} />
        </View>
        <TouchableOpacity className="mt-4 items-center" onPress={() => router.push("/auth/phone")}>
          <View className="flex-row items-center gap-2">
            <ShieldCheck size={16} color="#2C5F2D" />
            <Text className="text-sm font-medium text-primary">Use OTP instead ?</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
