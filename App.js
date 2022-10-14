import React from 'react';
import Login from './components/screens/Login';
import Signup from './components/screens/signup';
import Home from './components/screens/Home';
import Details from './components/screens/details';
import Profile from './components/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native'

const Stack = createStackNavigator();
export default function App() {
  return ( 
    <NavigationContainer>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#e0f4f1" color="white" translucent = {false}/>
      <Stack.Navigator>
      <Stack.Screen  name="Signup" component={Signup} 
        options={{  headerShown: false }}
      />
        <Stack.Screen  name="Login" component={Login} 
           options={{  headerShown: false }}
        />
        <Stack.Screen  name="Home" component={Home} 
           options={{  headerShown: false }}
        />
        <Stack.Screen  name="Details" component={Details} 
           options={{  headerShown: false }}
        />
        <Stack.Screen  name="Profile" component={Profile} 
           options={{  headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

