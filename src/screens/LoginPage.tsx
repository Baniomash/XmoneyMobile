import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, View } from "react-native";
import { RootStackParams } from "../../App";
import { LoginBoard } from "../components/LoginBoard";

type Props = NativeStackScreenProps<RootStackParams>;

export function LoginPage({ navigation }: Props) {
  return (
    <View style={{ alignItems: "center", margin: 50 }}>
      <LoginBoard />
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate("transactionsPage");
        }}
      />
    </View>
  );
}
