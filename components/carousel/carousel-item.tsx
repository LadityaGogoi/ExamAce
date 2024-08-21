import { ImageSliderType } from "@/assets/data/SliderData"
import { Image, View } from "react-native"

type Props = {
    item: ImageSliderType;
    index: number;
}

const CarouselItem = ({ item, index }: Props) => {
    return (
        <View className="w-screen h-48 flex flex-col justify-center items-center">
            <Image source={item.image} className="w-11/12 h-full object-cover rounded" />
        </View>
    )
}

export default CarouselItem