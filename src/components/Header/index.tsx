import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import { AppStackParams } from "../../../App";
import { ButtonsWrapper, ButtonWrapper, Container, Content, LogoImage, LogoText, LogoWrapper } from "./styles";

type Props = NativeStackScreenProps<AppStackParams>;

interface HeaderProps {
  onOpenNewTransactionModal?: () => void;
  navigation: Props;
}

export function Header({ onOpenNewTransactionModal, navigation }: HeaderProps) {
  
  const [isCharts, setIsCharts] = useState(false);

  useEffect(() => {
  if(navigation.navigation.getState().index == 1){
    setIsCharts(true);
  }
  }, [])

  return (
    <Container>
      <Content>
        <LogoWrapper>
          <LogoImage source={require("./../../../assets/LogoImg.png")} />
          <LogoText>XMoney</LogoText>
        </LogoWrapper>
        {!isCharts ?<ButtonsWrapper>
          <ButtonWrapper>
            <Button
              title="Ver Gráficos"
              color="#6933FF"
              onPress={() => {
                navigation.navigation.navigate("chartsPage");
              }}
            />
          </ButtonWrapper>
          <ButtonWrapper>
            <Button
              title="Nova transação"
              color="#6933FF"
              onPress={onOpenNewTransactionModal}
            />
          </ButtonWrapper>
        </ButtonsWrapper>
        :<ButtonsWrapper>
          <ButtonWrapper>
            <Button
              title="Ver Transações"
              color="#6933FF"
              onPress={() => {
                navigation.navigation.navigate("transactionsPage");
              }}
            />
          </ButtonWrapper>
        </ButtonsWrapper>
        }
      </Content>
    </Container>
  );
}
