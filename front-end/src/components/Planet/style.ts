import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const ContainerIframe = styled.iframe`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${convertToRem(800)};
  cursor: pointer;
`;
