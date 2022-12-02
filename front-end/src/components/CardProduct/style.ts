import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";
import { green } from "@mui/material/colors";

interface ContentImgProps {
  color?: any;
  hover?: any;
}

export const Container = styled.div``;

export const ContainerCard = styled.div<ContentImgProps>`
  display: inline-block;
  padding: 2em;
  background: #fff;
  border-radius: 10px;
  z-index: 1;
  position: relative;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
  width: 300px;
  height: 480px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  &:hover {
    border: 2px solid #b3bab5;
  }
`;

export const ContentImg = styled.div<ContentImgProps>`
  width: 240px;
  height: 100px;
  border-radius: 10px 90px 10px 10px;
  background: ${(props) => (props.color ? props.color : "#8FB5AB")};
  opacity: 0.4;
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 500px;
  position: absolute;
  left: 14px;
  top: 16px;
`;

export const StyledH1 = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: ${convertToRem(18)};
  font-weight: 600;
  line-height: 1.3;
  padding-bottom: 0.9em;
  color: #2e2e33;
`;

export const ProductInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > p {
    padding-left: 0.5em;
  }
`;

export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  left: -4px;

  & > p {
    padding-left: 0.4em;
  }
`;

export const ProductDescription = styled.p`
  padding-top: ${convertToRem(20)};
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.9;
  color: #606064;
  font-size: font-size: ${convertToRem(14)};
`;

export const ContentButtons = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  & > button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #42a5f5;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 0.7em 2em;
    margin-right: 0.5em;
    margin-top: 2em;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    & > p {
      padding-left: 0.5em;
    }
  }
`;

export const ButtonIcon = {
  position: "absolute",
  right: "0.5em",
  top: "1.2em",
  fontSize: "1.6em",
};
