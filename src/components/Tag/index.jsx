import { Container } from './styles';

export function Tag( { title, ...rest }) {//criando e exportando uma função/function do meu componente chamada Tag que recebe como propriedade um título para que cada tag tenha seu próprio título e o retorno dessa função
    return(//vai retornar um Container e dentro dele terei meu título 
        <Container {...rest}>
            {title}
        </Container>
    );

}