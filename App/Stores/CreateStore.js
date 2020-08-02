import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Flatted from 'flatted';
import { persistReducer, persistStore, createTransform } from 'redux-persist';

/**
 * This import defaults to localStorage for web and AsyncStorage for react-native.
 *
 * Keep in mind this storage *is not secure*. Do not use it to store sensitive information
 * (like API tokens, private and sensitive data, etc.).
 *
 * If you need to store sensitive information, use redux-persist-sensitive-storage.
 * @see https://github.com/CodingZeal/redux-persist-sensitive-storage
 */
import storage from 'redux-persist/lib/storage';

export const transformCircular = createTransform(
	(inboundState, key) => Flatted.stringify(inboundState),
	(outboundState, key) => Flatted.parse(outboundState)
);
const persistConfig = {
	key: 'root',
	storage: storage,
	transforms: [ transformCircular ],
	/**
   * Blacklist state that we do not need/want to persist
   */
	blacklist: [
		// 'auth',
	]
};

export default (rootReducer, rootSaga) => {
	const middleware = [];
	const enhancers = [];

	// Connect the sagas to the redux store
	const sagaMiddleware = createSagaMiddleware();
	middleware.push(sagaMiddleware);

	enhancers.push(applyMiddleware(...middleware));

	// Redux persist
	const persistedReducer = persistReducer(persistConfig, rootReducer);

	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const store = createStore(persistedReducer, composeEnhancers(...enhancers));
	const persistor = persistStore(store);

	// Kick off the root saga
	sagaMiddleware.run(rootSaga);

	return { store, persistor };
};
