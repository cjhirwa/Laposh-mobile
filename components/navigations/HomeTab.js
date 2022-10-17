import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from "../screens/Home"
import Login from "../screens/Login";
import COLORS from "../../assets/colors/colors";
const Tab = createBottomTabNavigator()

const HomeTab = () =>{
    return(
        <Tab.Navigator>
            <Tab.Screen 
                name={'Home'}
                component={Home}
                options = {{
                    tabBarIcon : (color) =>(
                        <Ionicons name="home" size={23} color={COLORS.main}/>
                    ),
                    headerShown:false
                }}
            />
             <Tab.Screen 
                name={'Login'}
                component={Login}
                options = {{
                    headerShown: false,
                    tabBarIcon : (color) =>(
                        <Entypo name="login" size={24} color="black" />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTab
