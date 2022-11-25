import React from 'react';
import HomeTab from './navigations/HomeTab';
import ListTab from './navigations/ListTab';
import ReserveTab from './navigations/ReserveTab';
import Signup from './screens/signup';
import Details from './screens/Details';
import Profile from './screens/Profile';
import CompleteProfile from './screens/CompleteProfile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native'
import COLORS from './assets/colors/colors';

const Stack = createStackNavigator();
export default function App() {
  return ( 
    <NavigationContainer>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "green"color="white" translucent = {false}/>

      <Stack.Navigator>

      <Stack.Screen  name="HomeTab" component={HomeTab} 
        options={{  headerShown: false }}
      /> 
      <Stack.Screen  name="Profile" component={Profile} 
        options={{  headerShown: false }}
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
        options={{  headerShown: true }}
      />
        <Stack.Screen  name="CompleteProfile" component={CompleteProfile} 
        options={{  headerShown: true }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

