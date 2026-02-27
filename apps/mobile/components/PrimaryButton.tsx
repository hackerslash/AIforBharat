import { TouchableOpacity, Text } from "react-native";

export function PrimaryButton({ label, onPress }: { label: string; onPress?: () => void }) {
  return (
    <TouchableOpacity onPress={onPress} className="h-14 w-full items-center justify-center rounded-full bg-primary">
      <Text className="text-base font-semibold text-white">{label}</Text>
    </TouchableOpacity>
  );
}
