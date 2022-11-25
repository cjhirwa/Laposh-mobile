import { View, TextInput, StyleSheet,Image,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import Ionicons from "react-native-vector-icons/Ionicons";
import COLORS from '../assets/colors/colors';
import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
const Heading = () => {
    const navigation = useNavigation();
    const [isLoggedIn,setLoggedIn]=useState(false)
    const checkLogin=async()=>{
        try{
            const token = await AsyncStorage.getItem('token');
            if(token){
                setLoggedIn(true)
            }
        }
        catch(e){
        }
        
    }
    useEffect(()=>{checkLogin()});
  return (
    <View style={styles.main}>
    <View style={styles.titlebar}> 
        <View>
            <Image style={styles.logo} source={require("../assets/images/logo.jpg")} />
        </View>

        {isLoggedIn?
        <View>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Profile')}
        >
        <FontAwesome5 name="user-circle" size={27} color="black" />
        </TouchableOpacity>
        </View>
        :<View></View>
        }
        </View>
        <View style={styles.search}>
        <Ionicons name='ios-search-outline' size={24} />
        <TextInput placeholder='Search a room' style={styles.input} />
      </View>  
    
    </View>
  )
}

export default Heading;

const styles = StyleSheet.create({

    main:{
        backgroundColor:COLORS.white,
        paddingVertical:5,
        borderTopWidth:2,
        shadowColor: '#52006A',  
        elevation: 40,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        marginBottom:20,
        paddingBottom:10

    },
    titlebar:{
        backgroundColor:COLORS.white,
        paddingVertical:12,
        paddingHorizontal:8,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:10,
        paddingRight:20,
        shadowColor: '#52006A'
    },
    logo:{
        width:80,
        height:40,
        borderRadius:10,
        elevation: 20, 
    },

    search:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        marginTop:5,
        backgroundColor:COLORS.white,
        width:"90%",
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:20,
        borderWidth:1,
        borderColor: COLORS.main
    },
    search_input:{
        paddingLeft:8,
        fontSize:14,
    }
})