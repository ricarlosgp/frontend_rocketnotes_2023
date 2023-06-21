import styled from 'styled-components';

//estilizando a caixa do NoteItem para ser utilizado na página de NotePreview. Esse NoteItem são as caixas para criar e excluir links úteis
export const Container = styled.div`//criando, estilizando e exportando uma variável do tipo constante/const chamada de Container(posso dar qualquer nome) que recebe de dentro do meu styled um elemento div do meu html e eu posso estilizar essa div através da tag semântica
    display: flex;
    align-items: center;

    //fazendo o background-color condicional. Preenchimento interno da caixa 
    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900}; 
    //se background-color for novo ou isNew ? seu tema/theme será transparente caso contrário : (se for um background já adicionado) seu tema/theme será BACKGROUND_900.

    color: ${({ theme }) => theme.COLORS.GRAY_300}; 

    //fazendo uma borda condicional. 
    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"}; //se a borda for nova ou isNew ? ela será estilizada com 1px de largura, dashed e de cor GRAY_300 caso contrário : não haverá borda ou none

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }
    .button-delete { //adicionando uma div com uma classe chamada de button-delete(.button-delete) para estilizar a cor do meu botão de excluir ou deletar essa classe vai ser utilizada no meu index.jsx. A div com uma classe têm um ponto antes do nome da div class
    color: ${({ theme }) => theme.COLORS.RED}; //a cor do botão de deletar será vermelha
    }
    .button-add {//adicionando uma div com uma classe chamada de button-add(.button-add) para estilizar a cor do meu botão de excluir ou deletar essa classe vai ser utilizada no meu index.jsx
    color: ${({ theme }) => theme.COLORS.ORANGE}; 
    }
    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE}; 
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300}; 
        }
    }
`;