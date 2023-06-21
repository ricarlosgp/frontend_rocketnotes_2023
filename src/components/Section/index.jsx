//esse componente Section são os títulos(Links úteis, Marcadores) com linha abaixo. Quando um elemento se repete ele se torna um components. Children são a lista de links e de tags que estão na horizontal 
import { Container } from "./styles";//importando o Container do arquivo styles.js que foi criado e exportado no arquivo styles.js é toda estilização do export const Container = styled.div 

export function Section({ title, children}){ //exportando e criando função chamada de Section que recebe duas propriedades: title e children que vai retornar/return um container que vai compreender um h2 com uma propriedade {title} que vai renderizar título Links úteis e toda a propriedade children que vai ter uma lista de links https... 
    return (
        <Container>
            <h2>{title}</h2>
            {children} 
        </Container>
    );
}

//todo conteúdo vai entrar através do children e esses conteúdos são:lista de links, tags, border  