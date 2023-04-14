import { Image, VStack, Text, Box, FormControl, Input, Button, Link } from 'native-base'
import { TouchableOpacity } from 'react-native'
import Logo from './assets/Logo.png'
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo'

export default function Login() {
  return (
    <VStack flex={1} alignItems='center' p={5} justifyContent='center'>
      <Image source={Logo} alt='logo voll' />
      <Titulo>Faça login em sua conta</Titulo>
      <Box>
        <EntradaTexto
          label='Email'
          placeholder='Insira seu email' />

        <EntradaTexto
          label='Senha'
          placeholder='Insira sua senha' />
      </Box>
      
      <Button
        w='100%'
        bg='blue.800'
        mt={10}
      >
        Entrar
      </Button>
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
