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
import { validadeEmail, validadePassword } from "../../utils/validadeText";
import InputText from "../../components/InputText";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonText from "../../components/ButtonText";
import Lottie from "lottie-react";
import planetEarth from "../../assets/lotties/lf30_rwpu0mow.json";

function Login() {

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);

    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState(false);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value, name } = event.target;

        if (name === 'email') {
            setEmail(value);
            value === '' ? setErrorEmail(false) : setErrorEmail(!validadeEmail(value));
            return
        }

        setPassword(value);
        value === '' ? setErrorPassword(false) : setErrorPassword(!validadePassword(value));
    };

    return (
        <ContainerLogin>
            <ContentLogin>
                <LottieAnimation>
                    <Lottie animationData={planetEarth} loop={false} style={StyleLottie}/>
                </LottieAnimation>
                <Title>
                    <p>Olá, seja bem vindo(a)</p>
                </Title>
                <SubTitle>
                    <p>
                        Faça login para continuar, ou <Link href="#"> cadastre-se </Link>
                    </p>
                </SubTitle>
                <FormControl>
                    <InputText
                        error={errorEmail}
                        label="Email"
                        messageError={errorEmail ? 'Email inválido' : ' '}
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />

                    <InputText
                        error={errorPassword}
                        label="Senha"
                        messageError={errorPassword ? 'Senha inválida' : ' '}
                        name="password"
                        value={password}
                        onChange={handleChange}
                        type={password}
                        style={{ borderRadius: 5 }}
                    />

                    <ContentButtons>
                        <ButtonPrimary
                            disabled={errorEmail || errorPassword}
                            label="Entrar"
                            onClick={() => { }}
                            size="medium"
                        />

                        <ButtonText
                            disabled={false}
                            label="Esqueci minha senha"
                            onClick={() => { }}
                            size="small"
                        />
                    </ContentButtons>


                </FormControl>
            </ContentLogin>
        </ContainerLogin>
    );
}

export default Login;
