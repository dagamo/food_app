import { StyleSheet, Platform } from 'react-native';
import { hp, wp } from 'App/Services/Responsive';
import { Fonts, Colors } from 'App/Theme';
import { hasNotch } from 'App/Services/Device';

export const styles = StyleSheet.create({
	container: {
		...Platform.select({
			ios: {
				marginBottom: hasNotch ? hp(1) : hp(2)
			},
			android: {
				marginBottom: hp(1)
			}
		}),
		flexDirection: 'row',
		marginTop: hp(1),
		minHeight: hp(9),
		// backgroundColor:'red',
		alignItems: 'center'
	},
	avatarContainer: {
		marginRight: wp(2)
	},
	avatar: {
		width: wp(14),
		height: wp(14),
		borderRadius: wp(9),
		backgroundColor: Colors.pink
	},
	description: {
		width: '60%'
	},
	checkContainer: {
		position: 'absolute',
		right: wp(2),
		top: hp(3),
		paddingVertical: hp(2)
	},
	text: {
		...Fonts.superSmall,
		marginLeft: wp(2),
		color: Colors.purple90
	},
	textBold: {
		...Fonts.medium,
		fontWeight: 'bold',
		marginLeft: wp(2),
		color: Colors.purple90
	},
	stateOne: {
		...Fonts.small,
		color: Colors.red,
		fontWeight: 'bold'
	},
	stateTwo: {
		...Fonts.small,
		color: Colors.success,
		fontWeight: 'bold'
	},
	descriptionContainer: {
		width: '70%'
	}
});
