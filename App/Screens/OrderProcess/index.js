import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { Icon, Tab, Tabs, TabHeading } from 'native-base';
//components
import ContactClient from 'App/Components/contactCard';
import Header from './Header/index';
//actions
import OrderActions from 'App/Stores/Order/Actions';
//styles
import { styles } from './styles';

const Tracking = (props) => {
	const { orders, fetchOrders, newOrderFetch } = props;
	const { navigation } = props;

	useEffect(
		() => {
			const unsubscribe = navigation.addListener('focus', () => {
				fetchOrders();
			});

			return unsubscribe;
		},
		[ navigation ]
	);

	const renderItem = ({ item, index }) => {
		return <ContactClient information={item} />;
	};

	return (
		<Fragment>
			<SafeAreaView style={styles.safeTop} />
			<SafeAreaView style={styles.safe}>
				<Header {...props} />
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
	newOrders = newOrders.filter((o) => o.itemState === 'Entregado' || o.itemState === 'Preparado');
	return {
		orders: newOrders,
		newOrderFetch
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchOrders: () => {
			dispatch(OrderActions.fetchOrders());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Tracking);
