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
		height: hp(20),
		textAlignVertical: 'top'
	},
	time: {
		...Fonts.normal,
		color: Colors.red,
		fontWeight: 'bold'
	},
	timeContainer: {
		backgroundColor: Colors.gray10,
		paddingVertical: hp(1.5),
		paddingHorizontal: wp(4)
	},
	extraInformation: {
		marginTop: hp(4)
	},
	optionContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	iconRight: {
		color: Colors.gray70,
		fontSize: wp(10)
	},
	modalContainer: {
		// height: hp(30),
		backgroundColor: Colors.white,
		padding: wp(4)
	},
	tabs: {
		position: 'absolute',
		bottom: 0
	},
	activeOption: {
		color: Colors.red,
		fontSize: wp(4.2),
		fontFamily,
		marginBottom: hp(2)
	},
	textStyle: {
		color: Colors.black,
		fontSize: wp(4.2),
		fontFamily,
		marginBottom: hp(2)
	},
	underline: {
		backgroundColor: Colors.red
	},
	tabContainer: {
		backgroundColor: Colors.white
	},
	tabsContainer: {
		backgroundColor: Colors.gray20
	},
	content: {
		height: hp(40),
		paddingTop: hp(1),
		backgroundColor: 'red',
		paddingHorizontal: wp(4)
	}
});
