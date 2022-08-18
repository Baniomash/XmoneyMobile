import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { TransactionsProvider } from "./src/hooks/useTransactions";
import { ChartsPage } from "./src/screens/ChartsPage";
import { LoginPage } from "./src/screens/LoginPage";
import { SignupPage } from "./src/screens/SignupPage";
import { TransactionsPage } from "./src/screens/TransactionsPage";

export const MyContext = React.createContext({ onLogin: () => { } });

export type AuthStackParams = {
  loginPage: any;
  signupPage: any;
};

export type AppStackParams = {
  transactionsPage: any;
  chartsPage: any;
};

export default function App() {
  const myContext = { onLogin: handleAuthent };

  const AuthStack = createNativeStackNavigator<AuthStackParams>();
  const AppStack = createNativeStackNavigator<AppStackParams>();

  const [isAuthent, setIsAuthent] = useState(false);

  function handleAuthent() {
    setIsAuthent(true);
  }

  if (isAuthent) {
    return (
      <TransactionsProvider>
        <NavigationContainer>
          <AppStack.Navigator
            initialRouteName="transactionsPage"
            screenOptions={{ headerShown: false }}
          >
            <AppStack.Screen
              name="transactionsPage"
              component={TransactionsPage}
            />
            <AppStack.Screen name="chartsPage" component={ChartsPage} />
          </AppStack.Navigator>
        </NavigationContainer>
      </TransactionsProvider>
    );
  }
  return (
      <MyContext.Provider value={myContext}>
        <NavigationContainer>
          <AuthStack.Navigator
            initialRouteName="loginPage"
            screenOptions={{ headerShown: false }}
          >
            <AuthStack.Screen name="loginPage" component={LoginPage} />
            <AuthStack.Screen name="signupPage" component={SignupPage} />
          </AuthStack.Navigator>
        </NavigationContainer>
      </MyContext.Provider>
  );
}
