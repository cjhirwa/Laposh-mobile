import React from 'react'

import { ImageBackground,StyleSheet, TextInput, Text, View, TouchableOpacity,Dimensions} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from '../../assets/css/styles';
const Login = () => {
   const navigation = useNavigation();
    return (
<ImageBackground source={require('../../assets/b2.jpg')} style={styles.container}>

      <View style={styles.main}>
      <View style={styles.section}>
      <Text style={styles.title}>
            Login
          </Text>
      <View style={[styles.form, styles.elevation]}>
      <Text style={styles.heading}>Username</Text>
          <TextInput 
          style={styles.input}
          />
      <Text style={styles.heading}>
            Password
          </Text>
          <TextInput secureTextEntry={true} style={styles.input}>
          </TextInput>
          <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('Home')}
      >
        <Text style={styles.heading}>Login</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity
      onPress={()=>navigation.navigate("Signup")}
      >
      <View style={styles.account}>
      <Ionicons name="person-add" size={25} color='white'/>
      <Text style={styles.cover}>Create Account</Text>
      </View>
      </TouchableOpacity>
      </View>
      
      </View>
      </ImageBackground>
    )
}
export default Login