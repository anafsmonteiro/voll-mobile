import { Text, ITextProps } from "native-base";

interface TituloProps extends ITextProps

export function Titulo(children) {
    return (
        <Text fontSize='2xl' 
        fontWeight='bold' 
        color='gray.500' 
        mt={5} 
        textAlign='center'>
        {children}
        </Text>
    )
}