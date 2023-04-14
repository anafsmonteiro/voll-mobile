import {Text, Avatar, VStack} from 'native-base'

export function CardConsulta(){
    return(
        <VStack p={5}> 
            <Text>Dr. Bob Esponja</Text>
            <Avatar source={{uri:'https://th.bing.com/th/id/R.f0f076599ed953d02c07ed764383b7b0?rik=UD7rAiXhnTraUQ&pid=ImgRaw&r=0'}}/>
        </VStack>
    )
}