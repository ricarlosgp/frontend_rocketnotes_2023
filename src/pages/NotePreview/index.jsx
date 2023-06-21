import { Container} from './styles'; //importando toda estilização do Container do arquivo styles.js do NotePreview e esse { Container } foi criado e exportado no arquivo styles.js é toda estilização do export const Container = styled.div 
import { Content } from './styles'//importando toda estilização do Content do arquivo styles.js do NotePreview e esse { Content } foi criado e exportado no arquivo styles.js é toda estilização do export const Content = styled.div 
import { Links } from './styles'; //importando toda estilização do Links do styles.js da minha pasta NotePreview através do export const Links 

import { Header } from '../../components/Header'; //importando todo components { Header } da pasta Header incluindo sua estrutura e estilização
import { Button } from '../../components/Button'; //importando todo components { Button } da pasta Button incluindo sua estrutura e estilização
import { Section } from '../../components/Section'; //importando todo components { Section } da pasta Section incluindo sua estrutura e estilização
import { Tag } from '../../components/Tag'; //importando todo components { Tag } da pasta Tag incluindo sua estrutura e estilização
import { ButtonText } from '../../components/ButtonText'; //importando todo components { ButtonText } da pasta ButtonText incluindo sua estrutura e estilização


export function NotePreview() { //criando e exportando uma função/function chamada de NotePreview(o nome da função têm que ser idêntico ao nome da pages NotePreview) que vai retornar/return a seguinte estrutura para ser exportada:

    return ( //retornando um { Container } que será estruturado recebendo o component: Header(que foi exportado da pasta Header através do export function Header) e irei estruturar um main. 
    //O Header foi feita a estrutura e estilização separado e importado aqui no NotePreview por isso ele abriu e fechou tag nele mesmo <Header />    
    //O main recebe: Content
    //O Content recebe: ButtonText title + h1 + p + Section title(que recebe Links + li + tag) + Button title
    
        <Container> 
            <Header />
            <main>
                <Content>           
                    <ButtonText title="Excluir nota"/>

                    <h1>
                        Introdução ao React
                    </h1>

                    <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus harum repellat nihil a. Libero magnam eum amet. Atque natus, esse magnam aut, ratione assumenda quia nam, veritatis doloribus totam illo.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet alias minus possimus modi sequi quaerat ipsam sapiente odit incidunt, eaque quos aperiam suscipit non. 
                    </p>

                    <Section title="Links úteis">
                        <Links>
                            <li><a href="#">https://www.rocketseat.com.br/"</a></li>
                            <li><a href="#">https://www.rocketseat.com.br/"</a></li>
                            
                        </Links>
                    </Section>
                    
                    <Section title="Marcadores">
                        <Tag title="express"/>
                        <Tag title="nodejs"/>                             
                        
                    </Section>

                    <Button title="Voltar" />
                </Content>
            </main>                                        
        </Container>
    )
}

/*
<Container>
            <Header /> 

            <Section title="Links úteis"> //tudo que está dentro da Section title será capturado pelo children
                 <Links>
                    <li><a href="#">https://www.rocketseat.com.br/"</a></li>
                    <li><a href="#">https://www.rocketseat.com.br/"</a></li>
                    
                </Links>
            </Section>

            
            <Button title="Login" loading /> //esse loading é uma propriedade booleana para o botão e quando ela estiver ativa ou seja, quando estiver carregando ele vai mudar o título para carregando e o botão vai ficar desabilitado para impedir que o usuário fique clicando   
            <Button title="Cadastrar" />
            <Button title={10} />
             
                                        
        </Container>


*/