import styled, { keyframes } from "styled-components";
import convertToRem from "../../utils/convertToRem";
import { fadeInUp } from "react-animations";
import Background from "../../assets/img/background-home.jpg";

const fadeInUpAnimation = keyframes`${fadeInUp}`;

export const FadeInUpDiv = styled.div`
  animation: 0.6s ${fadeInUpAnimation};
`;

export const ContainerProducts = styled.div`
  &:before {
    content: "";
    position: absolute;
    opacity: 0.1;
    background-image: url(${Background});
    background-size: cover;
    filter: blur(50px);
    width: 100%;
    background-repeat: repeat-y;
    background-position: center;
    z-index: -1;
    height: 180em;
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
  width: 100%;
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
  animation: 0.6s ${fadeInUpAnimation};
`;

export const NothingFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 25em;

  & > p {
    font-size: ${convertToRem(22)};
    font-weight: 500;
    color: #95959a;
  }
`;

export const ContentNothingFound = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerProductsList = styled.div`
  animation: 0.6s ${fadeInUpAnimation};
`;

export const InputTextStyle = {
  backgroundColor: "#fff",
  borderBottomRightRadius: 0,
  borderTopRightRadius: 0,
  borderBottomLeftRadius: 6,
  borderTopLeftRadius: 6,
};
