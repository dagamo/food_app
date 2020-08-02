import { StyleSheet } from 'react-native';
import { Colors, Metrics } from 'App/Theme';
import { wp, hp } from 'App/Services/Responsive';
export const styles = StyleSheet.create({
	safe: {
		backgroundColor: Colors.white,
		flex: 1
	},
	container: {
		flex: 1
	},
	list: {
		height: hp(85),
		paddingBottom: hp(5),
		marginTop: hp(3),
		paddingHorizontal: wp(4)
	}
});
