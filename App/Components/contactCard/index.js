import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import UserAvatar from 'react-native-user-avatar';
//actions
import OrderActions from 'App/Stores/Order/Actions';
//styles
import { styles } from './styles';
//services
import { wp } from 'App/Services/Responsive';
/**
 * 
 * @param props.information is a object where it has the name, avatar, phone and checked for the card
 */
const ContactCard = (props) => {
	const {
		information: { name, avatar, direction, itemState, products, data: { _data, _ref }, data },
		information,
		type,
		fetchUpdateOrder
	} = props;

	const updateProcessState = () => {
		const id = information.data._ref._documentPath._parts[1];
		const params = {
			..._data,
			ref: _ref,
			id,
			processState:
				type === 'order'
					? _data.processState === 'Pendiente' ? 'Preparado' : 'Pendiente'
					: _data.processState === 'Preparado' ? 'Entregado' : 'Preparado'
		};
		console.log('params2', params);
		fetchUpdateOrder(params);
	};

	const handleDeleteOrder = () => {
		const id = information.data._ref._documentPath._parts[1];
		console.log('id', id);
		props.handleOnLongPress && props.handleOnLongPress(id);
	};

	const handleOnPress = (item) => {
		props.handleOnPress && props.handleOnPress(item);
	};

	const stateColor =
		type === 'order'
			? _data.processState === 'Pendiente' ? styles.stateOne : styles.stateTwo
			: _data.processState === 'Preparado' ? styles.stateOne : styles.stateTwo;
	console.log('time', _data.time);
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={() => handleOnPress(information)}
			onLongPress={() => handleDeleteOrder()}
		>
			<View style={styles.avatarContainer}>
				<UserAvatar style={styles.avatar} size={wp(14)} name={name} src={avatar} />
			</View>
			<View style={styles.description}>
				<Text style={styles.textBold}>
					{name} - {moment(_data.time, 'hh:mm:ss').format('hh:mm a')}
				</Text>
				{products.map((p, i) => (
					<View style={styles.descriptionContainer} key={i}>
						<Text style={styles.text}>
							{p.quantity} {p.name}
						</Text>
						{p.description !== '' && <Text style={styles.text}> {p.description}</Text>}
					</View>
				))}
				<Text style={styles.text}>{direction}</Text>
			</View>
			<View style={styles.checkContainer}>
				<Text onPress={updateProcessState} style={stateColor}>
					{itemState}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

ContactCard.propTypes = {
	information: PropTypes.object.isRequired,
	onPressCheck: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
	fetchUpdateOrder: (params) => {
		dispatch(OrderActions.fetchUpdateOrder(params));
	}
});
export default connect(null, mapDispatchToProps)(ContactCard);
