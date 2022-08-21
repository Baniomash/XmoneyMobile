import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import { useTransactions } from '../../hooks/useTransactions';
import { Container, Cor, Legenda, LegendaWrapper, TopTitle, Wrapper } from './styles';
import { currencyFormat } from '../TransactionsTable';

const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

export function ChartUnit() {
    const { transactions } = useTransactions();

    let dataEntradas: number[] = [];
    let dataSaidas: number[] = [];

    transactions.forEach(item => {
        if (item.type == true) {
            dataEntradas.push(item.amount);
        } else if (item.type == false) {
            dataSaidas.push(item.amount);
        }
    });

    const pieDataEntradas = dataEntradas
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
                onPress: () => console.log(`${transactions[index].title}`),
            },
            key: `${transactions[index].id}`,
        }));

    const pieDataSaidas = dataSaidas
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
            const { pieCentroid } = slice;
            return (

                <Text
                    key={`label - ${index}`}
                    x={pieCentroid[0]}
                    y={pieCentroid[1]}
                    fill={'black'}
                    textAnchor={'middle'}
                    alignmentBaseline={'middle'}
                    fontSize={15}
                >
                    {transactions[index].title}

                </Text>
            )
        });
    }
    return (
        <Container>
            <TopTitle>Unitário - Entradas</TopTitle>
            <PieChart style={{ height: 300 }} data={pieDataEntradas}>
                <Label slices={undefined} />
            </PieChart>
            <LegendaWrapper>
                {transactions.map(transaction => (
                    <Wrapper>
                        {transaction.type == true &&
                            <>
                                <Cor style={{ backgroundColor: randomColor() }} />
                                <Legenda>{transaction.title} - {currencyFormat(transaction.amount)}</Legenda>
                            </>}
                    </Wrapper>
                ))}
            </LegendaWrapper>

            <TopTitle>Unitário - Saídas</TopTitle>
            <PieChart style={{ height: 300 }} data={pieDataSaidas}>
                <Label slices={undefined} />
            </PieChart>
            <LegendaWrapper>
                {transactions.map(transaction => (
                    <Wrapper>
                        {transaction.type == false &&
                            <>
                                <Cor style={{ backgroundColor: randomColor() }} />
                                <Legenda>{transaction.title} - {currencyFormat(transaction.amount)}</Legenda>
                            </>}
                    </Wrapper>
                ))}
            </LegendaWrapper>
        </Container >
    )
}