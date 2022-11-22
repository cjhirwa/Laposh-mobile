import React from 'react'

import { TextInput, Text, ScrollView,View, TouchableOpacity,ActivityIndicator} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../assets/css/styles';
const Login = () => {
   const navigation = useNavigation();
   const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [isLoading,setLoading]=useState(false);
    const Singin=async()=>{
      if(email=="" || email==""){
        Alert.alert(
          'Warning',
          'All field are required!',
          [
            {
              text: 'Ok',
              onPress: () =>{
                navigation.navigate('Signup')
            }
            },
          ],
          { cancelable: false}
        )
      }
      else{
        setLoading(true)
  const response = await fetch('https://reservation-h7rxq6cut-hicode-byte.vercel.app/customer/login',
  {
    method:'POST',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      email:email,
      password:password
    })
  })
  if(response.error){
    setLoading(false)
    Alert.alert(
      'Error',
      'Invalid credentials',
      [
        {
          text: 'Ok',
          onPress: () =>{
            navigation.navigate('Login')
        }
        },
      ],
      { cancelable: false}
    )
  }
  else if(response.logins==0){
    navigation.navigate('Reserve')
  }
  else{
    navigation.navigate('Home')
  }
     }}
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
          {isLoading? 
            <ActivityIndicator
            style={styles.activityIndicator}
            size="large"
            />:(
      <View style={[styles.loginForm, styles.elevation]}>
      <Text style={styles.heading}>Username</Text>
          <TextInput 
           onChangeText={(text)=>setEmail(text)}
          style={styles.input}
          />
      <Text style={styles.heading}>
            Password
          </Text>
          <TextInput 
           onChangeText={(text)=>setPassword(text)}
          secureTextEntry={true} 
          style={styles.input}
          >
          </TextInput>
          <TouchableOpacity
        style={styles.button}
        onPress={()=>Singin()}
      >
      <Text style={styles.heading}>Login</Text>
      </TouchableOpacity>

      <View style={styles.line}/>
      <Text style={styles.cover}>Forgot Password?</Text>
      </View>
      )}
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