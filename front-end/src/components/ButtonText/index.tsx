import { ButtonTextStyle } from './style';
import Button from '@mui/material/Button';

interface ButtonTextProps {
    label          ?: string;
    onClick        ?: () => void;
    disabled       ?: boolean;
    size           ?: 'small' | 'medium' | 'large';
}

function ButtonText({ label, onClick, disabled, size }: ButtonTextProps) {
    return (
        <>
            <Button
                variant="text"
                onClick={onClick}
                disabled={disabled}
                size={size}
                style={ButtonTextStyle}
            >
                {label}
            </Button>
        </>
    );
}

export default ButtonText;
