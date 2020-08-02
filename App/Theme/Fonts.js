import { StyleSheet } from 'react-native'
import {wp} from 'App/Services/Responsive'
import {fontFamily} from 'App/Theme/FontFamily'

const size = {
  h1: wp(9),
  h2: wp(8),
  h3: wp(6),
  h4:wp(5.8),
  input: wp(4),
  regular: wp(5),
  medium: wp(4),
  small: wp(3.7),
  superSmall: wp(3)
}

export default StyleSheet.create({
  h1: {
    fontSize: size.h1,
    fontFamily
  },
  h2: {
    fontSize: size.h2,
    fontFamily
  },
  h3: {
    fontSize: size.h3,
    fontFamily
  },
  h4:{
    fontSize: size.h4,
    fontFamily
  },
  normal: {
    fontSize: size.regular,
    fontFamily
  },
  small:{
    fontSize: size.small,
    fontFamily
  },
  superSmall:{
    fontSize: size.superSmall,
    fontFamily
  },
  medium:{
    fontSize: size.medium,
    fontFamily
  },
  regular:{
    fontSize: size.regular,
    fontFamily
  }

})
