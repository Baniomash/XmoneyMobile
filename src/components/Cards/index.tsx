import { ScrollView, Text, View, Image } from "react-native";
import { Container, Header, Strong, Card, CardTotal } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";

export function Cards() {
  // const { transactions } = useTransactions();
  // const summary = transactions.reduce(
  //   (acc, transaction) => {
  //     if (transaction.type == "deposit") {
  //       acc.deposits += transaction.amount;
  //       acc.total += transaction.amount;
  //     } else {
  //       acc.withdraws += transaction.amount;
  //       acc.total -= transaction.amount;
  //     }

  //     return acc;
  //   },
  //   {
  //     deposits: 0,
  //     withdraws: 0,
  //     total: 0,
  //   }
  // );

  return (
    <Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Card>
          <Header>
            <Text>Entradas</Text>
            <Image source={require("./../../../assets/Entradas.png")} />
          </Header>
          <Strong>R$2000,00</Strong>
        </Card>

        <Card>
          <Header>
            <Text>Saídas</Text>
            <Image source={require("./../../../assets/Saidas.png")} />
          </Header>
          <Strong>R$1000,00</Strong>
        </Card>

        <CardTotal>
          <Header>
            <Text>Total</Text>
            <Image source={require("./../../../assets/Total.png")} />
          </Header>
          <Strong>R$1000,00</Strong>
        </CardTotal>
      </ScrollView>
    </Container>
  );
}
