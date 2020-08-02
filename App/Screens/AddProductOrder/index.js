import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';
//components
import Input from 'App/Components/Utilities/Input/index';
//actions
import ProductsActions from 'App/Stores/Product/Actions';
import OrderActions from 'App/Stores/Order/Actions';
//styles
import { styles } from './styles';

const AddProductOrder = (props) => {
	let { navigation, fetchProducts, products, addOrder, updateOrderParam } = props;
	const [ quantity, setQuantity ] = useState(1);
	const [ description, setDescription ] = useState('');
	let [ product, setProduct ] = useState({});

	useEffect(() => {
		fetchProducts();
	}, []);

	const handleAddProduct = () => {
		if (Object.keys(product).length === 0 || product.value === '') {
			return alert('No has seleccionado ningun producto');
		}
		product = {
			...product,
			quantity,
			description
		};

		addOrder = {
			...addOrder,
			products: [ ...addOrder.products, product ]
		};

		updateOrderParam('addOrder', addOrder);
	};

	const handleRemoveProduct = (id) => {
		addOrder = {
			...addOrder,
			products: addOrder.products.filter((p) => p.id !== id)
		};
		updateOrderParam('addOrder', addOrder);
	};

	const renderProducts = (products) =>
		products.map((p, i) => {
			return (
				<View style={styles.card} key={i}>
					<View style={styles.headerCard}>
						<Text style={{ ...styles.cardText }}>{p.quantity}</Text>
					</View>
					<View>
						<Text style={styles.cardText}>{p.name}</Text>
						<Text style={styles.descriptionText}>{p.description}</Text>
					</View>
					<View style={styles.deleteIconContainer}>
						<TouchableOpacity
							onPress={() => {
								handleRemoveProduct(p.id);
							}}
						>
							<Icon type="FontAwesome" name="trash-o" style={styles.deleteIcon} />
						</TouchableOpacity>
					</View>
				</View>
			);
		});

	return (
		<Fragment>
			<SafeAreaView style={styles.safeTop} />
			<SafeAreaView style={styles.safe}>
				<View style={styles.header}>
					<Text onPress={() => navigation.goBack()}>Cerrar</Text>
					<Text style={styles.headerText}>Agregar Producto</Text>
					<Text onPress={handleAddProduct}>Agregar</Text>
				</View>
				<View style={styles.list}>
					<View style={styles.inputContainer}>
						<Text style={styles.text}>Producto</Text>
						{Array.isArray(products) && (
							<DropDownPicker
								items={[ { label: 'seleccionar', value: '' }, ...products ]}
								defaultIndex={0}
								containerStyle={{ height: 40 }}
								onChangeItem={(item) => setProduct({ id: item.value, name: item.label })}
							/>
						)}
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.text}>Cantidad</Text>
						<Input keyboardType="number-pad" onChangeText={(text) => setQuantity(text)} />
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.text}>Description</Text>
						<Input onChangeText={(text) => setDescription(text)} />
					</View>
				</View>
				<View style={styles.displayProductContainer}>
					<View style={styles.titleContainer}>
						<Text style={styles.titleText}>Productos Agregados</Text>
					</View>
					<View>{renderProducts(addOrder.products)}</View>
				</View>
			</SafeAreaView>
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	let { products: { products }, order: { addOrder } } = state;
	console.log(products);
	products =
		Array.isArray(products) &&
		products.length !== 0 &&
		products.map((product) => ({ value: product.id, label: product._data.name }));

	return { products, addOrder };
};

const mapDispatchToProps = (dispatch) => ({
	fetchProducts: () => {
		dispatch(ProductsActions.fetchProducts());
	},
	updateOrderParam: (key, value) => {
		dispatch(OrderActions.updateOrderParam(key, value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProductOrder);
