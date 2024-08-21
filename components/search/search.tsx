import { Images } from "@/constants"
import { Image, Text, TextInput, View } from "react-native"

const Search = () => {
    return (
        <View className="w-11/12 mx-auto my-3 p-3 border border-slate-300 rounded flex flex-row justify-between items-center">
            <TextInput placeholder="what study today ?" className="flex-1 text-lg text-slate-500" />
            <View className="w-7 h-7">
                <Image source={Images.search} className="w-full h-full object-cover" />
            </View>
        </View>
    )
}

export default Search