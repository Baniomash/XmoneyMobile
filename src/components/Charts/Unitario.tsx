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
    let coresEntradas: string[] = [];
    let dataSaidas: number[] = [];
    let coresSaidas: string[] = [];
    let i: number = -1;

    transactions.forEach(item => {
        if (item.type == true) {
            dataEntradas.push(item.amount);
            coresEntradas.push(randomColor());
        } else if (item.type == false) {
            dataSaidas.push(item.amount);
            randomColor()
            coresSaidas.push(randomColor());
        }
    });

    const pieDataEntradas = dataEntradas
        .filter((value) => value >= 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: coresEntradas[index],
                onPress: () => console.log(`${transactions[index].title}`),
            },
            key: `unitIn - ${transactions[index].id}`,
        }));

    const pieDataSaidas = dataSaidas
        .filter((value) => value >= 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: coresSaidas[index],
                onPress: () => console.log(`${transactions[index].title}`),
            },
            key: `unitOut - ${transactions[index].id}`,
        }));

    const Label = ({ slices }: any) => {
        return slices.map((slice: { pieCentroid: any; data: any; }, index: any) => {
            const { pieCentroid, data } = slice;
            return (
                <Text
                    key={`unitText - ${randomColor()}`}
                    x={pieCentroid[0]}
                    y={pieCentroid[1]}
                    fill={'black'}
                    textAnchor={'middle'}
                    alignmentBaseline={'middle'}
                    fontSize={15}
                >
                    {data.value}
                </Text>
            )
        });
    }

    function somaValor() {
        if (i < coresEntradas.length - 1 || i < coresSaidas.length - 1) {
            i++
        } else {
            i = 0
        }
        return i
    }

    return (
        <Container>
            {dataEntradas.length > 0 && (
                <>
                    <TopTitle>Unitário - Entradas</TopTitle>
                    <PieChart style={{ height: 300 }} data={pieDataEntradas}>
                        <Label slices={undefined} />
                    </PieChart>
                    <LegendaWrapper>
                        {transactions.map(transaction => (
                            <Wrapper key={transaction.id}>
                                {transaction.type == true &&
                                    <>
                                        <Cor style={{ backgroundColor: coresEntradas[somaValor()] }} />
                                        <Legenda>{transaction.title} - {currencyFormat(transaction.amount)}</Legenda>
                                    </>
                                }
                            </Wrapper>
                        ))}
                    </LegendaWrapper>
                </>
            )}
            {dataSaidas.length > 0 && (
                <>
                    <TopTitle>Unitário - Saídas</TopTitle><PieChart style={{ height: 300 }} data={pieDataSaidas}>
                        <Label slices={undefined} />
                    </PieChart>
                    <LegendaWrapper>
                        {transactions.map(transaction => (
                            <Wrapper key={transaction.id}>
                                {transaction.type == false &&
                                    <>
                                        <Cor style={{ backgroundColor: coresSaidas[somaValor()] }} />
                                        <Legenda>{transaction.title} - {currencyFormat(transaction.amount)}</Legenda>
                                    </>}
                            </Wrapper>
                        ))}
                    </LegendaWrapper>
                </>
            )}
        </Container >
    )
}