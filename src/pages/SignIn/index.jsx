import { Container } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ImgSignin } from './styles';

import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from './styles';

import { Link } from 'react-router-dom'; //importando Link do react-router-dom para aplicarmos as navegações entre páginas. Será aplicado logo abaixo no export function



export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

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

                <Button title= "Entrar" />

                
                {/* utilizando o Link para navegar na rota /register(essa rota /register faz parte do auth.routes.jsx que é a página de SignUp ) então ao clicar no link Criar conta ele me levará para a página de SignUp para criar minha conta  */}
                <Link to="/register">
                    Criar conta
                </Link>

            </Form>
            <ImgSignin />
            
        </Container>
    )

}










// ANTES DE CRIARMOS AS ROTAS/ROUTES e antes do import { Link }

//export function SignIn() {
//     return (
//         <Container>
//             <Form>
//                 <h1>Rocket Notes</h1>
//                 <p>Aplicação para salvar e gerenciar seus links úteis.</p>

//                 <h2>Faça seu login</h2>

//                 <Input
//                     placeholder="E-mail"
//                     type="text"
//                     icon={FiMail}
//                 />

//                 <Input
//                     placeholder="Senha"
//                     type="password"
//                     icon={FiLock}
//                 />

//                 <Button title= "Entrar" />

//                 <a href="#">
//                     Criar conta
//                 </a>
//             </Form>
//             <ImgSignin />
            
//         </Container>
//     );

// }

/*
A nossa aplicação ainda não tem rotas de navegação ou seja, ela não tem navegação. Irei implementar, mas por enquanto a gente precisa vir aqui na nossa main.jsx e fazer importação aqui da nossa SignIn. 


*/