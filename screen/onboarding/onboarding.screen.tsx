import { Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Animated, { SlideInUp, SlideOutDown } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

const OnboardingSteps = [
  {
    id: 0,
    title: "Get Ready to Ace JEE & NEET",
    description: "Welcome! Prepare for your JEE and NEET exams with our comprehensive platform. Access an extensive library of mock tests crafted from previous years' question papers"
  },
  {
    id: 1,
    title: " Enhance Your Preparation with Real Exam Experience",
    description: "Welcome! Prepare for your JEE and NEET exams with our comprehensive platform. Access an extensive library of mock tests crafted from previous years' question papers"
  },
  {
    id: 2,
    title: "Achieve Your Dreams with Expert Support",
    description: "Welcome! Prepare for your JEE and NEET exams with our comprehensive platform. Access an extensive library of mock tests crafted from previous years' question papers"
  },
]

const OnBoardingScreen = () => {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = OnboardingSteps[screenIndex];

  const OnContinue = () => {
    if (screenIndex === (OnboardingSteps.length - 1)) {
      router.push('/(routes)/welcome');
    }
    setScreenIndex((screenIndex + 1) % OnboardingSteps.length);
  }
  return (
    <SafeAreaView className="flex-1 justify-between items-center py-3">
      <Stack.Screen options={{ headerShown: false }} />
      <View className="w-72 flex-row justify-between items-center">
        <View className="flex-row gap-1">
          {OnboardingSteps.map((item) => (
            <View key={item.id} className={`bg-rose-500 rounded-full ${screenIndex === item.id ? 'w-7' : 'w-1'} h-1`}></View>
          ))}
        </View>
        <View>
          <TouchableOpacity onPress={() => router.push('/(tabs)')}>
            <Text className="text-lg text-rose-500 font-bold">skip</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="h-60 justify-center items-center">
        <View className="w-64">
          <Animated.Text key={screenIndex} entering={SlideInUp.delay(100)} exiting={SlideOutDown} className="text-3xl font-extrabold text-rose-500 text-center">{data.title}</Animated.Text>
        </View>
        <View className="w-80">
          <Animated.Text key={screenIndex} entering={SlideInUp.delay(100)} exiting={SlideOutDown} className="text-base text-slate-500 text-center">{data.description}</Animated.Text>
        </View>
      </View>
      <View className="w-72">
        <TouchableOpacity className="bg-rose-500 rounded-full shadow-lg py-3 items-center" onPress={OnContinue}>
          <Text className="text-xl text-light-200 font-bold">{screenIndex === (OnboardingSteps.length - 1) ? 'Get Started' : 'Continue'}</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
