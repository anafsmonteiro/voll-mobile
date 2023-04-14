import {Text, Avatar, VStack} from 'native-base'
import { Botao } from './Botao'

export function CardConsulta(){
    return(
        <VStack w='100%' bg='white' p='5' borderRadius='lg' shadow='2'> 
        <VStack>

            <Avatar size='lg' source={{uri:'https://th.bing.com/th/id/R.43031d562c60590173cb642d1753a25e?rik=6NaQIWUzGYnmDQ&riu=http%3a%2f%2fcontent-en.teletubbies.com%2fuploads%2f2016%2f03%2flaa-laa.png&ehk=GM64WBuILGgVthXwchG120%2f8JzEfrGuvOdLt3gXgivo%3d&risl=&pid=ImgRaw&r=0'}}/>
        </VStack>
            <Text>Dra. Lala</Text>
            <Text>Cardiologista</Text>
            <Text>15/04/2023</Text>

        <Botao>Agendar Consulta</Botao>

        </VStack>
    )
}