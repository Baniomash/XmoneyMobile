import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #5429cc;
`;

export const Content = styled.View`
  min-width: 100%;
  margin: 30px auto 0px auto;
  padding: 32px 20px 160px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  justify-content: space-between;
`;

export const LogoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoText = styled.Text`
  margin-left: 10px;
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

export const LogoImage = styled.Image`
  width: 60px;
  height: 60px;
`;
