import { Container } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { SignUpImg } from './styles';

import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from './styles';

import { Link } from 'react-router-dom'; //importando Link do react-router-dom para aplicarmos as navegações entre páginas. Será aplicado logo abaixo no export function


export function SignUp() {
    return (
        <Container>
            <SignUpImg />
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title= "Cadastrar" />


                {/* utilizando o Link para navegar na rota rais do projeto / (essa rota raiz / faz parte do auth.routes.jsx que é a página de SignIn ) então ao clicar no link Voltar para o login ele me levará para a página de SignIn para fazer meu login */}
                <Link to="/">
                    Voltar para o login
                </Link>
            </Form>
            
        </Container>
    )

}

/*
A nossa aplicação ainda não tem rotas de navegação ou seja, ela não tem navegação. Irei implementar, mas por enquanto a gente precisa vir aqui na nossa main.jsx e fazer importação aqui da nossa SignIn. 


*/