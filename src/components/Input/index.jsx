//estruturando o Input para ser utilizado nas páginas: Home(botão de pesquisar pelo título), Perfil(nome, email, Senha atual e Nova senha), Note Create(título, observações....), SignIn e SignUp. Os ícones e texto dentro do Input não é colocado nessa pasta e sim em cada página do projeto. Aqui é somente a estrutura e estilização da caixa do React Modal ou Note   

import { Container} from './styles';

export function Input({icon: Icon, ...rest}){//criando, estruturando uma função chamada de Input que vai ter como propriedade um icon(que vai ser convertido para Icon em maiúsculo para poder usar ele como componente no return) que vai pegar todo o rest/restante que vai retornar/return um Container que receberá o input e passo para esse input todas as propriedades possíveis para ele mesmo através do <input {...rest}/> essas propriedades do input são por exemplo: tipo de input se são text, email etc.  
    return(
        <Container>
            {Icon && <Icon size={20} />}
            <input {...rest}/>
        </Container>
    )
}


/*
Nem todo o input vai ter ícone. Tem input que vai ter ícone como por exemplo: o input de nome, e-mail e senha.
O input de buscar/pesquisar não tem ícone. Então eu posso fazer o seguinte no return:  se existir o ícone(Icon &&) aí sim eu mostro ele com tamanho de 20(<Icon size={20}) casso contrário não mostrarei. {Icon && <Icon size={20} />}

*/