/* 
React Router Dom (https://v5.reactrouter.com/web/guides/quick-start) é uma  biblioteca de dependência para aplicar navegação dentro do nosso projeto e para instalar use o terminal com o comando: react-router-dom. Após instalação ela fica dentro do package.json em dependencies. Antes da instalação, não tínhamos rotas e nem navegação na nossa aplicação e nenhum botão estava funcionando. Tanto que, conforme a gente foi criando as páginas para a gente ver como as páginas estavam ficando, a gente estava mudando manualmente no arquivo main.jsx.
Existe dois tipos de rotas:
1 - a rota da nossa aplicação chamada de app.routes.jsx
As rotas da aplicação ou app.routes.jsx são rotas que teremos acesso as telas de cadastro (Home, Note Preview, Perfil e Note Create). É legal o usuário acessar as rotas de aplicação quando ele estiver logado. Para evitar que o usuário consiga acessar páginas indevidas, criaremos duas rotas(rota de aplicação e autenticação) 
2 - as rotas de autenticação chamada de auth.routs.jsx - As rotas de autenticação são as telas de login(SignIn e SignUp) e é quando o usuário não está logado. 

*/ 

import { Routes, Route } from 'react-router-dom'; //importando o Routes e Route do meu react-router-dom após instalar utilizando o comando npm install react-router-dom


//importando as páginas que fazem parte das rotas de aplicação ou app.routes.jsx (Home, NoteCreate, NotePreview e Profile)
import { Home } from '../pages/Home'; 
import { NoteCreate } from '../pages/NoteCreate'; 
import { NotePreview } from '../pages/NotePreview'; 
import { Profile } from '../pages/Profile';

export function AppRoutes() { //criando e exportando uma função chamada AppRoutes que vai retornar um componente Routes  
    return ( //retornando o componente Routes(importado lá em cima) que vai envolver todas as minhas rotas e para cada Rota/Route(importada lá em cima) eu passo o endereço em barra / renderizando o elemento que são minhas páginas da rota
        <Routes > 
            <Route path="/" element={<Home />} /> 
            <Route path="/notecreate" element={<NoteCreate />} /> 
            <Route path="/notepreview/:id" element={<NotePreview />} /> 
            <Route path="/profile" element={<Profile />} /> 

        </Routes>
    )
}

/*
<Route path="/notepreview/:id" element={<NotePreview />} /> - a página de NotePreview eu preciso do código, da nota para eu poder exibir ela e por isso passei um parâmetro de id ("/notepreview/:id") para poder recuperar o parâmetro passado pela rota  
<Route path="/" element={<Home />} /> - renderizando ou exibindo a minha página Home



*/