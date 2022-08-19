import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Alert, Button } from "react-native";
import { AuthStackParams } from "../../../App";
import { useUsuarios, Usuarios } from "../../hooks/auth";
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
  let { createUser, usuario } = useUsuarios();

  const [login, setLogin] = useState("");
  const [password, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");

  function userExists(user: Usuarios){
    return user.login === login;
  }

  async function handleCadastrar(){
    if (login == "" || password == "" || confirmaSenha == "") {
      Alert.alert("Preencha todos os campos!!!")
    } else if(password != confirmaSenha){
      Alert.alert("Campos de Senhas não coincidem!!")
    } else {
      if(usuario.find(userExists) == undefined){
        await createUser({login, password});
        navigation.navigation.navigate("loginPage");
      }else{
        Alert.alert( "Usuario já existe");
      }
    }}
  return (
    <Container>
      <ModalView>
        <ModalTitle>Cadastrar</ModalTitle>
        <Input
          placeholder="Login"
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
          value={password}
          onChangeText={setSenha}
        />
        <Input
          placeholder="Confirmar Senha"
          placeholderTextColor="#5429cc"
          secureTextEntry={true}
          autoCapitalize="none"
          value={confirmaSenha}
          onChangeText={setConfirmaSenha}
        />
        <BtnLogin
          onPress={() => {
            navigation.navigation.navigate("loginPage");
          }} 
        >
          <BtnLoginTitulo>Já possui uma conta? Entrar!</BtnLoginTitulo>
        </BtnLogin>
        <BtnCadastrar
          onPress={handleCadastrar}
        >
          <BtnCadastrarTitulo>Cadastrar</BtnCadastrarTitulo>
        </BtnCadastrar>
      </ModalView>
    </Container>
  );
}
