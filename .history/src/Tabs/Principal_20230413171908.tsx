import { VStack, Text, Image, ScrollView, Divider } from 'native-base'

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
            
            </VStack>
        </ScrollView>
    )
}