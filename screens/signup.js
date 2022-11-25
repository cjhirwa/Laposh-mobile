import React, {useState} from 'react'
import axios from 'axios';
import { TextInput,ScrollView, Text, View, KeyboardAvoidingView,TouchableOpacity,ActivityIndicator,Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../assets/css/styles';
const Signup = () => {
    const navigation = useNavigation();
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [cpassword,setCPassword]=useState('');
    const [isLoading,setLoading]=useState(false);

    const Register=async()=>{
     
      if(firstName=="" || lastName=="" || email=="" || password=="" || cpassword==""){
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
      else if(password!=cpassword){
        Alert.alert(
          'Warning',
          'Password mismatch!',
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
        try{
        const customer = JSON.stringify({
          firstName:firstName,
          lastName:lastName,
          email:email,
          password:password
        });
        const config = {
            headers: {
            'Content-Type': 'application/json'
            }
              };
    const response = await axios.post('https://reservation-zeta.vercel.app/customer/register', customer, config);
      if(response.data.error){
        setLoading(false)
        Alert.alert(
        'Notification',
        `${response.data.error}`,
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
      setLoading(false)
      Alert.alert(
         'Success',
         'account was successfully created!',
         [
           {
             text: 'Ok',
             onPress: () =>{
               navigation.navigate('Login')
           }
           },
         ],
         { cancelable: true}
       )
      }
    }
    catch(e){
    }
    
  }

    }
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
          {isLoading? 
            <ActivityIndicator
            style={styles.activityIndicator}
            size="large"
            />:(
      <View style={[styles.form, styles.elevation]}>
      <Text style={styles.heading}>First Name</Text>
          <TextInput 
          onChangeText={(text)=>setFirstName(text)}
          style={styles.input}
          />
      <Text style={styles.heading}>Last Name</Text>
        <TextInput 
         onChangeText={(text)=>setLastName(text)}
        style={styles.input}
        />
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
      <Text style={styles.heading}>Email</Text>
          <TextInput 
           onChangeText={(text)=>setEmail(text)}
          style={styles.input}
          />
      <Text style={styles.heading}>Password</Text>
          <TextInput 
          onChangeText={(text)=>setPassword(text)}
          secureTextEntry={true}
          style={styles.input}
          />
      <Text style={styles.heading}>Re-type password</Text>
          <TextInput 
          onChangeText={(text)=>setCPassword(text)}
          secureTextEntry={true}
          style={styles.input}
          />
          <TouchableOpacity
        style={styles.button}
        onPress={()=>Register()}
      >
        <Text style={styles.heading}>Register</Text>
      </TouchableOpacity>
      </KeyboardAvoidingView>
      </View>
            )}
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
