import { ContainerInput, Input } from "./style"
import TextField from '@mui/material/TextField';

interface InputTextProps {
    error: boolean;
    label: string;
    messageError: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Login({ error, messageError, label, name, value, onChange }: InputTextProps) {
    return (
        <ContainerInput>
            <TextField
                error={error}
                id="outlined-basic"
                helperText={messageError}
                label={label}
                name={name}
                variant="outlined"
                value={value}
                onChange={onChange}
                style = {Input}
            />
        </ContainerInput>
    );
}

export default Login;
