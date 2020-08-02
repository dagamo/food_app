import {StyleSheet} from 'react-native'
import {wp, hp} from 'App/Services/Responsive';
import {Colors, Fonts} from 'App/Theme/index';

export const styles = StyleSheet.create({
  itemContainer:{
    paddingVertical: hp(0.5),
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"space-between"
  },
  title:{
    ...Fonts.medium,
    marginLeft:wp(2.4)
  },
  icon:{
    fontSize:wp(6)
  },
  iconRight:{
    fontSize:wp(8),
    color:Colors.gray70
  },
  partLeft:{
    flexDirection:"row",
    alignItems:"center"
  }
})