import { ContainerInput, Input } from "./style"
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

interface InputTextProps {
    error           ?: boolean;
    label           ?: string;
    messageError    ?: string;
    name            ?: string;
    value           ?: string;
    placeholder     ?: string;
    style           ?: React.CSSProperties;
    onChange        ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    [x: string]      : any;
}

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        borderColor: '#6166B7',
        borderRadious: 6,
    },
    '& .MuiInput-underline:after': {
        borderColor: '#6166B7',
        borderRadious: 6,
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            borderBottomLeftRadius: 6,
            borderTopLeftRadius: 6,
        },
        '&:hover fieldset': {
            borderColor: '#6166B7',
            borderRadious: 6,
        },
        '&.Mui-focused fieldset': {
            borderColor: '#6166B7',
            borderRadious: 6,
        },
    },
});

function Login({ error, messageError, label, name, value, style, onChange, placeholder, ...props }: InputTextProps) {
    return (
        <ContainerInput>
            <CssTextField
                error={error}
                id="outlined-basic"
                helperText={messageError}
                label={label}
                name={name}
                variant="outlined"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={Input}
                sx={style}
                { ...props }
            />
        </ContainerInput>
    );
}

export default Login;
