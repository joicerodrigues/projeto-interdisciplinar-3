import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";
import img from "../../assets/img/2806681.jpg";

export const Container = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 87vh;
  width: 90vw;
  margin: 0 auto;
  position: relative;
  top: ${convertToRem(10)};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  margin-top: -8rem;
  height: ${convertToRem(120)};
  padding-left: ${convertToRem(40)};
  border-left: 1px solid #fff;
`;

export const ContentText = styled.div` {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  font-size: ${convertToRem(18)};
  color: #F1F1F1;
  height: ${convertToRem(130)};
  padding-top: ${convertToRem(160)};

  p {
    padding-top: ${convertToRem(20)};
    font-size: ${convertToRem(20)};
    font-weight: 200;
  }
`;

export const ContentPlanet = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

export const LottieScroll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: ${convertToRem(30)};
`;
