import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text } from "react-native";
import { RootStackParams } from "../../../App";
import { Input, ModalTitle, ModalView } from "../NewTransactionModal/styles";
import { BtnLogin, Container, BtnTitulo } from "./styles";

type Props = NativeStackScreenProps<RootStackParams>;

export function LoginBoard({ navigation }: Props) {
  return (
    <Container>
      <ModalView>
        <ModalTitle>Login</ModalTitle>
        <Input placeholder="Login ou e-mail..." />
        <Input placeholder="Senha" />
        <BtnLogin
          onPress={() => {
            navigation.navigate("transactionsPage");
          }}
        >
          <BtnTitulo>Entrar</BtnTitulo>
        </BtnLogin>
        <Text>Você pode autenticar usando a digital</Text>
      </ModalView>
    </Container>
  );
}
