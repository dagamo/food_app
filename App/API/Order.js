import firestore from '@react-native-firebase/firestore';

const COLLECTION = 'Order';

export const addOrder = async (params) => {
	console.log('params', params);
	const { products, clientName, phone, direction, time, date, processState } = params;
	try {
		const request = await firestore().collection(COLLECTION).add({
			clientName,
			phone,
			date,
			address: direction,
			time,
			products,
			processState,
			create_at: firestore.FieldValue.serverTimestamp()
		});
		const order = await request.get();
		return order;
	} catch (err) {
		console.log(err);
		return { Error: true, err };
	}
};

export const updateOrder = async (params) => {
	const { products, id, clientName, quantity, phone, date, address, time, processState, ref } = params;
	console.log('params', params);

	const updateParams = {
		clientName,
		quantity,
		phone,
		date,
		products,
		address,
		processState,
		time
	};
	try {
		await firestore().collection(COLLECTION).doc(id).update(updateParams);
		return { _data: updateParams, id, _ref: ref };
	} catch (err) {
		console.log('Error', err);
		return { Error: true, err };
	}
};

export const deleteOrder = async (id) => {
	try {
		await firestore().collection(COLLECTION).doc(id).delete();
		return id;
	} catch (err) {
		return { Error: true, err };
	}
};

export const getOrderList = async () => {
	try {
		const orderList = await firestore().collection(COLLECTION).orderBy('create_at').get();
		return orderList.docs;
	} catch (err) {
		return { Error: true, err };
	}
};
