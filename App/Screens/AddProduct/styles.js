import { StyleSheet, Platform } from 'react-native';
import { Colors, Fonts, fontFamily } from 'App/Theme/index';
import { wp, hp } from 'App/Services/Responsive';
import { hasNotch } from 'App/Services/Device';

export const styles = StyleSheet.create({
	safeTop: {
		flex: 0,
		backgroundColor: Colors.white
	},
	safe: {
		flex: 1,
		backgroundColor: Colors.white
	},
	header: {
		...Platform.select({
			ios: {
				height: hasNotch ? hp(8) : hp(8.5)
			},
			android: {
				height: hp(8.5)
			}
		}),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: Colors.white,
		paddingHorizontal: wp(4),
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 6 },
		shadowRadius: 5,
		shadowOpacity: 0.05
	},
	headerText: {
		...Fonts.normal,
		fontWeight: '500',
		alignSelf: 'center'
	},
	icon: {
		...Platform.select({
			ios: {
				top: hasNotch ? hp(1.3) : hp(1)
			},
			android: {
				top: hp(2)
			}
		}),
		fontSize: wp(10)
	},
	iconUser: {
		...Platform.select({
			ios: {
				top: hasNotch ? hp(1.3) : hp(1)
			},
			android: {
				top: hp(2)
			}
		}),
		fontSize: wp(7)
	},
	list: {
		height: hp(75),
		marginTop: hp(3),
		paddingHorizontal: wp(4)
	},
	text: {
		...Fonts.normal,
		marginBottom: hp(1),
		color: Colors.purple90
	},
	inputContainer: {
		marginBottom: hp(2)
	},
	box: {
		height: hp(10)
	}
});
