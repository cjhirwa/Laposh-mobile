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
      backgroundColor:COLORS.bg,
      marginHorizontal:-10
   },
   imagebg:{
    height:height
   },
    account:{
      marginVertical:20,
      marginHorizontal:30,
      flexDirection:'row',
    },
    cover:{
color:'#0083A3',
marginHorizontal:5,
marginTop:40,
textAlign:'right',
fontSize:14,
fontWeight: '600',
    },
    tab:{
      backgroundColor:COLORS.main
    },
    signup:{
      color:'#0083A3',
      marginHorizontal:5,
      marginTop:1,
      fontWeight:'bold',
      fontSize:15
          },
    profile:{
        width:40,
        height:40,
        borderRadius:40,
        borderColor:COLORS.main,
        borderWidth:1,
        padding:1
    },
    indicator: {
      padding: 12,
      backgroundColor: COLORS.white,
      borderRadius: 12
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
        backgroundColor:COLORS.bg,
        paddingHorizontal:5,
        width:width,
      },
      list:{
        backgroundColor:'rgb(228, 228, 228)',
        paddingHorizontal:5,
        width:width,
        paddingBottom:160,
        marginTop:Platform.OS === 'ios' ?20:0
      },
      mainForm: {
        backgroundColor: COLORS.white,
        borderRadius: 5,
        marginTop:10,
        marginBottom:5,
        padding:5,
        paddingBottom:15,
        width:width-10,
        marginLeft:1,
      },
      profile: {
        backgroundColor: COLORS.white,
        borderRadius: 5,
        marginTop:"10%",
        marginBottom:5,
        padding:5,
        paddingBottom:15,
        width:"90%",
        marginHorizontal:"5%"
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
        elevation:5,
        marginHorizontal:5,
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
          elevation:40,
          backgroundColor: COLORS.secondary,
          borderColor:COLORS.main,
          borderWidth:1,
          borderRadius:10,
          width:"70%"
  },
  mainbutton:{
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
    paddingVertical:10,
    width:"100%"
},
      button:{
        paddingVertical:10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
        borderRadius: 4,
        elevation: 10,
        fontSize:70,
        fontWeight:'bold',
        color:'white',
        marginTop:30,
        alignSelf:'center',
        borderColor:COLORS.main,
        borderWidth:1,
        backgroundColor: COLORS.white,
        borderRadius:20
            },
                section:{
                  backgroundColor:COLORS.bg,
                  paddingHorizontal:5,
                  minHeight:height-65
                  
                },
                form: {
                  backgroundColor: COLORS.secondary,
                  borderRadius: 5,
                  paddingVertical: 45,
                  paddingHorizontal: 25,
                  marginTop:30,
                },
                mainlogo:{
                  width:"50%",
                  height:90,
                  marginHorizontal:"25%",
                },
                loginForm: {
                  borderRadius: 5,
                  backgroundColor: COLORS.white,
                  paddingVertical: 10,
                  paddingHorizontal: 25,
                  marginTop:30,
                  marginHorizontal:10
                },
                check: {
                  borderRadius: 5,
                  backgroundColor: COLORS.white,
                  paddingVertical: 50,
                  paddingHorizontal: 20,
                  marginTop:90,
                  width:"80%",
                  marginHorizontal:"10%",
                  elevation:40,
                },
                miniForm: {
                  backgroundColor: COLORS.white,
                  paddingHorizontal: 10,
                  marginTop:10,
                  borderRadius: 5,
                  marginHorizontal:10
                },
                line:{
                  marginBottom:30,
                  borderBottomColor: COLORS.grey,
                  borderBottomWidth: 1,
                },
                title:{
                  color:COLORS.main,
                  marginTop:20,
                  fontSize:32,
                  textAlign:'center',
                },
                subtitle:{
                  color:COLORS.main,
                  marginTop:10,
                  fontSize:24,
                  fontWeight:'bold',
                  textAlign:'center',
                },

                        main:{
                          backgroundColor:COLORS.bg,
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
                    
                    elevation: Platform.OS === 'ios' ? 0:20,
                    borderColor:Platform.OS === 'ios' ? COLORS.main:COLORS.white,
                    borderWidth:1,
                    fontSize:16,
                    fontWeight:'bold',
                    backgroundColor: COLORS.white,
                        },
                    dateinput:{
                          marginBottom:15,
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingVertical: 10,
                          paddingHorizontal: 20,
                          borderRadius: 4,
                          height:Platform.OS === 'ios' ?80:45,
                          elevation: Platform.OS === 'ios' ? 0:20,
                          borderColor:Platform.OS === 'ios' ? COLORS.main:COLORS.white,
                          borderWidth:1,
                          fontSize:16,
                          fontWeight:'bold',
                          backgroundColor: COLORS.white,
                              },
                   variableInput:{
                          marginBottom:15,
                          alignItems: 'center',
                          justifyContent: 'center',
                          paddingVertical: 10,
                          paddingHorizontal: 20,
                          borderRadius: 4,
                          elevation: 10,
                          borderColor:Platform.OS === 'ios' ? COLORS.main:COLORS.white,
                          borderWidth:1,
                          fontSize:16,
                          fontWeight:'bold',
                          backgroundColor: COLORS.white,
                              },
  
    }
  
  );
  export default styles