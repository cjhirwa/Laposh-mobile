import React, {useState} from 'react'
import { TextInput, Text, ScrollView,View, TouchableOpacity,ActivityIndicator,Alert} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../assets/css/styles';
const Login = () => {
   const navigation = useNavigation();
   const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [isLoading,setLoading]=useState(false);
    const Signin=async()=>{
      if(email=="" || email==""){
        Alert.alert(
          'Warning',
          'All field are required!',
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
      else{
        setLoading(true)
        try{
          const customer = JSON.stringify({
            email:email,
            password:password
          });
          const config = {
              headers: {
              'Content-Type': 'application/json'
              }
                };
      const response = await axios.post('https://reservation-zeta.vercel.app/customer/login', customer, config);
      if(response.data.error){
        setLoading(false)
          Alert.alert(
            'Error',
            `${response.data.error}`,
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
        else{
          setLoading(false)
          await AsyncStorage.setItem('token',response.data.token);
          navigation.navigate('Home') 
        }
          }
          catch(e){
console.log(e)
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
        onPress={()=>Signin()}
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