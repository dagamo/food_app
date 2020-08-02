import {StyleSheet} from 'react-native';
import {wp, hp} from 'App/Services/Responsive'
import { Colors } from 'App/Theme/index';

export const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
  },
  alert:{
    width: wp(87),
    minHeight: hp(10),
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:wp(5),
    borderRadius:wp(2),
    borderWidth:5,
    borderColor: Colors.gray60,
    backgroundColor:Colors.white
  }
})