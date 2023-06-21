import { Header } from '../../components/Header';//importando o components Header para ser exportado na função NoteCreate abaixo 
import { Input } from '../../components/Input'; //importando o components Input para ser exportado na função NoteCreate abaixo 
import { Textarea } from '../../components/Textarea'; //importando o components Textarea para ser exportado na função NoteCreate abaixo 
import { NoteItem } from '../../components/NoteItem'; //importando o components NoteItem para ser exportado na função NoteCreate abaixo 
import { Section } from '../../components/Section'; //importando o components Section para ser exportado na função NoteCreate abaixo 
import { Button } from '../../components/Button'; //importando o components Button para ser exportado e renderizado na função NoteCreate abaixo 

import { Link } from 'react-router-dom'; //importando Link do react-router-dom para aplicarmos as navegações entre páginas. Será aplicado logo abaixo no export const NewNote. Esse import { Link } terá funcionalidade quando criarmos as rotas ou routes

import {Container} from './styles';
import { Form } from './styles';


export function NoteCreate(){ //criando e exportando uma função para o nosso componente ou para página NoteCreate que vai retornar/return
    return(//retornando o Container estilizado no styles.js que vai renderizar: header
        <Container>
            <Header />

            <main> {/*abaixo do header está minha página principal ou main e dentro do main irei estruturar um Form: */}
                <Form> {/*dentro do form terei um header/cabeçalho que vai conter um h1 e um link que irei colocar como uma barra */}
                    <header>
                        <h1>Criar nota</h1>
                        <Link to ="/">voltar</Link> 
                        {/* quando clicar no Link voltar da página NoteCreate ou Criar nota, ela vai me redirecionar para a página raíz "/" que é a Home */}
                    </header>

                    <Input placeholder="Título" /> {/*importando meu components Input e colocando um place holder de título */}

                    <Textarea placeholder="Observações" /> {/*importando meu components Textarea e colocando um place holder de título Observações. Esse placeholder foi estilizado no components Textarea */}

                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com.br" />
                        <NoteItem isNew placeholder="Novo link"/>
                    </Section>

                    <Section title="Marcadores"> {/*criando uma seção de marcadores e como ela contêm duas tags uma ao lado da outra eu criei uma div className="tags" para poder estilizar no Container=styled.div no style.css */}
                        <div className='tags'>
                            <NoteItem value="react" />
                            <NoteItem isNew placeholder="Nova tag"/>
                        </div>
                    </Section>

                    <Button title="Salvar" />


                </Form>

            </main>
        </Container>

    );


}