import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import { useTransactions } from '../../hooks/useTransactions';
import { Container, Cor, Legenda, LegendaWrapper, TopTitle, Wrapper } from './styles';
import { currencyFormat } from '../TransactionsTable';

export function ChartCategory() {
    const { transactions } = useTransactions();

    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

    let entradas: number[] = [];
    let saidas: number[] = [];

    const entrada = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type == true && transaction.category == "Moradia") {
                acc.moradia += transaction.amount;
            } else if (transaction.type == true && transaction.category == "Diversão") {
                acc.diversao += transaction.amount;
            } else if (transaction.type == true && transaction.category == "Trabalho") {
                acc.trabalho += transaction.amount;
            } else if (transaction.type == true && transaction.category == "Supermercado") {
                acc.supermercado += transaction.amount;
            } else if (transaction.type == true && transaction.category == "Saúde") {
                acc.saude += transaction.amount;
            }
            return acc;
        },
        {
            moradia: 0,
            diversao: 0,
            trabalho: 0,
            supermercado: 0,
            saude: 0,
        }
    );

    const saida = transactions.reduce(
        (acc, transaction) => {
            if (transaction.type == false && transaction.category == "Moradia") {
                acc.moradia += transaction.amount;
            } else if (transaction.type == false && transaction.category == "Diversão") {
                acc.diversao += transaction.amount;
            } else if (transaction.type == false && transaction.category == "Trabalho") {
                acc.trabalho += transaction.amount;
            } else if (transaction.type == false && transaction.category == "Supermercado") {
                acc.supermercado += transaction.amount;
            } else if (transaction.type == false && transaction.category == "Saúde") {
                acc.saude += transaction.amount;
            }
            return acc;
        },
        {
            moradia: 0,
            diversao: 0,
            trabalho: 0,
            supermercado: 0,
            saude: 0,
        }
    );

    entradas.push(entrada.moradia, entrada.diversao, entrada.trabalho, entrada.supermercado, entrada.saude);
    saidas.push(saida.moradia, saida.diversao, saida.trabalho, saida.supermercado, saida.saude);

    function maiorQueZero(value: number) {
    return value > 0;
    }

    let checaEntradas = entradas.some(maiorQueZero);
    let checaSaidas = saidas.some(maiorQueZero);

    const catSaida = saidas
        .filter((value) => value >= 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: ["red", "blue", "green", "yellow", "cyan"][index],
            },
            key: `categoryOut - ${randomColor()}}`,
        }));

    const catEntrada = entradas
        .filter((value) => value >= 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: ["red", "blue", "green", "yellow", "cyan"][index],
            },
            key: `categoryIn - ${randomColor()}`,
        }));

    const Label = ({ slices }: any) => {
        return slices.map((slice: { pieCentroid: any; data: any; }) => {
            const { pieCentroid, data } = slice;
            return (
                <Text
                    key={`value - ${randomColor()}`}
                    x={pieCentroid[0]}
                    y={pieCentroid[1]}
                    fill={'black'}
                    textAnchor={'middle'}
                    alignmentBaseline={'middle'}
                    fontSize={15}>
                    {data.value}
                </Text>
            )
        });
    }
    return (
        <Container>
            {checaEntradas == true && (
                <>
                    <TopTitle>Categorias - Entradas</TopTitle>
                    <PieChart style={{ height: 300 }} data={catEntrada}>
                        <Label slices={undefined} />
                    </PieChart>
                    <LegendaWrapper>
                        {entrada.moradia > 0 && 
                            <Wrapper>
                                <Cor style={{ backgroundColor:"red" }} />
                                <Legenda>Moradia</Legenda>
                            </Wrapper>}
                        {entrada.diversao > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "blue" }} />
                                <Legenda>Diversão</Legenda>
                            </Wrapper>}
                        {entrada.trabalho > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "green" }} />
                                <Legenda>Trabalho</Legenda>
                            </Wrapper>}
                        {entrada.supermercado > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "yellow" }} />
                                <Legenda>Supermecado</Legenda>
                            </Wrapper>}
                        {entrada.saude > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "cyan" }} />
                                <Legenda>Saúde</Legenda>
                            </Wrapper>}
                    </LegendaWrapper>
                </>
            )}
            {checaSaidas == true && (
                <>
                    <TopTitle>Categorias - Saídas</TopTitle>
                    <PieChart style={{ height: 300 }} data={catSaida}>
                        <Label slices={undefined} />
                    </PieChart>
                    <LegendaWrapper>
                        {saida.moradia > 0 && 
                            <Wrapper>
                                <Cor style={{ backgroundColor:"red" }} />
                                <Legenda>Moradia</Legenda>
                            </Wrapper>}
                        {saida.diversao > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "blue" }} />
                                <Legenda>Diversão</Legenda>
                            </Wrapper>}
                        {saida.trabalho > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "green" }} />
                                <Legenda>Trabalho</Legenda>
                            </Wrapper>}
                        {saida.supermercado > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "yellow" }} />
                                <Legenda>Supermecado</Legenda>
                            </Wrapper>}
                        {saida.saude > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "cyan" }} />
                                <Legenda>Saúde</Legenda>
                            </Wrapper>}
                    </LegendaWrapper>
                </>
            )}
        </Container>
    )
}