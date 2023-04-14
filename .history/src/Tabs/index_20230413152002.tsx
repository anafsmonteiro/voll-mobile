import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Principal from "./Principal";
import Consultas from "./Consultas";
import Explorar from "./Explorar";
import Perfil from "./Perfil";


const Tab = createBottomTabNavigator()

const screenOptions = {
    tabBarStyle: {
        backgroundColor: '#002851'
    },
    tabBarActiveTintColor: '#339CFF',
    tabBarInactiveTintColor: '#fff'
}

const tabs = [
    {
        name: 'Principal',
        component: 'Principal',
        icon: 'home'
    },
    {
        name: 'Consultas',
        component: 'Consultas',
        icon: 'calendar'
    },
    {
        name: 'Explorar',
        component: 'Explorar',
        icon: 'search'
    },
    {
        name: 'Perfil',
        component: 'Perfil',
        icon: 'person'
    }
]

export default function Tabs({}) {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            {tabs.map(tab) => (
            <Tab.Screen name="Principal" component={Principal}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    )
                }}
            />}
        </Tab.Navigator>
    )
}