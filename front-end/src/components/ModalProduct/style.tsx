import styled from "styled-components";
import convertToRem from "../../utils/convertToRem";

export const ModalContainer = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

export const ButtonStyle = {
  backgroundColor: "#6064B9 !important",
  color: "#fff",
  borderRadius: "8px",
  padding: "0.7em 2em",
  marginTop: "2em",
  cursor: "pointer",
  width: "31.6em",
  borderColor: "#6064B9 !important",
};

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
`;

export const ProductCarousel = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  margin-top: 1.5em;
`;

export const ProductInformationContainer = styled.div`
  display: flex;
  align-items: align-center;
  justify-content: center;
  flex-direction: column;
  margin-left: 0.3em;
`;

export const ContentTitleProduct = styled.div`
  display: flex;
  align-items: align-center;
  justify-content: space-between;
  margin-left: -0.2em;
`;

export const ImageProduct = styled.img`
  width: 500px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: ${convertToRem(16)};
`;

export const TitleProduct = styled.h1`
  font-size: ${convertToRem(24)};
  font-weight: 600;
  color: #2e2e33;
  margin-left: 0.2em;
  margin-bottom: 0.6em;
`;

export const ProductInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > p {
    padding-left: 0.5em;
  }
`;

export const ContentDescriptionProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  margin-top: 1.5em;
  margin-left: 0.7em;
`;

export const ProductDescription = styled.p`
  padding-top: ${convertToRem(20)};
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.9;
  color: #606064;
  font-size: font-size: ${convertToRem(14)};
  margin-left: 0.1em;
`;

export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  left: -4px;

  & > p {
    padding-left: 0.4em;
  }
`;

export const ContentSellerInformation = styled.div` {
  display: flex;
  align-items: align-center;
  justify-content: center;
  color: rgba(0,0,0,.9);
`;

export const Location = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1em;
  margin-top: 1em;
  width: 19.8em;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  & > div > p {
    color: rgba(0, 0, 0, 0.8);
    font-weight: 500;
  }

  & > div > p > span {
    color: rgba(0, 0, 0, 0.8);
    font-weight: 400;
  }
`;

export const Evaluation = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1em;
  margin-top: 1em;
  margin-left: 0.7em;
  width: 11em;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 1em;

  & > div > p {
    margin-top: -2px;
    padding-bottom: 2px;
  }

  & > div > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-left: -0.1em;
  }
`;

export const FooterModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5em;
`;
