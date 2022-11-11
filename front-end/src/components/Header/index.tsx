import { Link } from "react-router-dom";
import { HeaderContainer, HeaderItens } from "./style"

function Header() {
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
        </HeaderContainer>
    );
}

export default Header;