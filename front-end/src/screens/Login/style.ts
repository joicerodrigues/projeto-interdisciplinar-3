import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 720px;
  min-width: 320px;
`;

export const StyleLottie = {
  width: 310,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

export const LottieAnimation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  left: -8px;
`;

export const ContentLogin = styled.div`
  backdrop-filter: blur(4px) saturate(180%);
  -webkit-backdrop-filter: blur(4px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 14px;
  max-width: 615px;
  padding-bottom: 30px;
  padding-top: 46px;
  text-align: center;
  width: 90%;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  color: #3f3e46;
  font-size: ${convertToRem(30)};
  font-weight: 700;
  margin-bottom: ${convertToRem(14)};
`;

export const SubTitle = styled.div`
  color: #3f3e46;
  font-size: ${convertToRem(16)};
  font-weight: 400;
  margin-bottom: ${convertToRem(30)};
`;

export const ContentButtons = styled.div`
  margin-top: ${convertToRem(30)};
`;

export const Link = styled.a`
  color: #1976d2;
  font-size: ${convertToRem(16)};
  font-weight: 400;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

