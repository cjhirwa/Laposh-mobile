import React, { useEffect,useState } from "react";
import { AsyncStorage } from 'react-native';
import HomeTab from './navigations/HomeTab';
import List from './screens/List';
import ReserveTab from './navigations/ReserveTab';
import Signup from './screens/signup';
import Details from './screens/Details';
import Profile from './screens/Profile';
import Index from './screens/Index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native'
import Reserve from './screens/Reserve';
import Bookable from './screens/Bookable';

const Stack = createStackNavigator();
export default function App() {
  const [isLoggedIn,setLoggedIn]=useState(false)
    const checkLogin=async()=>{
        try{
            const token = await AsyncStorage.getItem('token');
            if(token){
                setLoggedIn(true)
            }
            else{
                setLoggedIn(false)
            }
        }
        catch(e){
        }
        
    }
    useEffect(()=>{checkLogin()});
  return ( 
    <NavigationContainer>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#e0f4f1" color="white"  translucent = {false}/>
      <Stack.Navigator>
      <Stack.Screen  name="HomeTab" component={HomeTab} 
        options={{  headerShown: false }}
      />
      <Stack.Screen  name="Profile" component={Profile} 
        options={{  headerShown: true }}
      /> 
      <Stack.Screen  name="List" component={List} 
        options={{  headerShown: true}}
      />
      <Stack.Screen  name="Room" component={Bookable} 
        options={{  headerShown: true }}
      />
      <Stack.Screen  name="Reserve" component={Reserve} 
        options={{  headerShown: true}}
      />

      <Stack.Screen  name="ReserveTab" component={ReserveTab} 
        options={{  headerShown: true}}
      />
       <Stack.Screen name={'Details'} component={Details}
        options={{  headerShown: true }}
            />
      <Stack.Screen  name="Signup" component={Signup} 
        options={{  headerShown: true }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

