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
  background-color: #f9f9f9;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const Input = styled.TextInput`
  background: #e7e9ee;
  border: 1px solid #d7d7d7;
  border-radius: 5px;
  width: 100%;
  height: 56px;
  margin-top: 8px;
  padding: 16px;
`;

export const BtnModal = styled.Pressable`
  background-color: #33cc95;
  border-radius: 5px;
`;

export const BtnClose = styled.Pressable`
background-color: #f9f9f9;
border-radius: 5px;
align-items: center;
width: 40px;
`;

export const ModalTitle = styled.Text`
  margin-bottom: 24px;
  font-size: 20px;
  line-height: 20px;
  font-style: normal;
  font-weight: 600;
  color: #363f5f;
`;

export const BtnTitulo = styled.Text`
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  height: 56px;
  width: 327px;
  text-align: center;
  padding: 18px;
`;

export const TransactioTypeContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RadioBox = styled.Pressable`
  border: 1px solid #d7d7d7;
  display: flex;
  padding: 18px 35px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  height: 56px;
  width: 159px;
  border-radius: 5px;
  margin: 8px auto;
`;

export const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;
