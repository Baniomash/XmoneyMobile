import React, { PureComponent } from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

export class ChartCategory extends PureComponent {
    render() {
        const transactions = [
            { id: 1, title: "Conta de Luz", type: true, amount: 100, bank: "Itaú", category: "Moradia", createdAt: "2020-01-01" },
            { id: 2, title: "Teste 2", type: false, amount: 100, bank: "NUBank", category: "Trabalho", createdAt: "2020-01-01" },
            { id: 3, title: "Conta de Luz", type: true, amount: 100, bank: "Santander", category: "Diversão", createdAt: "2020-01-01" },
            { id: 4, title: "Conta de Luz", type: false, amount: 100, bank: "Caixa", category: "Supermecado", createdAt: "2020-01-01" },
            { id: 5, title: "Conta de Luz", type: true, amount: 100, bank: "À vista", category: "Saúde", createdAt: "2020-01-01" },
        ];

        let totalCategoria: number[] = [];
        const summary = transactions.reduce(
            (acc, transaction) => {
                if (transaction.category == "Moradia") {
                    acc.moradia += transaction.amount;
                } else if (transaction.category == "Trabalho") {
                    acc.trabalho += transaction.amount;
                } else if (transaction.category == "Diversão") {
                    acc.diversao += transaction.amount;
                } else if (transaction.category == "Supermecado") {
                    acc.supermecado += transaction.amount;
                } else if (transaction.category == "Saúde") {
                    acc.saude += transaction.amount;
                }
                return acc;
            },
            {
                moradia: 0,
                trabalho: 0,
                diversao: 0,
                supermecado: 0,
                saude: 0
            }
        );
        totalCategoria.push(summary.moradia, summary.trabalho, summary.diversao, summary.supermecado, summary.saude);

        const bankData = totalCategoria
            .filter((value) => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: ['#8800cc', '#aa00ff', '#cc66ff', '#eeccff', '#ecdaf5'][index],
                    onPress: () => console.log(`${transactions[index].category}`),
                },
                key: `${totalCategoria[index]}`,
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
                            {transactions[index].category}

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
            <PieChart style={{ height: 350 }} data={bankData} >
                <Label slices={undefined} />
            </PieChart>
        )
    }
}