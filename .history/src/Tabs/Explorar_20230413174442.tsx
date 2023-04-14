import { VStack, Text, ScrollView, Divider, Box } from 'native-base'
import { EntradaTexto } from '../componentes/EntradaTexto'
import { Titulo } from '../componentes/Titulo'
import { Botao } from '../componentes/Botao'
import { CardConsulta } from '../componentes/CardConsulta'

export default function Explorar() {
    return (
        <ScrollView>
            <Box w='100%' borderRadius='lg' p={5} mt={10} shadow='1' borderRightRadius='md'>
                <EntradaTexto placeholder='Digite a especialidade '></EntradaTexto>
                <EntradaTexto placeholder='Digite sua localização '></EntradaTexto>
                <Botao mt={4}>Buscar</Botao>
            </Box>
            <VStack>
                <CardConsulta nome='Dra. Lala'
                especialidade='Endocrinologista'
                foto='https://th.bing.com/th/id/R.43031d562c60590173cb642d1753a25e?rik=6NaQIWUzGYnmDQ&riu=http%3a%2f%2fcontent-en.teletubbies.com%2fuploads%2f2016%2f03%2flaa-laa.png&ehk=GM64WBuILGgVthXwchG120%2f8JzEfrGuvOdLt3gXgivo%3d&risl=&pid=ImgRaw&r=0'
                data='15/04/2023' />
            </VStack>
        </ScrollView>
    )
}