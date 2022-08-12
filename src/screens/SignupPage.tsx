import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { Text, View } from "react-native";
import { AuthStackParams, MyContext } from "../../App";
import { SignupBoard } from "../components/SignupBoard";

type Props = NativeStackScreenProps<AuthStackParams>;

export function SignupPage(navigation: Props) {
  //   const value = useContext(MyContext)
  return (
    <View>
      <SignupBoard navigation={navigation} />
    </View>
  );
}
