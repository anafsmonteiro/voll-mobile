import {Button, IButtonProps} from 'native-base'
import {ReactNode} from 'react'

interface ButtonProps extends IButtonProps{
    children: Rea
}

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