import styled from 'styled-components';//importando o styled do styled-components
//styled é uma biblioteca de estilização localizada no styled-components.
// styled-components é uma biblioteca do ecossistema React que permite escrever estilos CSS de forma mais intuitiva e dinâmica e fica no arquivo package.json.
//sempre irei utilizar esse código quando eu tiver .js e .index.jsx

export const Container = styled.section` //exportando uma variável constante chamada de Container que recebe do meu styled o section e dentro da tag semântica irei estilizar  o meu section
    //border: dashed 3px red;//caixa das minhas duas seções: Links úteis e Marcadores
    margin: 18px 0; //distância entre a caixa de toda minha section(title e children) para a caixa do parágrafo p é de 28px e distância zero para os lados da caixa section para a caixa do Container
    
    >h2 {//estilizando o Links uteis e Marcadores que são o h2 
        
        border-bottom-width: 3px; //colocando borda inferior na caixa do h2(Links úteis e Marcadores)
        border-bottom-style: solid; //essa linha vai ser sólida
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

        padding-bottom: 16px; //distância interna do texto contendo links https para caixa do h2 que contêm(title e children) e das tags (express e nodeys) para borda inferior da caixa h2 que contêm marcadores e tags
        margin-bottom: 16px; //distância da margem inferior da caixa links úteis para a margem superior da caixa marcadores 

        color: ${({ theme }) => theme.COLORS.GRAY_100 };
        font-size: 20PX; //tamanho da fonte links úteis e marcadores
        font-weight: 400; //fonte regular de 400 para links úteis e marcadores

    }

`;