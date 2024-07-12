import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const OnBoardingScreen = () => {
  return (
    <SafeAreaView className="bg-black">
      <View>
        <Text>Hello</Text>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
