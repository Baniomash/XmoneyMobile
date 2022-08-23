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
                fill: ["#ee9c2e", "#f1dec3", "#f28e36", "#a8b16b", "#4e6424"][index],
            },
            key: `categoryOut - ${randomColor()}}`,
        }));

    const catEntrada = entradas
        .filter((value) => value >= 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: ["#386641", "#6a994e", "#a7c957", "#f2e8cf", "#bc4749"][index],
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
            {checaEntradas && (
                <>
                    <TopTitle>Categorias - Entradas</TopTitle>
                    <PieChart style={{ height: 300 }} data={catEntrada}>
                        <Label slices={undefined} />
                    </PieChart>
                    <LegendaWrapper>
                        {entrada.moradia > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#386641" }} />
                                <Legenda>Moradia - {currencyFormat(entrada.moradia)}</Legenda>
                            </Wrapper>}
                        {entrada.diversao > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#6a994e" }} />
                                <Legenda>Diversão - {currencyFormat(entrada.diversao)}</Legenda>
                            </Wrapper>}
                        {entrada.trabalho > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#a7c957" }} />
                                <Legenda>Trabalho - {currencyFormat(entrada.trabalho)}</Legenda>
                            </Wrapper>}
                        {entrada.supermercado > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#f2e8cf" }} />
                                <Legenda>Supermecado - {currencyFormat(entrada.supermercado)}</Legenda>
                            </Wrapper>}
                        {entrada.saude > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#bc4749" }} />
                                <Legenda>Saúde - {currencyFormat(entrada.saude)}</Legenda>
                            </Wrapper>}
                    </LegendaWrapper>
                </>
            )}
            {checaSaidas && (
                <>
                    <TopTitle>Categorias - Saídas</TopTitle>
                    <PieChart style={{ height: 300 }} data={catSaida}>
                        <Label slices={undefined} />
                    </PieChart>
                    <LegendaWrapper>
                        {saida.moradia > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#ee9c2e" }} />
                                <Legenda>Moradia - {currencyFormat(saida.moradia)}</Legenda>
                            </Wrapper>}
                        {saida.diversao > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#f1dec3" }} />
                                <Legenda>Diversão - {currencyFormat(saida.diversao)}</Legenda>
                            </Wrapper>}
                        {saida.trabalho > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#f28e36" }} />
                                <Legenda>Trabalho - {currencyFormat(saida.trabalho)}</Legenda>
                            </Wrapper>}
                        {saida.supermercado > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#a8b16b" }} />
                                <Legenda>Supermecado - {currencyFormat(saida.supermercado)}</Legenda>
                            </Wrapper>}
                        {saida.saude > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#4e6424" }} />
                                <Legenda>Saúde - {currencyFormat(saida.saude)}</Legenda>
                            </Wrapper>}
                    </LegendaWrapper>
                </>
            )}
        </Container>
    )
}