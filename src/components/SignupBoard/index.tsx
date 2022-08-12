import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button } from "react-native";
import { AuthStackParams } from "../../../App";
import { Input, ModalTitle, ModalView } from "../NewTransactionModal/styles";
import {
  BtnCadastrar,
  Container,
  BtnLoginTitulo,
  BtnLogin,
  BtnCadastrarTitulo,
} from "./styles";

type Props = NativeStackScreenProps<AuthStackParams>;

interface SignupBoardProps {
  navigation: Props;
}

export function SignupBoard({ navigation }: SignupBoardProps) {
  return (
    <Container>
      <ModalView>
        <ModalTitle>Cadastrar</ModalTitle>
        <Input
          placeholder="Login"
          placeholderTextColor="#5429cc"
          autoCapitalize="none"
        />
        <Input
          placeholder="e-mail..."
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
        <BtnLogin
          onPress={() => {
            navigation.navigation.navigate("loginPage");
          }}
        >
          <BtnLoginTitulo>Já possui uma conta? Entrar!</BtnLoginTitulo>
        </BtnLogin>
        <BtnCadastrar
          onPress={() => {
            navigation.navigation.navigate("loginPage");
          }}
        >
          <BtnCadastrarTitulo>Cadastrar</BtnCadastrarTitulo>
        </BtnCadastrar>
      </ModalView>
    </Container>
  );
}
