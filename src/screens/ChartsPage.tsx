import React, { PureComponent, useState } from 'react'
import { ScrollView, View } from 'react-native';
import { PieChart, StackedBarChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

export class ChartsPage extends PureComponent {
  render() {
    const transactions = [
      { id: 1, title: "Conta de Luz", type: true, amount: 100, bank: "Itaú", category: "Moradia", createdAt: "2020-01-01" },
      { id: 2, title: "Teste 2", type: false, amount: 100, bank: "NUBank", category: "Trabalho", createdAt: "2020-01-01" },
      { id: 3, title: "Conta de Luz", type: true, amount: 100, bank: "Santander", category: "Diversão", createdAt: "2020-01-01" },
      { id: 4, title: "Conta de Luz", type: false, amount: 100, bank: "Caixa", category: "Supermecado", createdAt: "2020-01-01" },
      { id: 5, title: "Conta de Luz", type: true, amount: 100, bank: "À vista", category: "Saúde", createdAt: "2020-01-01" },
    ];

    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

    let data: number[] = [];
    transactions.forEach(item => {
      data.push(item.amount);
    });
    const pieData = data
      .filter((value) => value > 0)
      .map((value, index) => ({
        value,
        svg: {
          fill: randomColor(),
          onPress: () => console.log(`${transactions[index].title}`),
        },
        key: `${transactions[index].id}`,
      }));
    const Label = ({ slices }) => {
      return slices.map((slice: { pieCentroid: any; data: any; }, index: any) => {
        const { pieCentroid, data } = slice;
        return (
          <>
            <Text
              key={`label - ${index}`}
              x={pieCentroid[0]}
              y={pieCentroid[1]}
              fill={'black'}
              textAnchor={'middle'}
              alignmentBaseline={'text-bottom'}
              fontSize={15}
            >
              {transactions[index].title}

            </Text>
            <Text
              key={`value - ${index}`}
              x={pieCentroid[0]}
              y={pieCentroid[1]}
              fill={'black'}
              textAnchor={'end'}
              alignmentBaseline={'text-top'}
              fontSize={15}>
              R$ {data.value}
            </Text>
          </>)
      });
    }

    let totalBanco: number[] = [];
    const summary = transactions.reduce(
      (acc, transaction) => {
        if (transaction.bank == "Itaú") {
          acc.itau += transaction.amount;
        } else if (transaction.bank == "NUBank") {
          acc.nubank += transaction.amount;
        } else if (transaction.bank == "Santander") {
          acc.santander += transaction.amount;
        } else if (transaction.bank == "Caixa") {
          acc.caixa += transaction.amount;
        } else if (transaction.bank == "À vista") {
          acc.avista += transaction.amount;
        }
        return acc;
      },
      {
        itau: 0,
        nubank: 0,
        santander: 0,
        caixa: 0,
        avista: 0
      }
    );
    totalBanco.push(summary.itau, summary.nubank, summary.santander, summary.caixa, summary.avista);

    const bankData = totalBanco
      .filter((value) => value > 0)
      .map((value, index) => ({
        value,
        svg: {
          fill: randomColor(),
          onPress: () => console.log(`${transactions[index].bank}`),
        },
        key: `${transactions[index].id}`,
      }));

    const Label2 = ({ slices }) => {
      return slices.map((slice: { pieCentroid: any; data: any; }, index: any) => {
        const { pieCentroid, data } = slice;
        return (
          <>
            <Text
              key={`label - ${index}`}
              x={pieCentroid[0]}
              y={pieCentroid[1]}
              fill={'black'}
              textAnchor={'middle'}
              alignmentBaseline={'text-bottom'}
              fontSize={15}
            >
              {transactions[index].bank}

            </Text>
            <Text
              key={`value - ${index}`}
              x={pieCentroid[0]}
              y={pieCentroid[1]}
              fill={'black'}
              textAnchor={'end'}
              alignmentBaseline={'text-top'}
              fontSize={15}>
              R$ {data.value}
            </Text>
          </>)
      });
    }
    return (
      <View>
        <ScrollView>
          <PieChart style={{ height: 350 }} data={pieData} >
            <Label slices={undefined} />
          </PieChart>
          <PieChart style={{ height: 350 }} data={bankData} >
            <Label2 slices={undefined} />
          </PieChart>
        </ScrollView>
      </ View>

    )
  }
}