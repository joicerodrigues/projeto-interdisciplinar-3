import styled from "styled-components";
// import convertToRem from "../../utils/convertToRem";

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

export const FooterModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5em;
  flex-direction: column;
`;

export const ContentTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`;

export const TitleModal = styled.h1`
  font-size: 1.7em;
  font-weight: 700;
  color: #4c4b4f;
  text-align: center;
  margin-bottom: .2em;
`;

export const SubTitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #4c4b4f;
  text-align: center;
  margin-bottom: 1em;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 35em;
  overflow-y: auto;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 28em;
  gap: 1em;
`;




