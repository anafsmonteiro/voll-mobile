import { Image, VStack, Box, Checkbox, ScrollView, Text} from 'native-base'
import { useState } from 'react';
import Logo from './assets/Logo.png'
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo'
import 

export default function Cadastro() {

  const [numSessao, setNumSessao] = useState(0)

  

  function avancarSessao() {
    if (numSessao < sessoes.length -1) {
      setNumSessao(numSessao + 1)
    }
  }

  function voltarrSessao() {
    if (numSessao > 0) {
      setNumSessao(numSessao - 1)
    }
  }

  return (
    <ScrollView flex={1} p={5} >
      <Image source={Logo} alt='logo voll' alignSelf='center'/>
      <Titulo>{sessoes[numSessao].titulo}</Titulo>
      <Box>
        {
          sessoes[numSessao]?.entradaTexto?.map(entrada => {
            return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
          })
        }
      </Box>

      <Box>
        <Text color='blue.800' fontWeight='bold' fontSize='md' mt={2} mb={2}>Selecione o plano</Text>
        {
          sessoes[numSessao]?.checkbox?.map(checkbox => { 
            return <Checkbox key={checkbox.id}
            value={checkbox.value}>
                {checkbox.value}
            </Checkbox>
          })
        }
      </Box>

      {numSessao>0 && <Botao onPress={() => voltarrSessao()} bg='gray.400' mt={4}>Voltar</Botao>}

      <Botao onPress={() => avancarSessao()} mt={4} mb={20}>Avançar</Botao>

    </ScrollView>
  );
}
