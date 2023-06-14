import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, StatusBar, ImageBackground } from "react-native";

// Components
import Header from "./components/Header";
import Categories from "./components/Categories";
import Foods from "./components/Foods";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("TOUS");
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./assets/background.png")}
        style={styles.backgroundImage}>
        <View className="p-4 h-screen w-screen" >
          <Header
            includeIcons={false}
            includeTitleAndDescription={true}
            title={"Choix multiples et illimités"}
            // description={"Explore our latest recipes by filtering food types below, Burgers, Mexican tacos, And tens of sushi types from all around Asia"}
            description={"Explorez nos dernières recettes en filtrant les types d'aliments ci-dessous."}
          />
          <Categories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <Foods
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </View>
      </ImageBackground >
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    marginBottom: 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});