import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { View } from "react-native";
import { AuthStackParams, LoginContext } from "../../App";
import { LoginBoard } from "../components/LoginBoard";

type Props = NativeStackScreenProps<AuthStackParams>;

export function LoginPage(navigation: Props) {
  const value = useContext(LoginContext)
  return (
    <View>
      <LoginBoard onLogin={value.onLogin} navigation={navigation} />
    </View>
  );
}
