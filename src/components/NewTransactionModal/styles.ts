import styled from "styled-components/native";

export const CenteredView = styled.View`
  flex: 1;
  justify-content: flex-end;
  border-radius: 16px 16px 0px 0px;
`;

export const ModalView = styled.View`
  border-radius: 20px;
  padding: 35px;
  width: 100%;
  align-items: center;
  background-color: #f9f9f9;
`;

export const Input = styled.TextInput`
  background: #e7e9ee;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  width: 100%;
  height: 56px;
  margin-top: 8px;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RadioBox = styled.Button`
  height: 64px;
  border: 1px solid #d7d7d7;
  margin: 8px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #33cc95;
`;
