//estilização do botão. Após exportar botão iremos importar no index.jsx

import styled from 'styled-components';//importando o styled do styled-components
//styled é uma biblioteca de estilização localizada no styled-components.
// styled-components é uma biblioteca do ecossistema React que permite escrever estilos CSS de forma mais intuitiva e dinâmica e fica no arquivo package.json.
//sempre irei utilizar esse código quando eu tiver .js e .index.jsx

export const Container = styled.button` //exportando uma variável constante chamada de Container que recebe do meu styled um button e dentro da tag semântica irei estilizar o meu button

width: 100%; //largura de 50% da minha página ou tela ou janela. O botão ficará com o tamanho de metade da tela 
background-color: ${({ theme }) => theme.COLORS.ORANGE}; //pegando o theme para botão com a cor laranja da pasta styles
color: ${({ theme }) => theme.COLORS.BACKGROUND_800}; //cor da fonte preta

height: 56px; //altura do botão de 56px
border: 0; //sem borda
padding: 0 16px;
margin-top: 16px; //espaço da margem superior da caixa do botão para o header
border-radius: 10px; //arredondamento dos cantos
font-weight: 500; //texto de tamanho médio

&:disabled {
    opacity: 0.5;
}
/* 
&:hover {
    opacity: 0.5;
} */

`;

