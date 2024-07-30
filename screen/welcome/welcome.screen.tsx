import { Images } from "@/constants";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const WelcomeScreen = () => {
    return (
        <SafeAreaView className="flex-1 justify-between items-center py-3">
            <View className="items-center">
                <Image source={Images.welcome} className="w-96 h-96" resizeMode="contain" />
                <View className="w-64">
                    <Text className="text-3xl font-extrabold text-green-500 text-center">LEARN ON THE GO</Text>
                </View>
                <View className="w-80">
                    <Text className="text-base text-dark-700 text-center font-semibold">Master Your Skills with Fun and Learn from Very Fundamentals</Text>
                </View>
            </View>
            <View className="w-72 flex-row justify-around items-center gap-3">
                <TouchableOpacity className=" bg-green-500 border-2 border-green-500 rounded-full py-3 items-center flex-1" onPress={() => router.push('/(routes)/signup')}>
                    <Text className="text-xl text-light-200 font-bold">Register</Text>
                </TouchableOpacity>
                <TouchableOpacity className="border-2 border-green-500 rounded-full py-3 items-center flex-1">
                    <Text className="text-xl text-green-500 font-bold">Login</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}

export default WelcomeScreen;