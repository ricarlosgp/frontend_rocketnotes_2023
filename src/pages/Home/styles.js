import styled from 'styled-components'; /*
Sempre irei utilizar essa importação no início de todos os demais styles.js. Styled é uma biblioteca de estilização localizada no styled-components. É uma biblioteca do ecossistema React que permite escrever estilos CSS de forma mais intuitiva e dinâmica e fica no arquivo package.json.

Dica de produção: E aqui eu vou te ensinar um truque de produtividade eu vou vir aqui no index e vou copiar todos os meus elementos(,, Brand, Menu, Search, Content, NewNote) e colo eles aqui, vou colocar cada um deles em uma linha separados por vírgula. Ex:
,,
Brand,
Menu,
Search,
Content,
NewNote,
Agora eu faço assim, pega a primeira vírgula e vá apertando control D que vai selecionando todas as vírgulas e apago as vírgula. Aperta o home para todos irem para o começo do texto e agora digita: export const que vai ser ser digitado em todos os elementos de uma só vez. Aperta a tecla end para ir para o final dos textos e coloca = styled.div``; e enter. Vai ser digitado em todos os elementos e espaço entre ele e agora eu só mudo o que cada elemento vai ser por ex: o menu vai ser uma ul e etc.
*/

import { Link } from 'react-router-dom'; //importando Link do react-router-dom para aplicarmos as navegações entre páginas. Será aplicado logo abaixo no export const NewNote. Esse import { Link } terá funcionalidade quando criarmos as rotas ou routes



//Aqui irei estilizar todo o meu Container junto com a grid-areas. As estilizações de cada elemento foi feito em components

//estilizando todo o meu Container que vai receber: brand, header, menu, search, content e newnote.
export const Container = styled.div` // declarando,estilizando e exportando uma constante chamada de Container(área que contêm meu brand, header, menu, search, content e newnote ou seja meu body) e dentro dela irei pegar ou receber para exportar de dentro do styled uma div que vai ser estilizada de dentro da tag semântica.
        
    width: 100%; //meu Container recebe uma largura de 100% do tamanho da minha tela
    height: 100vh; //meu Container recebe uma altura da 100vh ou 100 viewport (janela de visualização) do navegador. Ou seja, 100vh representa 100% da altura da janela do navegador, independentemente do tamanho do conteúdo dentro dele.

    display: grid; //A propriedade display: grid; é usada para criar um layout de grade (grid) em CSS. Quando aplicada a um elemento, essa propriedade transforma esse elemento em um container de grade, permitindo que seus elementos filhos sejam organizados em linhas e colunas.
    grid-template-columns: 250px auto; //Aqui estou definindo duas colunas dentro do meu Container. A primeira coluna contêm o grids: vermelho(Rocketnotes), verde(são os menu) e grid amarela(contêm o newnote ) e terá a largura de 250px. A segunda coluna contêm os grids: search e content e terá a largura automática conforme largura da tela. OBS: O grid do Header foi definido como fixo lá na pasta de components, na pasta Header e no aquivo styles.js como grid-area: header.
     
    grid-template-rows: 105px 128px auto 64px;//Especifica a altura das linhas na grade ou altura das caixas de cada grid na horizontal ou em linha. Aqui temos: 105px altura da linha do grid ou da caixa do grid de cabeçalho(vermelho + Header). 128 px altura da linha do grid ou da caixa do grid rosa(search). Auto é altura automática da linha do grid ou da caixa do grid de cor verde(menu). 64px altura da linha do grid ou da caixa do grid de cor amarela(newnote).
    grid-template-areas: //Especifica a disposição dos elementos filhos usando nomes de áreas ou seja,irei distribuir as áreas do meu grid na horizontal da seguinte forma: primeiro: o brand e header, segundo: os menu e search, terceiro: o menu e content, quarto: newnote e content
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

`;

//estilizando a grid-area que contêm a marca ou logo Rocketnotes
export const Brand = styled.div` //Brand = marca 
    grid-area: brand; 
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};  // era vermelha/red 

    display: flex; //essa propriedade transforma o elemento em um container flexível, permitindo que seus elementos filhos sejam organizados em uma única linha ou coluna. Existem cinco tipos de display: block, inline-block, none, flex, e grid.
    justify-content: center ; //Para usar o justify-content é obrigatório utilizar o display. O justify-content Controla o alinhamento dos elementos ao longo do eixo principal do container flexível, podendo ser "flex-start" (início), "flex-end" (fim), "center" (centro), "space-between" (espaçados igualmente), "space-around" (espaçados com espaço adicional) ou "space-evenly" (espaçados igualmente, inclusive nas extremidades).
    align-items: center; //Para usar o align-items é obrigatório utilizar o display. O align-items controla o alinhamento dos elementos ao longo do eixo cruzado do container flexível, podendo ser "flex-start" (início), "flex-end" (fim), "center" (centro), "baseline" (alinhamento pela linha-base) ou "stretch" (esticado para preencher o espaço disponível).

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700}; //estilizando a borda inferior da caixa vermelha(logo Rocketnotes). A largura da borda é de 1px, linha sólida e não tracejada/dashed e a cor da borda é BACKGROUND_700

    > h1 { //estilizando h1(texto Rocketnotes) de dentro do Brand
        font-size: 24px; //tamanho da fonte
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }
   
`;

//estilizando a grid-area Menu que contêm os ButtonText(Todos, Reackt e Nodejs) 
export const Menu = styled.ul`
    grid-area: menu; 
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};  // era verde
    
    padding-top: 64px;//distância do botão(Todos Reackt Nodes) para margem superior de sua caixa
    text-align: center;//centralizei todos os botões ao centro de sua caixa

    > li {
        margin-bottom: 24px;//distância das margens inferior de cada caixa li de uma para outra são de 24px
    }
`;

//estilizando a grid-area Search que contêm dentro de sua área ou caixa o botão de Pesquisar pelo título. 
export const Search = styled.div`
    grid-area: search; 
    padding: 64px 64px 0; //64 acima, 64 dos lados e zero abaixo
    
`;

//estilizando a grid-area Content que contêm dentro de sua área ou caixa: Minhas Notas, React Modal e Exemplo. 
export const Content = styled.div`
    grid-area: content;   
    padding: 0 64px; //zero acima e abaixo e 64 dos lados 
    overflow-y: auto; //a barra de rolagem vertical ou em y irá aparecer automaticamente
    
`;

//estilizando a grid-area NewNote que contêm dentro de sua área um ícone + e um Link de Criar nota. Esse (Link) foi importado lá em cima e somente podemos utilizar dessa forma após criar a pasta routes ou rotas 
export const NewNote = styled(Link)`
    grid-area: newnote; 
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    

    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
    opacity: 0.8;
    } 
 
    svg {
        margin-right: 8px;
    }

`;


/*
        A propriedade display: grid; 

É usada para criar um layout de grade (grid) em CSS. Quando aplicada a um elemento, essa propriedade transforma esse elemento em um container de grade, permitindo que seus elementos filhos sejam organizados em linhas e colunas.

Ao definir display: grid;, é possível usar outras propriedades relacionadas ao grid para controlar o comportamento e a aparência dos elementos dentro do container de grade. Algumas dessas propriedades incluem:

grid-template-rows: Especifica a altura das linhas na grade.
grid-template-columns: Especifica a largura das colunas na grade.
grid-template-areas: Especifica a disposição dos elementos filhos usando nomes de áreas.
grid-row-gap (ou gap): Define o espaçamento vertical entre as linhas da grade.
grid-column-gap (ou gap): Define o espaçamento horizontal entre as colunas da grade.
grid-auto-rows: Define a altura automática das linhas não especificadas explicitamente.
grid-auto-columns: Define a largura automática das colunas não especificadas explicitamente.
grid-auto-flow: Controla como os elementos filhos são automaticamente posicionados na grade.

        A propriedade display: flex;

É usada para criar um layout flexível em CSS. Quando aplicada a um elemento, essa propriedade transforma esse elemento em um container flexível, permitindo que seus elementos filhos sejam organizados em uma única linha ou coluna. Ao definir display: flex;, é possível usar outras propriedades relacionadas ao flexbox para controlar o comportamento e a aparência dos elementos dentro do container flexível. Algumas dessas propriedades incluem:

flex-direction: Define a direção principal do fluxo dos elementos dentro do container flexível, podendo ser "row" (linha), "column" (coluna), "row-reverse" (linha reversa) ou "column-reverse" (coluna reversa).
flex-wrap: Define se os elementos filhos devem ser quebrados em múltiplas linhas ou colunas quando não couberem no container flexível, podendo ser "nowrap" (não quebrar), "wrap" (quebrar) ou "wrap-reverse" (quebrar em ordem reversa).
justify-content: Controla o alinhamento dos elementos ao longo do eixo principal do container flexível, podendo ser "flex-start" (início), "flex-end" (fim), "center" (centro), "space-between" (espaçados igualmente), "space-around" (espaçados com espaço adicional) ou "space-evenly" (espaçados igualmente, inclusive nas extremidades).
align-items: Controla o alinhamento dos elementos ao longo do eixo cruzado do container flexível, podendo ser "flex-start" (início), "flex-end" (fim), "center" (centro), "baseline" (alinhamento pela linha-base) ou "stretch" (esticado para preencher o espaço disponível).
align-content: Controla o alinhamento das linhas ou colunas do container flexível ao longo do eixo cruzado, quando há várias linhas ou colunas, podendo ter os mesmos valores do justify-content.



*/