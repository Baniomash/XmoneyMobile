import React, { useState } from "react";
import { Text, View } from "react-native";
import { useTransactions, Transaction } from "../../hooks/useTransactions";
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
  Valor,
} from "./styles";

export function currencyFormat(num: number) {
  return 'R$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export function TransactionsTable() {
  let { transactions } = useTransactions();
  const { deleteTransaction } = useTransactions();

  async function handleDelete(id: number) {
    console.log(id);
    await deleteTransaction(id);
  }

  let cardsMostrar;
  const [categoria, setCategoria] = useState(undefined);
  const [banco, setBanco] = useState(undefined);
  const [tipo, setTipo] = useState(null);

  let transactionsFiltradas: Transaction[] = [];

  let catFilt = transactions.filter(
    function (obj) {
      if (categoria != undefined && banco == undefined && tipo == null) {
        return obj.category == categoria;
      } //apenas categoria preenchida
      else if (categoria == undefined && banco != undefined && tipo == null) {
        return obj.bank == banco;
      } //apenas banco preenchido
      else if (categoria == undefined && banco == undefined && tipo != null) {
        return obj.type == tipo;
      } //apenas tipo preenchido
      else if (categoria && banco != undefined && tipo == null) {
        return obj.category == categoria && obj.bank == banco;
      } //apenas categoria e banco preenchidos
      else if (categoria != undefined && banco == undefined && tipo != null) {
        return obj.category == categoria && obj.type == tipo;
      } //apenas categoria e tipo preenchidos
      else if (categoria == undefined && banco != undefined && tipo != null) {
        return obj.bank == banco && obj.type == tipo;
      } //apenas banco e tipo preenchidos
      else if (categoria && banco != undefined && tipo != null) {
        return obj.category == categoria && obj.bank == banco && obj.type == tipo;
      } //os 3 campos estão preenchidos
    });

  catFilt.forEach((categ) => { transactionsFiltradas.push(categ); });

  if (transactionsFiltradas.length === 0 && categoria == undefined && banco == undefined && tipo == null) {
    cardsMostrar = transactions;
  } else {
    cardsMostrar = transactionsFiltradas;
  }

  return (
    <Container>
      <Filtros>
        <FiltrosWrapper>
          <Text>Filtro Categoria:</Text>
          <RNPickerSelect
            placeholder={{ label: "Categorias" }}
            style={{ inputAndroid: { backgroundColor: "#e7e9ee" } }}
            onValueChange={(value) => setCategoria(value)}
            value={categoria}
            items={[
              { label: "Moradia", value: "Moradia" },
              { label: "Trabalho", value: "Trabalho" },
              { label: "Diversão", value: "Diversão" },
              { label: "Supermercado", value: "Supermercado" },
              { label: "Saúde", value: "Saúde" },
            ]}
          />
        </FiltrosWrapper>
        <FiltrosWrapper>
          <Text>Filtro Banco:</Text>
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
          <Text>Filtro Tipo:</Text>
          <RNPickerSelect
            placeholder={{ label: "Tipo" }}
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
            <Card key={transaction.id} onLongPress={() => handleDelete(transaction.id)}>
              <Conteudo >
                <Header>
                  <Cabeçalho>
                    <Titulo>{transaction.title}</Titulo>
                    <Valor style={{ color: transaction.type ? "green" : "red" }}>{currencyFormat(transaction.amount)}</Valor>
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
