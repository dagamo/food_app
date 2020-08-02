import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Icon } from 'native-base';
import {styles} from './styles'

const ButtonRounded = (props) => {
  props = {
    ...props,
    style:{
      ...styles.container,
      ...props.style,
    },
    textStyle:{
      ...styles.textStyle,
      ...props.textStyle
    }
  }

	return <TouchableOpacity {...props} >
    {props.icon}
    <Text style={props.textStyle}>{props.title}</Text>
  </TouchableOpacity>;
};

export default ButtonRounded;
