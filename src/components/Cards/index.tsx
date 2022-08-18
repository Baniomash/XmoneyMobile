import { ScrollView, Text, View, Image } from "react-native";
import { Container, Header, Strong, Card, CardTotal } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export function Cards() {
  const { transactions } = useTransactions();

  // const transactions = [
  //   { id: 1, title: "Conta de Luz", type: true, amount: 100, bank: "Itau", category: "Energia", createdAt: "2020-01-01" },
  //   { id: 2, title: "Conta de Luz", type: false, amount: 100, bank: "Itau", category: "Energia", createdAt: "2020-01-01" },
  //   { id: 3, title: "Conta de Luz", type: true, amount: 100, bank: "Itau", category: "Energia", createdAt: "2020-01-01" },
  //   { id: 4, title: "Conta de Luz", type: false, amount: 100, bank: "Itau", category: "Energia", createdAt: "2020-01-01" },
  // ];

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type == true) {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Card>
          <Header>
            <Text>Entradas</Text>
            <Image source={require("./../../../assets/Entradas.png")} />
          </Header>
          <Strong>R$ {summary.deposits}</Strong>
        </Card>

        <Card>
          <Header>
            <Text>Saídas</Text>
            <Image source={require("./../../../assets/Saidas.png")} />
          </Header>
          <Strong>R$ {summary.withdraws}</Strong>
        </Card>

        <CardTotal>
          <Header>
            <Text>Total</Text>
            <Image source={require("./../../../assets/Total.png")} />
          </Header>
          <Strong>R$ {summary.total}</Strong>
        </CardTotal>
      </ScrollView>
    </Container>
  );
}
