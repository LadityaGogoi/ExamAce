import { Tabs } from 'expo-router';
import { FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#24AE7C",
        tabBarLabelStyle: {
          paddingBottom: 10,
        },
        tabBarStyle: {
          height: 64,
        },
      }}
    >
      <Tabs.Screen name='index' options={{
        tabBarLabel: "Explore",
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name='lighthouse' size={size} color={color} />
        ),
        headerShown: false,
      }} />
      <Tabs.Screen name='blog' options={{
        tabBarLabel: "Blog",
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name='message-outline' size={size} color={color} />
        )
      }} />
      <Tabs.Screen name='leaderboard' options={{
        tabBarLabel: "Compete",
        tabBarIcon: ({ size, color }) => (
          <FontAwesome6 name='ranking-star' size={size} color={color} />
        )
      }} />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs >
  )
}

export default TabLayout