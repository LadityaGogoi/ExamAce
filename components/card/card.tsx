import { TrendingTopicType } from "@/assets/data/TrendingData"
import { Images } from "@/constants";
import { Image, Text, View } from "react-native"

type Props = {
    item: TrendingTopicType;
    index: number
}

const Card = ({ item, index }: Props) => {
    return (
        <View className="w-48 h-48 rounded mx-5 flex flex-col justify-between items-start">
            <View className="w-full h-32">
                <Image source={item.image} className="w-full h-full object-cover rounded" />
            </View>
            <Text className="text-lg text-slate-500 font-extrabold">{item.name}</Text>
            <View className="w-full flex flex-row justify-between items-center">
                <View className="w-7 h-7">
                    <Image source={Images.free} className="w-full h-full object-cover" />
                </View>
                <View className="flex flex-row justify-start items-start">
                    <View className="w-5 h-5">
                        <Image source={Images.view} className="w-full h-full object-cover" />
                    </View>
                    <Text className="text-xs text-slate-500 font-extrabold ml-1">{item.enrollment}</Text>
                </View>
            </View>
        </View>
    )
}

export default Card