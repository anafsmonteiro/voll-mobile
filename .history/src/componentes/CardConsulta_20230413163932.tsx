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
    <Text>Dra. Lala</Text>

}:CardProps) {
    return (
        <VStack w='100%' bg='white' p='5' borderRadius='lg' shadow='2'>
            <VStack flexDir='row'>
                <Avatar size='lg' source={{ uri: 'https://th.bing.com/th/id/R.43031d562c60590173cb642d1753a25e?rik=6NaQIWUzGYnmDQ&riu=http%3a%2f%2fcontent-en.teletubbies.com%2fuploads%2f2016%2f03%2flaa-laa.png&ehk=GM64WBuILGgVthXwchG120%2f8JzEfrGuvOdLt3gXgivo%3d&risl=&pid=ImgRaw&r=0' }} />
                <VStack paddingLeft={4}>
                    <Text fontSize='md' fontWeight='bold'>Dra. Lala</Text>
                    <Text>Cardiologista</Text>
                    <Text>15/04/2023</Text>
                </VStack>
            </VStack>

            <Botao mt={4}>Agendar Consulta</Botao>

        </VStack>
    )
}