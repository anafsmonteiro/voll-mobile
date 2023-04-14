import { VStack, Text, Divider } from 'native-base'
import { Botao } from '../componentes/Botao'
import { CardConsulta } from '../componentes/CardConsulta'
import { Titulo } from '../componentes/Titulo'

export default function Consultas() {
    return (
        <VStack p={5}>
            <Titulo color='blue.500' >Minhas consultas</Titulo>
            <Botao mt={5} mb={5}>Agendar nova consulta</Botao>

            <Titulo color='blue.500' fontSize='lg'>Próximas consultas</Titulo>

            <CardConsulta 
            nome='Dra. Lala' 
            especialidade='Cardiologista' 
            foto='https://th.bing.com/th/id/R.43031d562c60590173cb642d1753a25e?rik=6NaQIWUzGYnmDQ&riu=http%3a%2f%2fcontent-en.teletubbies.com%2fuploads%2f2016%2f03%2flaa-laa.png&ehk=GM64WBuILGgVthXwchG120%2f8JzEfrGuvOdLt3gXgivo%3d&risl=&pid=ImgRaw&r=0' 
            data='15/04/2023' 
            foiAgendado 
            foiAtendido/>
            
            <Divider />

<CardConsulta 
            nome='Dra. Pool' 
            especialidade='Ginecologista' 
            foto='https://th.bing.com/th/id/R.6844e704dad7cfc605002130b76def14?rik=QEbUxCJM1bzhyg&riu=http%3a%2f%2fcontent-us.teletubbies.com%2fuploads%2f2016%2f03%2fpo.png&ehk=0%2fnGw%2flSRMghQ7ZLN6KO2OO9%2ffW0Eqp%2bSgof%2b6nzdDw%3d&risl=&pid=ImgRaw&r=0' 
            data='15/04/2023' 
            foiAgendado 
            foiAtendido/>

<Divider />

<CardConsulta 
            nome='Dr. Tinky Winky' 
            especialidade='Neurologista' 
            foto='https://th.bing.com/th/id/R.67e38b60a12eacd6d261a2aec52d5598?rik=qlX%2fWFw8P9ANqg&pid=ImgRaw&r=0' 
            />

<Divider />

<CardConsulta 
            nome='Dr. Dipsy' 
            especialidade='Ortopedista' 
            foto='https://th.bing.com/th/id/R.bc9d25190d5d0c33c55883a143a29772?rik=0BLTFop5OINmcQ&riu=http%3a%2f%2fcontent-us.teletubbies.com%2fuploads%2f2016%2f03%2fdipsy.png&ehk=%2bKcbyreW7HUqAqDRYuTxZmkT%2b%2bqO8eE443D2ArCI3As%3d&risl=&pid=ImgRaw&r=0' 
            data='15/04/2023' 
           />

        </VStack>
    )
}