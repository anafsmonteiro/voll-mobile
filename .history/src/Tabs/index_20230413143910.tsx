import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons} from 'react-native-vector-icons/Ionicons'

import Principal from "./Principal";
import Consultas from "./Consultas";



const Tab = createBottomTabNavigator()

export default function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Principal" component={Principal} 
            options={{
                headerShown: false,
                tabB
            }}/>
            <Tab.Screen name="Consultas" component={Consultas} />
        </Tab.Navigator>
    )
}