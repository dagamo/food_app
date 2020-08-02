/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE, addOrder } from './InitialState';
import { createReducer } from 'reduxsauce';
import { OrderTypes } from './Actions';

export const updateOrderParam = (state, { key, value }) => ({
	...state,
	[key]: value,
	newOrders: true
});

export const fetchOrderLoading = (state) => ({
	...state,
	orderIsLoading: true,
	orderErrorMessage: null
});

export const fetchDeleteOrderSuccess = (state, { id }) => {
	const filterOrders = state.orders.filter((o) => o.id !== id);
	return {
		...state,
		orders: [ ...filterOrders ]
	};
};

export const fetchAddOrderSuccess = (state, { order }) => ({
	...state,
	orderIsLoading: false,
	orderErrorMessage: null,
	addOrder: {
		...addOrder
	},
	orders: [ ...state.orders, order ],
	newOrders: true
});

export const fetchOrderSuccess = (state, { orders }) => {
	return {
		...state,
		orderIsLoading: false,
		orderErrorMessage: null,
		orders: [ ...orders ],
		newOrders: false
	};
};

export const fetchUpdateOrderSuccess = (state, { order }) => {
	console.log('order update', order);
	let newOrders = [ ...state.orders ];
	const orderIndex = newOrders.findIndex((o) => o.id === order.id);
	if (orderIndex !== -1) {
		console.log('encontrado', order);
		newOrders[orderIndex] = {
			...order
		};
	}

	return {
		...state,
		orders: [ ...newOrders ],
		newOrders: true
	};
};

export const fetchOrderFailure = (state, { errorMessage }) => ({
	...state,
	orderIsLoading: false,
	orderErrorMessage: errorMessage
});

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const order = createReducer(INITIAL_STATE, {
	[OrderTypes.FETCH_DELETE_ORDER_SUCCESS]: fetchDeleteOrderSuccess,
	[OrderTypes.UPDATE_ORDER_PARAM]: updateOrderParam,
	[OrderTypes.FETCH_ORDER_SUCCESS]: fetchOrderSuccess,
	[OrderTypes.FETCH_UPDATE_ORDER_SUCCESS]: fetchUpdateOrderSuccess,
	[OrderTypes.FETCH_ORDER_FAILURE]: fetchOrderFailure,
	[OrderTypes.FETCH_ADD_ORDER_SUCCESS]: fetchAddOrderSuccess,
	[OrderTypes.FETCH_ORDER_LOADING]: fetchOrderLoading
});
