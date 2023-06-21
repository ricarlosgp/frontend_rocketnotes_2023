//estruturando o botão a ser utilizado na página de NotePreview. Após finalizar a estrutura e estilização, devemos ir em cada pages que vai haver botão e importar em seu index.js 

import { Container } from './styles'; //Sempre que houver uma importação entre chaves{ } é porque houve uma exportação nomeada ou seja, sem a utilização do default após a palavra export. 

export function Button({ title, loading = false, ...rest }) {//exportando function chamada Button que recebe a propriedade title e loading em seu argumento que vai me retornar ou return o meu {Container} (importado acima e que é o button exportado do styles.js) e irei colocar que o tipo desse {Container} é um button e dentro vai receber os meus {title} ou seja, os botões criados em cada página e nesse caso foi na página de NotePreview (botão entrar e cadastrar)
    return (
    <Container 
        type='button'
        disabled={loading}
        {...rest}
    
    > 
        {loading ? 'Carregando...' : title} 
    </Container>
    );
}

/*
if ternário:
Eu posso usar ele aqui, o loading para fazer um if ternário. Um if ternário funciona da seguinte forma, eu vou apagar o {title} e vou fazê-lo assim: {loading ? ‘Carregando...’ : title} (como se eu estivesse perguntando, é verdadeiro ou é falso? Se for verdadeiro, eu quero que apareça a mensagem carregando 3 pontinhos. Se for falso: eu coloco então o conteúdo que eu quero, que no caso é o conteúdo que vem da propriedade title) esse é o famoso if ternário. O primeiro botão fica apagado com 3 pontinhos. Se eu vier aqui no meu index e tirar o loading dele, ele volta ao normal. 
Outra coisa que a gente pode fazer com esse botão, porque o botão ele tem muitas propriedades, várias propriedades, quando você tem muitas propriedades. Se você não quer ficar passando todas as propriedades no export function Button({ title, loading}) que o seu botão tenha, por exemplo, um botão tem a propriedade: de ID, Nome do botão enfim, tem um monte de propriedade e imagina você ter que colocar todas as propriedades uma por uma aqui no export function Button({ title, loading}) para isso, existe o rest operator, o rest operator você coloca assim: ...rest (3 pontinhos rest). No final você o coloca entre chaves {...rest} significando que qualquer outra propriedade que você não tenha deixado explícito aqui no export function Button({ title, loading}), mas tenha sido informada na pasta NotePreview / index.jsx dentro de return, você vai inserir elas aqui no componente Button/index.jsx dentro de return. Então essa é uma estratégia legal. Quando você quer fala assim, olha, eu não quero passar todas as propriedades, então eu sei que o botão tem muitas propriedades, eu quero deixar essas explícitas do export function Button({ title, loading})  mas qualquer outra propriedade passada pode colocar todas elas aqui no return ( {...rest}) repassando dela para os botões.
Então o rest operator ajuda a gente para que a gente não tenha que ficar, é dizendo todas as propriedades possíveis de um botão. Uma boa prática é passar aqui para o nosso loading o false ou seja: export function Button({ title, loading = false, ...rest}) e quando a gente faz isso, a gente está dizendo o seguinte, que caso a propriedade loading ela não seja informada, ou seja, se na pasta de NotePreview / index.jsx a gente não passar o loading, ele vai, então é definir um valor padrão que vai ser o falso/false está então, ou seja, se não foi informado, o padrão é falso para funcionar legalzinho aqui com a nossa verificação é uma boa prática e aí você acaba aprendendo aqui também, como definir um valor padrão para sua propriedade, principalmente quando é uma propriedade opcional, que é o caso do como a gente está tratando, está tratando o loading aqui. 




*/