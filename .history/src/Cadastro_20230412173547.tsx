import { Image, VStack, Text, Box, Link } from 'native-base'
import { useState } from 'react';
import { TouchableOpacity } from 'react-native'
import Logo from './assets/Logo.png'
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo'

export default function Cadastro() {

const [numSessao, setNumSessao]= useState(0)

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
          id: 2,
          label: '{
          id: 2,
          label: 'Email',
          placeholder: 'Insira seu endereço de email'
        }',
          placeholder: 'Insira seu endereço de email'
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
      ]
    }
  ]

  function avancarSessao(){
    setNumSessao(numSessao+1)
  }

  return (
    <VStack flex={1} alignItems='center' p={5} justifyContent='center'>
      <Image source={Logo} alt='logo voll' />
      <Titulo>{sessoes[numSessao].titulo}</Titulo>
      <Box>
        {
          sessoes[numSessao].entradaTexto.map(entrada => {
            return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id}/>
          })
        }
      </Box>
      <Botao onPress={()=> avancarSessao()}>Avançar</Botao>

    </VStack>
  );
}