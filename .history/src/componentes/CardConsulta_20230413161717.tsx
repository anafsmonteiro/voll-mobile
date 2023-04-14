import {Text, Avatar, VStack} from 'native-base'

export function CardConsulta(){
    return(
        <VStack>
            <Text>Dr. Bob Esponja</Text>
            <Avatar source={{uri:'https://th.bing.com/th/id/OIP.86ljtSy7icOrBzC_Iz7mqAHaEK?pid=ImgDet&rs=1'}}/>
        </VStack>
    )
}