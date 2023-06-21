import styled from 'styled-components';


export const Container = styled.div`
    width: 100%; //ocupando 100% da largura da tela
    height: 100vh; //ocupando 100% do vh da altura da nossa tela do vh

    display: grid;//display grid para o nosso contêiner
    grid-template-rows:105px auto; //criando template de linhas ou grid- template-rows que vai ter uma linha de 105 pixels(para receber o header/cabeçalho) e todo o restante vai ser automático.Lembrando que temos um componente criado para o header/cabeçalho que se repete em outras páginas e nele estilizamos um grid área como header e iremos aproveitar.
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content; //dentro do main no grid-area do content irei ativar o overflow: scroll
        overflow: auto; //vai aparecer a barra de rolagem automaticamente para toda main quando a tela for menor e vai ficar fixo o meu header/cabeçalho
    }

    .tags { //estilizando minha div className chamada de tags
        display: flex; //colocando as tags(react e nova tag) uma ao lado da outra
        justify-content: space-between; //a caixa react vai ficar à esquerda e a tag Nova Tag ao lado direito da caixa do Container
        flex-wrap: wrap; //quando não couber mais caixas na mesma linha(no caso está ocupando duas tags ou dois marcadores por linhas) o flex-wrap: wrap vai jogar para linha debaixo

    }

`;

//criando e exportando uma variável do tipo constante/const chamada de Form que será do tipo form do meu styled. Essa exportação será importada somente no meu arquivo index.jsx da minha página NoteCreate e será estilizada da  seguinte forma:
export const Form = styled.form`
    max-width:550px; //o máximo de largura do meu form será de 550px
    margin: 38px auto; //margem de 38px em cima e em baixo e automático nas laterais

    > header { //estilizando o header de dentro do form
        display: flex;
        align-items: center; //para termos um bom alinhamento na vertical
        justify-content: space-between; //o texto criar nota vai ficar no canto esquerdo e voltar ficará no canto direito de sua caixa

        margin-bottom: 36px; //espaçamento da margem inferior da caixa do header para a margem superior da caixa abaixo ho header

        a {//estilizando o link de dentro do header que é o texto voltar
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};

        }


    }

`;