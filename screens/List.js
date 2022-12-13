import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Image,Text, View, TouchableOpacity,TextInput, SafeAreaView,ActivityIndicator,FlatList} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import styles from '../assets/css/styles';
import { EvilIcons } from '@expo/vector-icons';
import Header from '../components/header';
const List = ({route}) => {
  const check_in_date=route.params.check_in_date;
  const check_out_date=route.params.check_out_date;
  const url='https://reservation-zeta.vercel.app/list/'+check_in_date+'/'+check_out_date;
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
        onPress={()=>navigation.navigate("Room",{rid:item._id,cindate:check_in_date,coutdate:check_out_date})}
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
      />   
      </View>
      </View>
      )}
        </SafeAreaView>
    )
  }
export default List
