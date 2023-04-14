import { FormControl, Input } from "native-base";

interface InputProps {
    label?: string,
    placeholder: string
}

export function EntradaTexto ({label, placeholder}:EntradaTextoProps){
    <FormControl mt={3}>
            {label <FormControl.Label>{label}</FormControl.Label>
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