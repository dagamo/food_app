import moment from 'moment';
/**
 * The initial values for the redux state.
 */

export const addOrder = {
	clientName: '',
	phone: '',
	date: moment().format('DD-MM-YYYY'),
	time: '12:00 pm',
	direction: '',
	products: [],
	description: '',
	processState: 'Pendiente'
};

export const INITIAL_STATE = {
	addOrder: {
		...addOrder
	},
	newOrders: false,
	orders: [],
	orderSelected: {},
	orderIsLoading: false,
	orderErrorMessage: null
};
