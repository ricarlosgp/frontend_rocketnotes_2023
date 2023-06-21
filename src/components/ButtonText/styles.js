import styled from 'styled-components';//importando o styled do styled-components

export const Container = styled.button` //criando e exportando uma constante chamada de Container e dentro dela irei pegar ou receber para exportar de dentro do styled um elemento do tipo button que vai ser estilizada dentro da tag semântica:
    background: none; //sem preenchimento na caixa do botão excluir nota
    color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100 }; 

    border: none;//sem borda para caixa do botão excluir nota
    font-size: 16px;//tamanho da fonte excluir nota

    &:hover {
    opacity: 0.8;
    } 
`;