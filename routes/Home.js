import React, { useState } from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";

// Components
import Header from '../components/Header';
import Categories from '../components/Categories';
import Foods from '../components/Foods';
import PremiumRecipes from '../components/PremiumRecipes';

const Home = ({ navigation }) => {
    const [activeCategory, setActiveCategory] = useState("TOUS");
    return (
        <ImageBackground
            source={require("../assets/background.png")}
            style={styles.backgroundImage}>
            <ScrollView className="p-4 h-screen w-screen pr-0"
                showsVerticalScrollIndicator={false}>
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
                <PremiumRecipes navigation={navigation} />
            </ScrollView>
        </ImageBackground >
    )
}

export default Home;

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
});