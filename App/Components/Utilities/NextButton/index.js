import React from 'react';
import {TouchableOpacity} from 'react-native'
import {Icon} from 'native-base'
//services
import { wp } from 'App/Services/Responsive';
//styles
import {styles}from './styles'

const nextButton = (props) =>{

  const {name, type, size}  = props
  let sizePerceint = wp(size)

  /**
   * This is a mutation for update the props styles for the nextButton
   */
  
  props = {
    ...props,
    style:{
      ...styles.nextButton,
      ...props.style,
      width: sizePerceint,
      height: sizePerceint,
      borderRadius: sizePerceint/2
    }
  }

  let iconStyle = {
    ...styles.nextIcon,
    fontSize: Number(sizePerceint) * 0.8
  }

  return (
    <TouchableOpacity {...props}>
      <Icon type={type} name={name} style={iconStyle}></Icon>
    </TouchableOpacity>
  )
}
/**
 * @param name It's the name of the Icon.
 * @param type It's the type of the Icon component
 * @param size It's the Icon component size.
 */

nextButton.defaultProps= {
  name:"angle-right",
  type:"FontAwesome5",
  size:16,
  style: {},

}

export default nextButton