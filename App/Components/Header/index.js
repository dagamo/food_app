import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from './styles';

const Header = (props) => {
	const { title } = props;
	props = {
		style: {
			...styles.container,
			...props.style
		}
	};

	return (
		<View {...props}>
			<View style={styles.iconLeft}>{props.iconLeft}</View>
			<View>{props.iconRight}</View>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

Header.propTypes = {
	style: PropTypes.object,
	iconLeft: PropTypes.any,
	iconRight: PropTypes.any
};

export default Header;
