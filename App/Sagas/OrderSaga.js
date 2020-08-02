import { put, call } from 'redux-saga/effects';
import OrderActions from '../Stores/Order/Actions';
import { addOrder, getOrderList, updateOrder, deleteOrder } from 'App/API/Order';

export function* fetchAddOrder(params) {
	const { params: orderParams } = params;

	yield put(OrderActions.fetchOrderLoading());

	const order = yield call(addOrder, orderParams);
	if (order) {
		yield put(OrderActions.fetchAddOrderSuccess(order));
	} else {
		console.log('fallo', order);
		yield put(OrderActions.fetchOrderFailure('Fallo al agregar el orden'));
	}
}

export function* fetchOrderList() {
	yield put(OrderActions.fetchOrderLoading());

	const orders = yield call(getOrderList);
	if (orders) {
		yield put(OrderActions.fetchOrderSuccess(orders));
	} else {
		yield put(OrderActions.fetchOrderFailure('Fallo al obtener los orders'));
	}
}

export function* fetchUpdateOrder(params) {
	const { params: orderParams } = params;
	yield put(OrderActions.fetchOrderLoading());

	const order = yield call(updateOrder, orderParams);
	if (!order.Error) {
		yield put(OrderActions.fetchUpdateOrderSuccess(order));
	} else {
		yield put(OrderActions.fetchOrderFailure(order.err));
	}
}

export function* fetchDeleteOrder({ id: idParam }) {
	yield put(OrderActions.fetchOrderLoading());
	const id = yield call(deleteOrder, idParam);
	if (id) {
		yield put(OrderActions.fetchDeleteOrderSuccess(id));
	} else {
		yield put(OrderActions.fetchOrderFailure(id.err));
	}
}
