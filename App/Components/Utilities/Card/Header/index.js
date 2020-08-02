import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
//components
import Avatar from 'App/Components/Utilities/Thumbnail/index';
//styles
import { styles } from './styles';
import { Helpers } from 'App/Theme/index';
//data
import { user } from 'App/Constants/users';

const ComplaintNoticeCard = (props) => {
	return (
		<View style={Helpers.row}>
			<Avatar src={user.photo} size={12} />
			<View>
				<Text style={styles.title}>Anonimo</Text>
				<Text style={styles.time}>Hace 6 h</Text>
			</View>
		</View>
	);
};

ComplaintNoticeCard.propTypes = {
	attended: PropTypes.bool.isRequired
};

export default ComplaintNoticeCard;
