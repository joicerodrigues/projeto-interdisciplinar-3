import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";
import img from "../../assets/img/background-home.jpg";

export const ContainerProducts = styled.div``;

export const ContainerSearchProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0.2;
    z-index: 1;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: auto ${convertToRem(1500)};

    -webkit-filter: blur(1px);
    -moz-filter: blur(1px);
    -o-filter: blur(1px);
    -ms-filter: blur(1px);
    filter: blur(1px);
  }
`;

export const SubHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: ${convertToRem(100)};
  position: relative;
  z-index: 1;

  background: rgb(94,96,134);
background: linear-gradient(148deg, rgba(94,96,134,1) 0%, rgba(158,146,205,0.7091211484593838) 51%, rgba(128,118,154,0.9976365546218487) 100%);
`;

export const ContentSearchProducts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  top: ${convertToRem(-30)};
`;

export const ContainerProductsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${convertToRem(10)};
  gap: ${convertToRem(20)};

`;

export const InputTextStyle = {
  backgroundColor: "#fff",
  borderBottomRightRadius: 0,
  borderTopRightRadius: 0,
};
