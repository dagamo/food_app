import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

//styles
import { styles } from './styles';

const checkBox = (props) => {
	const { checked } = props;
	props = {
		...props,
		style: {
			...styles.container,
			...props.style
		}
	};
	
	let styleCheck = checked ? [props.style, styles.checked] : props.style;

	return (
		<TouchableOpacity {...props} style={styleCheck}>
			{checked && <Icon type="Foundation" name="check" style={styles.icon}/>}
		</TouchableOpacity>
	);
};

checkBox.defaultProps = {
	style:{}
}

export default checkBox;
