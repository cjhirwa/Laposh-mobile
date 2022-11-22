
import React ,{useState, useEffect}from 'react';
import { Image,Text,ScrollView, View, TouchableOpacity,ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../../assets/css/styles';
import COLORS from '../../assets/colors/colors';
const Details = ({route}) => {
    const [isLoading,setLoading]=useState(true);
    const [name,setName]=useState('');
    const [specifications,setSpecifications]=useState('');
    const [price,setPrice]=useState('');
    const [image,setImage]=useState('');
    const getRoom=async (id)=>{
        try{
      const response=await fetch('https://reservation-h7rxq6cut-hicode-byte.vercel.app/room/'+id);
      const data=await response.json();
      setName(data.name)
      setSpecifications(data.specifications)
      setPrice(data.price)
      setImage(data.image)
      setLoading(false)
        }
        catch(e){
        }
      }
      useEffect(()=>{getRoom(route.params.rid)},[])
    const navigation = useNavigation();
    return(
        <ScrollView>
        <View style={styles.navBar}>
        <Text style={styles.logo}>La Posh hotel</Text>
        </View>
      <View style={styles.section}>
      {isLoading?<ActivityIndicator style={styles.activityIndicator}
size="large" color="#00ff00"
      />:(
      <View style={styles.mainForm}>
      
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.tags}>
            <Text style={styles.heading}>{name}</Text>
            <Text style={styles.heading}>{specifications}</Text>
            <Text style={styles.price} >{price}<Text>$</Text></Text>
            
        </View>
        <Text style={styles.pheading}>
        {specifications}
        </Text>
        <Text style={styles.additional}>
        <Ionicons name="ios-wifi" size={28} color={COLORS.main} />
        <Text>Free wifi</Text>
        </Text>
        <View>
        <TouchableOpacity
            style={styles.button}
            onPress={()=>navigation.navigate("Home")}
        >
        <Text>Check Details</Text>
        </TouchableOpacity>
        </View>
        </View>
      )}
        </View>
        </ScrollView>
    )}

export default Details