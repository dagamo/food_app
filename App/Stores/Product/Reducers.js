/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState';
import { createReducer } from 'reduxsauce';
import { ProductsTypes } from './Actions';

export const fetchProductsLoading = (state) => ({
	...state,
	productsIsLoading: true,
	productsErrorMessage: null
});

export const fetchProductsSuccess = (state, { products }) => ({
	...state,
	products: products,
	productsIsLoading: false,
	productsErrorMessage: null
});

export const fetchDeleteProductSuccess = (state, { id }) => {
	const filterProducts = state.products.filter((p) => p.id !== id);
	return {
		...state,
		products: [ ...filterProducts ]
	};
};

export const updateProductParams = (state, { key, value }) => ({
	...state,
	[key]: value
});

export const fetchAddProductSuccess = (state, { product }) => ({
	...state,
	products: [ ...state.products, product ],
	productsIsLoading: false,
	productsErrorMessage: null
});

export const fetchProductsFailure = (state, { errorMessage }) => ({
	...state,
	products: [ ...state.products ],
	productsIsLoading: false,
	productsErrorMessage: errorMessage
});

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const products = createReducer(INITIAL_STATE, {
	[ProductsTypes.UPDATE_PRODUCT_PARAMS]: updateProductParams,
	[ProductsTypes.FETCH_DELETE_PRODUCT_SUCCESS]: fetchDeleteProductSuccess,
	[ProductsTypes.FETCH_ADD_PRODUCT_SUCCESS]: fetchAddProductSuccess,
	[ProductsTypes.FETCH_PRODUCTS_LOADING]: fetchProductsLoading,
	[ProductsTypes.FETCH_PRODUCTS_SUCCESS]: fetchProductsSuccess,
	[ProductsTypes.FETCH_PRODUCTS_FAILURE]: fetchProductsFailure
});
