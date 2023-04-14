import { FormControl } from "native-base";

export function EntradaTexto (){
    <FormControl mt={3}>
            <FormControl.Label>Email</FormControl.Label>
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