import React from 'react'
import { Image,Text, View, TouchableOpacity, SafeAreaView,ActivityIndicator} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../assets/css/styles';
import Heading from '../components/heading';
const Home = () => {
    const navigation = useNavigation();
    return(
      <SafeAreaView style={styles.container}>
        <Heading />
        <View style={styles.mainForm}>
        <View style={styles.tags}>
            <Text style={styles.heading}>Nox</Text>
            <Text style={styles.heading}></Text>
            
        </View>
        </View>  
        </SafeAreaView>
    )
  }
export default Home