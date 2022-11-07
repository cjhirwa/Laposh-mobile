import React from 'react';
import HomeTab from './components/navigations/HomeTab';
import DetailsTab from './components/navigations/DetailsTab';
import ListTab from './components/navigations/ListTab';
import ReserveTab from './components/navigations/ReserveTab';
import Signup from './components/screens/signup';
import CompleteProfile from './components/screens/CompleteProfile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native'

const Stack = createStackNavigator();
export default function App() {
  return ( 
    <NavigationContainer>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#e0f4f1" color="white" translucent = {false}/>

      <Stack.Navigator>

      <Stack.Screen  name="HomeTab" component={HomeTab} 
        options={{  headerShown: false }}
      /> 
      <Stack.Screen  name="DetailsTab" component={DetailsTab} 
        options={{  headerShown: false }}
      />
      <Stack.Screen  name="ListTab" component={ListTab} 
        options={{  headerShown: false }}
      />
      <Stack.Screen  name="ReserveTab" component={ReserveTab} 
        options={{  headerShown: false }}
      />
      <Stack.Screen  name="Signup" component={Signup} 
        options={{  headerShown: false }}
      />
        <Stack.Screen  name="CompleteProfile" component={CompleteProfile} 
        options={{  headerShown: false }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

