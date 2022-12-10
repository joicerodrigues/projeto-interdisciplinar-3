import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = {
  width: convertToRem(400),
  marginBottom: '.2em'
};
