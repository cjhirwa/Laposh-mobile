import React from 'react'
import { Image,Text, View,ScrollView, TouchableOpacity, SafeAreaView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../assets/css/styles';
const List = () => {
    const navigation = useNavigation();
    return(
      <View style={styles.container}>
        <View style={styles.navBar}>
        <Text style={styles.logo}>La Posh Hotel</Text>
        </View>
      <View style={styles.mainSection}>
      <View style={styles.mainForm}>
        <Image style={styles.image} source={require('../assets/b1.jpg')} />
        <View style={styles.tags}>
            <Text style={styles.heading}>Standard</Text>
            <Text style={styles.heading}>Ocean View</Text>
            <Text style={styles.price} >700<Text>$</Text></Text>
        </View>
        <View>
        <TouchableOpacity
            style={styles.button}
            onPress={()=>navigation.navigate("Details")}
        >
        <Text>Check Details</Text>
        </TouchableOpacity>
        </View>
        </View>
      </View>
        </View>
    )
  }
export default List