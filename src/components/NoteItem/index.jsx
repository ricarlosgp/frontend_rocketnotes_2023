//estruturando o NoteItem para ser utilizado na página de NotePreview. Esse NoteItem são as caixas para criar e excluir links úteis

import { FiPlus, FiX } from 'react-icons/fi'; //importando dois ícones de dentro do react-icons/fi

import { Container } from './styles';

export function NoteItem({ isNew, value, onClick, ...rest}){
    //criando, estruturando e exportando através de ma função/function o meu components NoteItem e essa função vai receber as propriedades: isNew(para adicionar um novo item), value(um valor), onClick() e todo restante(...rest). Essa função vai me retornar

    return (//retornar o Container(importado acima) e passando para ele a propriedade {isNew} para dentro do styled-components a ser utilizado. Dentro do Container irei utilizar um input com a seguinte estrutura: vai ser do tipo/type text que receberá um valor/value da propriedade {value} que será somente leitura ou readOnly (pois para um item que já foi adicionado eu não irei permitir edição ou editar. Quero que fique somente leitura) então, !isNew(se não é novo, pode bloquear) e passo ainda para meu input o ...rest.  
        <Container isNew={isNew}>
            <input 
                type="text"
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            {/* o button terá a seguinte estrutura: vai ser do tipo/type um button, irá receber a propriedade {onClick} */ }
            <button 
                type="button"
                onClick={onClick}
                className={isNew ? 'button-add' : 'button-delete'}
            >
                    
                {isNew ? <FiPlus /> : <FiX />} 
                {/* se for novo(isNew ?) irei renderizar o FiPlus para aparecer o ícone de adicionar caso contrário : eu quero que apareça o ícone Fix que é o de fechar  */}
            
            </button>

        </Container>

    );
}
