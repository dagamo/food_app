import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { Icon } from 'native-base';
import { styles } from './styles';

const BottomOptions = (props) => {
	const { options, pickOption } = props;

	/**
   * 
   * This handles if for send the option selected.
   */

	const handlePickOption = (option) => {
		pickOption && pickOption(option);
	};

	props = {
		...props,
		style: {
			...styles.modal,
			...props.style
		}
	};

	return (
		<Modal {...props}>
			<View style={styles.optionsContainer}>
				{options.map((o, i) => (
					<TouchableOpacity style={styles.optionContainer} onPress={() => handlePickOption(o.name)} key={i}>
						{o.iconType && <Icon type={o.iconType} name={o.iconName} style={styles.icon} />}
						<Text style={styles.text}>{o.name}</Text>
					</TouchableOpacity>
				))}
			</View>
		</Modal>
	);
};

/**
 * @param style of the containerModal component
 * @param isVisible default value is false, It's used when the modal is showing.
 * @param options This is a list of the options every option is a object {name:"optionName", iconType, iconName}
 * @param backdropColor Is the backgroundColor of the modal componnent
 * @param swipeDirection Is the enabled sides to swipe.
 * More params see the documentation https://github.com/react-native-community/react-native-modal
 */

BottomOptions.defaultProps = {
	style: {},
	isVisible: false,
	options: [],
	hasBackdrop: true,
	backdropColor: 'black',
	swipeDirection: [ 'up', 'left', 'right', 'down' ]
};

export default BottomOptions;
