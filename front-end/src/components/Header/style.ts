import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderItens = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${convertToRem(60)};

  a {
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    text-decoration: none;
    color: #eeeeee;
    font-size: ${convertToRem(18)};
    padding: 0 ${convertToRem(40)};
  }
`;
