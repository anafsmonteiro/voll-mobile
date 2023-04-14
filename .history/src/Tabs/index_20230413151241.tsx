import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Principal from "./Principal";
import Consultas from "./Consultas";
import Explorar from "./Explorar";
import Perfil from "./Perfil";


const Tab = createBottomTabNavigator()

export default function Tabs() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                backgroundColor: '#002851'
            },
            tabBarActiveTintColor: '#339CFF',
            tabBarInactiveTintColor: '#fff'
        }}>
            <Tab.Screen name="Principal" component={Principal} 
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="home" color={color} size={size}/>
                      )
                     }}
            />
            <Tab.Screen name="Consultas" component={Consultas} 
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="calendar" color={color} size={size}/>
                      )
                     }}
            />
            <Tab.Screen name="Explorar" component={Consultas} 
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="calendar" color={color} size={size}/>
                      )
                     }}
            />
        </Tab.Navigator>
    )
}