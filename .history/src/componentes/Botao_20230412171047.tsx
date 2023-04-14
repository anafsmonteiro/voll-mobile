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
        w={autoSize ? 'auto' : '100'}
        bg={color}
        mt={10}
        borderRadius='lg'
        _text={{color:'#fff'}}
        {...rest}
      >
        {children}
      </Button>
    )
}