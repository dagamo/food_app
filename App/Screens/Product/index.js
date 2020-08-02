import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
//components
import CheckBox from 'App/Components/Utilities/CheckBox/index';
import BottomOptions from 'App/Components/BottomOptions/index';
//actions
import ProductsActions from 'App/Stores/Product/Actions';
//styles
import { styles } from './styles';

const bottomOptions = [ { name: 'Eliminar', iconType: 'FontAwesome', iconName: 'trash-o' } ];

const Product = (props) => {
	const { navigation, fetchProducts, products, updateProductParams, productSelected, fetchDeleteProduct } = props;
	const [ optionsModal, setOptions ] = useState(false);
	const [ productID, setProductID ] = useState('');

	useEffect(() => {
		fetchProducts();
	}, []);

	const handleDelete = (option) => {
		fetchDeleteProduct(productID);
		setOptions(false);
	};
	const handleClose = () => setOptions(false);
	const handleOpen = () => setOptions(true);

	const renderItem = ({ item, index }) => {
		const selected = item.id === productSelected._id ? true : false;
		return (
			<TouchableOpacity
				style={styles.card}
				onLongPress={() => {
					handleOpen();
					setProductID(item.id);
				}}
			>
				<Text style={styles.productText}>{`${item._data.name} ${item._data.quantity} ${item._data
					.meteringType}`}</Text>
				<CheckBox
					checked={selected}
					onPress={() => {
						updateProductParams('productSelected', { ...item, _id: item.id });
					}}
				/>
			</TouchableOpacity>
		);
	};

	return (
		<Fragment>
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
					<Text style={styles.headerText}>Productos</Text>
					<Icon
						type="AntDesign"
						name="pluscircleo"
						style={styles.iconUser}
						onPress={() => {
							navigation.navigate('AddProduct');
						}}
					/>
				</View>
				<View style={styles.list}>
					{products.length !== 0 && (
						<FlatList
							keyExtractor={(item, index) => index.toString()}
							data={products}
							renderItem={renderItem}
						/>
					)}
				</View>
			</SafeAreaView>
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	let { products: { products, productSelected } } = state;
	console.log('products', products);
	return { products, productSelected };
};

const mapDispatchToProps = (dispatch) => ({
	fetchProducts: () => {
		dispatch(ProductsActions.fetchProducts());
	},
	fetchDeleteProduct: (id) => {
		dispatch(ProductsActions.fetchDeleteProduct(id));
	},
	updateProductParams: (key, value) => {
		dispatch(ProductsActions.updateProductParams(key, value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
