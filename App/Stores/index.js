import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from 'App/Sagas';
import { reducer as ExampleReducer } from './Example/Reducers';
import { auth } from './Auth/Reducers';
import { products } from './Product/Reducers';
import { order } from './Order/Reducers';

export default () => {
	const rootReducer = combineReducers({
		/**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
		example: ExampleReducer,
		auth,
		products,
		order
	});

	return configureStore(rootReducer, rootSaga);
};
