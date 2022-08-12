import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button, Text } from "react-native";
import { AuthStackParams } from "../../../App";
import { Input, ModalTitle, ModalView } from "../NewTransactionModal/styles";
import {
  BtnLogin,
  Container,
  BtnLoginTitulo,
  BtnCadastrar,
  BtnCadastrarTitulo,
} from "./styles";

type Props = NativeStackScreenProps<AuthStackParams>;

interface LoginBoardProps {
  onLogin: () => void;
  navigation: Props;
}

export function LoginBoard({ onLogin, navigation }: LoginBoardProps) {
  return (
    <Container>
      <ModalView>
        <ModalTitle>Entrar</ModalTitle>
        <Input
          placeholder="Login ou e-mail..."
          placeholderTextColor="#5429cc"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          placeholder="Senha"
          placeholderTextColor="#5429cc"
          secureTextEntry={true}
          autoCapitalize="none"
        />
        <BtnCadastrar
          hitSlop={0}
          onPress={() => {
            navigation.navigation.navigate("signupPage");
          }}
        >
          <BtnCadastrarTitulo>
            Não possui conta? Cadastre-se!
          </BtnCadastrarTitulo>
        </BtnCadastrar>
        <BtnLogin onPress={onLogin}>
          <BtnLoginTitulo>Entrar</BtnLoginTitulo>
        </BtnLogin>
        <Text>Você pode autenticar usando a digital</Text>
      </ModalView>
    </Container>
  );
}
