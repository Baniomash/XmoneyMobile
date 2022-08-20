import React, { PureComponent } from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import { useTransactions } from '../../hooks/useTransactions';

export function ChartUnit() {
    const { transactions } = useTransactions();

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
                        {data.value}
                    </Text>
                </>)
        });
    }
    return (
        <PieChart style={{ height: 350 }} data={pieData} >
            <Label slices={undefined} />
        </PieChart>
    )
}