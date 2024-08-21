import Footer from "@/components/footer/footer"
import { Images } from "@/constants"
import { StatusBar } from "expo-status-bar"
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const CourseScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={{ minHeight: "100%" }}
            >
                <View className="w-11/12 mx-auto flex flex-col">
                    <View className="w-full h-48">
                        <Image source={Images.PYQ} className="w-full h-full object-cover rounded" />
                    </View>
                    <View className="py-3 flex flex-col w-full gap-1.5">
                        <View className="flex flex-row justify-start items-center">
                            <View className="w-7 h-7">
                                <Image source={Images.view} className="w-full h-full object-cover" />
                            </View>
                            <Text className="ml-3 text-lg text-slate-500 font-extrabold">PYQ Mock Test Since - 2000</Text>
                        </View>
                        <View className="flex flex-row justify-start items-center">
                            <View className="w-7 h-7">
                                <Image source={Images.test} className="w-full h-full object-cover" />
                            </View>
                            <Text className="ml-3 text-lg text-slate-500 font-extrabold">100+ Mock Tests</Text>
                        </View>
                    </View>
                    <TouchableOpacity className="p-3 w-2/3 rounded-full bg-rose-500">
                        <Text className="text-lg text-white font-extrabold text-center">Practice Now</Text>
                    </TouchableOpacity>
                </View>
                <View className="my-5">
                    <Text className="pl-3 text-3xl text-rose-500 font-extrabold">Chapter Wise PYQ</Text>
                    
                </View>
                <Footer />
            </ScrollView>
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}

export default CourseScreen