import CardSilder from 'react-native-cards-slider';
import React from 'react'
import { Image,Text, View,ScrollView, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../../assets/css/styles';
const Home = () => {
    const navigation = useNavigation();
    return(
    <ScrollView>
        <View style={styles.navBar}>
        <Image style={styles.logo} source={require('../../assets/images/logo.jpg')}/>
<TouchableOpacity
 onPress={()=>navigation.navigate("Profile")}
>
<Image style={styles.profile} source={require('../../assets/images/profile.png')}/>
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
        <View>
        <TouchableOpacity
            style={styles.button}
            onPress={()=>navigation.navigate('Details')}
        >
        <Text>Check Details</Text>
        </TouchableOpacity>
        </View>
        </View>
         
        <View style={styles.mainForm}>
        <Image style={styles.image} source={require('../../assets/b1.jpg')} />
        <View style={styles.tags}>
            <Text style={styles.heading}>Standard</Text>
            <Text style={styles.heading}>Ocean View</Text>
            <Text style={styles.price} >700<Text>$</Text></Text>
        </View>
        <View>
        <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('Details')}
        >
        <Text>Check Details</Text>
        </TouchableOpacity>
        </View>
        </View> 
      </View>
      <View style={styles.navBar}>
        <Ionicons name="md-home" size={32} color="black" onPress={()=>navigation.navigate("Home")} />
        <Ionicons name="md-list" size={32} color="black" onPress={()=>navigation.navigate("Home")} />
        </View>
      </ScrollView>
    )
  }
export default Home