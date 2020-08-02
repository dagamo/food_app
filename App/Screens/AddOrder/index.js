import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Content } from 'native-base';
import moment from 'moment';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Modal from 'react-native-modal';
import { Icon } from 'native-base';
//components
import Input from 'App/Components/Utilities/Input/index';
import Button from 'App/Components/Utilities/Button/index';
//actions
import OrderActions from 'App/Stores/Order/Actions';
//styles
import { styles } from './styles';

const AddOrder = (props) => {
	let { navigation, form, updateOrderParam, fetchAddOrder } = props;
	const [ directionVisible, setDirectionVisible ] = useState(false);
	const [ mode, setMode ] = useState('time');
	const [ show, setShow ] = useState(false);

	const handleCloseModal = (key) => {
		setDirectionVisible(false);
	};

	// const onChange = (event, selectedDate) => {
	// 	setShow(Platform.OS === 'ios');
	// 	setMode('time');
	// };
	const onConfirm = (time) => {
		console.log(moment(time).format('DD-MM-YYYY'));
		form = {
			...form,
			date: moment(time).format('DD-MM-YYYY'),
			time: moment(time).format('h:mm:ss a')
		};

		setShow(false);
		updateOrderParam('addOrder', form);
	};

	const showTimepicker = () => {
		setShow(true);
	};

	const handleSaveOrder = () => {
		if (form.products.length !== 0) {
			alert('Se ha agregado la orden');
			return fetchAddOrder(form);
		}
		if (form.products.length === 0) {
			alert('No has agregado productos');
		} else if (form.direction.trim() === '') {
			alert('No has ingresado direccion');
		}
	};

	const ExtraInformation = (name, key) => {
		return (
			<View style={styles.modalContainer}>
				<View style={styles.inputContainer}>
					<Text style={styles.text}>{name}</Text>
					<Input
						multiline={true}
						value={form.direction}
						style={styles.box}
						onChangeText={(text) => {
							form = {
								...form,
								direction: text
							};
							updateOrderParam('addOrder', form);
						}}
					/>
				</View>
				<Button
					title="Guardar"
					onPress={() => {
						handleCloseModal(key);
					}}
				/>
			</View>
		);
	};

	return (
		<Fragment>
			<Modal isVisible={directionVisible}>{ExtraInformation('Direccion y Referencias', 'direction')}</Modal>
			<SafeAreaView style={styles.safeTop} />
			<SafeAreaView style={styles.safe}>
				<View style={styles.header}>
					<Text onPress={() => navigation.goBack()}>Cerrar</Text>
					<Text style={styles.headerText}>Nuevo Pedido</Text>
					<Text onPress={handleSaveOrder}>Guardar</Text>
				</View>
				<Content style={styles.list}>
					<View style={styles.inputContainer}>
						<Text style={styles.text}>Nombre del Cliente</Text>
						<Input
							onChangeText={(text) => {
								form = {
									...form,
									clientName: text
								};
								updateOrderParam('addOrder', form);
							}}
							value={form.clientName}
						/>
					</View>

					<View style={styles.inputContainer}>
						<Text style={styles.text}>Telefono</Text>
						<Input
							value={form.phone}
							keyboardType="number-pad"
							onChangeText={(text) => {
								form = {
									...form,
									phone: text
								};
								updateOrderParam('addOrder', form);
							}}
						/>
					</View>
					<View style={{ ...styles.inputContainer }}>
						<Text style={styles.text}>Hora de Entrega</Text>
						<TouchableOpacity style={styles.timeContainer} onPress={showTimepicker}>
							<Text style={styles.time}>{form.time}</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.extraInformation}>
						<TouchableOpacity
							style={styles.optionContainer}
							onPress={() => {
								setDirectionVisible(true);
							}}
						>
							<Text style={styles.text}>Direccion y Referencia</Text>
							<Icon type="Entypo" name="chevron-small-right" style={styles.iconRight} />
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.optionContainer}
							onPress={() => navigation.navigate('AddProductOrder')}
						>
							<Text style={styles.text}>Productos</Text>
							<Icon type="Entypo" name="chevron-small-right" style={styles.iconRight} />
						</TouchableOpacity>
					</View>
				</Content>
				<DateTimePickerModal
					isVisible={show}
					testID="dateTimePicker"
					timeZoneOffsetInMinutes={0}
					mode={mode}
					is24Hour={true}
					display="default"
					// onChange={onChange}
					onConfirm={onConfirm}
					onCancel={() => setShow(false)}
				/>
			</SafeAreaView>
		</Fragment>
	);
};

const mapStateToProps = (state) => {
	let { order: { addOrder: form } } = state;
	return { form };
};

const mapDispatchToProps = (dispatch) => ({
	updateOrderParam: (key, value) => {
		dispatch(OrderActions.updateOrderParam(key, value));
	},
	fetchAddOrder: (params) => {
		dispatch(OrderActions.fetchAddOrder(params));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(AddOrder);
