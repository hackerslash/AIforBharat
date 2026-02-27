import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { useAppContext } from "../../context/AppContext";

export default function ProfileTab() {
  const { user } = useAppContext();
  return (
    <View className="flex-1 bg-cream">
      <View className="h-[200px] items-center bg-primary px-6 pt-12">
        <Image source={{ uri: user.avatarUrl }} className="h-[72px] w-[72px] rounded-full" />
        <Text className="mt-2 text-xl font-bold text-white">{user.name}</Text>
        <Text className="text-sm text-white/70">{user.district}</Text>
      </View>
      <ScrollView className="p-4">
        <View className="rounded-2xl bg-beige p-4"><Text className="font-semibold text-primary">Profile 80% Complete</Text><Text className="text-sm text-[#A0A0A0]">Add UPI ID to complete setup</Text></View>
        <View className="mt-4 rounded-[20px] bg-beige p-4"><Text className="font-bold text-primary">Farm Details</Text><Text className="mt-2 text-primary">Village / District: {user.village}, {user.district}</Text><Text className="text-primary">Land Area: {user.landArea} Acres</Text><Text className="text-primary">Crops Grown: {user.crops.join(", ")}</Text></View>
        <View className="mt-4 flex-row gap-3"><View className="flex-1 rounded-[20px] bg-primary p-4"><Text className="text-white">?{user.totalSavings}</Text><Text className="text-xs text-white/70">Total Savings</Text></View><View className="flex-1 rounded-[20px] bg-beige p-4"><Text className="text-primary">{user.ordersPlaced}</Text><Text className="text-xs text-primary">Orders Placed</Text></View></View>
        <TouchableOpacity className="mt-5 h-[52px] items-center justify-center rounded-full bg-primary"><Text className="text-white">Edit Profile</Text></TouchableOpacity>
        <TouchableOpacity className="mt-3 h-[52px] items-center justify-center rounded-full bg-beige"><Text className="text-red-500">Sign Out</Text></TouchableOpacity>
      </ScrollView>
    </View>
  );
}
