import React,{useEffect,useState} from 'react'
import { Image,Text, View,ScrollView, TouchableOpacity, SafeAreaView,ActivityIndicator} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../assets/css/styles';
const Rooms = () => {
const url='https://reservation-h7rxq6cut-hicode-byte.vercel.app/rooms';
const [rooms,setRooms]=useState();
const [isLoading,setLoading]=useState(true);
useEffect(()=>{getRooms()},[getRooms]);
  const getRooms=async ()=>{
    try{
      const response=await fetch(url);
      const data=await response.json();
      setRooms(data)
      setLoading(false)
    }
    catch(e){
    }
  }  
    const navigation = useNavigation();
    return(
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.navBar}>
        <Text style={styles.logo}>La Posh hotel</Text>
        </View>
        <View style={styles.mainSection}>
        {isLoading? 
            <ActivityIndicator
            style={styles.activityIndicator}
            size="large"
            />:(
      
      <FlatList
            data={rooms}
            keyExtractor={({_id},key)=>key=_id}
            renderItem={({room})=>(
      <View style={styles.mainForm}>
        <Image style={styles.image} source={{uri: room.image}}/>
        <View style={styles.tags}>
            <Text style={styles.heading}>{room.name}</Text>
            <Text style={styles.heading}>{room.name}</Text>
            <Text style={styles.price} >{room.name}<Text>$</Text></Text>
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
         )} 
         />
        )}
      </View>
      
        </ScrollView>
        </SafeAreaView>
    )
  }
export default Rooms