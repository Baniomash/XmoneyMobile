import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ChartsPage } from "./src/screens/ChartsPage";
import { LoginPage } from "./src/screens/LoginPage";
import { TransactionsPage } from "./src/screens/TransactionsPage";

export type RootStackParams = {
  loginPage: any;
  transactionsPage: any;
  chartsPage: any;
};

export default function App() {
  const Stack = createNativeStackNavigator<RootStackParams>();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="loginPage"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="loginPage" component={LoginPage} />
        <Stack.Screen name="transactionsPage" component={TransactionsPage} />
        <Stack.Screen name="chartsPage" component={ChartsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
