import { StyleSheet, useColorScheme, Platform } from 'react-native';
import { Metrics, Fonts, Colors } from 'App/Theme';
import { wp, hp } from 'App/Services/Responsive';

export const styles = StyleSheet.create({
	safe: {
		backgroundColor: Colors.white,
		flex: 1
	},
	topMenu: {
		flex: 0.1,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	container: {
		...Metrics.paddingBase,
		flex: 1,
		backgroundColor: Colors.white
	},
	mainContainer: {
		marginTop: hp(5),
		alignItems: 'center',
		flex: 2.9
	},
	dots: {
		//  backgroundColor:'red',
		width: wp(16)
	},
	notification: {
		...Fonts.regular,
		color: Colors.white,
		fontWeight: 'bold'
	},
	name: {
		marginTop: hp(1),
		...Fonts.h2,
		fontWeight: 'bold',
		color: Colors.purple90,
		textAlign: 'center'
	},
	textTop: {
		...Fonts.regular,
		...Platform.select({
			ios: {
				width: wp(20)
			},
			android: {
				width: wp(26)
			}
		}),
		textAlign: 'right',
		textAlignVertical: 'center'
	},
	descriptionContainer: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	description: {
		marginTop: hp(5),
		fontWeight: 'bold',
		color: Colors.purple90,
		...Fonts.normal
	},
	number: {
		fontSize: wp(20),
		textAlign: 'center',
		fontWeight: 'bold',
		color: Colors.success
	},
	number2: {
		fontSize: wp(20),
		textAlign: 'center',
		fontWeight: 'bold',
		color: Colors.red
	},
	number3: {
		fontSize: wp(20),
		textAlign: 'center',
		fontWeight: 'bold',
		color: Colors.red
	},
	button: {
		marginTop: hp(2),
		backgroundColor: Colors.red
	},
	buttonText: {
		color: Colors.white,
		fontWeight: 'bold'
	}
});
