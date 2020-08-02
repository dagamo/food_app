import firestore from '@react-native-firebase/firestore';

export const addProduct = async (params) => {
	const { name, quantity, price, available, meteringType } = params;
	try {
		const result = await firestore().collection('Product').add({
			name,
			quantity,
			price,
			meteringType,
			available,
			create_at: firestore.FieldValue.serverTimestamp()
		});
		const product = await result.get();
		return product;
	} catch (err) {
		return { Error: true, err };
	}
};

export const updateProduct = async (params) => {
	const { id, name, quantity, price, meteringType } = params;
	try {
		firestore()
			.collection('Product')
			.doc(id)
			.update({
				name,
				quantity,
				price,
				meteringType
			})
			.then(async (result) => {
				return params;
			})
			.catch((err) => ({ Error: true, err }));
	} catch (err) {
		return { Error: true, err };
	}
};

export const deleteProduct = async (id) => {
	console.log(id);
	try {
		await firestore().collection('Product').doc(id).delete();
		return id;
	} catch (err) {
		console.log(err);
		return { Error: true, err };
	}
};

export const getProductsList = async (params) => {
	try {
		const productsList = await firestore().collection('Product').orderBy('create_at').get();
		// const newProducts = productsList.docs.map(async (doc) => {
		// 	return {
		// 		id: doc.id,
		// 		product: doc.data
		// 	};
		// });
		return productsList.docs;
	} catch (err) {
		return { Error: true, err };
	}
};
