import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const ContainerIframe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${convertToRem(600)};
  width: ${convertToRem(600)};
  cursor: pointer; 
  position: relative;
`;
