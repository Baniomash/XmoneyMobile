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
  Scroll,
  Titulo,
  Topo,
  Valor,
} from "./styles";
export function TransactionsTable() {

  const { transactions } = useTransactions()

  console.log(transactions)

  // const transactions = [
  //   { id: 1, title: "Conta de Luz", type: true, amount: 100, bank: "Itau", category: "Energia", createdAt: "2020-01-01" },
  //   { id: 2, title: "Conta de Luz", type: false, amount: 100, bank: "Itau", category: "Energia", createdAt: "2020-01-01" },
  //   { id: 3, title: "Conta de Luz", type: true, amount: 100, bank: "Itau", category: "Energia", createdAt: "2020-01-01" },
  //   { id: 4, title: "Conta de Luz", type: false, amount: 100, bank: "Itau", category: "Energia", createdAt: "2020-01-01" },
  // ];
  
  return (
    <Container>
      <Topo>
        <Text>Listagem</Text>
        <Text>Quantidade: </Text>
      </Topo>
      {transactions &&
        <Scroll >
          {transactions.map(transaction => (
            <Card key={transaction.id}>
              <Conteudo>
                <Header>
                  <Cabeçalho>
                    <Titulo>{transaction.title}</Titulo>
                    <Valor style={{ color: transaction.type ? "green" : "red" }}>R$ {transaction.amount}</Valor>
                  </Cabeçalho>
                  <Banco>{transaction.bank}</Banco>
                </Header>
                <Footer>
                  <Categoria>{transaction.category}</Categoria>
                  <Data>{transaction.createdAt}</Data>
                </Footer>
              </Conteudo>
            </Card>))}
        </Scroll >}
    </Container >

  );
}
