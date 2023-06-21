/*
Main é o principal arquivo e sem ele não conseguimos renderizar as páginas. 
O nome do import fica a critério do desenvolvedor porém o ideal é colocar com o mesmo nome do component, page ou arquivo a ser importado
Sempre que houver uma importação entre chaves{} é porque houve uma exportação sem a utilização do default após a palavra export. 
import React from 'react'; //importando o React do próprio react. React é uma biblioteca JavaScript. Uma das principais características do React é o uso do Virtual DOM (DOM Virtual). Essa biblioteca react fica na pasta node_modules dentro da pasta react.

Como postar a página do projeto para todos terem acesso e conseguir abrir?
* No GitHub faça:
1 - crie um Repository Name no GitHub do tipo Público para postar todo o projeto
* No terminal VSC do projeto faça o GIT
1 - git init 
2 - git add .
3 - git commit -m "publicando"
4 - git branch -M main  
5 - git remote add origin https://github.com/ricarlosgp/frontend_rocketnotes_2023.git
6 - git push -u origin main 
* Abra o site https://app.netlify.com/start para publicar a página
1 - acesse com a conta do GitHub
2 - Em Team overview na opção Sites em Import an existing project, clica em GitHub e localize o projeto, repositório criado que foi: frontend_rocketnotes_2023 e configure:
    2.1 Owner = rocketseat
    2.2 Branch to deploy = main
    2.3 Base directory
    2.4 Build command = npm run build
    2.5 Publish directory = dist
3 - clica em Deploy site 
4 - Production deploys aguarde a mensagem de Deploy success! Clica em View
5 - Na guia Deploys em Deploy log - ver processo de publicação.
6 - 
*/
import ReactDOM from 'react-dom/client'; //ReactDOM é uma biblioteca do React que fornece métodos e funcionalidades para manipular o DOM (Document Object Model) e atualizar dinamicamente os elementos da interface com base no estado dos componentes. Ou seja, ReactDOM é uma biblioteca para manipular os elementos que fazem parte da página 

import { ThemeProvider } from 'styled-components'; //importando o ThemProvider de dentro do 'styled-components' e o ThemProvider é uma biblioteca que vai prover um tema global que vai ser o theme.js
import theme from './styles/theme'; //importando o theme.js de styles
import GlobalStyles from './styles/global'; //importando o {createGlobalStyle} da pasta styles e do arquivo global.js

import { Routes } from './routes'; //importando {Routes} que foi exportada do index.jsx da pasta routes

ReactDOM.createRoot(document.getElementById('root')).render(//O react está utilizando o ReactDOM para selecionar e pegar dentro do meu document um elemento pelo ID e o nome desse elemento é o root que vai ser renderizado, que vai ser inserido ali um conteúdo que iremos inserir dentro de <React.StrictMode> e para comentar dentro do <React.StrictMode> inserimos entre chaves o comentário {/* */}   
  <React.StrictMode>
    <ThemeProvider theme={ theme }> {/* estou aplicando o theme.js que é global para os componentes abaixo:*/} 
      <GlobalStyles /> {/*renderizando meus estilos global*/ }
      <Routes /> {/*renderizando minha Routes qeu será a Home como principal e para mudar de página terei que colocar no nome no navegador*/ }
         
    </ThemeProvider>    
  </React.StrictMode>
)















// ANTES DA CRIAÇÃO RAS ROTAS/ROUTES

//import { SignIn } from './pages/SignIn'; // importando o SignIn de dentro do components/SignIn
// //import { SignUp } from './pages/SignUp'; // importando o SignIn de dentro do components/SignIn

// //import { NotePreview } from '../src/pages/NotePreview' //importando para renderizar ou visualizar em tela toda minha página NotePreview de src/pages/NotePreview. Para renderizar ou visualizar a page Home eu preciso comentar esse import e descomentar o import de Home

// //import { Home } from '../src/pages/Home' //importando para renderizar ou visualizar em tela toda minha página Home de src/pages/Home. Para renderizar a page NotePreview eu preciso comentar esse import e descomentar o import de NotePreview
// //import { Header } from './components/Header';
// //import { Profile } from './pages/Profile'; // importando o SignIn de dentro do components/SignIn
// import { NoteCreate } from './pages/NoteCreate'; // importando o componente ou página NoteCreate

// ReactDOM.createRoot(document.getElementById('root')).render(//O react está utilizando o ReactDOM para selecionar e pegar dentro do meu document um elemento pelo ID e o nome desse elemento é o root que vai ser renderizado, que vai ser inserido ali um conteúdo que iremos inserir dentro de <React.StrictMode> e para comentar dentro do <React.StrictMode> inserimos entre chaves o comentário {/* */}   
//   <React.StrictMode>
//     <ThemeProvider theme={ theme }> {/* estou aplicando o theme.js que é global para os componentes abaixo:*/} 
//       <GlobalStyles /> {/*renderizando meus estilos global*/ }
//       {/*<Header />*/}
//       {/*<NotePreview /> {/*estou comentando o NotePreview para não renderizar em tela e sim o Home*/}     
//       {/*<Home /> {/*estou comentando o Home para não ser renderizado em tela e sim o SignIn*/}
//       {/*<SignIn /> {/*estou comentando o SignIn para não ser renderizado em tela e sim o SignUp*/}
//       {/*<SignUp /> {/*estou comentando o SignUp para não ser renderizado em tela e sim o Profile*/}
//       {/*<Profile /> {estou comentando o Profile para não ser renderizado em tela e sim o NoteCreate*/}
//       <NoteCreate />
         
//     </ThemeProvider>    
//   </React.StrictMode>
// )

