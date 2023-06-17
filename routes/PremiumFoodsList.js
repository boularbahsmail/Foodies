import React, { useState } from "react";
import { ImageBackground, ScrollView, Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";

// Icons
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

// All recipes
import recipes from "../components/PremiumRecipes/data";

const PremiumFoodsList = ({ navigation }) => {

    const [currentRecipy, setCurrentRecipy] = useState();
    const [showDetails, setShowDetails] = useState(false);

    // Roboto google font
    const [fontsLoaded] = useFonts({
        "Robto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
        "Robto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
        "Robto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
        "Robto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    });

    // Checking if the fonts are loaded or not
    if (!fontsLoaded) {
        return null;
    }

    return (
        <ImageBackground
            source={require("../assets/background.png")}
            style={styles.backgroundImage}>
            <View className="p-4">
                <TouchableOpacity
                    activeOpacity={0.7}
                    className="border border-zinc-700 rounded-full w-12 h-12 flex justify-center items-center"
                    onPress={() => {
                        navigation.navigate("Home");
                    }}
                >
                    <MaterialIconsIcon
                        name="arrow-back"
                        color={"#FFFFFF"}
                        size={20}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView className="p-4 mb-2 h-screen w-screen -mt-0"
                showsVerticalScrollIndicator={false}>
                <View>
                    <Text
                        className="text-white text-lg"
                        style={{ fontFamily: "Robto-Bold" }}
                    >
                        Recettes exclusives
                    </Text>

                    <View className="mt-4 flex flex-col justify-center items-center">
                        {recipes?.map((recepy) => (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                className="w-full p-3 bg-zinc-800 rounded-xl border border-zinc-700 flex flex-col justify-start items-center mb-4"
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

                                        <View className={`flex justify-center items-center ${showDetails && recepy?.id == currentRecipy ? "-rotate-90" : "rotate-90"}`}>
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
                        ))}
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}

export default PremiumFoodsList;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
});