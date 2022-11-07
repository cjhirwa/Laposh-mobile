import React from 'react'

import { TextInput, Text, ScrollView,View, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../assets/css/styles';
const Login = () => {
   const navigation = useNavigation();
    return (
      <ScrollView style={styles.container}>
      <View style={styles.main}>
      <View style={styles.section}>
      <Text style={styles.title}>
            La Posh Hotel
          </Text>
          <View style={styles.line}/>
          <Text style={styles.subtitle}>
            Login
          </Text> 
      <View style={[styles.loginForm, styles.elevation]}>
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

      <View style={styles.line}/>
      <Text style={styles.cover}>Forgot Password?</Text>
      </View>
      <View style={styles.miniForm}>
      <View style={styles.account}>
      <Text style={styles.pheading}>Don't have an account?</Text>
      <TouchableOpacity
      onPress={()=>navigation.navigate("Signup")}
      >
      <Text style={styles.signup}>Sign up</Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
      </View>
      </ScrollView>
    )
}
export default Login