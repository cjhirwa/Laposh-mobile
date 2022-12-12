import React, {useState,useEffect} from 'react'
import { AsyncStorage } from 'react-native';
import { ActivityIndicator, FlatList,Text,SafeAreaView, View,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {DevSettings} from 'react-native';
import axios from 'axios';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import styles from '../assets/css/styles';
import Header from '../components/header';
const Profile = () => {
  const navigation=useNavigation()
    const [isLoading,setLoading]=useState(true);
    const [lname,setLastName]=useState('');
    const [fname,setFirstName]=useState('');
    const [username,setUserName]=useState('');
    const [reservations,setReservations]=useState([]);
const profile_url='https://reservation-zeta.vercel.app/customer/me/profile';
const reservations_url='https://reservation-zeta.vercel.app/me/reservations';


  const getData=async ()=>{
    try{
        const token=await AsyncStorage.getItem('token');
        const response=await axios.get(profile_url,{headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        }});
        const data=response.data;
        setFirstName(data.firstName)
        setLastName(data.lastName)
        setUserName(data.email)

        const reservations=await axios.get(reservations_url,{headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
          }});
          setReservations(reservations.data);
        setLoading(false)
    }
    catch(e){
        console.log(e)
    }
  }
  const removeToken=async()=>{
    try{
      const logout_url='https://reservation-zeta.vercel.app/logout'
        const token=await AsyncStorage.getItem('token');
        await fetch(logout_url,{
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`
          },
        }
        );
        await AsyncStorage.removeItem('token');
        navigation.navigate('Home')
        
    }
    catch(e){
       console.log(e) 
    }
  }
  useEffect(()=>{getData()},[]);
    return(
      <SafeAreaView>
        <Header/>
        <View style={styles.section}>
        {isLoading?
          <View style= {styles.activityIndicator}>
            <ActivityIndicator
            style= {styles.indicator}
            size={70}
            /><Text style={styles.signup}>Loading...</Text></View>:(
              <View>
      <View style={styles.profile}>
        <View style={styles.label}>
        <Ionicons name="person" size={26} color="black" />
            <Text style={styles.titles}>{lname}{' '}{fname}{'\n'}</Text>
            </View>
            <View style={styles.label}>
            <Ionicons name="md-mail" size={26} color="black" />
            <Text style={styles.titles}>{username}{'\n'}</Text>
        </View>
        <View style={styles.label}>
        <AntDesign name="logout" size={24} color="black" />
        <TouchableOpacity
      onPress={()=>removeToken()}
      >
      <Text style={styles.signup}>Logout</Text>
      </TouchableOpacity>
        </View>
        
        </View>
        <View style={styles.profile}>
      <View style={styles.label}>
        <Text style={styles.pheading}>{'My Bookings\n'}</Text>
            </View>
            <FlatList
        data={reservations}
        renderItem={({item}) => 
            <View style={styles.reservations}>
        <View style={styles.label}>
        <Octicons name="cross-reference" size={24} color="black" />
            <Text style={styles.titles}>{item.reference}{'\n'}</Text>
            </View>
            <View style={styles.label}>
            <FontAwesome name="calendar-check-o" size={24} color="black" />
            <Text style={styles.titles}>{item.checkInDate}{'\n'}</Text>
        </View>
        </View>
        }/>
        </View>
        </View>
        )
      }
        </View>
        </SafeAreaView>

    )}

export default Profile