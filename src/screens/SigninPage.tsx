import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { AuthStackParams, MyContext } from "../../App";

type Props = NativeStackScreenProps<AuthStackParams>;

export function SigninPage(navigation: Props) {
  //   const value = useContext(MyContext)
  return (
    <View>
      <Text style={{ marginTop: 20 }}>Sign in</Text>
      <Button
        title="Cadastrar"
        onPress={() => {
          navigation.navigation.navigate("loginPage");
        }}
      />
    </View>
  );
}
