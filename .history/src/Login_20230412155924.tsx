import { Image, VStack, Text, Box, FormControl, Input } from 'native-base'
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
            border
            />
          </FormControl>
        </Box>
    </VStack>
  );
}
