import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Image,Text, View, TouchableOpacity, SafeAreaView,ActivityIndicator,FlatList} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SearchBar } from 'react-native-elements';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import COLORS from '../assets/colors/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../assets/css/styles';
import Header from '../components/header';
const Rooms = () => {
  const url='https://reservation-zeta.vercel.app/rooms';
  const [isLoading,setLoading]=useState(true);
  const [search, setSearch] = useState('');
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [rooms, setRooms] = useState([]);

  const getRooms=async ()=>{
    try{
      const response=await axios.get(url);
      setRooms(response.data)
      setFilteredRooms(response.data)
      setLoading(false)
    }
    catch(e){
    }
  } 
  const searchFilter = (text) => {
    if (text) {
      const newRoom = rooms.filter(function (item) {
        const roomData = item.name
        const textData = text;
        return roomData.indexOf(textData) > -1;
      });
      setFilteredRooms(newRoom);
      setSearch(text);
    } else {
      setFilteredRooms(rooms);
      setSearch(text);
    }
  };

  useEffect(()=>{getRooms()},[]);
    const navigation = useNavigation();
    return(
      <SafeAreaView style={styles.container}>
        <Header />
        <View  style={styles.search}>
        <SearchBar
          round
          lightTheme
          platform={Platform.OS}
          iconStyle={{backgroundColor:'#fff'}}
          searchIcon={{ size: 24,color:'#000' }}
          containerStyle={{backgroundColor: 'white'}}
          onChangeText={(text) => searchFilter(text)}
          onClear={(text) => searchFilter('')}
          onCancel={(text) => searchFilter('')}
          placeholder="Search for a room..."
          value={search}
         
        />
        </View>
        {isLoading? 
          <View style= {styles.activityIndicator}>
            <ActivityIndicator
            style= {styles.indicator}
            size={70}
            /><Text style={styles.signup}>Loading rooms...</Text></View>:(
        <View style={styles.list}>
        <FlatList
        data={filteredRooms}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => 
        <TouchableOpacity
            onPress={()=>navigation.navigate("Details",{rid:item._id})}
            >
        <View style={styles.rooms}>
        <Image style={styles.image} source={{uri: item.image}}/> 
        <View style={styles.tags}>
            <View>
            <Text style={styles.name}>{item.name}</Text>
            </View>
            <View>
            <Text style={styles.price} ><Text>$ </Text>{item.price}<Text> /hour</Text></Text>
            </View>
            <View style={styles.specials}>
              <Text> Free wifi</Text>
              <Text> | Fridge</Text>
              <Text> | Flat TV</Text>
              <Text> | Italian breakfast</Text>
            </View>
        </View>
        </View>
        </TouchableOpacity>
        }
      />   
      </View>
     
      )}
        </SafeAreaView>
    )
  }
export default Rooms