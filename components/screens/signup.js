import React from 'react'
import { ImageBackground,TextInput, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../assets/css/styles';
const Signup = () => {
    const navigation = useNavigation();
    return (
<ImageBackground source={require('../../assets/b2.jpg')} style={styles.container}>
      <View style={styles.main}>
      <View style={styles.section}>
      <Text style={styles.title}>
            Create Account
          </Text>
      <View style={[styles.form, styles.elevation]}>
      <Text style={styles.heading}>Email</Text>
          <TextInput 
          style={styles.input}
          />
      <Text style={styles.heading}>
            Password
          </Text>
          <TextInput secureTextEntry={true} style={styles.input}>
          </TextInput>
          <Text style={styles.heading}>
            Confirm Password
          </Text>
          <TextInput secureTextEntry={true} style={styles.input}>
          </TextInput>
          <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('Login')}
      >
        <Text style={styles.heading}>Register</Text>
      </TouchableOpacity>
      </View>
      </View>
      <View style={styles.nav}>

      </View>
      </View>
      </ImageBackground>
    )
}
export default Signup
