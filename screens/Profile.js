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
    const [isLoading,setLoading]=useState(true);
    const [lname,setLastName]=useState('');
    const [fname,setFirstName]=useState('');
    const [username,setUserName]=useState('');
    const [reservations,setReservations]=useState([]);
const profile_url='https://reservation-zeta.vercel.app/customer/me/profile';
const reservations_url='https://reservation-zeta.vercel.app/me/reservations';
const logout_url='https://reservation-zeta.vercel.app/customer/logout';


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
        setLoading(false)
    }
    catch(e){
        console.log(e)
    }
  }

  const Logout=async ()=>{
    try{
        setLoading(true)
        const token=await AsyncStorage.getItem('token');
        const response=await fetch(logout_url,{
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`
          },
        }
        );
        await AsyncStorage.removeItem('token');
        DevSettings.reload();
        setLoading(false);
        
    }
    catch(e){
        console.log(e)
    }
  }
  useEffect(()=>{getData()},[]);
    const navigation = useNavigation();
    return(
      <SafeAreaView>
        <Header/>
        <View style={styles.section}>
        {isLoading?<ActivityIndicator
            style={styles.activityIndicator}
            size="large"
            />:(
     
      <View style={styles.mainForm}>
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
      onPress={()=>Logout()}
      >
      <Text style={styles.signup}>Logout</Text>
      </TouchableOpacity>
        </View>
        
        </View>
        
        )
      }
        </View>
        </SafeAreaView>
    )}

export default Profile