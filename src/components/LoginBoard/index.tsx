import React, { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as LocalAuthentication from 'expo-local-authentication'
import { AuthStackParams } from "../../../App";
import { useUsuarios, Usuarios } from "../../hooks/auth";
import { Input, ModalTitle, ModalView } from "../NewTransactionModal/styles";
import {
  BtnLogin,
  Container,
  BtnLoginTitulo,
  BtnCadastrar,
  BtnCadastrarTitulo,
  BiometricView,
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

  function isAuth(user: Usuarios) {
    return user.password === senha && user.login === login;
  };

  function handleAutenticar() {
    if (login == "" || senha == "") {
      Alert.alert("Preencha todos os campos!!!")
    } else {
      if (usuario.find(isAuth) == undefined) {
        Alert.alert("Login ou Senha incorreto(a)/s!!!")
      } else {
        onLogin();
      }
    }
  };

  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const handleBiometricAuth = async () => {
    const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
    const biometricAuth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Toque no sensor de impressão digital',
      disableDeviceFallback: true,
      cancelLabel: 'Cancelar',
    });
    if (!savedBiometrics) {
      return Alert.alert(
        'Nenhuma digital foi encontrada cadastrada no seu aparelho.',
        'Por favor, cadastre uma digital no seu aparelho para utilizar essa funcionalidade.',
      )
    } else {
      if (biometricAuth.success) {
        onLogin();
      } else {
        Alert.alert('Autenticação falhou');
      }
    };
  }

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
        {isBiometricSupported ?
          <BiometricView>
            <Text>Você também pode logar com sua digital!</Text>
            <BtnCadastrar onPress={handleBiometricAuth}>
              <BtnCadastrarTitulo>Usar Digital</BtnCadastrarTitulo>
            </BtnCadastrar>
          </BiometricView>
          : <View></View>}
      </ModalView>
    </Container>
  );
}

