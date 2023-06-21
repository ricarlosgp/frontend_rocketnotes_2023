import { createGlobalStyle } from "styled-components";

//createGlobalStyle é uma função fornecida pela biblioteca styled-components que permite criar estilos globais para sua aplicação React.

export default createGlobalStyle` //exportando por default o createGlobalStyle utilizando template literals com backticks

    :root { //com o root element ou :root, estou convertendo 16px para 10px e assim fica melhor de calcular o rem pois ao invés de 1rem valer 16px ele passa a valer 10px e assim fica melhor ao fazer a divisão
        font-size: 62.5%;
    }

    * { //zerando margem e padding
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {//estilizando todo o corpo das páginas(home, notepreview, signin...)
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800}; //estilizando cor de fundo de todo body para cor laranja. Esse {theme} refere-se ao arquivo theme.js global criado em styles. Esse theme.COLORS.ORANGE refere-se que dentro do arquivo theme.js há um COLORS na cor ORANGE
        color: ${({ theme }) => theme.COLORS.WHITE}; //estilizando a cor do texto de todo meu body para BRANCO.Esse {theme} refere-se ao arquivo theme.js global criado em styles. Esse theme.COLORS.WHITE refere-se que dentro do arquivo theme.js há um COLORS na cor WHITE

        -webkit-font-smoothing: antialiased; //propriedade para deixar as fontes suaves
    }

    a { text-decoration: none; } //removendo todo link o underline de todas as páginas
    button, a { cursor: pointer; transition: filter 0,2s; } //todos os botões e todos os links terão essa estilização
    button:hover, a:hover { filter: brightness(0,9); } //para todos os hover de botões e links terão essa mesma aplicação de filter. O hover é quando o cursor do mouse é colocado sobre o botão ou link ou seja, ao passar o mouse por cima. 

`;

