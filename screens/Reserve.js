import React,{useState} from 'react'

import { TextInput,SafeAreaView, Text,ScrollView, View, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../assets/css/styles';
import Header from '../components/header';
const Reserve = ({route}) => {
   const navigation = useNavigation();
const rid=route.params.rid;
const check_in_date=route.params.check_in_date;
const check_out_date=route.params.check_out_date;
const [name,setName]=useState('');
const getRoom=async (id)=>{
  try{
const response=await axios.get('https://reservation-h7rxq6cut-hicode-byte.vercel.app/room/'+id);
const data=response.data;
setName(data.name)
setLoading(false)
  }
  catch(e){
  }
}
useEffect(()=>{getRoom(rid)},[])
    return (
      <SafeAreaView style={styles.main}>
      <Header/>
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
          />
          <KeyboardAvoidingView>
      <Text style={styles.heading}>
            Special information
          </Text>
          <TextInput 
            multiline
            numberOfLines={10}
          style={styles.input}>
          </TextInput>
          </KeyboardAvoidingView>
          <TouchableOpacity
        style={styles.button}
         onPress={()=>navigation.navigate('Home')}
      >
      <Text style={styles.heading}>Send</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
      </SafeAreaView>
    )
}
export default Reserve