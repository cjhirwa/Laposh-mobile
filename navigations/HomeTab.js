import React, { useEffect,useState } from "react";
import { AsyncStorage } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import Rooms from "../screens/Rooms"
import Login from "../screens/Login";
import Home from "../screens/Home";
import Support from "../screens/Support";
import Reservations from "../screens/Reservations";
import COLORS from "../assets/colors/colors";

const Tab = createBottomTabNavigator()
const HomeTab = () =>{
    const [isLoggedIn,setLoggedIn]=useState(false)
    const checkLogin=async()=>{
        try{
            const token = await AsyncStorage.getItem('token');
            if(token){
                setLoggedIn(true)
            }
        }
        catch(e){
        }
        
    }
    useEffect(()=>{checkLogin()});
    return(
        <Tab.Navigator 
        screenOptions={{ 
            tabBarActiveTintColor: COLORS.blue, tabBarInactiveTintColor: "black", tabBarShowLabel: true, 
            tabBarStyle: { 
                paddingVertical: Platform.OS === 'ios' ? 20 : 0, height: 55, 
                backgroundColor: COLORS.white,
                paddingVertical:5,
                borderTopWidth:2,
                shadowColor: '#52006A',  
                borderRadius:10,
                marginVertical:5,
                paddingBottom:10,
                width:"94%",
                marginHorizontal:"3%"
                
                
                } }}
        >
        <Tab.Screen 
                name={'Home'}
                component={Home}
                options = {{
                    tabBarIcon : (color) =>(
                        <FontAwesome name="home"  size={24} color="black"/>
                    ),
                    headerShown:false
                }}
            />
                <Tab.Screen 
                name={'Rooms'}
                component={Rooms}
                options = {{
                    tabBarIcon : (color) =>(
                        <FontAwesome name="bed"  size={24} color="black"/>
                    ),
                    headerShown:false
                }}
            />
            
            {isLoggedIn?
                <Tab.Screen 
                name={'Reservations'}
                component={Reservations}
                options = {{
                    tabBarIcon : (color) =>(
                        <FontAwesome name="history" size={24} color="black" />
                    ),
                    headerShown:false
                }}
            />:
                <Tab.Screen 
                name={'Login'}
                component={Login}
                options = {{
                    headerShown: false,
                    tabBarIcon : (color) =>(
                        <Entypo name="login" size={21} color="black" />
                    )
                }}
            />}
                <Tab.Screen 
                name={'Support'}
                component={Support}
                options = {{
                    headerShown: false,
                    tabBarIcon : (color) =>(
                        <MaterialIcons name="support-agent" size={24} color="black" />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTab
