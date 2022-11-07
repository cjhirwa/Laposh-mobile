
import React from 'react'
import { Image,Text, View,TouchableOpacity} from 'react-native'
import styles from '../../assets/css/styles';
const Reservations = () => {
    return(
      <View style={styles.container}>
        <View style={styles.navBar}>
        <Text style={styles.logo}>La Posh hotel</Text>
        </View>
      <View style={styles.section}> 
        <View style={styles.History}>
        <Text style={styles.reference}>ID: VAX-430986</Text>
        <View style={styles.tags}>
       <Text style={styles.heading}>Standard</Text>
            <Text style={styles.heading}>Ocean View</Text>
            <Text style={styles.price} >700<Text>$</Text></Text>
        </View>
        <View>
        <TouchableOpacity
        style={styles.button}
        >
        <Text>View more</Text>
        </TouchableOpacity>
        </View>
        </View> 
      </View>
        </View>
    )
  }
export default Reservations