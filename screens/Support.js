import React from 'react'
import { TextInput,ScrollView, Text, View, KeyboardAvoidingView,TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../assets/css/styles';
const Support = () => {
    const navigation = useNavigation();
    return (
      <ScrollView style={styles.main}>
      <View style={styles.section}>
      <Text style={styles.title}>
            La posh Hotel
          </Text>
          <View style={styles.line}/>
      <Text style={styles.subtitle}>
            Support Request
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

      <Text style={styles.heading}>Describe your Problem</Text>
          <TextInput 
          style={styles.input}
          multiline
        numberOfLines={15}
          />
      </KeyboardAvoidingView>
      <TouchableOpacity
        style={styles.button}
        // onPress={()=>navigation.navigate('Login')}
      >
        <Text style={styles.heading}>Send</Text>
      </TouchableOpacity>
      </View>
      </View>
      <View style={styles.nav}>

      </View>
      </ScrollView>
    )
}
export default Support
