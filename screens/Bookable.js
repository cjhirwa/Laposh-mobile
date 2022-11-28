import React ,{useState, useEffect}from 'react';
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { Image,Text,ScrollView, View, TouchableOpacity,ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import styles from '../assets/css/styles';
import COLORS from '../assets/colors/colors';
import Header from '../components/header';
const Bookable = ({route}) => {
    const [isLoading,setLoading]=useState(true);
    const [isLoggedIn,setLoggedIn]=useState(false);
    const [name,setName]=useState('');
    const [specifications,setSpecifications]=useState('');
    const [price,setPrice]=useState('');
    const [image,setImage]=useState('');
    const getRoom=async (id)=>{
        try{
      const response=await axios.get('https://reservation-zeta.vercel.app/room/'+id);
      const data=response.data;
      setName(data.name)
      setSpecifications(data.specifications)
      setPrice(data.price)
      setImage(data.image)
      setLoading(false)

      const token = await AsyncStorage.getItem('token');
      if(token){
       setLoggedIn(true)
       }
       }
          catch(e){
          }
      }
      useEffect(()=>{getRoom(route.params.rid)},[])
    const navigation = useNavigation();
    return(
        <ScrollView>
        <Header/>
      <View style={styles.section}>
      {isLoading? 
          <View style= {styles.activityIndicator}><ActivityIndicator
            style= {styles.indicator}
            size={70}
            /><Text style={styles.signup}>Loading...</Text></View>:(
      <View style={styles.mainForm}>
      
        <Image style={styles.roomimage} source={{uri: image}} />
        <View style={styles.details}>
            <Text style={styles.heading}>{name}</Text>
            <Text style={styles.price} >Price: $ {price} /day</Text>
            <Text style={styles.heading}>{specifications}</Text>
            
            
        </View>
        <Text style={styles.additional}>
        <Ionicons name="ios-wifi" size={21} color={COLORS.main} />
        <Text> Free wifi</Text>
        
        <Text> | <MaterialCommunityIcons name="fridge-outline" size={21} color="black" /> Fridge</Text>

        
        <Text> | <FontAwesome name="tv" size={21} color="black" /> Flat TV</Text>
        <Text> | <MaterialIcons name="free-breakfast" style={{marginTop:10}} size={21} color="black" />Breakfast</Text>
        </Text>
        <View>
        {isLoggedIn?
        <TouchableOpacity
            style={styles.button}
            onPress={()=>navigation.navigate("Reserve",{rid:route.params.rid,check_in_date:route.params.cindate,check_out_date:route.params.coutdate})}
        >
        <Text>Reserve a stay</Text>
        </TouchableOpacity>:
        <TouchableOpacity
            style={styles.button}
            onPress={()=>navigation.navigate("Login")}
        >
        <Text>Login</Text>
        </TouchableOpacity>}
        </View>
        </View>
      )}
        </View>
        </ScrollView>
    )}

export default Bookable