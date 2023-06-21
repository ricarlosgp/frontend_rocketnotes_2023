//após estilizar todo o styles.js do meu header eu preciso ir no arquivo de index.jsx para criar a estrutura do styles

import styled from 'styled-components'; //importando o styled do styled-components
//styled é uma biblioteca de estilização localizada no styled-components.
// styled-components é uma biblioteca do ecossistema React que permite escrever estilos CSS de forma mais intuitiva e dinâmica e fica no arquivo package.json.

import RgprJpg from "../../assets/rgpr.jpg" 

import { Link } from 'react-router-dom'; //importando Link do react-router-dom para aplicarmos as navegações entre páginas. Será aplicado logo abaixo no export const NewNote. Esse import { Link } terá funcionalidade quando criarmos as rotas ou routes

//estilizando a caixa do header que contêm: img + bem vindo + nome + botão
export const Container = styled.div` //criando, estilizando e exportando uma variável do tipo constante/const chamada de Container(posso dar qualquer nome) que recebe de dentro do meu styled um elemento html que é uma div e eu posso estilizar essa div através da tag semântica

    background: red; //colocando plano de fundo no header na cor vermelha
    grid-area: header; // fixando o cabeçalho/header ou seja: ao rolar a minha tela o cabeçalho vai ficar fixo

    height: 105px; //altura do cabeçalho de 105px
    width: 100%;  //largura de 100% para ocupar do que estiver disponível na tela

    border-bottom-width: 1px; //definindo a largura/width da borda/border inferior/bottom do header para 1px. É a linha inferior da caixa ou retângulo do header
    border-bottom-style: solid; //definindo o estilo de linha da borda inferior como sólido ou seja: não vai ser tracejado ou ponteado
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; //definindo a cor de linha da borda inferior a partir do theme para BACKGROUND_700

    display: flex; //dentro do meu header/cabeçalho os elementos serão organizados em linha
    justify-content: space-between; //Os itens são distribuídos uniformemente dentro do contêiner de alinhamento ao longo do eixo principal. Nesse caso os container: Profile e Logout irão ficar alinhados à esquerda(Profile) e à direita o (botão sair). Para utilizar o justify-content primeiro temo que colocar o display:flex
    
    padding: 0 80px; //preenchimento zerado em cima e embaixo e 80 px nas laterais(esquerdo e direito).A caixa do profile(foto + span + strong) e a caixa do botão Logout terão espaçamento superior e inferior de zero e laterais esquerdo e direito de 80px
        
`;
export const Profile = styled(Link)` //exportando e criando uma const chamada Profile(caixa de cor verde) que recebe uma estilização ou styled um (Link) que foi importado lá em cima para redirecionar para a pagina de profile 
    background:green; //cor de preenchimento da caixa profile
    
    display: flex; //os itens da caixa Profile(caixa de cor verde) são posicionados de maneira sequencial da esquerda para a direita horizontalmente    
    align-items: center; //os itens contido na caixa Profile(de cor verde) serão alinhados ao centro da caixa Profile
         
    > div { //pegando a primeira > div do Profile e estilizando. Essa div contêm o span e strong
        //background: orange ; //cor da caixa div
        display: flex;
        flex-direction: column; //direção flexiva da div será em coluna ou seja, os itens span e strong serão empilhados verticalmente.
        margin-left:16px; //deslocando a margem esquerda da caixa div para 16px e ao fazer isso toda a caixa Profile de cor verde irá aumentar a largura para direita
        line-height: 24px; //espaçamento entre span(bem vindo) e strong(ricarlos guimarães) 

        span { //estilizando meu span(Bem vindo,)
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong { //estilizando meu strong(Ricarlos Guimarães)
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
}  

`;

//criando e exportando um novo componente chamado de Rgpr que recebe do styled uma div para melhor estilizar a imagem na tela. 
export const Rgpr = styled.div` 
    background: url(${RgprJpg}); ////através do background irei renderizar a imagem pegando ela pela url ( url(${RgprJpg})) através da importação feita lá em cima(import RgprJpg from '../../assets/rgpr.png';) 
    background-size: cover; //para a imagem ficar bem preenchida 
    border-radius: 50%;
    height: 96px; //altura da imagem
    width: 96px;  //largura da imagem
   
`;

export const Logout = styled.button`//exportando e criando uma const chamada Logout(botão de logout à direita do header) que recebe uma estilização ou styled do tipo button e dentro da tag semântica irei estilizar o meu botão da seguinte forma:
    background: green; 
    border: none; 

    > svg { //o botão é um svg e está dentro de Logout com nome de RiShutDownLine em index.jsx 
        color: ${({ theme }) => theme.COLORS.GRAY_100}; //cor do botão
        font-size: 36px; //tamanho do botão        
    }   
   
`; 



