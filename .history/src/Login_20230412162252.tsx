import { Image, VStack, Text, Box, FormControl, Input, Button, Lin } from 'native-base'
import Logo from './assets/Logo.png'

export default function Login() {
  return (
    <VStack flex={1} alignItems='center' p={5}>
      <Image source={Logo} alt='logo voll' />
      <Text fontSize='2xl' fontWeight='bold' color='gray.500' mt={5} textAlign='center'>
        Faça login em sua conta
        </Text>
        <Box>
          <FormControl mt={3}>
            <FormControl.Label>Email</FormControl.Label>
            <Input 
            placeholder='Insira seu endereço de email'
            size='lg'
            w='100%'
            borderRadius='lg'
            backgroundColor='gray.100'
            shadow={100}
            />
          </FormControl>

          <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
            <Input 
            placeholder='Insira sua senha'
            size='lg'
            w='100%'
            borderRadius='lg'
            backgroundColor='gray.100'
            shadow={100}
            />
          </FormControl>
        </Box>
        <Button 
        w='100%'
        bg='blue.800'
        mt={10}
        >
          Entrar
        </Button>
        <Link href></Link>
    </VStack>
  );
}
