import { Text, Avatar, VStack } from 'native-base'
import { Botao } from './Botao'

interface CardProps {
    nome: string
    foto: string
    especialidade: string
    data?: string
    foiAtendido?: boolean
    foiAgendado?: boolean
}

export function CardConsulta({
nome, foto, especialidade, data, foiAgendado, foiAtendido
}:CardProps) {
    return (
        <VStack w='100%' bg={'white'} p='5' borderRadius='lg' shadow='2'>
            <VStack flexDir='row'>
                <Avatar size='lg' source={{ uri: foto }} />
                <VStack paddingLeft={4}>
                    <Text fontSize='md' fontWeight='bold'>{nome}</Text>
                    <Text>{especialidade}</Text>
                    <Text>{data}</Text>
                </VStack>
            </VStack>

            <Botao mt={4}>{foiAgendado ? 'Cancelar' : 'Agendar consulta'}</Botao>

        </VStack>
    )
}