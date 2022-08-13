import React, { useState } from "react";
import { Text } from "react-native";
import { useTransactions } from "../../hooks/useTransactions";
import RNPickerSelect from "react-native-picker-select";
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
  // const { transactions } = useTransactions()

  const [categoria, setCategoria] = useState(undefined);
  const [banco, setBanco] = useState(undefined);
  const [tipo, setTipo] = useState(undefined);

  const transactions = [
    { id: 1, title: "Conta de Luz", type: true, amount: 100, bank: "Itau", category: "Moradia", createdAt: "2020-01-01" },
    { id: 2, title: "Conta de Luz", type: false, amount: 100, bank: "Itau", category: "Trabalho", createdAt: "2020-01-01" },
    { id: 3, title: "Conta de Luz", type: true, amount: 100, bank: "Itau", category: "Diversão", createdAt: "2020-01-01" },
    { id: 4, title: "Conta de Luz", type: false, amount: 100, bank: "Itau", category: "Supermecado", createdAt: "2020-01-01" },
    { id: 5, title: "Conta de Luz", type: true, amount: 100, bank: "Itau", category: "Saúde", createdAt: "2020-01-01" },
  ];

  let catFilt = transactions.filter(function (obj) { if (categoria != undefined) return obj.category == categoria; else return obj; });
  let bankFilt = transactions.filter(function (obj) { if (categoria != undefined) return obj.bank == banco; else return obj; });
  let typeFilt = transactions.filter(function (obj) { if (categoria != undefined) return obj.type == tipo; else return obj; });

  // const transactionsFiltradas = [];

  // transactionsFiltradas.push(catFilt, bankFilt, typeFilt);

  return (
    <Container>
      <Topo>
        <Text>Listagem</Text>
        <Text>Quantidade:</Text>
      </Topo>
      <RNPickerSelect
        placeholder={{ label: "Selecione a categoria" }}
        style={{ inputAndroid: { backgroundColor: "#e7e9ee" } }}
        onValueChange={(value) => setCategoria(value)}
        value={categoria}
        items={[
          { label: "Moradia", value: "Moradia" },
          { label: "Trabalho", value: "Trabalho" },
          { label: "Diversão", value: "Diversão" },
          { label: "Supermecado", value: "Supermecado" },
          { label: "Saúde", value: "Saúde" },
        ]}
      />
      {transactions &&
        <Scroll >
          {catFilt.map(transaction => (
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
