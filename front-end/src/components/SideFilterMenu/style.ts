import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const ContainerSideFilterMenu = styled.div`
  min-width: ${convertToRem(300)};
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: ${convertToRem(20)};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
