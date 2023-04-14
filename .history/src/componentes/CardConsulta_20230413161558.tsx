import {Text, Avatar, VStack} from 'native-base'

export function CardConsulta(){
    return(
        <VStack>
            <Text>Dr. Bob Esponja</Text>
            <Avatar source={{uri:'https://e7.pngegg.com/pngimages/258/854/png-clipart-spongebob-spongebob.png'}}/>
        </VStack>
    )
}