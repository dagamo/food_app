import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { styles } from './styles';

const Header = (props) => {
	const { navigation } = props;

	return (
		<View style={styles.container}>
			<View style={styles.addTextContainer}>
				<Text
					style={styles.addText}
					onPress={() => {
						navigation.navigate('AddOrder');
					}}
				>
					Agregar
				</Text>
			</View>

			<View style={styles.camera}>
				<Text style={styles.cameraText}>Pedidos en Proceso</Text>
			</View>
		</View>
	);
};

Header.defaultProps = {
	onChangeItem: () => {},
	onAddNew: () => {}
};

Header.propTypes = {
	onChangeItem: PropTypes.func.isRequired,
	onAddnew: PropTypes.func.isRequired
};

export default Header;
