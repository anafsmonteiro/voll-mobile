import { VStack, Text } from 'native-base'
import { CardConsulta } from '../componentes/CardConsulta'

export default function Consultas() {
    return (
        <VStack p={5}>
            <Text>Consultas</Text>
            <CardConsulta nome='Dra. Lala' especialidade='Cardiologista' foto='' data='15/04/2023' foiAgendado foiAtendido/>
        </VStack>
    )
}