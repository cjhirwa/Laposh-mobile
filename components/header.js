import { View, Text, StyleSheet,Image,TouchableOpacity } from 'react-native';
import React, {useState, useEffect} from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import COLORS from '../assets/colors/colors';
import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';
const Header = () => {
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
    <View style={styles.main} >
    <View style={styles.container}> 
        <View>
            <Image style={styles.logo} source={require("../assets/icon.png")} />
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
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.white,
        paddingVertical:12,
        paddingHorizontal:8,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:10,
        paddingRight:20,
        borderTopColor:COLORS.main,
        borderTopWidth:2,
        shadowColor: '#52006A',  
        elevation: 20
    },
    logo:{
        width:80,
        height:40,
        borderRadius:10,
        elevation: 20, 
    }
})