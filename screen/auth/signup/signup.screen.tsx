import { StatusBar } from "expo-status-bar";
import { Image, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from '@expo/vector-icons/Entypo';
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Images } from "@/constants";
import { router } from "expo-router";

const SignupScreen = () => {
    const windowHeight = useWindowDimensions().height;
    return (
        <SafeAreaView>
            <View style={[{ minHeight: Math.round(windowHeight) }]}>
                <View className="w-full h-1/2 justify-between">
                    <View className="px-3">
                        <View className="border-2 border-green-500 rounded-full w-9 h-9 justify-center items-center">
                            <Entypo name="chevron-left" size={32} color="#24AE7C" />
                        </View>
                        <View className="justify-center items-center">
                            <Image source={Images.logo} tintColor="#24AE7C" className="w-16 h-16" resizeMode="contain" />
                            <Text className="text-3xl font-extrabold text-green-500 text-center underline">CREATE ACCOUNT</Text>
                        </View>
                    </View>
                    <View className="px-3 gap-1">
                        <View>
                            <Text className="text-xl font-bold text-green-500 pl-3">User Name</Text>
                            <View className="flex-row bg-white p-3 border-2 border-green-500 rounded-full">
                                <Ionicons name="person-outline" size={24} color="#24AE7C" />
                                <TextInput className="flex-1 text-lg px-1" />
                            </View>
                        </View>
                        <View>
                            <Text className="text-xl font-bold text-green-500 pl-3">Password</Text>
                            <View className="flex-row bg-white p-3 border-2 border-green-500 rounded-full">
                                <MaterialIcons name="password" size={24} color="#24AE7C" />
                                <TextInput className="flex-1 text-lg px-1" />
                            </View>
                        </View>
                    </View>
                </View>
                <View className="h-1/2 justify-center items-center">
                    <TouchableOpacity className="w-72 bg-green-500 rounded-full py-3 items-center" onPress={() => router.push("/(tabs)")}>
                        <Text className="text-xl text-light-200 font-bold">Create Account</Text>
                    </TouchableOpacity>
                    <Text className="w-64 text-center text-dark-700">By Proceeding. you agree with the Privacy Policy and Terms of Use</Text>
                </View>
            </View>
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}

export default SignupScreen;