import { ImageSlider } from "@/assets/data/SliderData";
import Carousel from "@/components/carousel/carousel";
import { Images } from "@/constants";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, Image, TouchableOpacity, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

// App features - 
// popular test series : NEET 2024, JEE  2024


type Item = {
    id: string;
    title: string;
};

const data: Item[] = [
    { id: '1', title: 'July 2024' },
    { id: '2', title: 'May 2023' },
    { id: '3', title: 'January 2022' },
]

const TrendingItem = ({ item }: { item: Item }) => (
    <View className="h-48 w-72 mx-3 my-3 bg-green-500 rounded shadow-md shadow-green-600">
        <View>
            <View className="flex-row justify-between items-center px-3 border-b-2 border-white">
                <Text className="text-3xl font-bold text-white">{item.title}</Text>
                <View className="absolute top-0 right-0 p-3 bg-yellow-400 rounded">
                    <Text className="text-sm font-bold text-white">Premium</Text>
                </View>
            </View>
            <View className="flex-row justify-between items-center px-3">
                <Text className="text-lg font-bold text-white">3 Hr's</Text>
                <View className="w-1 h-1 bg-white rounded-full"></View>
                <Text className="text-lg font-bold text-white">75 Q's</Text>
                <View className="w-1 h-1 bg-white rounded-full"></View>
                <Text className="text-lg font-bold text-white">#JEE-Mains</Text>
            </View>
        </View>
    </View>
)

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView
                contentContainerStyle={{ minHeight: "100%" }}
            >
                <View className="flex flex-row justify-between items-center p-3">
                    <View className="flex-row justify-center items-center">
                        <Text className="text-lg font-bold text-rose-500">ExamAce</Text>
                    </View>
                    <View className="w-7 h-7">
                        <Image source={Images.notification} className="w-full h-full object-cover" />
                    </View>
                </View>
                <Carousel itemList={ImageSlider} />
            </ScrollView>
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}

export default HomeScreen;