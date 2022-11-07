import React from 'react'
import { TextInput, Text,ScrollView, View, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../assets/css/styles';
const CompleteProfile = () => {
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
            Complete Profile
          </Text>
      <View style={[styles.loginForm, styles.elevation]}>
      <Text style={styles.heading}>Date of Birth</Text>
          <TextInput style={styles.input}>
          </TextInput>
      <Text style={styles.heading}>Gender</Text>
          <TextInput style={styles.input}>
          </TextInput>
          
      <Text style={styles.heading}>Prefered Prefix</Text>
          <TextInput style={styles.input}>
          </TextInput>
          <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('HomeTab')}
      >
      <Text style={styles.heading}>Save</Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
      </ScrollView>
    )
}
export default CompleteProfile;