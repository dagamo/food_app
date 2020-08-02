import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
//Components
import Avatar from 'App/Components/Utilities/Thumbnail/index';
//Styles
import { styles } from './styles';
import { Colors, Helpers } from 'App/Theme/index';
//data
import { user } from 'App/Constants/users';

const Comment = (props) => {
	const { type, name } = props;
	const objetStyles = {
		attend: {
			background: Colors.pink,
			title: styles.commentTitle,
			time: styles.commentTime,
			comment: styles.commentText
		},
		comment: {
			background: Colors.white,
			title: styles.commentTitleBlack,
			time: styles.commentTimeBlack,
			comment: styles.commentTextBlack
		}
	};

	return (
		<View style={{ ...styles.superCommentContainer, backgroundColor: objetStyles[type].background }}>
			<View style={[ Helpers.row ]}>
				<View style={styles.avatar}>
					<Avatar src={user.photo} size={12} />
				</View>
				<View style={styles.rightComent}>
					<View style={styles.headerComment}>
						<Text style={objetStyles[type].title}>{name}</Text>
						<Text style={objetStyles[type].time}> Hace 6 h</Text>
					</View>
					<Text style={objetStyles[type].comment}>
						Se ha tomado en cuenta su denuncia, el dia lunes se ha resuelto la situacion.
					</Text>
				</View>
			</View>
		</View>
	);
};

Comment.propTypes = {
	attend: PropTypes.string.isRequired
};

export default Comment;
