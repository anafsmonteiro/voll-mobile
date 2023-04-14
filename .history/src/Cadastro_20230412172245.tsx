import { Image, VStack, Text, Box, Link } from 'native-base'
import { TouchableOpacity } from 'react-native'
import Logo from './assets/Logo.png'
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo'

export default function Cadastro() {

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
          id: 1,
          label: 'Email',
          placeholder: 'Digite seu email'
        }
      ]
    }
  ]

  return (
    <VStack flex={1} alignItems='center' p={5} justifyContent='center'>
      <Image source={Logo} alt='logo voll' />
      <Titulo>Cadastro</Titulo>
      <Box>
        {
          sessoes[0].entradaTexto.map(entrada => {
            return <EntradaTexto label={entrada.label} placeholder
          })
        }
      </Box>
      <Botao>Entrar</Botao>
      
      <Link href='https://www.alura.com.br' mt={2}>
        Esqueceu sua senha?
      </Link>

      <Box w='100%' flexDirection='row' justifyContent='center' mt={8}>
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity>
          <Text color='blue.500'>
            Faça seu cadastro
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
