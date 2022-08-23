import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import { useTransactions } from '../../hooks/useTransactions';
import { Container, Cor, Legenda, LegendaWrapper, TopTitle, Wrapper } from './styles';
import { currencyFormat } from '../TransactionsTable';

export function ChartBank() {
    const { transactions } = useTransactions();
    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

    let entradasBanco: number[] = [];
    let saidasBanco: number[] = [];

    const entradas = transactions.reduce(
        (acc, transaction) => {
            if (transaction.bank == "Itaú" && transaction.type == true) {
                acc.itau += transaction.amount;
            } else if (transaction.bank == "NUBank" && transaction.type == true) {
                acc.nubank += transaction.amount;
            } else if (transaction.bank == "Santander" && transaction.type == true) {
                acc.santander += transaction.amount;
            } else if (transaction.bank == "Caixa" && transaction.type == true) {
                acc.caixa += transaction.amount;
            } else if (transaction.bank == "À vista" && transaction.type == true) {
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
    entradasBanco.push(entradas.itau, entradas.nubank, entradas.santander, entradas.caixa, entradas.avista);

    const saidas = transactions.reduce(
        (acc, transaction) => {
            if (transaction.bank == "Itaú" && transaction.type == false) {
                acc.itau += transaction.amount;
            } else if (transaction.bank == "NUBank" && transaction.type == false) {
                acc.nubank += transaction.amount;
            } else if (transaction.bank == "Santander" && transaction.type == false) {
                acc.santander += transaction.amount;
            } else if (transaction.bank == "Caixa" && transaction.type == false) {
                acc.caixa += transaction.amount;
            } else if (transaction.bank == "À vista" && transaction.type == false) {
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
    saidasBanco.push(saidas.itau, saidas.nubank, saidas.santander, saidas.caixa, saidas.avista);

    function maiorQueZero(value: number) {
        return value > 0;
    }

    let checaEntradas = entradasBanco.some(maiorQueZero);
    let checaSaidas = saidasBanco.some(maiorQueZero);

    const entradasData = entradasBanco
        .filter((value) => value >= 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: ['#e46c0a', '#9c44dc', '#ec0000', '#1c60ab', '#12A454'][index],
            },
            key: `bankIn - ${randomColor()}`,
        }));

    const saidasData = saidasBanco
        .filter((value) => value >= 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: ['#e46c0a', '#9c44dc', '#ec0000', '#1c60ab', '#12A454'][index],
            },
            key: `bankOut - ${randomColor()}`,
        }));

    const Label = ({ slices }: any) => {
        return slices.map((slice: { pieCentroid: any; data: any; }) => {
            const { pieCentroid, data } = slice;
            return (
                <Text
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
    return (
        <Container>
            {checaEntradas && (
                <>
                    <TopTitle>Bancos - Entradas</TopTitle>
                    <PieChart style={{ height: 300 }} data={entradasData}>
                        <Label slices={undefined} />
                    </PieChart>
                    <LegendaWrapper>
                        {entradas.itau > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#f28500" }} />
                                <Legenda>Itaú - {currencyFormat(entradas.itau)}</Legenda>
                            </Wrapper>}
                        {entradas.nubank > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#9c44dc" }} />
                                <Legenda>NuBank - {currencyFormat(entradas.nubank)}</Legenda>
                            </Wrapper>}
                        {entradas.santander > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#ec0000" }} />
                                <Legenda>Santander - {currencyFormat(entradas.santander)}</Legenda>
                            </Wrapper>}
                        {entradas.caixa > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#1c60ab" }} />
                                <Legenda>Caixa - {currencyFormat(entradas.caixa)}</Legenda>
                            </Wrapper>}
                        {entradas.avista > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#12A454" }} />
                                <Legenda>À vista - {currencyFormat(entradas.avista)}</Legenda>
                            </Wrapper>}
                    </LegendaWrapper>
                </>
            )}

            {checaSaidas && (
                <>
                    <TopTitle>Bancos - Saídas</TopTitle>
                    <PieChart style={{ height: 300 }} data={saidasData}>
                        <Label slices={undefined} />
                    </PieChart>
                    <LegendaWrapper>
                        {saidas.itau > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#f28500" }} />
                                <Legenda>Itaú - {currencyFormat(saidas.itau)}</Legenda>
                            </Wrapper>}
                        {saidas.nubank > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#9c44dc" }} />
                                <Legenda>NuBank - {currencyFormat(saidas.nubank)}</Legenda>
                            </Wrapper>}
                        {saidas.santander > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#ec0000" }} />
                                <Legenda>Santander - {currencyFormat(saidas.santander)}</Legenda>
                            </Wrapper>}
                        {saidas.caixa > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#1c60ab" }} />
                                <Legenda>Caixa {currencyFormat(saidas.caixa)}</Legenda>
                            </Wrapper>}
                        {saidas.avista > 0 &&
                            <Wrapper>
                                <Cor style={{ backgroundColor: "#12A454" }} />
                                <Legenda>À vista {currencyFormat(saidas.avista)}</Legenda>
                            </Wrapper>}
                    </LegendaWrapper>
                </>
            )}
        </Container >
    )
};