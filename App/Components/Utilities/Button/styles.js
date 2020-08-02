import { StyleSheet } from 'react-native';
import { Colors, fontFamily } from 'App/Theme/index';
import { wp} from 'App/Services/Responsive';

export const styles = StyleSheet.create({
	buttonText: {
		color: Colors.white,
		fontFamily,
		fontWeight: 'bold',
		fontSize: wp(4),
		padding: wp(2)
	},
	buttonContainer: {
		backgroundColor: Colors.red,
		alignItems: 'center',
		justifyContent:'center',
		borderBottomWidth: 0,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
	}
});
