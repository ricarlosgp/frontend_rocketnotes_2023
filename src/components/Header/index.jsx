//estruturando o Header para ser utilizado nas páginas: Note Preview, Home, Perfil e Note Create 

import { Container } from './styles';
//importando o Container do arquivo styles.js do Header e esse { Container } foi criado e exportado no arquivo styles.js é toda estilização do export const Container = styled.header 
import { Rgpr } from './styles';
//importando o export const Rgpr = styled.div do arquivo styles.js
import { Profile } from './styles';
//importando o componente Profile do styles.js
import { Logout } from './styles'; 
// importando o Logout(botão de logout à direita do header do arquivo styles.js 
import { RiShutDownLine } from 'react-icons/ri'; 
//importando o ícone chamado de {RiShutDownLine} de dentro do react-icons, da biblioteca Remix Icon que está abreviada como ri

export function Header( ){//criando e exportando uma função/function chamada de Header que vai retornar/return:
    return( //retornando o { Container } que foi importado acima e vai receber um componente chamado de Profile que vai conter: uma tag img que iremos buscar dentro da pasta imagens e uma div contendo um span e um strong e como o span e strong estão um abaixo do outro então com a div fica melhor de estilizar.
    //Profile é um componente que vai conter uma img e uma div. Esse componente foi criado e exportado como: export const Profile = styled.div em styles.js.  
    //Logout é um componente que foi criado em  que vai ser utilizado o ícone RiShutDownLine de dentro da biblioteca ri 
        <Container>            
            
              {/* ao clicar em meu Profile ele me redirecionará para a rota de profile(to=/profile) e essa rota /profile é minha página Profile da minha pasta Home */}
            <Profile to="/profile"> 
                <Rgpr />
                <div>                
                    <span> Bem vindo,</span>
                    <strong> Ricarlos Guimarães</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}

