import { StyleSheet } from 'react-native';
import { wp, hp } from 'App/Services/Responsive';
import { Colors, fontFamily  } from 'App/Theme/index';

export const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		backgroundColor: 'red',
		alignItems: 'center',
		backgroundColor: Colors.gray10
	},
	icon: {
		fontSize: wp(4),
		color: Colors.gray30,
		padding: wp(4)
	},
	input:{
		backgroundColor: Colors.gray10,
			flex: 1,
			fontFamily,
			fontSize:wp(4),
			padding:hp(1.4),
			color: Colors.purple90
	}
});
