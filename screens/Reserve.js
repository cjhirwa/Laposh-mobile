import React from 'react'

import { TextInput, Text, View, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../assets/css/styles';
const Reserve = () => {
   const navigation = useNavigation();
    return (
      <View style={styles.main}>
      <View style={styles.section}>
      <Text style={styles.title}>
            La Posh Hotel
          </Text>
          <View style={styles.line}/>
          <Text style={styles.subtitle}>
            Booking information
          </Text> 
      <View style={[styles.loginForm, styles.elevation]}>
      <Text style={styles.heading}>Check-in-Date</Text>
          <TextInput 
          style={styles.input}
          />
      <Text style={styles.heading}>Check-out-Date</Text>
          <TextInput 
          style={styles.input}
          />
      <Text style={styles.heading}>Room</Text>
          <TextInput 
          style={styles.input}
          />
      <Text style={styles.heading}>
            Special information
          </Text>
          <TextInput style={styles.input}>
          </TextInput>
          <TouchableOpacity
        style={styles.button}
         onPress={()=>navigation.navigate('Home')}
      >
      <Text style={styles.heading}>Send</Text>
      </TouchableOpacity>
</View>
      </View>
      </View>
    )
}
export default Reserve