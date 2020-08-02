import { StyleSheet } from 'react-native';
import { wp } from 'App/Services/Responsive';
import { Colors, fontFamily } from 'App/Theme/index';

export const styles = StyleSheet.create({
	title: {
		marginLeft: wp(2),
		fontSize: wp(4.25),
		fontFamily,
		fontWeight: 'bold',
		color: Colors.purple90
	},
	time: {
		fontSize: wp(4.25),
		marginLeft: wp(2),
		textAlign: 'center',
		textAlignVertical: 'center',
		color: Colors.gray70,
		fontFamily,
		fontWeight: '500'
	}
});
