//estruturando o ButtonText a ser utilizado na página Home. Os ButtonText são os botões do menu: Todos, Reackt e Nodejs
import { Container } from './styles';

export function ButtonText({ title, isActive = false, ...rest }){//exportando e criando uma função que é o componente ButtonText que recebe uma propriedade title pegando qualquer outro restante de propriedade(...rest) que for passar
    return (//vai retornar o Container do tipo button e qualquer tipo de propriedade que venha a existir no ..rest iremos passar para o button e passaremos um título para o button
        <Container
            type="button"
            isActive={isActive}
            {...rest}
        >
            {title}
        </Container>

    );

}

/*
Outra coisa também que a gente vai fazer aqui é o seguinte, laranja só vai ficar o menu ou a opção que estiver ativa(Todos, React ou Nodejs) a opção que não tiver ativa não precisa ficar laranja. 
Será envolvido para essa aplicação: 
1 - index.jsx e styles.js da pasta de ButtonText 
2 - index.jsx da pasta Home onde consta o menu com os botões
Então no ButtonText ire passar outra propriedade no export que eu vou chamar de isActive = false  e essa propriedade isActive irei passar para o meu componente Container como isActive={isActive}. 
Dentro do styles.js do meu botão teste eu consigo recuperar essa informação pegando a propriedade que eu passei pro meu component no color então fica: color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100 }; aqui no color estou fazendo a seguinte condição: se a opção estiver ativo é laranja e se não estiver ativo eu vou aplicar a cor de GRAY_100. 

Na pasta Home em index.jsx irei colocar para o menu chamado de Todos o isActive: <li><ButtonText title="Todos" isActive /></li> e somente o menu ou botão Todos ficou em laranja                                           


*/