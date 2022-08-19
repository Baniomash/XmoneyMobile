import React, { PureComponent } from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

export class ChartType extends PureComponent {
    render() {
        const transactions = [
            { id: 1, title: "Conta de Luz", type: true, amount: 100, bank: "Itaú", category: "Moradia", createdAt: "2020-01-01" },
            { id: 2, title: "Teste 2", type: false, amount: 100, bank: "NUBank", category: "Trabalho", createdAt: "2020-01-01" },
            { id: 3, title: "Conta de Luz", type: true, amount: 100, bank: "Santander", category: "Diversão", createdAt: "2020-01-01" },
            { id: 4, title: "Conta de Luz", type: false, amount: 100, bank: "Caixa", category: "Supermecado", createdAt: "2020-01-01" },
            { id: 5, title: "Conta de Luz", type: true, amount: 100, bank: "À vista", category: "Saúde", createdAt: "2020-01-01" },
        ];

        let totalTipo: number[] = [];
        const summary = transactions.reduce(
            (acc, transaction) => {
                if (transaction.type == true) {
                    acc.entrada += transaction.amount;
                } else if (transaction.type == false) {
                    acc.saida += transaction.amount;
                }
                return acc;
            },
            {
                entrada: 0,
                saida: 0,
            }
        );
        totalTipo.push(summary.entrada, summary.saida);

        const categoryData = totalTipo
            .filter((value) => value > 0)
            .map((value, index) => ({
                value,
                svg: {
                    fill: ['#12A454', '#E52E4D'][index],
                    onPress: () => console.log(`${transactions[index].type ? 'Entrada' : 'Saída'}`),
                },
                key: `${totalTipo[index]}`,
            }));

        const Label = ({ slices }: any) => {
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
                            {transactions[index].type ? 'Entradas' : 'Saídas'}

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
            <PieChart style={{ height: 350 }} data={categoryData} >
                <Label slices={undefined} />
            </PieChart>
        )
    }
}