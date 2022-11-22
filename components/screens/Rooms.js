import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Image,Text, View, TouchableOpacity, SafeAreaView,ActivityIndicator,FlatList, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../assets/css/styles';
const Rooms = () => {
const url='https://reservation-h7rxq6cut-hicode-byte.vercel.app/rooms';
let [rooms,setRooms]=useState([]);
const [isLoading,setLoading]=useState(true);

  const getRooms=async ()=>{
    try{
      const response=await axios.get(url);
      setRooms(response.data)
      setLoading(false)
    }
    catch(e){
    }
  }  
  useEffect(()=>{getRooms()},[Rooms]);
    const navigation = useNavigation();
    return(
      <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.navBar}>
        <Text style={styles.logo}>La Posh hotel</Text>
        </View>
        {isLoading? 
            <ActivityIndicator
            style={styles.activityIndicator}
            size="large"
            />:(
        <View style={styles.mainSection}>
        {rooms.map(room => {
        return (
      <View style={styles.mainForm}>
        <Image style={styles.image} source={{uri: room.image}}/>
        <View style={styles.tags}>
            <Text style={styles.heading}>{room.name}</Text>
            <Text style={styles.heading}></Text>
            <Text style={styles.price} >{room.price}<Text>$</Text></Text>
        </View>
        <View>
        <TouchableOpacity
            style={styles.button}
            onPress={()=>navigation.navigate("Details",{rid:room._id})}
        >
        <Text>Check Details</Text>
        </TouchableOpacity>
        </View>
        </View>
        
        );
      })}
         
      </View>
     
      )}
      </ScrollView>
        </SafeAreaView>
    )
  }
export default Rooms