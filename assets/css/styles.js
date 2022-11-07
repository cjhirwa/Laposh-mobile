import { Dimensions,StyleSheet } from 'react-native'
import COLORS from '../colors/colors'
const {width,height}=Dimensions.get("window")
const styles = StyleSheet.create({
    container: {
      flex: 1,
      position:'relative'
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
    navBar:{
        height:60,
        width:'100%',
        backgroundColor:COLORS.secondary,
        borderTopWidth:1,
        borderTopColor:COLORS.main,
        elevation:12,
        paddingHorizontal:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:10,
        position:'relative',
        left:0,
        right:0,
        top:0
    },
    logo:{
width:65,
height:30,
padding:1,
fontSize:17,
fontWeight:'bold',
fontStyle:'italic',
color:COLORS.main,
borderBottomColor:COLORS.main,
borderBottomWidth:7,
paddingBottom:0

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
    pheading: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        color:COLORS.main,
        marginTop:2,
        marginLeft:10
      },
    main:{
        backgroundColor:'rgba(0,0,0,0.7)',
        flex:1,
      },
      mainSection:{
        backgroundColor:COLORS.main,
        paddingHorizontal:10,
        width:width,
      },
      mainForm: {
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
        marginTop:20,
        marginBottom:5,
        padding:5,
        paddingBottom:15,
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
marginTop:10,
flexDirection:'row',
flexWrap:'wrap',
justifyContent:'space-around',
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
                  paddingHorizontal:10,
                  height:height
                },
                form: {
                  backgroundColor: COLORS.secondary,
                  borderRadius: 10,
                  paddingVertical: 45,
                  paddingHorizontal: 25,
                  marginTop:30,
                  marginBottom:20,
                },
                loginForm: {
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
                  marginTop:50,
                  fontSize:32,
                  fontWeight:'bold',
                  textAlign:'center',
                },
                subtitle:{
                  color:'white',
                  marginTop:50,
                  fontSize:24,
                  fontWeight:'bold',
                  textAlign:'center',
                },

                        main:{
                          backgroundColor:'rgba(0,0,0,0.5)',
                          flex:1,
                        },
                        form: {
                          backgroundColor: COLORS.secondary,
                          borderRadius: 10,
                          paddingVertical: 45,
                          paddingHorizontal: 25,
                          marginVertical: 10,
                          marginTop:40,
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