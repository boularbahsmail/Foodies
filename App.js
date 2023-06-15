import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

// Routes
import Home from "./routes/Home";
import PremiumFoodsList from "./routes/PremiumFoodsList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animationTypeForReplace: "push",
            animation: "fade_from_bottom",
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PremiumFoods" component={PremiumFoodsList} />
        </Stack.Navigator>
      </NavigationContainer>
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