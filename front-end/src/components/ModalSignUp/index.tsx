import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  ModalContainer,
  TitleModal,
  ContentTitle,
  SubTitle,
  ButtonStyle,
  FooterModal,
  FormContent,
  Inputs
} from "./style";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import InputText from "../InputText"
import { formFields } from "../../utils/formFields";
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import { signUp } from "../../services/Login";

interface ModalProductProps {
  active          ?: any;
  handleClose     ?: () => void;
}

function ModalProduct({ active, handleClose }: ModalProductProps) {
  const StyeleButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "10px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#7376AD",
  });

  const ButtonStyleCancel = {
    backgroundColor: "#fff !important",
    color: "#7376AD",
    borderRadius: "8px",
    padding: "0.7em 2em",
    marginTop: ".5em",
    cursor: "pointer",
    width: "31.6em",
    borderColor: "#7376AD !important",
  };

  const [fieldValue, setFieldValue] = useState(formFields);

  function handleInputText(id: number, value: string) {
    const newFields = fieldValue.map((item) => {
      if (item.id === id) {

        return {
          ...item,
          value
        }
      }
      return item;
    });

    setFieldValue(newFields);
  }

  function handleSignUp() {

    const newFields = fieldValue.map((item) => {
      const { id, ...rest } = item;
      return rest;
    });

    const newFieldsObject = newFields.reduce((acc, item) => {
      const { name, value } = item;
      // @ts-ignore
      acc[name] = value; 
      return acc;
    }, {});

    signUp(newFieldsObject).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log('newFieldsObject', newFieldsObject)
      console.log(error);
    });
  }


  return (
    <div>
      <Modal open={active} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={ModalContainer}>
          <CloseRoundedIcon
            onClick={handleClose}
            style={{
              position: "absolute",
              top: 12,
              right: 38,
              cursor: "pointer",
              color: "#4C4B4F",
              height: 70,
            }}
          />

          <ContentTitle>
            <TitleModal>Olá, Seja bem vindo(a)</TitleModal>
            <SubTitle> Preencha os campos abaixo para continuar</SubTitle>
          </ContentTitle>

          <FormContent>
            <Inputs>
              {fieldValue.map((item, index) => (
                <InputText
                  key={index}
                  label={item.label}
                  name={item.name}
                  error={false}
                  value={item.value}
                  onChange={(event: any) => handleInputText(item.id, event?.target?.value)}
                />
              ))}
            </Inputs>
          </FormContent>

          <FooterModal>
            <StyeleButton variant="contained" size="small" startIcon={<GroupAddRoundedIcon />} sx={ButtonStyle} onClick={() => handleSignUp()}>
              Criar conta
            </StyeleButton>
            <StyeleButton variant="contained" size="small" sx={ButtonStyleCancel} onClick={() => { }}>
              Cancelar
            </StyeleButton>
          </FooterModal>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalProduct;
