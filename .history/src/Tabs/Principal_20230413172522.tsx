import { VStack, Text, Image, ScrollView, Divider, Box } from 'native-base'

import Logo from '../assets/Logo.png'
import { Botao } from '../componentes/Botao'
import { EntradaTexto } from '../componentes/EntradaTexto'
import { Titulo } from '../componentes/Titulo'
import {depoimentos} from '../utils/mock'
export default function Principal() {
    return (
        <ScrollView flex={1} bgColor='white'>
            <VStack flex={1} alignItems='flex-start' justifyContent='flex-start' p={5}>
                <Image source={Logo} alt='logo' mt={10}/>
            <Titulo color='blue.500'>Boas vindas</Titulo>

            <Box w='100%' borderRadius='lg' p={3} mt={10} shadow='1' borderRightRadius='md'>
                <EntradaTexto placeholder='Digite a especialidade' />
                <EntradaTexto placeholder='Digite sua localização'/>
                <Botao mt={3} mb={3}>Buscar</Botao>
            </Box>

            </VStack>
        </ScrollView>
    )
}