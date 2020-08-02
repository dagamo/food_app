import { takeLatest, all } from 'redux-saga/effects';
import { ProductsTypes } from 'App/Stores/Product/Actions';
import { fecthProducts, fetchAddProduct, fetchDeleteProduct } from './ProductSaga';
import { OrderTypes } from 'App/Stores/Order/Actions';
import { fetchAddOrder, fetchOrderList, fetchUpdateOrder, fetchDeleteOrder } from './OrderSaga';

export default function* root() {
	yield all([
		takeLatest(ProductsTypes.FETCH_PRODUCTS, fecthProducts),
		takeLatest(OrderTypes.FETCH_ADD_ORDER, fetchAddOrder),
		takeLatest(OrderTypes.FETCH_ORDERS, fetchOrderList),
		takeLatest(OrderTypes.FETCH_UPDATE_ORDER, fetchUpdateOrder),
		takeLatest(ProductsTypes.FETCH_ADD_PRODUCT, fetchAddProduct),
		takeLatest(ProductsTypes.FETCH_DELETE_PRODUCT, fetchDeleteProduct),
		takeLatest(OrderTypes.FETCH_DELETE_ORDER, fetchDeleteOrder)
	]);
}
