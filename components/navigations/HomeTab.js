import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import Ionicons from '@expo/vector-icons/Ionicons';
import Rooms from "../screens/Rooms"
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import Details from "../screens/Details";
import Reservations from "../screens/Reservations";
import Support from "../screens/Support";
import COLORS from "../../assets/colors/colors";
 const Tab = createBottomTabNavigator()
const HomeTab = () =>{
    return(
        <Tab.Navigator 
        screenOptions={{ 
            tabBarActiveTintColor: COLORS.blue, tabBarInactiveTintColor: COLORS.grey, tabBarShowLabel: true, 
            tabBarStyle: { paddingVertical: Platform.OS === 'ios' ? 20 : 0, height: 50, backgroundColor: COLORS.white } }}
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
                name={'Details'}
                component={Details}
                options = {{
                    tabBarIcon : (color) =>(
                        <Ionicons name="bed-outline" size={24} color={COLORS.main}/>
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen 
                name={'Reservations'}
                component={Reservations}
                options = {{
                    tabBarIcon : (color) =>(
                        <FontAwesome name="history" size={24} color={COLORS.main}/>
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
                name={'Login'}
                component={Login}
                options = {{
                    headerShown: false,
                    tabBarIcon : (color) =>(
                        <Entypo name="login" size={20} color={COLORS.main} />
                    )
                }}
            />
                        <Tab.Screen 
                name={'Support'}
                component={Support}
                options = {{
                    headerShown: false,
                    tabBarIcon : (color) =>(
                        <MaterialIcons name="support-agent" size={24} color={COLORS.main} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTab
