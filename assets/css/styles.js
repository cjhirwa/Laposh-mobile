import { Dimensions,StyleSheet } from 'react-native'
import COLORS from '../colors/colors'
const {width,height}=Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
      flex: 1,
      position:'relative',
      backgroundColor:COLORS.white
    },
    activityIndicator: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: height-60,
      backgroundColor:COLORS.main
   },
    account:{
      height:60,
      marginTop:30,
      marginHorizontal:30,
      flexDirection:'row',
    },
    cover:{
color:COLORS.main,
marginHorizontal:5,
marginTop:1,
textAlign:'center',
fontSize:18,
fontWeight: '600',
marginTop:10
    },
    tab:{
      backgroundColor:COLORS.main
    },
    signup:{
      color:'#0083A3',
      marginHorizontal:5,
      marginTop:1,
      fontWeight:'bold',
      fontSize:18
          },
    profile:{
        width:40,
        height:40,
        borderRadius:40,
        borderColor:COLORS.main,
        borderWidth:1,
        padding:1
    },
    heading: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 5,
      color:COLORS.main
    },
    price: {
      fontSize: 18,
      fontWeight: '600',
      marginBottom: 5,
      color:COLORS.main
    },
    pheading: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        color:COLORS.main,
        marginTop:2,
      },
      titles: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: -51,
        color:COLORS.main,
        marginTop:1,
        marginLeft:10
      },
    main:{
        backgroundColor:'rgba(0,0,0,0.7)',
        flex:1,
      },
      mainSection:{
        backgroundColor:COLORS.main,
        paddingHorizontal:5,
        width:width,
      },
      list:{
        backgroundColor:'rgb(228, 228, 228)',
        paddingHorizontal:5,
        width:width,
        paddingBottom:110
      },
      mainForm: {
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        marginTop:10,
        marginBottom:5,
        padding:5,
        paddingBottom:15,
        width:width-10,
        marginLeft:1,
      },
      rooms: {
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        marginBottom:5,
        padding:5,
        flexDirection:'row',
        paddingBottom:15,
        width:width-10,
        marginLeft:1,
      },
      reservations: {
        backgroundColor: COLORS.white,
        borderRadius: 5,
        marginTop:5,
        marginBottom:5,
        padding:5,
        elevation:20,
        width:width-30,
        marginLeft:5,
      },
      History: {
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        marginTop:40,
        marginBottom:5,
        padding:5,
        paddingTop:0,
        paddingBottom:15,
        width:width-30,
        marginLeft:5,
      },
      reference: {
        backgroundColor: COLORS.main,
        borderRadius: 5,
        marginTop:-20,
        padding:5,
        paddingBottom:5,
        width:width-90,
        marginLeft:25,
        borderColor:COLORS.secondary,
        borderWidth:2,
        color:COLORS.secondary,
        fontSize:20,
        fontWeight:'bold',
        paddingVertical:5,
        textAlign:'center',
        paddingHorizontal:10
      },
      status:{
        width:20,
        height:20,
        borderRadius:20
      },
      additional:{
marginVertical:10,
paddingHorizontal:10,
color:COLORS.main
      },
      image:{
        width:'45%',
        height:100,
        borderRadius:5,
      },

      roomimage:{
        width:'100%',
        height:300,
        borderRadius:5,
      },
      imageProfile:{
        width:150,
        height:150,
        borderRadius:150,
        borderWidth:2,
        marginTop:50,
        marginBottom:30,
        borderColor:COLORS.main
      },
      label:{
flexDirection:'row',
margin:5,
flexWrap:'wrap',
marginLeft:20
      },

      profileManager:{
          justifyContent:'center',
          alignItems:'center',
          alignContent:'center'
      },
      tags:{
          paddingLeft:15,
          width:"60%",
          flexDirection:'column',
      },
      details:{
        marginTop:20,
        paddingHorizontal:20,
        width:"100%",
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
  checkbutton:{
          paddingVertical:5,
          alignItems: 'center',
          paddingHorizontal: 20,
          borderRadius: 4,
          elevation: 10,
          fontSize:70,
          fontWeight:'bold',
          marginTop:10,
          backgroundColor: COLORS.secondary,
          borderColor:COLORS.main,
          borderWidth:1,
          borderRadius:10,
          width:"70%"
  },
      button:{
        paddingVertical:15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 10,
        fontSize:70,
        fontWeight:'bold',
        color:'white',
        marginTop:30,
        width:200,
        alignSelf:'center',
        backgroundColor: COLORS.secondary,
        borderColor:COLORS.main,
        borderWidth:2,
        borderRadius:20
            },
                section:{
                  backgroundColor:COLORS.main,
                  paddingHorizontal:5,
                  minHeight:height-70
                  
                },
                form: {
                  backgroundColor: COLORS.secondary,
                  borderRadius: 5,
                  paddingVertical: 45,
                  paddingHorizontal: 25,
                  marginTop:30,
                },
                loginForm: {
                  borderRadius: 5,
                  backgroundColor: COLORS.secondary,
                  paddingVertical: 45,
                  paddingHorizontal: 25,
                  marginTop:30,
                },
                miniForm: {
                  backgroundColor: COLORS.secondary,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  marginTop:5,
                },
                line:{
                  marginTop:30,
                  borderBottomColor: COLORS.grey,
                  borderBottomWidth: 1,
                },
                title:{
                  color:'white',
                  marginTop:20,
                  fontSize:32,
                  textAlign:'center',
                },
                subtitle:{
                  color:'white',
                  marginTop:10,
                  fontSize:24,
                  fontWeight:'bold',
                  textAlign:'center',
                },

                        main:{
                          backgroundColor:'rgba(0,0,0,0.5)',
                          flex:1,
                        },
                    input:{
                    marginBottom:15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 4,
                    height:45,
                    elevation: 6,
                    fontSize:16,
                    fontWeight:'bold',
                    backgroundColor: COLORS.secondary,
                        },
  
    }
  
  );
  export default styles