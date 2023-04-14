import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import { Titulo } from '../componentes/Titulo'

export default function Perfil() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems='center' p={5}>
                <Titulo color='blue.500' >Meu Perfil</Titulo>
                <Avatar source={{ uri: 'https://github.com/anafsmonteiro.png' }} mt={5} size='xl'/>
                <Titulo color='blue.500'>Informações pessoais</Titulo>
                <Titulo fontSize='lg' mb={1}>Ana Monteiro</Titulo>
                <Text>15/11/1997</Text>
                <Text>Fortaleza-CE</Text>

                <Divider mt={5} />

                <Titulo color='blue.500' mb={1}>Histórico médico</Titulo>
                <Text>Sinusite</Text>
                <Text>Alergia a insetos</Text>
            </VStack>

        </ScrollView>
    )
}