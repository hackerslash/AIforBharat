import { Tabs } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';
import { Sprout, Package, Users, Mic, Bell, User } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FCF6F5',
          height: 80,
          paddingBottom: 10,
          paddingTop: 5,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <View className="items-center">
              <Sprout size={24} color={focused ? '#2C5F2D' : '#A0A0A0'} />
              <Text className={focused ? 'text-[#2C5F2D] text-xs' : 'text-gray-400 text-xs'}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'Orders',
          tabBarIcon: ({ focused }) => (
            <View className="items-center">
              <Package size={24} color={focused ? '#2C5F2D' : '#A0A0A0'} />
              <Text className={focused ? 'text-[#2C5F2D] text-xs' : 'text-gray-400 text-xs'}>
                Orders
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="voice"
        options={{
          title: 'Voice',
          tabBarButton: () => null, // Hidden from tab bar, accessed differently
        }}
      />
      <Tabs.Screen
        name="cluster"
        options={{
          title: 'Cluster',
          tabBarIcon: ({ focused }) => (
            <View className="items-center">
              <Users size={24} color={focused ? '#2C5F2D' : '#A0A0A0'} />
              <Text className={focused ? 'text-[#2C5F2D] text-xs' : 'text-gray-400 text-xs'}>
                Cluster
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <View className="items-center">
              <User size={24} color={focused ? '#2C5F2D' : '#A0A0A0'} />
              <Text className={focused ? 'text-[#2C5F2D] text-xs' : 'text-gray-400 text-xs'}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
