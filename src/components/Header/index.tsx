import React, { useState } from "react";
import { Button, Text } from "react-native";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        {/* <Image source={require("./../../../assets/Logo")} /> */}
        <Text>XMoney</Text>
        <Button
          title="Nova Transação"
          color="#6933FF"
          onPress={onOpenNewTransactionModal}
        />
      </Content>
    </Container>
  );
}
