import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text } from "react-native";
import { AuthStackParams } from "../../../App";
import { Input, ModalTitle, ModalView } from "../NewTransactionModal/styles";
import { BtnLogin, Container, BtnTitulo } from "./styles";

type Props = NativeStackScreenProps<AuthStackParams>;

interface LoginBoardProps {
  onLogin: () => void;
  navigation: Props;
}

export function LoginBoard({ onLogin, navigation }: LoginBoardProps) {
  return (
    <Container>
      <ModalView>
        <ModalTitle>Login</ModalTitle>
        <Input placeholder="Login ou e-mail..." />
        <Input placeholder="Senha" />
        <Button title="Cadastrar" onPress={() =>{navigation.navigation.navigate("signinPage")}} />
        <BtnLogin onPress={onLogin}>
          <BtnTitulo>Entrar</BtnTitulo>
        </BtnLogin>
        <Text>Você pode autenticar usando a digital</Text>
      </ModalView>
    </Container>
  );
}
