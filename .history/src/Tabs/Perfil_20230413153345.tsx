import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import { Titulo } from '../componentes/Titulo'

export default function Perfil() {
    return (
        <ScrollView flex={1}>
            <VStack>
                <Titulo></Titulo>
            </VStack>

        </ScrollView>
    )
}