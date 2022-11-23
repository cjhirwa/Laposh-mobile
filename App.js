import React from 'react';
import HomeTab from './components/navigations/HomeTab';
import ListTab from './components/navigations/ListTab';
import ReserveTab from './components/navigations/ReserveTab';
import Signup from './components/screens/signup';
import Details from './components/screens/Details';
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
        options={{  headerShown: Platform.OS === 'ios' ? true : false }}
      /> 
      <Stack.Screen  name="ListTab" component={ListTab} 
        options={{  headerShown: Platform.OS === 'ios' ? true : false }}
      />
      <Stack.Screen  name="ReserveTab" component={ReserveTab} 
        options={{  headerShown: Platform.OS === 'ios' ? true : false }}
      />
       <Stack.Screen name={'Details'} component={Details}
        options={{  headerShown: true }}
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

