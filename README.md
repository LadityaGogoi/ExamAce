### EXAM ACE


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