import {Text, Avatar, VStack} from 'native-base'

export function CardConsulta(){
    return(
        <VStack>
            <Text>Dr. Bob Esponja</Text>
            <Avatar source={{uri:'https://th.bing.com/th/id/R.b63cabbdc24d586a97c48ffd39fb1b6e?rik=g%2bTV6cAX4yDqAg&pid=ImgRaw&r=0'}}/>
        </VStack>
    )
}