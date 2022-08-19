import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { Text, View } from "react-native";
import { AuthStackParams, LoginContext } from "../../App";
import { SignupBoard } from "../components/SignupBoard";

type Props = NativeStackScreenProps<AuthStackParams>;

export function SignupPage(navigation: Props) {
  return (
    <View>
      <SignupBoard navigation={navigation} />
    </View>
  );
}
