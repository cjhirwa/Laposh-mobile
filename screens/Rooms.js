import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Image,Text, View, TouchableOpacity, SafeAreaView,ActivityIndicator,FlatList} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../assets/css/styles';
import Heading from '../components/heading';
const Rooms = () => {
const url='https://reservation-zeta.vercel.app/rooms';
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
  useEffect(()=>{getRooms()});
    const navigation = useNavigation();
    return(
      <SafeAreaView style={styles.container}>
        <Heading />
        {isLoading? 
            <ActivityIndicator
            style={styles.activityIndicator}
            size="large"
            />:(
        <View style={styles.list}>
        <FlatList
        data={rooms}
        renderItem={({item}) => 
        <View style={styles.rooms}>
        <Image style={styles.image} source={{uri: item.image}}/> 
        <View style={styles.tags}>
            <View>
            <Text style={styles.heading}>{item.name}</Text>
            </View>
            <View>
            <Text style={styles.price} >{item.price}<Text>$</Text></Text>
            </View>
            <TouchableOpacity
            style={styles.checkbutton}
            onPress={()=>navigation.navigate("Details",{rid:item._id})}
            >
        <Text>View More</Text>
        </TouchableOpacity>
        </View>
        </View>
        }
      />   
      </View>
     
      )}
        </SafeAreaView>
    )
  }
export default Rooms