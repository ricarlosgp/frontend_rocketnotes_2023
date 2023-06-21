//o Textarea será importando na página de NoteCreate

import { Container } from './styles';

export function Textarea({ value, ...rest}){ //criando,estruturando e exportando uma função para meu components Textarea que recebe em sua propriedade um valor/value e todo o restante ou ...rest que vai retornar/return
    return( //retornar um Container pegando todo restante ou ...rest da propriedade e retornando também o valor/value que vai ser digitado para o Textarea 
        <Container {...rest}>
            { value }

        </Container>

    );
}