import { ContainerLogin, ContentLogin, FormControl, Title, Link, SubTitle, ContentButtons } from "./style"
import { useState } from 'react';
import { validadeEmail, validadePassword } from "../../utils/validadeText";
import InputText from "../../components/InputText";
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonText from "../../components/ButtonText";

function Login() {

    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);

    const [password, setPassword] = useState('');
    const [errorPassword, setErrorPassword] = useState(false);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value, name } = event.target;

        if (name === 'email') {
            setEmail(value);
            value === '' ? setErrorEmail(false) : setErrorEmail(!validadeEmail(email));
            return
        }

        setPassword(value);
        value === '' ? setErrorPassword(false) : setErrorPassword(!validadePassword(password));
    };

    return (
        <ContainerLogin>
            <ContentLogin>
                <Title>
                    <p>Bem vindo novamente</p>
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
                        messageError={errorEmail ? 'Email inválido' : ''}
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />

                    <InputText
                        error={errorPassword}
                        label="Senha"
                        messageError={errorPassword ? 'Senha inválida' : ''}
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />

                    <ContentButtons>
                    <ButtonPrimary
                        disabled={errorEmail || errorPassword}
                        label="Entrar"
                        onClick={() => { }}
                        size="medium"
                    />

                    <ButtonText
                        disabled={errorEmail || errorPassword}
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
