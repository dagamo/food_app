import React from 'react';
import { View, ViewComponent } from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './styles';

const alert = (props) => {
	let { alertStyle } = props;
	alertStyle = {
		...styles.alert,
		...alertStyle
	};

	return (
		<Modal hasBackdrop={false} {...props} style={styles.container}>
			<View style={alertStyle}>{props.children}</View>
		</Modal>
	);
};

alert.defaultProps = {
	alertStyle: {}
};

export default alert;
