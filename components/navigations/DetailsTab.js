import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons';  
import Details from "../screens/Details";
import COLORS from "../../assets/colors/colors";
const Tab = createBottomTabNavigator()

const DetailsTab = () =>{
    return(
        <Tab.Navigator>
        <Tab.Screen 
        name={'Details'}
        component={Details}
        options = {{
            tabBarIcon : (color) =>(
                <FontAwesome5 name="bed" size={24} color={COLORS.main} />
            ),
            headerShown:false
        }}
    />
    </Tab.Navigator>
    )
}

export default DetailsTab
