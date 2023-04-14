import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import { Titulo } from '../componentes/Titulo'

export default function Perfil() {
    return (
        <ScrollView flex={1}>
            <VStack flex={1} alignItems='center' p={5}>
                <Titulo >Meu Perfil</Titulo>
                <Avatar source={{ uri: 'https://github.com/anafsmonteiro.png' }} mt={5} />
                <Titulo>Informações pessoais</Titulo>
                <Titulo>Ana Monteiro</Titulo>
                <Titulo>15/11/1997</Titulo>
                <Titulo>Fortaleza-CE</Titulo>

                <Divider mt={5} />

                <Titulo>Histórico médico</Titulo>
                <Text>Sinusite</Text>
                <Text>Alergia a insetos</Text>
            </VStack>

        </ScrollView>
    )
}