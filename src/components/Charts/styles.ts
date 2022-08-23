import styled from "styled-components/native";

export const Container = styled.View`
    background: #e7e9ee;
    border-radius: 5px;
`;

export const TopTitle = styled.Text`
    font-size: 32px;
    line-height: 21px;
    padding: 12px;
    margin-top: 24px;
    text-align: center;
`;

export const LegendaWrapper = styled.View`
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-top: 24px;
    flex-wrap: wrap;
`;

export const Wrapper = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Legenda = styled.Text`
    font-size: 14px;
    line-height: 21px;
    margin: 8px;
`;

export const Cor = styled.View`
    width: 12px;
    height: 12px;
    border-radius: 10px;
    margin-top: 2px;
`;

export const Error = styled.Image`
    width: 400px;
    height: 210px;
`;

export const ErrorMsg = styled.Text`
    text-align: center;
    font-size: 28px;
    font-weight: bold;
`;