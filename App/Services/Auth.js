import AsyncStorage from '@react-native-community/async-storage';

/*
* This method function is call the token saved in the asyncStorage.
* You can to use this in the app initial view, example in the splashscreen for verify the user token exists.
*/

export const getToken = async () => {
	try {
		const value = await AsyncStorage.getItem('token');
		if (value !== null) {
			return { success: true, value };
		} else {
			return { success: false, value, message: `The token does'nt exists.` };
		}
	} catch (e) {
		return { success: false, message: 'Failed request token.' };
		// error reading value
	}
};

export const setToken = async () => {
	AsyncStorage.setItem('token', JSON.stringify({ token: '1' }));
};
