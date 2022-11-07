import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import Rooms from "../screens/Rooms"
import Profile from "../screens/Profile";
import Reserve from "../screens/Reserve";
import Reservations from "../screens/Reservations";
import Support from "../screens/Support";
import COLORS from "../../assets/colors/colors";
 const Tab = createBottomTabNavigator()
const ReserveTab = () =>{
    return(
        <Tab.Navigator 
        screenOptions={{ 
            tabBarActiveTintColor: COLORS.main, tabBarInactiveTintColor: COLORS.grey, tabBarShowLabel: true, 
            tabBarStyle: { paddingVertical: Platform.OS === 'ios' ? 20 : 0, height: 58, backgroundColor: COLORS.white } }}
        >
            <Tab.Screen 
                name={'Home'}
                component={Rooms}
                options = {{
                    tabBarIcon : (color) =>(
                        <FontAwesome name="home"  size={23} color={COLORS.main}/>
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen 
                name={'Reserve'}
                component={Reserve}
                options = {{
                    tabBarIcon : (color) =>(
                        <FontAwesome name="order"  size={23} color={COLORS.main}/>
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen 
                name={'Profile'}
                component={Profile}
                options = {{
                    tabBarIcon : (color) =>(
                        <Ionicons name="person" size={20} color={COLORS.main}/>
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen 
                name={'Reservations'}
                component={Reservations}
                options = {{
                    tabBarIcon : (color) =>(
                        <Ionicons name="history" size={20} color={COLORS.main}/>
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen 
                name={'Support'}
                component={Support}
                options = {{
                    headerShown: false,
                    tabBarIcon : (color) =>(
                        <Entypo name="call" size={20} color={COLORS.main} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default ReserveTab
