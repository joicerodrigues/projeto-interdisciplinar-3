import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";
// import img from "../../assets/img/background-home.jpg";

export const ContainerProducts = styled.div`
  &:before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.2;
    z-index: 0.5;
    width: 100vw;
    height: 100em;
  }
`;

export const ContainerSearchProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: ${convertToRem(150)};
  position: relative;
  z-index: 1;

  background: rgb(94, 96, 134);
  background: linear-gradient(148deg, rgba(94, 96, 134, 1) 0%, rgba(158, 146, 205, 0.7091211484593838) 51%, rgba(128, 118, 154, 0.9976365546218487) 100%);
`;

export const ContentSearchProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  top: ${convertToRem(-30)};
`;

export const ContetentProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: ${convertToRem(30)};
  justify-content: center;
  align-items: center;
  justify-items: center;
`;

export const ContainerProductsList = styled.div`
  margin: 0 ${convertToRem(155)};
`;

export const InputTextStyle = {
  backgroundColor: "#fff",
  borderBottomRightRadius: 0,
  borderTopRightRadius: 0,
};
