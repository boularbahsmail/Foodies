import React from "react";
import { ScrollView, Text, TouchableOpacity, View, Image } from "react-native";
import { useFonts } from "expo-font";

// Foods
import foods from "./data";

// Icons
import AntDesignIcon from "react-native-vector-icons/AntDesign";

const Foods = ({ activeCategory }) => {
  // Roboto google font
  const [fontsLoaded] = useFonts({
    "Robto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Robto-Light": require("../../assets/fonts/Roboto-Light.ttf"),
  });

  // Checking if the fonts are loaded or not
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="mt-6 pl-4">
      <ScrollView
        className="w-100"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          // gap: 10,
        }}
      >
        {foods?.map((food) =>
          food?.category == activeCategory ? (
            <TouchableOpacity
              className="p-4 bg-zinc-800 flex rounded-xl border border-zinc-700 w-72 mr-4"
              activeOpacity={0.7}
              key={food?.id}
            >
              <View className="flex-col justify-center items-center w-100">
                <View className="w-full flex justify-center items-center overflow-hidden rounded-xl mb-3">
                  <Image
                    source={{ uri: food?.image }}
                    style={{ width: "100%", height: 240 }}
                  />
                </View>
                <Text
                  className="text-xl text-yellow-400 w-full text-left"
                  style={{ fontFamily: "Robto-Bold" }}
                >
                  {Array.from({ length: food?.rating }).map((_, index) => (
                    <AntDesignIcon name="star" size={18} key={index} />
                  ))}
                </Text>
                <View className="flex flex-row justify-between items-center w-full mt-1">
                  <Text
                    className="text-lg text-white my-1"
                    style={{ fontFamily: "Robto-Bold" }}
                  >
                    {food?.title}
                  </Text>
                  <Text
                    className="text-lg bg-orange-600 px-2 py-0.5 rounded-md"
                    style={{ fontFamily: "Robto-Bold" }}
                  >
                    <Text className="text-white">{food?.price}</Text>
                    <Text className="text-white">{""} DH</Text>
                  </Text>
                </View>
                <Text
                  className="mt-2 w-100 whitespace-break-spaces text-gray-300 text-xs text-left"
                  style={{ fontFamily: "Robto-Light" }}
                >
                  {food?.description}
                </Text>
              </View>
            </TouchableOpacity>
          ) : activeCategory == "TOUS" ? (
            <TouchableOpacity
              className="p-4 bg-zinc-800 flex rounded-xl border border-zinc-700 w-72 mr-4"
              activeOpacity={0.7}
              key={food?.id}
            >
              <View className="flex-col justify-center items-center w-100">
                <View className="w-full flex justify-center items-center overflow-hidden rounded-xl mb-3">
                  <Image
                    source={{ uri: food?.image }}
                    style={{ width: "100%", height: 240 }}
                  />
                </View>
                <Text
                  className="text-xl text-yellow-400 w-full text-left"
                  style={{ fontFamily: "Robto-Bold" }}
                >
                  {Array.from({ length: food?.rating }).map((_, index) => (
                    <AntDesignIcon name="star" size={18} key={index} />
                  ))}
                </Text>
                <View className="flex flex-row justify-between items-center w-full mt-1">
                  <Text
                    className="text-lg text-white my-1"
                    style={{ fontFamily: "Robto-Bold" }}
                  >
                    {food?.title}
                  </Text>
                  <Text
                    className="text-lg bg-orange-600 px-2 py-0.5 rounded-md"
                    style={{ fontFamily: "Robto-Bold" }}
                  >
                    <Text className="text-white">{food?.price}</Text>
                    <Text className="text-white">{""} DH</Text>
                  </Text>
                </View>
                <Text
                  className="mt-2 w-100 whitespace-break-spaces text-gray-300 text-xs text-left"
                  style={{ fontFamily: "Robto-Light" }}
                >
                  {food?.description}
                </Text>
              </View>
            </TouchableOpacity>
          ) : null
        )}
      </ScrollView>
    </View>
  );
};

export default Foods;
