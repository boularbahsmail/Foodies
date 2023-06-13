import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

// Categories data
import categories from "./data";

// Icons
import IoniconsIcon from "react-native-vector-icons/Ionicons";

const Categories = ({ activeCategory, setActiveCategory }) => {
  // Roboto google font
  const [fontsLoaded] = useFonts({
    "Robto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
  });

  // Checking if the fonts are loaded or not
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="mt-6">
      <ScrollView
        className="w-full"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
        }}
      >
        {categories?.map((category) => (
          <TouchableOpacity
            activeOpacity={0.5}
            className={`h-10 px-5 rounded-full flex flex-row justify-center items-center ${
              activeCategory == category?.slug
                ? "bg-orange-600"
                : "bg-zinc-600 opacity-70"
            }`}
            key={category.id}
            onPress={() => {
              setActiveCategory(category?.slug);
            }}
          >
            {category?.slug == "ALL" && (
              <IoniconsIcon
                name="ios-list"
                color={"#FFFFFF"}
                size={20}
                style={{ marginRight: 3 }}
              />
            )}
            <Text
              className="text-md text-white"
              style={{ fontFamily: "Robto-Bold" }}
            >
              {category?.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
