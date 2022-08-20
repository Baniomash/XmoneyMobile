import React, { PureComponent } from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import { useTransactions } from '../../hooks/useTransactions';

export function ChartType() {
    const { transactions } = useTransactions();

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
    console.log(totalTipo);

    const categoryData = totalTipo
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: ['#E52E4D', '#12A454'][index],
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
                        {data.value}
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