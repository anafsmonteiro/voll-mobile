import {Button} from 'native-base'
import {ReactNode} from 'react'

interface ButtonProps extends IdButton

export function Botao(){
    return(
        <Button
        w='100%'
        bg='blue.800'
        mt={10}
      >
        Entrar
      </Button>
    )
}