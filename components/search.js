import React from 'react';
import { Text, View,TextInput,StyleSheet,Dimensions } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import COLORS from '../assets/colors/colors';
const {width,height}=Dimensions.get("window")
const Search = () => {
    return (
      <View style={styles.container}>
        <Ionicons name='ios-search-outline' size={24} />
        <TextInput placeholder='Search a room' style={styles.input} />
      </View>
    )
}

export default Search;

const styles=StyleSheet.create({
  
    container:{
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        backgroundColor:COLORS.white,
        width:"100%",
        shadowColor: '#52006A',  
        paddingVertical:15,
        paddingHorizontal:20,
        borderBottomEndRadius:10,
        borderBottomLeftRadius:10,
        marginBottom:10,
    },
    input:{
        paddingLeft:8,
        fontSize:14,
        borderWidth:1,
        borderColor:"black",
        width:width-70,
        borderRadius:5,
    }
})
