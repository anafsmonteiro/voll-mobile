import { FormControl, Input, ITextProps } from "native-base";

interface EntradaTextoProps extends ITextProps {
    children: ReactNode
}

export function EntradaTexto ({children}){
    <FormControl mt={3}>
            <FormControl.Label>{children}</FormControl.Label>
            <Input 
            placeholder='Insira seu endereço de email'
            size='lg'
            w='100%'
            borderRadius='lg'
            backgroundColor='gray.100'
            shadow={100}
            />
          </FormControl>
}