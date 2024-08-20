import { Tabs } from 'expo-router';
import { FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { Images } from '@/constants';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#f43f5e",
        tabBarLabelStyle: {
          paddingBottom: 10,
        },
        tabBarStyle: {
          height: 64,
        },
      }}
    >
      <Tabs.Screen name='index' options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ size, color }) => (
          <Image
            source={Images.home}
            style={{ width: size, height: size }}
            tintColor={color}
          />
        ),
        headerShown: false,
      }} />
      <Tabs.Screen name='course' options={{
        tabBarLabel: "Course",
        tabBarIcon: ({ size, color }) => (
          <Image
            source={Images.course}
            style={{ width: size, height: size }}
            tintColor={color}
          />
        )
      }} />
      <Tabs.Screen name='leaderboard' options={{
        tabBarLabel: "Leaderboard",
        tabBarIcon: ({ size, color }) => (
          <Image
            source={Images.rank}
            style={{ width: size, height: size }}
            tintColor={color}
          />
        )
      }} />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Image
            source={Images.user}
            style={{ width: size, height: size }}
            tintColor={color}
          />
          ),
        }}
      />
    </Tabs >
  )
}

export default TabLayout