import { FormControl, Input } from "native-base";

interface Input extends ITextProps {
    label: ReactNode,
    placeholder: 
}

export function EntradaTexto ({label, placeholder}:EntradaTextoProps){
    <FormControl mt={3}>
            <FormControl.Label>{label}</FormControl.Label>
            <Input 
            placeholder={placeholder}
            size='lg'
            w='100%'
            borderRadius='lg'
            backgroundColor='gray.100'
            shadow={100}
            />
          </FormControl>
}