import {StyleSheet} from 'react-native';
import {wp, hp} from 'App/Services/Responsive';
import {Colors} from 'App/Theme/index'

export const styles = StyleSheet.create({
  container:{
    backgroundColor: Colors.white,
    paddingVertical:hp(1),
    paddingHorizontal:wp(5),
    borderRadius: wp(2)
  }
})