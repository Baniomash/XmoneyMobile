import styled from "styled-components/native";

export const MainModal = styled.Modal``;

export const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 16px 16px 0px 0px;
`;

export const ModalView = styled.View`
  background-color: #f0f2f5;
  border-radius: 20px;
  padding: 35px;
`;

export const BtnModal = styled.Pressable`
  padding: 10px;
  background-color: #33cc95;
  border-radius: 5px;
`;

export const ModalTitle = styled.Text`
  margin-bottom: 24px;
`;

export const BtnTitulo = styled.Text``;

export const TransactioTypeContainer = styled.View`
  margin: 16px 0;
  display: flex;
  flex-direction: row;
`;

export const RadioBox = styled.Button`
  height: 64px;
  border: 1px solid #d7d7d7;
  margin: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
