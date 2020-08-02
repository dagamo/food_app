import React from 'react';
import { View } from 'react-native';
import { styles } from './style';

const card = (props) => {
	props = {
		...props,
		style: {
			...styles.container,
			...props.style
		}
	};
	return <View {...props} >
    {props.children}
  </View>
};

export default card;
