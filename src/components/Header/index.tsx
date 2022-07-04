import React, { useState } from "react";
import { Button, Text, Image, View } from "react-native";
import { Container, Content, LogoImage, LogoText, LogoWrapper } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}
export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <LogoWrapper>
          <LogoImage source={require("./../../../assets/LogoImg.png")} />
          <LogoText>XMoney</LogoText>
        </LogoWrapper>
        <Button
          title="Nova transação"
          color="#6933FF"
          onPress={onOpenNewTransactionModal}
        />
      </Content>
    </Container>
  );
}
