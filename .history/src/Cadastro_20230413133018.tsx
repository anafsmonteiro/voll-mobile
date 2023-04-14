import { Image, VStack, Box, Checkbox, ScrollView, Text} from 'native-base'
import { useState } from 'react';
import Logo from './assets/Logo.png'
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo'

export default function Cadastro() {

  const [numSessao, setNumSessao] = useState(0)

  const sessoes = [
    {
      id: 1,
      titulo: 'Insira alguns dados básicos',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'Insira seu endereço de email'
        },
        {
          id: 3,
          label: 'Crie uma senha',
          placeholder: 'Insira sua senha'
        },
        {
          id: 4,
          label: 'Repita a senha',
          placeholder: 'Insira sua senha'
        }
      ]
    },
    {
      id: 2,
      titulo: 'Agora, mais alguns dados sobre você',
      entradaTexto: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Insira seu CEP'
        },
        {
          id: 2,
          label: 'Endereço',
          placeholder: 'Insira seu endereço'
        },
        {
          id: 3,
          label: 'Número',
          placeholder: 'Insira seu número'
        },
        {
          id: 4,
          label: 'Complemento',
          placeholder: 'Insira seu complemento'
        },
        {
          id: 5,
          label: 'Telefone',
          placeholder: '(00) 00000-0000'
        }
      ]
    },
    {
      id: 3,
      titulo: 'Para finalizar, quais são os seus planos?',
      entradaTexto: [],
      checkbox: [
        {
          id: 1,
          value: 'Sulamerica'
        },
        {
          id: 2,
          value: 'Unimed'
        },
        {
          id: 3,
          value: 'Hapvida'
        },
        {
          id: 4,
          value: 'Bradesco Saúde'
        }
      ]
    }
  ]

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
        <Text color='blue.800' fontWeight='bold' >Selecione o plano</Text>
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
