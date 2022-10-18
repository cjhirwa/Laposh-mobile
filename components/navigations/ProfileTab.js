import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from "../screens/Rooms"
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import  Settings  from "../screens/Profile";
import COLORS from "../../assets/colors/colors";
const Tab = createBottomTabNavigator()
const ProfileTab = () =>{
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
                name={'Profile'}
                component={Profile}
                options = {{
                    tabBarIcon : (color) =>(
                        <Ionicons name="person" size={23} color={COLORS.main}/>
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
                        <Entypo name="login" size={24} color={COLORS.main} />
                    )
                }}
            />
            <Tab.Screen 
                name={'Settings'}
                component={Settings}
                options = {{
                    headerShown: false,
                    tabBarIcon : (color) =>(
                        <Ionicons name="settings" size={24} color={COLORS.main} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}
export default ProfileTab
