import React from 'react'
import { TextInput,ScrollView, Text, View, KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../assets/css/styles';
const Signup = () => {
    const navigation = useNavigation();
    return (
      <ScrollView style={styles.container}>
      <View style={styles.main}>
      <View style={styles.section}>
      <Text style={styles.title}>
            La posh Hotel
          </Text>
          <View style={styles.line}/>
      <Text style={styles.subtitle}>
            Create Account
          </Text>
      <View style={[styles.form, styles.elevation]}>
      <Text style={styles.heading}>First Name</Text>
          <TextInput 
          style={styles.input}
          />
      <Text style={styles.heading}>Last Name</Text>
        <TextInput 
        style={styles.input}
        />

      <Text style={styles.heading}>Email</Text>
          <TextInput 
          style={styles.input}
          />
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
          <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('CompleteProfile')}
      >
        <Text style={styles.heading}>Register</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
      </View>
     
      <View style={styles.miniForm}>
      <View style={styles.account}>
      <Text style={styles.pheading}>Already have an account?</Text>
      <TouchableOpacity
      onPress={()=>navigation.navigate("Login")}
      >
      <Text style={styles.signup}>Login</Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
      </View>
      </ScrollView>
    )
}
export default Signup
