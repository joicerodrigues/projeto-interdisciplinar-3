import { Link } from "react-router-dom";
import { HeaderContainer, HeaderItens, HeaderButton } from "./style"
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
    };

    return (
        <HeaderContainer>
            <HeaderItens>
                <ul>
                    <Link to="/">Home</Link>
                </ul>
                <ul>
                    <Link to="/about">Sobre</Link>
                </ul>
                <ul>
                    <Link to="/contact">Contato</Link>
                </ul>
                <ul>
                    <Link to="/contact">Serviços</Link>
                </ul>
            </HeaderItens>

            <HeaderButton onClick={navigateToLogin}>
                Login | Cadastro
            </HeaderButton>
        </HeaderContainer>
    );
}

export default Header;