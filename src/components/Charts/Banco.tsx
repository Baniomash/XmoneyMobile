import React, { PureComponent } from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import { useTransactions } from '../../hooks/useTransactions';

export function ChartBank() {
    const { transactions } = useTransactions();

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

    const categoryData = totalBanco
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: ['#e46c0a', '#9c44dc', '#ec0000', '#1c60ab', '#12A454'][index],
                onPress: () => console.log(`${transactions[index].bank}`),
            },
            key: `${totalBanco[index]}`,
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
};