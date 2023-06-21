import styled from 'styled-components';
import imgsignin from '../../assets/imgdelogin.png'; //importando e nomeando a importação de imgsignin que vai receber de dentro da pasta assets a imagem chamada de imgdelogin.png 

export const Container = styled.div`

    height: 100vh;

    display: flex;
    align-items: stretch;
    
`;

export const Form = styled.form`
    
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text-align: center;

    > h1 {
        font-size: 48px;
        color: ${({ theme }) => theme.COLORS.ORANGE};
    }

    > h2 {
        font-size: 24px;
        margin: 48px 0;
    }

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    > a {
        margin-top: 124px;
        color: ${({ theme }) => theme.COLORS.ORANGE};

    }
`;

export const ImgSignin = styled.div` //exportando e criando um novo componente chamado de ImgSignin que recebe do styled uma div para melhor estilizar a imagem na tela
    flex: 1; //a imagem ImgSignin vai ocupar todo espaço disponível que sobrou após criar o Form(h1+h2+p+a)
    background: url(${imgsignin}) no-repeat center center; //através do background irei renderizar a imagem pegando ela pela url ( url(${imgsignin})) através da importação feita lá em cima(import imgsignin from '../../assets/imgdelogin.png';) buscando pelo nome da iportação que é imgsignin estou pedindo para que a imagem não se repita e vou centralizar ela (no-repeat center center) 
    background-size: cover; //para a imagem ficar bem preenchida no espaço que foi reservado para ela

`;