import React from "react";
import { Text, View } from "react-native";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <View>
        <Text>Listagem</Text>
        <Text>Quantidade</Text>
      </View>
    </Container>
  );
}
