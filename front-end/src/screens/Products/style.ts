import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const ContainerProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  height: 100vh;
`;

export const Input = {
  width: convertToRem(400),
  marginBottom: convertToRem(8)
};
