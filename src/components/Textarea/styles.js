import styled from 'styled-components';

export const Container = styled.textarea` //criando, estilizando e exportando uma variável do tipo constante/const chamada de Container que será do tipo textarea do styled
    width: 100%; //vai ocupar 100% da largura de onde ele estiver
    height: 150px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border: none;
    resize:none; //essa propriedade resize é para o usuário clicar e arrastar o tamanho da caixa. Removendo a propriedade resize para deixar como fixo o tamanho da caixa.

    margin-bottom: 8px;
    border-radius: 10px;
    padding: 16px;

    &::placeholder {//estilizando o placeholder
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }


`;