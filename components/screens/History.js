
import React from 'react'
import { Image,Text, View,ScrollView, TouchableOpacity, SafeAreaView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../../assets/css/styles';
const Home = () => {
    const navigation = useNavigation();
    return(
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.navBar}>
        <Text style={styles.logo}>La Posh</Text>
        </View>
      <View style={styles.section}> 
        <View style={styles.History}>
        <Text style={styles.reference}>ID: VAX-430986</Text>
        <View style={styles.tags}>
       <Text style={styles.heading}>Standard</Text>
            <Text style={styles.heading}>Ocean View</Text>
            <Text style={styles.price} >700<Text>$</Text></Text>
        </View>
        <View>
        <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('DetailsTab')}
        >
        <Text>View more</Text>
        </TouchableOpacity>
        </View>
        </View> 
        <View style={styles.History}>
        <Text style={styles.reference}>ID: VAX-430986</Text>
        <View style={styles.tags}>
       <Text style={styles.heading}>Standard</Text>
            <Text style={styles.heading}>Ocean View</Text>
            <Text style={styles.price} >700<Text>$</Text></Text>
        </View>
        <View>
        <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('DetailsTab')}
        >
        <Text>View more</Text>
        </TouchableOpacity>
        </View>
        </View> 
                <View style={styles.History}>
        <Text style={styles.reference}>ID: VAX-430986</Text>
        <View style={styles.tags}>
       <Text style={styles.heading}>Standard</Text>
            <Text style={styles.heading}>Ocean View</Text>
            <Text style={styles.price} >700<Text>$</Text></Text>
        </View>
        <View>
        <TouchableOpacity
        style={styles.button}
        onPress={()=>navigation.navigate('DetailsTab')}
        >
        <Text>View more</Text>
        </TouchableOpacity>
        </View>
        </View> 
      </View>
        </ScrollView>
        </SafeAreaView>
    )
  }
export default Home