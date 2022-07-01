import { ScrollView, Text, View, Image } from "react-native";
import NumberFormat from "react-number-format";
import { Container, Header, Strong, Card, CardTotal } from "./styles";

export function Cards() {
  return (
    <Container>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Card>
          <Header>
            <Text>Entradas</Text>
            {/* <Image source={require("./../../../assets/Entradas")} /> */}
          </Header>
          <Strong>2000</Strong>
        </Card>

        <Card>
          <Header>
            <Text>Saídas</Text>
            {/* <Image source={require("./../../../assets/EntradasSaidas")} /> */}
          </Header>
          <Strong>1000</Strong>
        </Card>

        <CardTotal>
          <Header>
            <Text>Total</Text>
            {/* <Image source={require("./../../../assets/Total")} /> */}
          </Header>
          <Strong>1000</Strong>
        </CardTotal>
      </ScrollView>
    </Container>
  );
}
