import React from "react";
import { Text, View } from "react-native";
import { useTransactions } from "../../hooks/useTransactions";
import {
  Banco,
  Cabeçalho,
  Card,
  Categoria,
  Container,
  Data,
  Footer,
  Header,
  Titulo,
  Valor,
} from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <View>
        <Text>Listagem</Text>
        <Text>Quantidade</Text>
      </View>
      <Card>
        <Header>
          <Cabeçalho>
            <Titulo>Des. Site</Titulo>
            <Valor>R$15.000</Valor>
          </Cabeçalho>
          <Banco>Itaú</Banco>
        </Header>
        <Footer>
          <Categoria>Salário</Categoria>
          <Data>19/12/2020</Data>
        </Footer>
      </Card>
    </Container>
  );
}
