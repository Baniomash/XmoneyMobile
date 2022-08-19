import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Alert, Button, Text } from "react-native";
import { AuthStackParams } from "../../../App";
import { useUsuarios, Usuarios } from "../../hooks/auth";
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
  let { usuario } = useUsuarios();

  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  function isAuth(user: Usuarios){
    return user.password === senha && user.login === login;
  }

  function handleAutenticar(){
    if (login == "" || senha == "") {
      Alert.alert("Preencha todos os campos!!!")
    } else {
      if(usuario.find(isAuth) == undefined){
        Alert.alert( "Login ou Senha incorreto(a)/s!!!")
      }else{
        onLogin();
      }
    }}

  return (
    <Container>
      <ModalView>
        <ModalTitle>Entrar</ModalTitle>
        <Input
          placeholder="Login ou e-mail..."
          placeholderTextColor="#5429cc"
          keyboardType="email-address"
          autoCapitalize="none"
          value={login}
          onChangeText={setLogin}
        />
        <Input
          placeholder="Senha"
          placeholderTextColor="#5429cc"
          secureTextEntry={true}
          autoCapitalize="none"
          value={senha}
          onChangeText={setSenha}
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
        <BtnLogin onPress={handleAutenticar}>
          <BtnLoginTitulo>Entrar</BtnLoginTitulo>
        </BtnLogin>
        <Text>Você pode autenticar usando a digital</Text>
      </ModalView>
    </Container>
  );
}
