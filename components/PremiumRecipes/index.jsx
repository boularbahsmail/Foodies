import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";

// Recepies
import recipes from "./data";

// Icons
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

const PremiumRecipes = ({ navigation }) => {
  const [currentRecipy, setCurrentRecipy] = useState();
  const [showDetails, setShowDetails] = useState(false);

  // Roboto google font
  const [fontsLoaded] = useFonts({
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
    <View className="mt-7 pr-4">
      <View className="flex flex-row justify-between items-center mb-2">
        <Text
          className="text-white text-lg"
          style={{ fontFamily: "Robto-Bold" }}
        >
          Recettes exclusives
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate("PremiumFoods");
          }}
        >
          <Text
            className="text-gray-500 text-sm underline"
            style={{ fontFamily: "Robto-Medium" }}
          >
            Découvrir plus
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        className="w-full"
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
          paddingTop: 5,
          paddingBottom: 35,
        }}
      >
        {recipes?.map(
          (recepy) =>
            recepy?.id <= 3 && (
              <TouchableOpacity
                activeOpacity={0.7}
                className="w-full p-3 bg-zinc-800 rounded-xl border border-zinc-700 flex flex-col justify-start items-center mb-0"
                key={recepy?.id}
                onPress={() => {
                  setCurrentRecipy(recepy?.id);
                  setShowDetails(!showDetails);
                }}
              >
                <View className="flex flex-row justify-start items-center">
                  <View className="flex justify-center items-center overflow-hidden mr-2 w-16 rounded-lg">
                    <Image
                      source={{ uri: recepy?.image }}
                      style={{ width: 70, height: 60 }}
                    />
                  </View>

                  <View className="w-64 flex flex-row justify-between items-center pr-2">
                    <View className="pl-2 flex flex-col justify-start items-start">
                      <View className="w-full flex flex-row justify-start items-center">
                        <MaterialCommunityIconsIcon
                          name="crown"
                          color={"#ea580c"}
                          size={14}
                        />
                        <Text
                          className="text-sm text-orange-600 ml-1 text-left"
                          style={{ fontFamily: "Robto-Regular" }}
                        >
                          Premium
                        </Text>
                      </View>
                      <View>
                        <Text
                          className="text-md text-white text-left"
                          style={{ fontFamily: "Robto-Bold" }}
                        >
                          {recepy?.title}
                        </Text>
                        <Text
                          className="text-gray-400 text-left mt-1 w-52"
                          style={{ fontFamily: "Robto-Light", fontSize: 11 }}
                        >
                          {recepy?.description}
                        </Text>
                      </View>
                    </View>

                    <View
                      className={`flex justify-center items-center ${
                        showDetails && recepy?.id == currentRecipy
                          ? "-rotate-90"
                          : "rotate-90"
                      }`}
                    >
                      <MaterialIconsIcon
                        name="arrow-forward-ios"
                        color={"#FFFFFF"}
                        size={18}
                      />
                    </View>
                  </View>
                </View>

                {showDetails && recepy?.id == currentRecipy && (
                  <View className="mt-3 w-full bg-zinc-700 rounded-lg p-4 border border-zinc-600 flex flex-row justify-start items-center">
                    <Text
                      className="text-gray-400 text-left"
                      style={{ fontFamily: "Robto-Bold", fontSize: 11 }}
                    >
                      {recepy?.additionalText}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            )
        )}
      </ScrollView>
    </View>
  );
};

export default PremiumRecipes;
