import { VStack, Text,  ScrollView, Divider, Box } from 'native-base'
import { EntradaTexto } from '../componentes/EntradaTexto'
import { Titulo } from '../componentes/Titulo'
import { Botao } from '../componentes/Botao'
import {CardConsulta} from '../componentes/CardConsulta'

export default function Explorar() {
    return (
        <ScrollView>
            <Box>
                <EntradaTexto placeholder='Digite a especialidade '></EntradaTexto>
                <EntradaTexto placeholder='Digite sua localização '></EntradaTexto>

            </Box>
        </ScrollView>
    )
}