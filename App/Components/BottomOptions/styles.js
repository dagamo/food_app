import {StyleSheet} from 'react-native'
import {wp, hp} from 'App/Services/Responsive'
import {Colors, Fonts} from 'App/Theme/index'

export const styles = StyleSheet.create({
  modal :{ 
    justifyContent: 'flex-end',
    margin:0,
   },
   optionsContainer:{
     width:wp(100),
     paddingHorizontal:hp(1),
     paddingVertical:hp(2),
     backgroundColor: Colors.white,
     margin:wp(1)
   },
   optionContainer:{
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:wp(2),
    marginBottom:hp(2)
   },
   text:{
    ...Fonts.normal,
    fontSize: wp(4)
   },
   icon:{
     color: Colors.black,
     fontSize: wp(6),
     marginRight: wp(3)
   }
})