import { createActions } from 'reduxsauce';

/**
 * We use reduxsauce's `createActions()` helper to easily create redux actions.
 *
 * Keys are action names and values are the list of parameters for the given action.
 *
 * Action names are turned to SNAKE_CASE into the `Types` variable. This can be used
 * to listen to actions:
 *
 * - to trigger reducers to update the state, for example in App/Stores/Example/Reducers.js
 * - to trigger sagas, for example in App/Sagas/index.js
 *
 * Actions can be dispatched:
 *
 * - in React components using `dispatch(...)`, for example in App/App.js
 * - in sagas using `yield put(...)`, for example in App/Sagas/ExampleSaga.js
 *
 * @see https://github.com/infinitered/reduxsauce#createactions
 */
const { Types, Creators } = createActions({
	fetchDeleteProduct: [ 'id' ],
	fetchDeleteProductSuccess: [ 'id' ],
	updateProductParams: [ 'key', 'value' ],
	fetchAddProduct: [ 'product' ],
	fetchAddProductSuccess: [ 'product' ],
	// Fetch user informations
	fetchProducts: null,
	// The operation has started and is loading
	fetchProductsLoading: null,
	// User informations were successfully fetched
	fetchProductsSuccess: [ 'products' ],
	// An error occurred
	fetchProductsFailure: [ 'errorMessage' ]
});

export const ProductsTypes = Types;
export default Creators;
