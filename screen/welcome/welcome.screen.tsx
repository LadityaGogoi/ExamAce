import { Images } from "@/constants";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const WelcomeScreen = () => {
    return (
        <SafeAreaView className="h-screen w-full justify-between items-center">
            <View className="flex flex-col justify-center items-center h-3/4">
                <View className="w-48 h-48">
                    <Image source={Images.welcome} className="w-full h-full object-cover" />
                </View>
                <Text className="text-3xl font-extrabold text-rose-500 text-center">LEARN ON THE GO</Text>
                <View className="w-2/3">
                    <Text className="text-base text-slate-500 text-center">Master Your Skills with Fun and Learn from Very Fundamentals</Text>
                </View>
            </View>
            <View className="w-72 flex-row justify-around items-center gap-3">
                <TouchableOpacity className="border-2 border-rose-500 rounded-full py-3 items-center flex-1">
                    <Text className="text-xl text-rose-500 font-bold">Login</Text>
                </TouchableOpacity>
                <TouchableOpacity className=" bg-rose-500  rounded-full py-3 items-center flex-1" onPress={() => router.push('/(routes)/signup')}>
                    <Text className="text-xl text-light-200 font-bold">Register</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}

export default WelcomeScreen;