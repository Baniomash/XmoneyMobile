import React from "react";
import { ScrollView, Text } from "react-native";
import { useTransactions } from "../../hooks/useTransactions";
import {
  Banco,
  Cabeçalho,
  Card,
  Categoria,
  Container,
  Conteudo,
  Data,
  Footer,
  Header,
  Titulo,
  Topo,
  Valor,
} from "./styles";

{/* <Card>
<Conteudo>
{transactions.map(transaction => (
  <Header>
    <Cabeçalho>
      <Titulo>{transaction.title}</Titulo>
      <Valor className={transaction.type}>{transaction.amount}</Valor>
    </Cabeçalho>
    <Banco>{transaction.bank}</Banco>
  </Header>
  <Footer>
    <Categoria>{transaction.category}</Categoria>
    <Data>{transaction.createdAt}</Data>
  </Footer>
  ))}
</Conteudo>
</Card> */}

export function TransactionsTable() {
  return (
    <Container>
      <Topo>
        <Text>Listagem</Text>
        <Text>Quantidade</Text>
      </Topo>
      <ScrollView>
        <Card>
          <Conteudo>
            <Header>
              <Cabeçalho>
                <Titulo>Desenvolvimento de Site</Titulo>
                <Valor>R$15.000</Valor>
              </Cabeçalho>
              <Banco>Itaú</Banco>
            </Header>
            <Footer>
              <Categoria>Salário</Categoria>
              <Data>19/12/2020</Data>
            </Footer>
          </Conteudo>
        </Card>
      </ScrollView >
    </Container >

  );
}
