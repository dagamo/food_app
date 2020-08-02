import { StyleSheet } from 'react-native';
import { wp, hp } from 'App/Services/Responsive';
import { Colors, Fonts } from 'App/Theme/index';

export const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center'
  },
	Sos: {
		backgroundColor: Colors.red,
    alignItems:'center',
    justifyContent:'center'
  },
  sosText:{
    ...Fonts.h2,
    fontWeight:'bold',
    color: Colors.white,
    transform:[{rotate:'45deg'}]
  },
  tapText:{
    ...Fonts.h3,
    color: Colors.pink,
   position:'absolute'
  },
  helpText:{
    marginTop: hp(6),
    marginBottom: hp(5),
    alignItems:'center',
    height: hp(3),
    width:wp(100)
  },
  sosContainer:{
    alignItems:'center',
    justifyContent:'center'
  },
  circle:{
    borderRadius: wp(20)/2,
    position:'absolute',
    width: wp(20), 
    height:wp(20), 
    transform:[
      {rotate:'45deg'}
    ],
    alignItems:'center',
    justifyContent:'center'
  },
  circleButton:{
    height:"100%",
    width:"100%",
    borderRadius:wp(40),
    alignItems:"center",
    justifyContent:"center"
  }
});
