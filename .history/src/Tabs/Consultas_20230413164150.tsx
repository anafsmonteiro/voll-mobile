import { VStack, Text } from 'native-base'
import { CardConsulta } from '../componentes/CardConsulta'

export default function Consultas() {
    return (
        <VStack p={5}>
            <Text>Consultas</Text>
            <CardConsulta nome='Dra. Lala' especialidade='Cardiologista' foto='https://th.bing.com/th/id/OIP.aETnBNrXz8YFACEwt23vFAAAAA?pid=ImgDet&w=419&h=419&rs=1'/>
        </VStack>
    )
}