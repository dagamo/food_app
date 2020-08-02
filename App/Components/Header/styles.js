import {StyleSheet} from 'react-native'
import {Colors, Fonts} from 'App/Theme/index';
import {wp, hp} from 'App/Services/Responsive';

export const styles = StyleSheet.create({
  container:{
    backgroundColor: Colors.white,
    height: hp(8),
    alignItems:"center",
    paddingTop: hp(2)
  },
  title:{
    ...Fonts.normal,
    fontWeight:'bold'
  },
  iconLeft:{
    position:"absolute",
    top: hp(2),
    left:wp(2)
  },
  iconRight:{
    position:"absolute",
    top: hp(2),
    right:wp(2)
  }
})