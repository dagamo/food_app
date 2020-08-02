import { INITIAL_STATE } from './InitialState';
import { createReducer } from 'reduxsauce';
import { AuthTypes } from './Actions';

export const setContact = (state, { contact }) => {
	let findIndex = state.contactsSelected.findIndex((ctc) => ctc.data.recordID === contact.data.recordID);
	if (findIndex === -1) {
		return {
			...state,
			contactsSelected: [ ...state.contactsSelected, contact ]
		};
	}
	return {
		...state
	};
};

export const removeContact = (state, { contact }) => {
	let removeContact = state.contactsSelected.filter((ctc) => ctc.data.recordID !== contact.data.recordID);
	return {
		...state,
		contactsSelected: [ ...removeContact ]
	};
};

export const auth = createReducer(INITIAL_STATE, {
	[AuthTypes.SET_CONTACT]: setContact,
	[AuthTypes.REMOVE_CONTACT]: removeContact
});
