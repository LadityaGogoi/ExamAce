import { useState } from "react"
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Images } from "@/constants";

const LoginScreen = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handlePrivacy = () => {
        setIsChecked(!isChecked)
    }

    return (
        <SafeAreaView className="h-screen w-full">
            <View className="h-full w-full">
                <View className="w-full h-1/2 flex flex-col justify-between items-center">
                    <View className="w-full px-3 flex flex-row justify-start items-start">
                        <View className="w-9 h-9">
                            <Image source={Images.back} className="w-full h-full
                             object-cover" />
                        </View>
                    </View>
                    <View className="flex flex-row justify-center items-center">
                        <View className="w-16 h-16">
                            <Image source={Images.logo} className="w-full h-full object-cover" />
                        </View>
                        <Text className="text-3xl text-rose-500 font-extrabold">Login Account</Text>
                    </View>
                    <View className="w-5/6 flex flex-col">
                        <View className="w-full border-2 border-rose-300 rounded flex flex-row items-center">
                            <View className="w-11 h-11 p-3 border-rose-300 border-r-2">
                                <Image source={Images.user} className="w-full h-full object-cover" />
                            </View>
                            <TextInput placeholder="enter your name" className="px-1.5 text-lg text-slate-500" />
                        </View>
                        <View className="w-full border-2 border-rose-300 rounded flex flex-row items-center my-3">
                            <View className="w-11 h-11 p-3 border-rose-300 border-r-2">
                                <Image source={Images.lock} className="w-full h-full object-cover" />
                            </View>
                            <TextInput placeholder="enter your password" className="px-1.5 text-lg text-slate-500" />
                        </View>
                    </View>
                </View>
                <View className="w-full h-1/2 flex flex-col justify-end items-center gap-3">
                    <View className="w-5/6 flex flex-row justify-between items-center gap-3">
                        <TouchableOpacity onPress={() => handlePrivacy()} className="w-5 h-5 p-0.5 rounded border-2 border-rose-500">
                            {
                                isChecked && (
                                    <Image source={Images.check} className="w-full h-full object-cover" />
                                )
                            }
                        </TouchableOpacity>
                        <Text className="flex-1 text-slate-500">By Proceeding. you agree with the Privacy Policy and Terms of Use</Text>
                    </View>
                    <TouchableOpacity className="w-5/6 bg-rose-500 rounded-full py-3 items-center" onPress={() => router.push("/(tabs)")}>
                        <Text className="text-xl text-light-200 font-bold">Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}

export default LoginScreen