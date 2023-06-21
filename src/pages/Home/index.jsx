/* Desenvolvendo a interface Home
Aplicando Grid na Home
1 - fazer as marcações ou seja: aplicar grid em nossa home
2 - importar os elementos com toda sua estilização do styles.js 
    Container = vai envolver toda aplicação ou seja: toda nossa página que contêm:
        Brand = parte do logo que é o Rocketnotes
        Menu = vai ficar fixo na lateral esquerda(Todos, Frontend, Node, React)
        Search = botão de pesquisar pelo título
        Content = vai ser o conteúdo
        NewNote = botão de +Criar nota
OBS: Sempre que houver um import entre chaves{} é porque houve uma EXPORTAÇÃO NOMEADA ou seja, sem a utilização da palavra default após o export.
OBS: para poder visualizar em tele a página Home lá no main.js eu preciso trocar tudo que contenha NotePreview por Home
*/
import { Header } from '../../components/Header'; //importando o Header da pasta components e da pasta Header
import { ButtonText } from '../../components/ButtonText'; //importando o ButtonText da pasta components e da pasta ButtonText

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'; //importar os elementos com toda sua estilização do styles.js 

import { FiPlus } from 'react-icons/fi'; //importando o FiPlus de dentro do react-icons/fi

import { Input } from '../../components/Input'; //importando o componente de input

import { Section } from '../../components/Section'; //importando
import { Note } from '../../components/Note'; //importando



export function Home(){ //exportando e estruturando uma função chamada de home que vai retornar um Container e dentro desse Container vai conter os elementos: Brand, Header, Menu, Search, Content, NewNote. O elemento Header foi estilizado e estruturado dentro da pasta components na pasta Header e por isso ele abriu e fechou tag nele mesmo <Header /> já os demais componentes serão estilizados e exportados no arquivo styles.js da própria pasta Home e foram importados aqui no index.jsx 
    return(
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header />            

            <Menu>
                {/* criei uma li para cada botão pois eles estão em lista */}

                <li><ButtonText title="Todos" isActive /></li>
                    
                    {/* dentro da coluna de menu(verde) inseri um ButtonTex com tile de Todos */}
             
                
                <li>    
                    <ButtonText title="Reackt" /> {/* dentro da coluna de menu(verde) inseri um ButtonTex com tile de Reackt */}
                </li>

                <li>    
                    <ButtonText title="Nodejs" /> {/* dentro da coluna de menu(verde) inseri um ButtonTex com tile de Nodejs */}
                </li>
                
            </Menu>  

            <Search>
                <Input placeholder="Pesquisar pelo título" />
            </Search>   

            <Content>
                <Section title="Minhas notas">
                    <Note data={{ 
                        title: 'React Modal ou Note', 
                        tags: [
                            {id: '1', name: 'React'},
                            
                        ]
                    }}
                    />
                </Section>

                <Section >
                    <Note data={{ 
                        title: 'Exemplo de Middleware', 
                        tags: [
                            {id: '1', name: 'Express'},
                            {id: '2', name: 'Nodejs'}
                        ]
                    }}
                    />
                </Section>

            </Content>  


           {/* utilizando o Link do export const NewNote = styled(Link) criado no styles.js para navegar na rota: /notecreate (essa /notecreate faz parte do app.routes.jsx que é a página NoteCreate) então ao clicar no botão Criar nota da página Home que agora não é mais um botão e sim um link ele vai me redirecionar para a página de NoteCreate */}
            <NewNote to="/notecreate">
                <FiPlus/>
                Criar nota
            </NewNote>
        
        
        </Container>

    );
}

/*

Esse botão de Criar notas ele só existe nessa tela do Home então não preciso criar um componente para ser reaproveitado. 

Então vamos lá, aqui a gente pode começar aqui importando no nosso index da home:
1 - import { FiPlus } from 'react-icons/fi'; //importando o FiPlus de dentro do react-icons/fi
2 - dentro do NewNote irei utilizar o <FiPlus/> e o texto Criar nota
3 - dentro do arquivo de styles.js faça a estilização no export const NewNote = styled.button

Dentro do Search utilizaremos o <Input placeholder="Pesquisar pelo título" /> que é o botão de buscar/pesquisar e dentro do botão vai conter um placeholder com o texto: Pesquisar pelo título

*/