import { Text, View,TextInput,StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import COLORS from '../assets/colors/colors';

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
        paddingVertical:15,
        paddingHorizontal:20,
        borderBottomEndRadius:10,
        borderBottomLeftRadius:10
    },
    input:{
        paddingLeft:8,
        fontSize:14,
    }
})