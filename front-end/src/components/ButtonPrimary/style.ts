import convertToRem from "../../utils/convertToRem";

export const ButtonPrimaryStyle = {
  width: convertToRem(400),
  height: convertToRem(50),
  marginBottom: convertToRem(12),
  backgroundColor: '#7376AD',

  '&:hover': {
    backgroundColor: '#5C5F9A',
    color: '#fff',
  },
}
