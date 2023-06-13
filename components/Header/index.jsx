import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useFonts } from "expo-font";

// Icons
import FeatherIcon from "react-native-vector-icons/Feather";
import AntDesignIcon from "react-native-vector-icons/AntDesign";

const Header = ({ includeTitleAndDescription, title, description }) => {
  // Roboto google font
  const [fontsLoaded] = useFonts({
    "Robto-Black": require("../../assets/fonts/Roboto-Black.ttf"),
    "Robto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
    "Robto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "Robto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Robto-Light": require("../../assets/fonts/Roboto-Light.ttf"),
  });

  // Checking if the fonts are loaded or not
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <View className="flex flex-row justify-between items-center w-full pt-2">
        <TouchableOpacity
          activeOpacity={0.7}
          className="border border-gray-500 rounded-full w-12 h-12 flex justify-center items-center"
        >
          <FeatherIcon name="menu" color={"#FFFFFF"} size={20} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          className="border border-gray-500 rounded-full w-12 h-12 flex justify-center items-center"
        >
          <AntDesignIcon name="search1" color={"#FFFFFF"} size={20} />
        </TouchableOpacity>
      </View>

      {includeTitleAndDescription && (
        <View className="mt-8">
          <Text
            className="text-4xl text-white"
            style={{ fontFamily: "Robto-Black" }}
          >
            {title}
          </Text>
          <Text
            className="text-sm text-gray-400 mt-1"
            style={{ fontFamily: "Robto-Light" }}
          >
            {description}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Header;
