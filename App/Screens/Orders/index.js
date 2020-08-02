import React, { Fragment, useState, useEffect } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { Icon, Tab, Tabs, TabHeading } from 'native-base';
//components
import ContactClient from 'App/Components/contactCard';
import BottomOptions from 'App/Components/BottomOptions/index';
//actions
import OrderActions from 'App/Stores/Order/Actions';
//styles
import { styles } from './styles';

const bottomOptions = [ { name: 'Eliminar', iconType: 'FontAwesome', iconName: 'trash-o' } ];

const Tracking = (props) => {
	const { orders, fetchOrders, fetchDeleteOrder, newOrderFetch } = props;
	const { navigation } = props;
	const [ optionsModal, setOptions ] = useState(false);
	const [ visible, setVisible ] = useState(false);
	const [ selected, setSelected ] = useState({});
	const [ orderID, setOrderID ] = useState('');

	useEffect(
		() => {
			const unsubscribe = navigation.addListener('focus', () => {
				fetchOrders();
			});

			return unsubscribe;
		},
		[ navigation ]
	);

	const handleDelete = (option) => {
		fetchDeleteOrder(orderID);
		setOptions(false);
	};

	const handleOnLongPress = (id) => {
		handleOpen();
		setOrderID(id);
	};
	const handleOnPress = (item) => {
		setSelected(item);
		setVisible(true);
	};
	const handleClose = () => {
		console.log('delete');
		setOptions(false);
	};
	const handleOpen = () => setOptions(true);

	const descriptionModal = () => {
		const { name, avatar, direction, itemState, products, data: { _data, id } } = selected;
		return (
			<Modal
				animationType="fade"
				transparent={true}
				isVisible={visible}
				onBackdropPress={() => setVisible(false)}
			>
				<View style={styles.modalContainer}>
					<View style={styles.lenguagesContainer}>
						<View style={styles.description}>
							<Text style={styles.textBold}>
								{name} - {moment(_data.time, 'hh:mm:ss').format('hh:mm a')}
							</Text>
							{_data.phone !== '' && <Text style={styles.textBold}>{_data.phone}</Text>}
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
					</View>
				</View>
			</Modal>
		);
	};

	const renderItem = ({ item, index }) => {
		return (
			<ContactClient
				ke={index}
				type="order"
				information={item}
				handleOnPress={handleOnPress}
				handleOnLongPress={handleOnLongPress}
			/>
		);
	};

	return (
		<Fragment>
			{visible && descriptionModal()}
			<BottomOptions
				isVisible={optionsModal}
				backdropOpacity={0.1}
				options={bottomOptions}
				onBackdropPress={handleClose}
				pickOption={handleDelete}
			/>
			<SafeAreaView style={styles.safeTop} />
			<SafeAreaView style={styles.safe}>
				<View style={styles.header}>
					<Icon
						type="Ionicons"
						name="ios-arrow-back"
						style={styles.icon}
						onPress={() => {
							navigation.goBack();
						}}
					/>
					<Text style={styles.headerText}>Pedidos</Text>
					<Icon
						type="Feather"
						name="user-plus"
						style={styles.iconUser}
						onPress={() => {
							navigation.navigate('AddOrder');
						}}
					/>
				</View>
				<View style={styles.list}>
					<FlatList keyExtractor={(item, index) => index.toString()} data={orders} renderItem={renderItem} />
				</View>
			</SafeAreaView>
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	const { order: { orders, newOrders: newOrderFetch } } = state;
	let newOrders = orders.map((o) => {
		return {
			id: o.id,
			name: o._data.clientName,
			products: o._data.products,
			direction: o._data.address,
			itemState: o._data.processState,
			data: o
		};
	});
	newOrders = newOrders.filter((o) => o.itemState === 'Pendiente' || o.itemState === 'Preparado');
	return {
		orders: newOrders,
		newOrderFetch
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchOrders: () => {
			dispatch(OrderActions.fetchOrders());
		},
		fetchDeleteOrder: (id) => {
			dispatch(OrderActions.fetchDeleteOrder(id));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Tracking);
