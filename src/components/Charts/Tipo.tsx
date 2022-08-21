import React, { useState } from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import { useTransactions } from '../../hooks/useTransactions';
import { Container, Cor, Legenda, LegendaWrapper, TopTitle, Wrapper } from './styles';
import { currencyFormat } from '../TransactionsTable';
import { View } from 'react-native';

export function ChartType() {
    const { transactions } = useTransactions();
    const [totalIncome, setTotalIncome] = useState(0);
    const [totalOutcome, setTotalOutcome] = useState(0);

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
            setTotalIncome(summary.entrada);
            setTotalOutcome(summary.saida);
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
                    {transactions[index].type ? 'Entradas' : 'Saídas'}

                </Text>
            )
        });
    }
    return (
        <Container>
            <TopTitle>Entradas x Saídas</TopTitle>
            <PieChart style={{ height: 300 }} data={categoryData}>
                <Label slices={undefined} />
            </PieChart>
            <LegendaWrapper>
                <Wrapper>
                    <Cor style={{ backgroundColor: "#12A454" }} />
                    <Legenda>Entradas - {currencyFormat(totalIncome)}</Legenda>
                </Wrapper>
                <Wrapper>
                    <Cor style={{ backgroundColor: "#E52E4D" }} />
                    <Legenda>Saídas - {currencyFormat(totalOutcome)}</Legenda>
                </Wrapper>
            </LegendaWrapper>
        </Container>
    )
}