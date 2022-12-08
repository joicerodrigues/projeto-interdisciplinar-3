import { ButtonPrimaryStyle } from './style';
import Button from '@mui/material/Button';

interface ButtonPrimaryProps {
    label           ?: string;
    onClick         ?: () => void;
    disabled        ?: boolean;
    size            ?: 'small' | 'medium' | 'large';
}

function ButtonPrimary({ label, onClick, disabled, size }: ButtonPrimaryProps) {
    return (
        <>
            <Button
                variant="contained"
                onClick={onClick}
                disabled={disabled}
                size={size}
                style={ButtonPrimaryStyle}
            >
                {label}
            </Button>
        </>
    );
}

export default ButtonPrimary;
