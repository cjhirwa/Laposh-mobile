import React from 'react'
import { TextInput,ScrollView, Text, View, KeyboardAvoidingView,TouchableOpacity,ActivityIndicator } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../assets/css/styles';
const Signup = () => {
    const navigation = useNavigation();
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [age,setAge]=useState();
    const [isLoading,setLoading]=useState(false);

    const Register=async()=>{
      if(firstName=="" || lastName=="" || email=="" || age==""){
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
        setLoading(false)
      }
      else{
        setLoading(true)
  const response=await fetch('https://reservation-h7rxq6cut-hicode-byte.vercel.app/customer/register',
  {
    method:'POST',
    headers:{
      Accept:'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      firstName:firstName,
      lastName:lastName,
      email:email,
      age:age
    })
  })
  if(response.error){
    setLoading(false)
     Alert.alert(
        'Success',
        'account was successfully created. Please check your email to read more',
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
      Alert.alert(
         'Success',
         'account was successfully created. Please check your email to read more',
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
      <Text style={styles.heading}>Age</Text>
          <TextInput 
          keyboardType='numeric'
          onChangeText={(text)=>setAge(text)}
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
