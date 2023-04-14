import { VStack, Text } from 'native-base'
import { CardConsulta } from '../componentes/CardConsulta'

export default function Consultas() {
    return (
        <VStack p={5}>
            <Text>Consultas</Text>
            <CardConsulta nome='Dra. Lala' especiali/>
        </VStack>
    )
}