import React, { PureComponent } from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import { useTransactions } from '../../hooks/useTransactions';

export function ChartCategory() {
    const { transactions } = useTransactions();

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
            } else if (transaction.category == "Padrão") {
                acc.padrao += transaction.amount;
            }
            return acc;
        },
        {
            moradia: 0,
            trabalho: 0,
            diversao: 0,
            supermecado: 0,
            saude: 0,
            padrao: 0,
        }
    );
    totalCategoria.push(summary.moradia, summary.trabalho, summary.diversao, summary.supermecado, summary.saude, summary.padrao);

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
                        {data.value}
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