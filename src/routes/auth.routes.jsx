/* 
React Router Dom (https://v5.reactrouter.com/web/guides/quick-start) é uma  biblioteca de dependência para aplicar navegação dentro do nosso projeto e para instalar use o terminal com o comando: react-router-dom. Após instalação ela fica dentro do package.json em dependencies. Antes da instalação, não tínhamos rotas e nem navegação na nossa aplicação e nenhum botão estava funcionando. Tanto que, conforme a gente foi criando as páginas para a gente ver como as páginas estavam ficando, a gente estava mudando manualmente no arquivo main.jsx.
Existe dois tipos de rotas:
1 - a rota da nossa aplicação chamada de app.routes.jsx
As rotas da aplicação ou app.routes.jsx são rotas que teremos acesso as telas de cadastro (Home, Note Preview, Perfil e Note Create). É legal o usuário acessar as rotas de aplicação quando ele estiver logado. Para evitar que o usuário consiga acessar páginas indevidas, criaremos duas rotas(rota de aplicação e autenticação) 
2 - as rotas de autenticação chamada de auth.routs.jsx - As rotas de autenticação são as telas de login(SignIn e SignUp) e é quando o usuário não está logado. 

*/ 

import { Routes, Route } from 'react-router-dom'; //importando o Routes e Route do meu react-router-dom após instalar utilizando o comando npm install react-router-dom


//importando as páginas que fazem parte das rotas de autenticação chamada de auth.routs.jsx(SignIn e SignOut)
import { SignIn } from '../pages/SignIn'; 
import { SignUp } from '../pages/SignUp'; 


export function AuthRoutes() { //criando e exportando uma função chamada AuthRoutes que vai retornar um componente Routes  
    return ( //retornando o componente Routes(importado lá em cima) que vai envolver todas as minhas rotas e para cada Rota/Route(importada lá em cima) eu passo o endereço em barra / que será meu SignIn e o endereço com barra /register que será meu SignUp renderizando o elemento que são minhas páginas da rota
        <Routes > 
            <Route path="/" element={<SignIn />} /> 
            <Route path="/register" element={<SignUp />} /> 
             
        </Routes>
    )
}

