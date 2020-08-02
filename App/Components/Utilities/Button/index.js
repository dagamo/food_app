import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Colors } from 'App/Theme/index';
import { styles } from './styles';

const Button = (props) => {
	let { title, textStyle } = props;

	props = {
		...props,
		style: {
			...styles.buttonContainer,
			...props.style
		}
	};

	textStyle = {
		...styles.buttonText,
		...textStyle
	};

	return (
		<TouchableOpacity {...props}>
			<Text style={textStyle}>{title}</Text>
		</TouchableOpacity>
	);
};

Button.defaultProps = {
	style: {},
	title: ''
};
export default Button;
