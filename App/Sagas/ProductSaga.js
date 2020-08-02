import { put, call } from 'redux-saga/effects';
import ProductsActions from '../Stores/Product/Actions';
import { getProductsList, addProduct, deleteProduct } from 'App/API/Product';

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fecthProducts() {
	// Dispatch a redux action using `put()`
	// @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
	yield put(ProductsActions.fetchProductsLoading());

	// Fetch user informations from an API
	const products = yield call(getProductsList);
	if (products) {
		yield put(ProductsActions.fetchProductsSuccess(products));
	} else {
		yield put(ProductsActions.fetchProductsFailure('There was an error while fetching user informations.'));
	}
}

export function* fetchAddProduct(params) {
	const { product: productParams } = params;
	console.log(productParams);
	yield put(ProductsActions.fetchProductsLoading());
	const product = yield call(addProduct, productParams);
	if (product) {
		yield put(ProductsActions.fetchAddProductSuccess(product));
	} else {
		yield put(ProductsActions.fetchProductsFailure('There was an error while fetching user informations.'));
	}
}

export function* fetchDeleteProduct({ id: idParam }) {
	yield put(ProductsActions.fetchProductsLoading());
	const id = yield call(deleteProduct, idParam);
	if (id) {
		yield put(ProductsActions.fetchDeleteProductSuccess(id));
	} else {
		yield put(ProductsActions.fetchProductsFailure('There was an error while fetching user informations.'));
	}
}
