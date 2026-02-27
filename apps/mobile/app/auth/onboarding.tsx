import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { PrimaryButton } from "../../components/PrimaryButton";

const steps = ["Personal", "Farm", "Payments"];

export default function Onboarding() {
  const [step, setStep] = useState(0);

  const next = () => {
    if (step < 2) setStep(step + 1);
    else router.replace("/(tabs)");
  };

  return (
    <View className="flex-1 bg-cream">
      <View className="h-24 justify-end bg-primary px-6 pb-4">
        <Text className="text-lg font-semibold text-white">Setup Profile - {steps[step]}</Text>
        <View className="mt-2 h-2 w-full rounded-full bg-white/30"><View className="h-2 rounded-full bg-white" style={{ width: `${((step + 1) / 3) * 100}%` }} /></View>
      </View>
      <View className="flex-1 gap-3 p-6">
        {step === 0 ? ["Farmer Name", "Village", "District"].map((p) => <TextInput key={p} placeholder={p} className="h-14 rounded-2xl bg-beige px-4 text-primary" />) : null}
        {step === 1 ? ["Land Area (acres)", "Crops Grown"].map((p) => <TextInput key={p} placeholder={p} className="h-14 rounded-2xl bg-beige px-4 text-primary" />) : null}
        {step === 2 ? ["UPI ID", "Language Preference"].map((p) => <TextInput key={p} placeholder={p} className="h-14 rounded-2xl bg-beige px-4 text-primary" />) : null}
        <View className="mt-auto">
          <PrimaryButton label={step === 2 ? "Complete Setup" : "Next"} onPress={next} />
          {step > 0 ? <TouchableOpacity onPress={() => setStep(step - 1)} className="mt-3 items-center"><Text className="text-primary">Back</Text></TouchableOpacity> : null}
        </View>
      </View>
    </View>
  );
}
