import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 16px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      font-weight: 400;
      padding: 16px 32px;
      text-align: left;
      line-height: 24px;
    }

    td {
      padding: 16px 32px;
      border: 0;
      border-radius: 4px;
    }
  }
`;
