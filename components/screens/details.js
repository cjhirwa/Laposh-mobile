
import React from 'react'
import { Image,Text,ScrollView, View, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../../assets/css/styles';
const Details = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
        <View style={styles.navBar}>
        <Text style={styles.logo}>La Posh</Text>
<TouchableOpacity
onPress={()=>navigation.navigate("Profile")}
>
        <Image style={styles.profile} source={require('../../assets/images/profile.png')} />
        </TouchableOpacity>
        </View>
      <View style={styles.mainSection}>
      <View style={styles.mainForm}>
        <Image style={styles.image} source={require('../../assets/b1.jpg')} />
        <View style={styles.tags}>
            <Text style={styles.heading}>Standard</Text>
            <Text style={styles.heading}>Ocean View</Text>
            <Text style={styles.price} >700<Text>$</Text></Text>
        </View>
        
        </View>
        </View>
        <View style={styles.navBar}>
        <Ionicons name="md-home" size={32} color="black" onPress={()=>navigation.navigate("Home")} />
        <Ionicons name="md-list" size={32} color="black" onPress={()=>navigation.navigate("Home")} />
        </View>
        </ScrollView>
    )}

export default Details