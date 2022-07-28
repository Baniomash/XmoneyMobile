import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { RootStackParams } from "../../App";
import { LoginBoard } from "../components/LoginBoard";

type Props = NativeStackScreenProps<RootStackParams>;

export function LoginPage({ navigation }: Props) {
  return (
    <View>
      <LoginBoard
        navigation={navigation}
        route={{ key: "", name: "", path: undefined }}
      />
    </View>
  );
}
