import { Tabs } from "expo-router";
import { Home, Mic, Package, User, Users } from "lucide-react-native";
import { View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 80, backgroundColor: "#FCF6F5", paddingBottom: 14, paddingTop: 6 },
        tabBarActiveTintColor: "#2C5F2D",
        tabBarInactiveTintColor: "#A0A0A0",
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color }) => <Home color={color} size={20} /> }} />
      <Tabs.Screen name="orders" options={{ title: "Orders", tabBarIcon: ({ color }) => <Package color={color} size={20} /> }} />
      <Tabs.Screen
        name="voice"
        options={{
          title: "Voice",
          tabBarIcon: ({ focused }) => (
            <View style={{ width: 52, height: 52, borderRadius: 26, backgroundColor: focused ? "#2C5F2D" : "#EDE8DF", alignItems: "center", justifyContent: "center" }}>
              <Mic color={focused ? "#FCF6F5" : "#A0A0A0"} size={20} />
            </View>
          ),
        }}
      />
      <Tabs.Screen name="cluster" options={{ title: "Cluster", tabBarIcon: ({ color }) => <Users color={color} size={20} /> }} />
      <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: ({ color }) => <User color={color} size={20} /> }} />
    </Tabs>
  );
}
