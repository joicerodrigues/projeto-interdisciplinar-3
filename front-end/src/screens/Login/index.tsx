import {
    ContainerLogin,
    ContentLogin,
    FormControl,
    Title,
    Link,
    SubTitle,
    ContentButtons,
    LottieAnimation,
    StyleLottie
} from "./style"
import { useState } from 'react';
import { validadeEmail } from "../../utils/validadeText";
import InputText from "../../components/InputText";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonText from "../../components/ButtonText";
import Lottie from "lottie-react";
import planetEarth from "../../assets/lotties/lf30_rwpu0mow.json";
import { login } from "../../services/Login";
import ModalSignUp from "../../components/ModalSignUp"
import { useNavigate } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);

    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState(false);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const navigateToProducts = () => {
        navigate('/products');
    };

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value, name } = event.target;

        if (name === 'email') {
            setEmail(value);
            value === '' ? setErrorEmail(false) : setErrorEmail(!validadeEmail(value));
            return
        }

        setPassword(value);
        if(value === '') {
            setErrorPassword(false);
        }
    };

    function handleLogin() {
        const data = {
            "email": email,
            "password": password
        }

        login(data).then((response) => {
            if(response.data === 'Email ou Senha estão incorretos!') {
                setErrorPassword(true);
                return
            }

            navigateToProducts();
        })
    }

    return (
        <ContainerLogin>

            <ModalSignUp 
                active={open}
                handleClose={handleClose}
            />

            <ContentLogin>
                <LottieAnimation>
                    <Lottie animationData={planetEarth} loop={false} style={StyleLottie}/>
                </LottieAnimation>
                <Title>
                    <p>Olá, seja bem vindo(a)</p>
                </Title>
                <SubTitle>
                    <p>
                        Faça login para continuar, ou <Link href="#" onClick={handleOpen}> cadastre-se </Link>
                    </p>
                </SubTitle>
                <FormControl>
                    <InputText
                        error={errorEmail}
                        label="Email"
                        messageError={errorEmail ? 'Email inválido' : ' '}
                        name="email"
                        value={email}
                        required
                        onChange={handleChange}
                    />

                    <InputText
                        error={errorPassword}
                        label="Senha"
                        messageError={errorPassword ? 'Algo deu errado, preencha os dados corretamente...' : ' '}
                        name="password"
                        value={password}
                        onChange={handleChange}
                        type="password"
                        required
                        style={{ borderRadius: 5 }}
                    />

                    <ContentButtons>
                        <ButtonPrimary
                            disabled={errorEmail || errorPassword}
                            label="Entrar"
                            onClick={() => handleLogin()}
                            size="medium"
                        />
                        <ButtonText
                            disabled={false}
                            label="Esqueci minha senha"
                            onClick={() => {}}
                            size="small"
                        />
                    </ContentButtons>


                </FormControl>
            </ContentLogin>
        </ContainerLogin>
    );
}

export default Login;
