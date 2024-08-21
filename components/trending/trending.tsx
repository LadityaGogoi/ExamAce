import { TrendingTopicType } from "@/assets/data/TrendingData"
import { FlatList, Text, View } from "react-native"
import Card from "../card/card"

type Props = {
    topicList: TrendingTopicType[]
}

const Trending = ({ topicList }: Props) => {
    return (
        <View className="my-3">
            <FlatList
                data={topicList}
                renderItem={({ item, index }) => <Card item={item} index={index} />}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Trending