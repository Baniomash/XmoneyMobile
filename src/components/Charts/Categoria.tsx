import React from 'react'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import { useTransactions } from '../../hooks/useTransactions';
import { Container, Cor, Legenda, LegendaWrapper, TopTitle, Wrapper } from './styles';
import { currencyFormat } from '../TransactionsTable';

export function ChartCategory() {
    const { transactions } = useTransactions();

    const randomColor = () => ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(0, 7)

    let MoradiaE: number = 0;
    let DiversaoE: number = 0;
    let TrabalhoE: number = 0;
    let SupermecadoE: number = 0;
    let SaudeE: number = 0;

    let MoradiaS: number = 0;
    let DiversaoS: number = 0;
    let TrabalhoS: number = 0;
    let SupermecadoS: number = 0;
    let SaudeS: number = 0;

    let entradas: number[] = [];
    let saidas: number[] = [];

    transactions.forEach(item => {
        if (item.type == true && item.category == "Moradia") {
            MoradiaE = item.amount;
        } else if (item.type == true && item.category == "Diversão") {
            DiversaoE = item.amount;
        } else if (item.type == true && item.category == "Trabalho") {
            TrabalhoE = item.amount;
        } else if (item.type == true && item.category == "Supermercado") {
            SupermecadoE = item.amount;
        } else if (item.type == true && item.category == "Saúde") {
            SaudeE = item.amount;
        } else if (item.type == false && item.category == "Moradia") {
            MoradiaS = item.amount;
        } else if (item.type == false && item.category == "Diversão") {
            DiversaoS = item.amount;
        } else if (item.type == false && item.category == "Trabalho") {
            TrabalhoS = item.amount;
        } else if (item.type == false && item.category == "Supermercado") {
            SupermecadoS = item.amount;
        } else if (item.type == false && item.category == "Saúde") {
            SaudeS = item.amount;
        }
    });
    entradas.push(MoradiaE, TrabalhoE, DiversaoE, SupermecadoE, SaudeE);
    saidas.push(MoradiaS, TrabalhoS, DiversaoS, SupermecadoS, SaudeS);

    const bankSaida = saidas
        .filter((value) => value >= 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
            },
            key: `categoryOut - ${saidas[index]}`,
        }));

    const bankEntrada = entradas
        .filter((value) => value >= 0)
        .map((value, index) => ({
            value,
            svg: {
                fill: randomColor(),
            },
            key: `categoryIn - ${entradas[index]}`,
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
            {bankEntrada.length > 0 && (
                <>
                    <TopTitle>Categorias - Entradas</TopTitle><PieChart style={{ height: 300 }} data={bankEntrada}>
                        <Label slices={undefined} />
                    </PieChart><LegendaWrapper>
                        {transactions.map(transaction => (
                            <Wrapper>
                                {transaction.type == true &&
                                    <>
                                        <Cor style={{ backgroundColor: randomColor() }} />
                                        <Legenda>{transaction.bank} - {currencyFormat(transaction.amount)}</Legenda>
                                    </>}
                            </Wrapper>
                        ))}
                    </LegendaWrapper>
                </>
            )}
            {bankSaida.length > 0 && (
                <>
                    <TopTitle>Categorias - Saídas</TopTitle><PieChart style={{ height: 300 }} data={bankSaida}>
                        <Label slices={undefined} />
                    </PieChart><LegendaWrapper>
                        {transactions.map(transaction => (
                            <Wrapper>
                                {transaction.type == false &&
                                    <>
                                        <Cor style={{ backgroundColor: randomColor() }} />
                                        <Legenda>{transaction.bank} - {currencyFormat(transaction.amount)}</Legenda>
                                    </>}
                            </Wrapper>
                        ))}
                    </LegendaWrapper>
                </>
            )}
        </Container>
    )
}