import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, SafeAreaView } from 'react-native';
import { Content } from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';
//actions
import ProductActions from 'App/Stores/Product/Actions';
//components
import Input from 'App/Components/Utilities/Input/index';

//styles
import { styles } from './styles';

const formParams = {
	name: '',
	quantity: '',
	available: '',
	price: '',
	meteringType: ''
};

const AddOrder = (props) => {
	const { navigation, fetchAddProduct } = props;
	let [ form, setForm ] = useState(formParams);

	const handleSetForm = (key, value) => {
		form = {
			...form,
			[key]: value
		};

		setForm(form);
	};

	const handleSaveProduct = () => {
		form = {
			...form,
			available: form.quantity
		};
		fetchAddProduct(form);
		navigation.goBack();
	};

	return (
		<Fragment>
			<SafeAreaView style={styles.safeTop} />
			<SafeAreaView style={styles.safe}>
				<View style={styles.header}>
					<Text onPress={() => navigation.goBack()}>Cancelar</Text>
					<Text style={styles.headerText}>Nuevo Producto</Text>
					<Text onPress={() => handleSaveProduct()}>Guardar</Text>
				</View>
				<Content style={styles.list}>
					<View style={styles.inputContainer}>
						<Text style={styles.text}>Nombre del Producto</Text>
						<Input onChangeText={(text) => handleSetForm('name', text)} />
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.text}>Cantidad disponible</Text>
						<Input onChangeText={(text) => handleSetForm('quantity', text)} />
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.text}>Precio</Text>
						<Input onChangeText={(text) => handleSetForm('price', text)} />
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.text}>Tipo de Medida</Text>
						<DropDownPicker
							items={[ { label: 'Libras', value: 'libras' }, { label: 'Unidades', value: 'unidades' } ]}
							defaultIndex={0}
							containerStyle={{ height: 40 }}
							onChangeItem={(item) => handleSetForm('meteringType', item.value)}
						/>
					</View>
				</Content>
			</SafeAreaView>
		</Fragment>
	);
};

const mapDispatchToProps = (dispatch) => ({
	fetchAddProduct: (params) => {
		dispatch(ProductActions.fetchAddProduct(params));
	}
});

export default connect(null, mapDispatchToProps)(AddOrder);
