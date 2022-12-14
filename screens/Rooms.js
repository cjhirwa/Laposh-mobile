import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Image,Text, View, TouchableOpacity, SafeAreaView,TextInput, ActivityIndicator,FlatList,RefreshControl} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { EvilIcons } from '@expo/vector-icons'; 
import styles from '../assets/css/styles';
import Header from '../components/header';
const Rooms = () => {
  const url='https://reservation-zeta.vercel.app/rooms';
  const [isLoading,setLoading]=useState(true);
  const [refreshing, setRefreshing] = useState(false);
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
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      getRooms()
      setRefreshing(false);
    }, 5000);
  };
  useEffect(()=>{getRooms()},[]);
    const navigation = useNavigation();
    return(
      <SafeAreaView style={styles.container}>
        <Header />
        {isLoading? 
          <View style= {styles.activityIndicator}>
            <ActivityIndicator
            style= {styles.indicator}
            size={70}
            /><Text style={styles.signup}>Loading rooms...</Text></View>:(
              <View>
              <View  style={styles.search}>
       <View style={styles.sinput}>
      <View style={styles.sicon}>
      <EvilIcons name="search" size={29} color="black" />
      </View>
      <View style={{flex:8}}>
          <TextInput 
           onChangeText={(text) => searchFilter(text)}
          onBlur={(text) => searchFilter('')}
          onCancel={(text) => searchFilter('')}
          placeholder="Search for a room..."
          value={search}
          style={styles.input_search}
          />
          </View>
          </View>

        </View>
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
            <Text style={styles.price} ><Text>$ </Text>{item.price}<Text> /day</Text></Text>
            </View>
            <View style={styles.specials}>
              <Text style={{width:70}}> Free wifi</Text>
              <Text style={{width:60}}> | Fridge</Text>
              <Text style={{width:70}}> | Flat TV</Text>
              <Text style={{width:120}}> | Italian breakfast</Text>
            </View>
        </View>
        </View>
        </TouchableOpacity>
        }
        refreshControl={
        <RefreshControl refreshing={refreshing} 
          onRefresh={onRefresh}/>
      } 
      />   
      </View>
      </View>
      )}
        </SafeAreaView>
    )
  }
export default Rooms