import { Images } from "@/constants";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OnBoardingScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white justify-between items-center py-3">
      <Stack.Screen options={{ headerShown: false }} />
      <View className="w-72 flex-row justify-between items-center">
        <Text>left</Text>
        <View>
          <Text className="font-manjariBold text-lg text-light-200">skip</Text>
        </View>
      </View>
      <View className="flex-1 justify-center items-center">
        <Image source={Images.onboardFirst} style={{ width: 500, height: 300, resizeMode: 'contain' }} />
        <View className="w-64">
          <Text className="font-manjari text-3xl text-green-500 text-center">Get Ready to Ace JEE & NEET</Text>
        </View>
        <View className="w-80">
          <Text className="font-manjari text-base text-dark-600 text-center">Welcome! Prepare for your JEE and NEET exams with our comprehensive platform. Access an extensive library of mock tests crafted from previous years' question papers</Text>
        </View>
      </View>
      <View className="w-72">
        <TouchableOpacity className="bg-green-500 rounded-full shadow-lg py-3 items-center" onPress={() => alert("ExamAce")}>
          <Text className="font-manjariBold text-xl text-light-200">Continue</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
