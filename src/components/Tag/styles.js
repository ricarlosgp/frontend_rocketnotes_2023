import styled from 'styled-components';//importando o styled do styled-components

export const Container = styled.span`//estilizando os botões, as caixas, as tags contendo meu span ou texto
    font-size: 12px; //tamanho da cx tag
    padding: 5px 14px; //5px em cima e embaixo(distância interna do span para borda superior e inferior da tag)  e 14px nas laterais(distância interna da borda esquerda e direita para o texto)
    border-radius: 5px; //curve arredondada da caixa tag
    margin-right: 6px;//distância externa da margem direita da primeira caixa da tag para margem esquerda da segunda caixa da tag
    background-color: ${({ theme }) => theme.COLORS.ORANGE};//cor do preenchimento das tags
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900}; //cor do texto das tags

    &:hover {
    opacity: 0.8;
    } 
`;
