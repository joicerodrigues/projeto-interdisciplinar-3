import { ContainerInput, Input } from "./style"
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

interface InputTextProps {
    error           ?: boolean;
    label           ?: string;
    messageError    ?: string;
    name            ?: string;
    value           ?: any;
    placeholder     ?: string;
    style           ?: React.CSSProperties;
    onChange        ?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type            ?: string;
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
            borderBottomLeftRadius: 6,
            borderTopLeftRadius: 6,
        },
        '&:hover fieldset': {
            borderRadious: 6,
        },
        '&.Mui-focused fieldset': {
            borderRadious: 6,
        },
    },
    '&.Mui-error': {
        color: '#1976d2',
        fontSize: 12,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: '-5em !important',
    },
});

function Login({ error, messageError, label, name, value, style, type, onChange, placeholder, ...props }: InputTextProps) {
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
                type={type}
                { ...props }
            />
        </ContainerInput>
    );
}

export default Login;
