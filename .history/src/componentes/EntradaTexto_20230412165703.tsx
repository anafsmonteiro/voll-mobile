import { FormControl, Input, ITextProps } from "native-base";

interface EntradaTextoProps extends ITextProps {
    label: ReactNode
}

export function EntradaTexto ({label, placeholder}:EntradaTextoProps){
    <FormControl mt={3}>
            <FormControl.Label>{label}</FormControl.Label>
            <Input 
            placeholder={'Insira seu endereço de email'}
            size='lg'
            w='100%'
            borderRadius='lg'
            backgroundColor='gray.100'
            shadow={100}
            />
          </FormControl>
}