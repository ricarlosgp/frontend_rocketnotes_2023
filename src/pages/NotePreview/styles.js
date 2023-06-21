//estilizando toda a página NotePreview. Vale lembrar que os componentes foram todos estruturados e estilizados mais cada página pode fazer sua estilização por exemplo: eu quer que na página de NotePreview o botão de Excluir nota fique do lado direito do Container e não centralizado

import styled from 'styled-components'; //importando o styled do styled-components
//styled é uma biblioteca de estilização localizada no styled-components.
// styled-components é uma biblioteca do ecossistema React que permite escrever estilos CSS de forma mais intuitiva e dinâmica e fica no arquivo package.json.
//sempre irei utilizar esse código quando eu tiver .js e .index.jsx



export const Container = styled.div`//criando, estilizando e exportando uma constante chamada de Container e dentro dela irei pegar ou receber para exportar de dentro do styled um elemento html que é uma div e essa div vai ser estilizada dentro da tag semântica:
   
    //border: dashed 4px white;//caixa de todo meu Container que envolve header + main

    width: auto; //largura(esquerdo e direito) desse container vai ser automático conforme largura da tela. E ele vai se auto ajustar
    height: 100vh; //altura desse container vai ser conforme tamanho da tela de visualização

    display: grid; 
    grid-template-rows: 105px auto; 
    grid-template-areas://primeiro vem o header e depois o content 
    "header" 
    "content";    

    > main {//toda minha janela principal que inclui meu main sem o header 
        
        //border: dashed 5px red ; //caixa da minha janela principal que inclui meu main sem o header 
        grid-area: content; //usando o main para aplicar a região do nosso grid nela
        overflow-y: scroll; //quando meu conteúdo não couber mais na vertical que apareça uma barra de rolar
        padding: 64px 0; //afastamento da margem entre as caixas: header + content é de 64px em cima e abaixo e 0 nas laterais
                
    }
`; 

export const Content = styled.div` //Content são: Button, Links, Marcadores, Tag
   // border: solid 1px white;//caixa que envolve todo o Content
    
    max-width: 550px;//máximo de largura da caixa Content 
    margin: 0 auto; //estratégia para levar minha caixa Content para o centro da minha caixa main. Vai centralizar conforme tamanho da janela e da caixa main. Se eu fizer isso dentro da main ele vai centralizar toda caixa main na caixa do meu container 

    display: flex;//as caixas uma ao lado da outra na horizontal
    flex-direction: column;//as caixas ficarão em colunas. A propriedade flex-direction só funciona quando aplicada a um elemento que tenha o valor display: flex ou display: inline-flex. 

    > button:first-child { //estilizando meu primeiro botão filho que é o Excluir nota.
        //border: dashed 1px white ; //caixa do botão Excluir nota
        align-self: end; //alinhando o botão Excluir nota no lado direito da caixa Content ou seja, no final da linha horizontal.
        margin-bottom: 16px;//afastamento da margem inferior da caixa do botão excluir nota para margem superior da caixa de introdução ao react
    }
    
    > h1 { //estilizando o h1 que é o texto Introdução ao React
       // border: dashed 1px white ;//caixa do texto Introdução ao React que é o h1
        font-size: 36px;//tamanho da fonte
        font-weight: 500;//a espessura da fonte
        padding-top: 64px;//distancia do texto do h1 para sua borda superior
    }

    > p {//estilizando meu parágrafo
        //border: dashed 1px white;//caixa do texto Lorem que é o meu parágrafo p
        font-size: 16px;//tamanho da fonte
        margin-top: 16px;//distância da margem top do p para a margem inferior do h1
        text-align: justify;//justificando o texto dentro da caixa do Content

    }
`;  

export const Links = styled.ul` //criando e exportando um componente para nossa lista chamado de Links que recebe do meu styled uma ul e dentro da tag semântica irei estilizar:
    //border: dashed 1px white ;//caixa contendo meus dois links https
    list-style: none; //removendo marcadores padrão, como pontos ou numeração, de uma lista

    > li {//estilizando minha lista de links https
        
        margin-top: 12px; //distância entre as li

        a {
            color: ${({ theme }) => theme.COLORS.WHITE}; //cor do texto https
                        
        }
    }
    
`; 




/*
//exportando uma variável constante chamada de Container que recebe do meu styled uma div e dentro da tag semântica irei estilizar para minha página NotePreview:
    
    width: 100%; //toda largura da minha página NotePreview terá 100% da tela ocupada 
    height: 100vh; //toda altura terá 100vh ou 100% da altura da tela.  
    
    display: grid; //exibir o Container no formato de grid
    grid-template-rows: 105px auto; //definindo um grid-template-rows pois terei duas linhas na minha página NotePreview sendo uma para o cabeçalho e outra para o conteúdo. A primeira linha terá uma altura de 105px e a restante como auto para ser definida automaticamente pelo conteúdo
    grid-template-areas: //definindo um grid-template-areas para nomear essas linhas que chamarão de header e content
    "header"
    "content"

`;
*/