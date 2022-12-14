import React, {useState,useEffect} from 'react'
import { AsyncStorage } from 'react-native';
import { ActivityIndicator, FlatList,Text,SafeAreaView, View,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
import Header from '../components/header'; 
import styles from '../assets/css/styles';
const Reservations = () => {
    const [isLoading,setLoading]=useState(true);
    const [fname,setFirstName]=useState('');
    const [reservations,setReservations]=useState([]);
const profile_url='https://reservation-zeta.vercel.app/customer/me/profile';
const reservations_url='https://reservation-zeta.vercel.app/me/reservations';

const formatDate=(item)=>{
  let date=new Date(item)
  const fDate=date.toString().split(' ')
  return fDate[0]+" "+fDate[1]+" "+fDate[2]+" "+fDate[3]
}
  const getData=async ()=>{
    try{
        const token=await AsyncStorage.getItem('token');
        const response=await axios.get(profile_url,{headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        }});
        const data=response.data;
        setFirstName(data.firstName)

      const reservations=await axios.get(reservations_url,{headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        }});
        setReservations(reservations.data);
        setLoading(false)
    }
    catch(e){
    }
  }

  useEffect(()=>{getData()});
    const navigation = useNavigation();
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
      <View style={styles.mainForm}>
        <Text style={styles.pheading}>Hello {fname}{', Here is the history of your reservations at La posh Hotel\n'}</Text>
            <FlatList
        data={reservations}
        renderItem={({item}) => 
            <View style={styles.reservations}>
        <View style={styles.label}>
        <Octicons name="cross-reference" size={24} color="black" />
            <Text style={styles.titles}>{item.reference}{'\n'}</Text>
            </View>
            <View style={styles.label}>
            <FontAwesome name="bed"  size={24} color="black"/>
            <Text style={styles.titles}>{item.room_name}{'\n'}</Text>
            </View>
            <View style={styles.label}>
            <FontAwesome name="calendar-check-o" size={24} color="black" />
            <Text style={styles.titles}>{formatDate(item.checkInDate)}{'\n'}</Text>
        </View>
        <View style={styles.label}>
        <MaterialCommunityIcons name="clock-check-outline" size={24} color="black" />
            <Text style={styles.titles}>{formatDate(item.checkOutDate)}{'\n'}</Text>
        </View>
        <View style={styles.label}>
        <MaterialCommunityIcons name="clock-check-outline" size={24} color="black" />
            <Text style={styles.titles}>{item.status}{'\n'}</Text>
        </View>
        </View>
        }/>
        </View>   
        )
      }
        </View>
        </SafeAreaView>
    )}

export default Reservations