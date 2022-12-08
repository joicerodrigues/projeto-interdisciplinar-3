import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderItens = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: ${convertToRem(60)};
  position: relative;
  left: -12em;
  z-index: 5;
  opacity: .6;

  a {
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    text-decoration: none;
    color: #eeeeee;
    font-size: ${convertToRem(18)};
    padding: 0 ${convertToRem(40)};
  }
`;

export const HeaderButton = styled.button`
  backdrop-filter: blur(7px) saturate(189%);
  -webkit-backdrop-filter: blur(7px) saturate(189%);
  background-color: rgba(81, 87, 104, 0.53);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: ${convertToRem(10)} ${convertToRem(20)};
  color: #eeeeee;
  font-size: ${convertToRem(17)};
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  cursor: pointer;
  position: relative;
  z-index: 5;
  top: 1.7em;

  &:hover {
    background-color: rgba(81, 87, 104, 0.73);
  }
`;
