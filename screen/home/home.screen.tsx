import { ImageSlider } from "@/assets/data/SliderData";
import { trendingTopics } from "@/assets/data/TrendingData";
import Carousel from "@/components/carousel/carousel";
import Feature from "@/components/feature/feature";
import Search from "@/components/search/search";
import Trending from "@/components/trending/trending";
import { Images } from "@/constants";
import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";


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
                <Search />
                <Carousel itemList={ImageSlider} />
                <Feature />
                <Trending topicList={trendingTopics} />
            </ScrollView>
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}

export default HomeScreen;