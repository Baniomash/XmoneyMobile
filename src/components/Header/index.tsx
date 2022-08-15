import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Button } from "react-native";
import { AppStackParams } from "../../../App";
import { ButtonWrapper, Container, Content, LogoImage, LogoText, LogoWrapper } from "./styles";

type Props = NativeStackScreenProps<AppStackParams>;

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
  navigation: Props;
}

export function Header({ onOpenNewTransactionModal, navigation }: HeaderProps) {
  return (
    <Container>
      <Content>
        <LogoWrapper>
          <LogoImage source={require("./../../../assets/LogoImg.png")} />
          <LogoText>XMoney</LogoText>
        </LogoWrapper>
        <ButtonWrapper>
          <Button
            title="Ver Gráficos"
            color="#6933FF"
            onPress={() => {
              navigation.navigation.navigate("chartsPage");
            }}
          />
          <Button
            title="Nova transação"
            color="#6933FF"
            onPress={onOpenNewTransactionModal}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  );
}
