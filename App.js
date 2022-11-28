import React from 'react';
import HomeTab from './navigations/HomeTab';
import List from './screens/List';
import ReserveTab from './navigations/ReserveTab';
import Signup from './screens/signup';
import Details from './screens/Details';
import Profile from './screens/Profile';
import CompleteProfile from './screens/CompleteProfile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native'
import Reserve from './screens/Reserve';
import Bookable from './screens/Bookable';
import Payment from './screens/Payment';

const Stack = createStackNavigator();
export default function App() {
  return ( 
    <NavigationContainer>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "white"color="white" translucent = {false}/>

      <Stack.Navigator>

      <Stack.Screen  name="Payment" component={Payment} 
        options={{  headerShown: Platform.OS === 'ios' ? true : false }}
      />
      <Stack.Screen  name="HomeTab" component={HomeTab} 
        options={{  headerShown: false }}
      /> 
      <Stack.Screen  name="Profile" component={Profile} 
        options={{  headerShown: false }}
      /> 
      <Stack.Screen  name="List" component={List} 
        options={{  headerShown: Platform.OS === 'ios' ? true : false }}
      />
      <Stack.Screen  name="Room" component={Bookable} 
        options={{  headerShown: Platform.OS === 'ios' ? true : false }}
      />
      <Stack.Screen  name="Reserve" component={Reserve} 
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

