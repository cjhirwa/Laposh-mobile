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
        <Text style={styles.logo}>La Posh</Text>
        </View>
      <View style={styles.section}>
      <View style={styles.mainForm}>
      <View style={styles.profileManager}>
        <Image style={styles.imageProfile} source={require('../../assets/images/profile.png')} />
        </View>
        <View style={styles.label}>
        <Ionicons name="person" size={26} color="black" />
            <Text style={styles.pheading}>HIRWA Jean Claude{'\n'}</Text>
            </View>
            <View style={styles.label}>
            <Ionicons name="md-mail" size={26} color="black" />
            <Text style={styles.pheading}>hicode.io@gmail.com{'\n'}</Text>
        </View>
        <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('HomeTab')}
      >
        <Text style={styles.heading}>Update Profile</Text>
      </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
    )}

export default Profile