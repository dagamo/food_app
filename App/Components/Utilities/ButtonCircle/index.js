import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types'
import { styles } from './styles';
import { wp, hp } from 'App/Services/Responsive';

const buttonRounded = (props) => {
	let { size } = props;
	size = wp(size);
	props = {
		...props,
		style: {
			...styles.button,
			...props.style,
			width: size,
			height: size,
			borderRadius: size / 2
		}
	};
	return <TouchableOpacity {...props}>{props.children}</TouchableOpacity>;
};

buttonRounded.defaultProps={
  size: 15
}

buttonRounded.propTypes = {
  size: PropTypes.number.isRequired
}

export default buttonRounded;
