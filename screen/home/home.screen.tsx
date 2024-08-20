import { Images } from "@/constants";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
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
                contentContainerStyle={{ minHeight: "100%", backgroundColor: '#fff' }}
            >
                <View className="flex-row justify-between items-center px-5 py-1">
                    <View className="flex-row justify-center items-center">
                        <Image source={Images.logo} tintColor="#24AE7C" className="w-10 h-10" resizeMode="contain" />
                        <Text className="text-lg font-bold text-green-500">ExamAce</Text>
                    </View>
                    <MaterialIcons name="notifications-none" size={32} color="#24AE7C" />
                </View>
                <View className="h-48 justify-center items-center bg-green-500 rounded mx-3">
                    <Image source={Images.welcome} className="w-full h-full" resizeMode="contain" />
                    <View className="absolute right-5 -bottom-5 w-10 h-10 border-4 border-white rounded-full bg-green-500 justify-center items-center">
                        <FontAwesome6 name="play" size={24} color="#fff" />
                    </View>
                </View>
                <View className="mx-3 my-10">
                    <View className="flex-row gap-1 justify-evenly mb-1">
                        <View className="flex-1 justify-center items-center bg-green-500 rounded py-1">
                            <Image source={Images.loop} className="w-10 h-10" resizeMode="contain" />
                            <Text className="text-base text-white font-bold">Week Contest</Text>
                        </View>
                        <View className="flex-1 justify-center items-center bg-green-500 rounded py-1">
                            <Image source={Images.loop} className="w-10 h-10" resizeMode="contain" />
                            <Text className="text-base text-white font-bold">Video Demonstration</Text>
                        </View>
                    </View>
                    <View className="flex-row gap-1 justify-evenly">
                        <View className="flex-1 justify-center items-center bg-green-500 rounded py-1">
                            <Image source={Images.loop} className="w-10 h-10" resizeMode="contain" />
                            <Text className="text-base text-white font-bold">Blog/Motivation</Text>
                        </View>
                        <View className="flex-1 justify-center items-center bg-red-500 rounded py-1">
                            <Image source={Images.loop} tintColor="#fff" className="w-10 h-10" resizeMode="contain" />
                            <Text className="text-base text-white font-bold">PYQ</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View className="flex-row justify-between items-center mx-3">
                        <Text className="text-3xl font-bold text-green-500">Trending</Text>
                        <TouchableOpacity>
                            <Text className="text-base font-bold text-blue-500 underline">
                                View All
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        horizontal
                        data={data}
                        renderItem={TrendingItem}
                        keyExtractor={(item) => item.id}
                    />
                </View>
                <Text className="text-3xl font-bold">testing</Text>
                <Text className="text-3xl font-bold">testing</Text>
                <Text className="text-3xl font-bold">testing</Text>
                <Text className="text-3xl font-bold">testing</Text>
                <Text className="text-3xl font-bold">testing</Text>
                <Text className="text-3xl font-bold">testing</Text>
                <Text className="text-3xl font-bold">testing</Text>
                <Text className="text-3xl font-bold">testing</Text>
                <Text className="text-3xl font-bold">testing</Text>
                <Text className="text-3xl font-bold">testing</Text>
                <Text className="text-3xl font-bold">testing</Text>
                <Text className="text-3xl font-bold">testing</Text>
                <Text className="text-3xl font-bold">testing</Text>
                <Text className="text-3xl font-bold">testing</Text>
                <Text className="text-3xl font-bold">testing</Text>
                <Text className="text-3xl font-bold">testing</Text>
                <Text className="text-3xl font-bold">testing</Text>
                <Text className="text-3xl font-bold">testing</Text>
                <Text className="text-3xl font-bold">testing</Text>
                <Text className="text-3xl font-bold">testing</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen;