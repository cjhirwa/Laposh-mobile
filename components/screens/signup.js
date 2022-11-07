import React from 'react'
import { ImageBackground,TextInput,ScrollView, Text, View, KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../assets/css/styles';
const Signup = () => {
    const navigation = useNavigation();
    return (
      <ScrollView style={styles.main}>
      <View style={styles.section}>
      <Text style={styles.title}>
            La posh Hotel
          </Text>
      <Text style={styles.subtitle}>
            Create Account
          </Text>
      <View style={[styles.form, styles.elevation]}>
      <Text style={styles.heading}>First name</Text>
          <TextInput 
          style={styles.input}
          />
      <Text style={styles.heading}>Last name</Text>
          <TextInput 
          style={styles.input}
          />
    <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
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
      </KeyboardAvoidingView>
      </View>
      </View>
      <View style={styles.nav}>

      </View>
      </ScrollView>
    )
}
export default Signup
