import { StyleSheet, Platform } from 'react-native';
import { Colors, Fonts } from 'App/Theme';
import { hp, wp } from 'App/Services/Responsive';
import { hasNotch } from 'App/Services/Device';

export const styles = StyleSheet.create({
	container: {
		...Platform.select({
			ios: {
				height: hasNotch ? hp(8) : hp(8.5)
			},
			android: {
				height: hp(8.5)
			}
		}),
		borderBottomColor: Colors.gray20,
		borderBottomWidth: 2,
		justifyContent: 'space-between'
	},
	camera: {
		alignItems: 'center',
		zIndex: -1
	},
	cameraText: {
		...Fonts.normal,
		...Platform.select({
			ios: {
				marginTop: hasNotch ? 0 : hp(2),
				fontWeight: '500'
			},
			android: {
				marginTop: hp(2),
				fontFamily: 'Quicksand-regular',
				fontWeight: 'bold'
			}
		})
	},
	options: {
		flexDirection: 'row'
	},
	option: {
		flex: 1,
		alignItems: 'center',
		paddingBottom: hp(1),
		borderBottomColor: Colors.gray60,
		borderBottomWidth: 3
	},
	optionSelected: {
		flex: 1,
		alignItems: 'center',
		borderBottomColor: Colors.red,
		borderBottomWidth: 4,
		paddingBottom: hp(1)
	},
	optionTextSelected: {
		...Fonts.normal,
		fontWeight: '500',
		color: Colors.red
	},
	optionText: {
		...Fonts.normal,
		fontWeight: '500'
	},
	optionButton: {
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'center'
	},
	icon: {
		fontSize: wp(5),
		marginRight: wp(1.5)
	},
	iconSelected: {
		fontSize: wp(5),
		marginRight: wp(1.5),
		color: Colors.red
	},
	addTextContainer: {
		position: 'absolute',
		...Platform.select({
			ios: {
				top: hasNotch ? hp(1) : hp(3)
			},
			android: {
				top: hp(3)
			}
		}),
		right: wp(5)
	},
	addText: {
		...Fonts.medium,
		color: Colors.gray70
	}
});
