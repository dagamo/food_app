import { StyleSheet } from 'react-native';
import { wp, hp } from 'App/Services/Responsive';
import { Colors } from 'App/Theme/index';

export const styles = StyleSheet.create({
	container: {
		width: wp(8),
		height: wp(8),
		borderRadius: wp(4),
		borderColor: Colors.red,
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	checked: {
    width: wp(8),
		height: wp(8),
		borderRadius: wp(4),
		borderColor: Colors.red,
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.red
	},
	icon:{
		color:Colors.white,
		fontSize: wp(6)
	}
});
