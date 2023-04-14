import { Image, VStack, Text } from 'native-base'
import Logo from './assets/Logo.png'

export default function Login() {
  return (
    <VStack flex={1} alignItems='center' p={5}>
      <Image source={Logo} alt='logo voll' />
      <Text fontSize='2xl' fontWeight='bold' color='gray.500' textAlign='center' marginTop=''>
        Faça login em sua conta
        </Text>
    </VStack>
  );
}
