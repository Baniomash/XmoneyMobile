import React, { useState } from "react";
import { Text, View } from "react-native";
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
  Filtros,
  FiltrosWrapper,
  Footer,
  Header,
  Scroll,
  Titulo,
  Topo,
  Valor,
} from "./styles";
export function TransactionsTable() {
  // const { transactions } = useTransactions()
  const transactions = [
    { id: 1, title: "Conta de Luz", type: true, amount: 100, bank: "Itaú", category: "Moradia", createdAt: "2020-01-01" },
    { id: 2, title: "Conta de Luz", type: false, amount: 100, bank: "NUBank", category: "Trabalho", createdAt: "2020-01-01" },
    { id: 3, title: "Conta de Luz", type: true, amount: 100, bank: "Santander", category: "Diversão", createdAt: "2020-01-01" },
    { id: 4, title: "Conta de Luz", type: false, amount: 100, bank: "Caixa", category: "Supermecado", createdAt: "2020-01-01" },
    { id: 5, title: "Conta de Luz", type: true, amount: 100, bank: "À vista", category: "Saúde", createdAt: "2020-01-01" },
  ];

  let cardsMostrar;
  const [categoria, setCategoria] = useState("");
  const [banco, setBanco] = useState("");
  const [tipo, setTipo] = useState(null);

  let transactionsFiltradas: { id: number; title: string; type: boolean; amount: number; bank: string; category: string; createdAt: string; }[] = [];

  let catFilt = transactions.filter(
    function (obj) {
      return obj.category == categoria;
    });
  let bankFilt = transactions.filter(
    function (obj) {
      return obj.bank == banco;
    });
  let typeFilt = transactions.filter(
    function (obj) {
      return obj.type == tipo;
    });

  catFilt.forEach((categ) => { transactionsFiltradas.push(categ); });
  bankFilt.forEach((ban) => { transactionsFiltradas.push(ban); });
  typeFilt.forEach((typ) => { transactionsFiltradas.push(typ); });

  if (transactionsFiltradas.length === 0) {
    cardsMostrar = transactions;
  } else {
    cardsMostrar = transactionsFiltradas;
  }

  return (
    <Container>
      <Topo>
        <Text>Listagem</Text>
        <Text>Quantidade: {cardsMostrar.length}</Text>
      </Topo>
      <Filtros>
        <FiltrosWrapper>
          <RNPickerSelect
            placeholder={{ label: "Categorias" }}
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
        </FiltrosWrapper>
        <FiltrosWrapper>
          <RNPickerSelect
            placeholder={{ label: "Bancos" }}
            style={{
              inputAndroid: {
                backgroundColor: "#e7e9ee",
              },
            }}
            onValueChange={(value) => setBanco(value)}
            value={banco}
            items={[
              { label: "À vista", value: "À vista" },
              { label: "Itaú", value: "Itaú" },
              { label: "NUBank", value: "NUBank" },
              { label: "Santander", value: "Santander" },
              { label: "Caixa", value: "Caixa" },
            ]}
          />
        </FiltrosWrapper>
        <FiltrosWrapper>
          <RNPickerSelect
            placeholder={{ label: "Ambos" }}
            style={{
              inputAndroid: {
                backgroundColor: "#e7e9ee",
              },
            }}
            onValueChange={(value) => setTipo(value)}
            value={tipo}
            items={[
              { label: "Entrada", value: true },
              { label: "Saida", value: false },
            ]}
          />
        </FiltrosWrapper>
      </Filtros>
      {transactions &&
        <Scroll >
          {cardsMostrar.map(transaction => (
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
