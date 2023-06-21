import styled from 'styled-components';

export const Container = styled.div` //criando Container como div e não como input pois no index.jsx eu terei como propriedade um ícone
    width: 100%; //vai ocupar sempre 100% de largura de onde ele estiver disponível.
    display: flex;//fazer alinhamento dos meus elementos
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900 } ;
    color: ${({ theme }) => theme.COLORS.GRAY_300 } ;

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%; //vai ocupar sempre 100% de largura de onde ele estiver disponível.

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE } ;
        background: transparent; //como ja apliquei no meu container um background 
        border: 0; //removendo bordas do ícone

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300 } ;
        }       

    }
    > svg {
            margin-left: 16px; 
    }
`;


