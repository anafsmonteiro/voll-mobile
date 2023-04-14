import {Text, Avatar, VStack} from 'native-base'

export function CardConsulta(){
    return(
        <VStack>
            <Text>Dr. Bob Esponja</Text>
            <Avatar source={{uri:'https://th.bing.com/th/id/R.01caa7fead4e374224835806dffb0d25?rik=yOTj%2bmPpwC4KqA&pid=ImgRaw&r=0'}}/>
        </VStack>
    )
}