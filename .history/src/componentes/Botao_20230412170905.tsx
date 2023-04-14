import {Button, IButtonProps} from 'native-base'
import {ReactNode} from 'react'

interface ButtonProps extends IButtonProps{
    children: ReactNode,
    autoSize?: boolean,
    color?: string
}

export function Botao({children, autoSize, color, ...rest}:ButtonProps){
    return(
        <Button
        w=
        bg='blue.800'
        mt={10}
      >
        Entrar
      </Button>
    )
}