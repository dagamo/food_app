import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, SafeAreaView, Image } from 'react-native';
import { Content } from 'native-base';
//components
import ButtonRounded from 'App/Components/Utilities/ButtonRounded/index';
//assets
import DotsIcon from 'App/Assets/Icons/dots.png';
//apis
import { addProduct } from 'App/API/Product';
//styles
import { styles } from './styles';

const RadarMain = (props) => {
	const { navigation, productSelected, newOrders, totalOrdersProduct } = props;
	const [ available, setAvailabe ] = useState(0);

	useEffect(() => {
		const unsubscribe = navigation.addListener('focus', () => {
			if (Object.keys(productSelected).length !== 0) {
				let count = Number(productSelected._data.quantity);
				console.log('total', totalOrdersProduct);
				totalOrdersProduct.map((t) => {
					t._data.products.map((p) => {
						if (p.id === productSelected._id) {
							count -= Number(p.quantity);
						}
					});
				});
				console.log('count', count);
				setAvailabe(count);
				// console.log('setting');
				// setTotal(productSelected._data.quantity);
				// console.log('quantity', total);
			}
		});

		return unsubscribe;
	});
	const navigate = (view, params) => navigation.navigate(view, params ? params : {});

	return (
		<SafeAreaView style={styles.safe}>
			<Content style={styles.container}>
				<View style={styles.topMenu}>
					<Text style={styles.textTop} onPress={() => navigation.navigate('CamerasMain')}>
						Proceso
					</Text>
					<Image source={DotsIcon} style={styles.dots} />
					<Text style={styles.textTop} onPress={() => navigate('Tracking')}>
						Pedidos
					</Text>
				</View>
				<View style={styles.mainContainer}>
					<Text style={styles.name}>
						{productSelected._data ? `Venta de ${productSelected._data.name}` : 'Selecciona tu producto'}
					</Text>
					<View styles={styles.descriptionContainer}>
						<Text style={styles.description}>Disponibles</Text>
						<Text style={styles.number}>{available}</Text>
					</View>
					<View styles={styles.descriptionContainer}>
						<Text style={styles.description}>Pedidos Pendientes</Text>
						<Text style={styles.number2}>{newOrders.length}</Text>
					</View>
					<View styles={styles.descriptionContainer}>
						<Text style={styles.description}>Total de Pedidos</Text>
						<Text style={styles.number3}>{productSelected._data && productSelected._data.quantity}</Text>
					</View>
					<ButtonRounded
						title="Seleccionar Producto"
						textStyle={styles.buttonText}
						style={styles.button}
						onPress={() => navigate('Products')}
					/>
				</View>
			</Content>
		</SafeAreaView>
	);
};

const mapStateToProps = (state) => {
	const { products: { productSelected }, order: { orders } } = state;
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

	newOrders = newOrders.filter((o) => o.itemState === 'Pendiente');

	const totalOrdersProduct = orders.filter((o) => {
		const product = o._data && o._data.products && o._data.products.findIndex((p) => p.id === productSelected._id);
		if (product != -1) {
			return true;
		}
	});

	return {
		productSelected,
		newOrders,
		totalOrdersProduct
	};
};

export default connect(mapStateToProps, null)(RadarMain);
