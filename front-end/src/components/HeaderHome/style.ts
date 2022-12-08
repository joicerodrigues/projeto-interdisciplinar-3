import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;

  position: fixed;
  width: -webkit-fill-available;

  background-color: rgb(255 255 255 / 90%);
  color: rgba(3,26,108,0.1);
  border-bottom: 1px solid #d7d9eb;
`;

export const HeaderItens = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${convertToRem(20)} 0;

  a {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    text-decoration: none;
    color: #2E2E33;
    font-size: ${convertToRem(18)};
    padding: 0 ${convertToRem(40)};
  }
`;
