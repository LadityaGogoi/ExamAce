import { Images } from "@/constants"
import { Image, Text, View } from "react-native"

const Feature = () => {
    return (
        <View className="p-3 mx-auto flex flex-col flex-wrap">
            <View className="flex flex-row w-full">
                <View className="flex-1 flex flex-row justify-between items-center m-1 p-3 border border-slate-300 rounded">
                    <View className="w-5 h-5">
                        <Image source={Images.weekly} className="w-full h-full object-cover" />
                    </View>
                    <Text className="text-xs text-slate-500">Weekly Live Contest</Text>
                </View>
                <View className="flex-1 flex flex-row justify-between items-center m-1 p-3 border border-slate-300 rounded">
                    <View className="w-5 h-5">
                        <Image source={Images.video} className="w-full h-full object-cover" />
                    </View>
                    <Text className="text-xs text-slate-500">Video Demonstration</Text>
                </View>
            </View>
            <View className="flex flex-row w-full">
                <View className="flex-1 flex flex-row justify-between items-center m-1 p-3 border border-slate-300 rounded">
                    <View className="w-5 h-5">
                        <Image source={Images.test} className="w-full h-full object-cover" />
                    </View>
                    <Text className="text-xs text-slate-500">PYQ Mock Test</Text>
                </View>
                <View className="flex-1 flex flex-row justify-between items-center m-1 p-3 border border-slate-300 rounded">
                    <View className="w-5 h-5">
                        <Image source={Images.news} className="w-full h-full object-cover" />
                    </View>
                    <Text className="text-xs text-slate-500">Latest JEE News/Blogs</Text>
                </View>
            </View>

        </View>
    )
}

export default Feature