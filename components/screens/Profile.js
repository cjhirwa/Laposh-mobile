import CardSilder from 'react-native-cards-slider';
import React from 'react'
import { Image,Text,ScrollView, View,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../../assets/css/styles';
const Profile = () => {
    const navigation = useNavigation();
    return(
        <ScrollView>
        <View style={styles.navBar}>
            <Image style={styles.logo} source={require('../../assets/images/logo.jpg')}/>
        </View>
      <View style={styles.mainSection}>
      <View style={styles.mainForm}>
      <View style={styles.profileManager}>
        <Image style={styles.imageProfile} source={require('../../assets/b1.jpg')} />
        </View>
        <View style={styles.label}>
        <Ionicons name="md-person" size={26} color="black" />
            <Text style={styles.pheading}>HIRWA Jean Claude{'\n'}</Text>
            </View>
            <View style={styles.label}>
            <Ionicons name="md-person" size={26} color="black" />
            <Text style={styles.pheading}>HIRWA Jean Claude{'\n'}</Text>
            </View>
            <View style={styles.label}>
            <Ionicons name="md-person" size={26} color="black" />
            <Text style={styles.pheading}>HIRWA Jean Claude{'\n'}</Text>
        </View>
        <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('Home')}
      >
        <Text style={styles.heading}>Update Profile</Text>
      </TouchableOpacity>
        </View>
        </View>
        <View style={styles.navBar}>
        <Ionicons name="md-home" size={32} color="black" onPress={()=>navigation.navigate("Home")} />
        <Ionicons name="md-list" size={32} color="black" onPress={()=>navigation.navigate("Home")} />
        </View>
        </ScrollView>
    )}

export default Profile