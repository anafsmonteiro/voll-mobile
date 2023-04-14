import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Principal from "./Principal";
import Consultas from "./Consultas";

const Tab = createBottomTabNavigator()

export default function Tabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen na/>
        </Tab.Navigator>
    )
}