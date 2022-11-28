import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { TextInput,SafeAreaView, ActivityIndicator,Text,ScrollView, View, TouchableOpacity, KeyboardAvoidingView,Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../assets/css/styles';
import Header from '../components/header';
import Bookable from './Bookable';
const Reserve = ({route}) => {
   const navigation = useNavigation();
const rid=route.params.rid;
const check_in_date=route.params.check_in_date;
const check_out_date=route.params.check_out_date;
const [name,setName]=useState('');
const [special,setSpecial]=useState('');
const [isLoading,setLoading]=useState(true);


const Book=async ()=>{
  try{
    const url=`https://reservation-zeta.vercel.app/reservation/${check_in_date}/${check_in_date}/${rid}`
      setLoading(true)
      const token=await AsyncStorage.getItem('token');
      const booking = JSON.stringify({
        special_info:special,
      });
      const config = {
          headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
          }
            };
      const response = await axios.post(url, booking, config);
      Alert.alert(
        'Success',
        'Your booking was recorded, Please, pay for it to be active!',
        [
          {
            text: 'Ok',
            onPress: () =>{
              navigation.navigate('Payment')
          }
          },
        ],
        { cancelable: false}
      )
      setLoading(false);
      
  }
  catch(e){
    Alert.alert(
      'Warning',
      `${e}`,
      [
        {
          text: 'Ok',
          onPress: () =>{
            navigation.navigate('Reserve')
        }
        },
      ],
      { cancelable: false}
    )
  }
}
const getRoom=async (id)=>{
  try{
const response=await axios.get('https://reservation-zeta.vercel.app/room/'+id);
const data=response.data;
setName(data.name)
setLoading(false)
  }
  catch(e){
    console.log(e)
  }
}
useEffect(()=>{getRoom(rid)},[])
    return (
      <SafeAreaView style={styles.main}>
      <Header/>
      {isLoading? 
          <View style= {styles.activityIndicator}>
            <ActivityIndicator
            style= {styles.indicator}
            size={70}
            /><Text style={styles.signup}>Loading...</Text></View>:(
      <ScrollView style={styles.section}>
          <Text style={styles.subtitle}>
            Booking information
          </Text> 
      <View style={[styles.loginForm, styles.elevation]}>
      <Text style={styles.heading}>Check-in-Date</Text>
          <TextInput 
          style={styles.input}
          value={check_in_date}
          />
      <Text style={styles.heading}>Check-out-Date</Text>
          <TextInput 
          style={styles.input}
          value={check_out_date}
          />
      <Text style={styles.heading}>Room</Text>
          <TextInput 
          style={styles.input}
          value={name}
          />
          <KeyboardAvoidingView>
      <Text style={styles.heading}>
            Additional information
          </Text>
          <TextInput 
            multiline
            numberOfLines={10}
            onChangeText={(text)=>setSpecial(text)}
          style={styles.input}>
          </TextInput>
          </KeyboardAvoidingView>
          <TouchableOpacity
        style={styles.button}
         onPress={()=>Book()}
      >
      <Text style={styles.heading}>Send</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
      )}
      </SafeAreaView>
    )
}
export default Reserve