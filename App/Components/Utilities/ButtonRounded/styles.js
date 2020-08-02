import { StyleSheet, Platform } from 'react-native';
import { Colors, Fonts } from 'App/Theme/index';
import { wp, hp } from 'App/Services/Responsive';
import { hasNotch } from 'App/Services/Device';

export const styles = StyleSheet.create({
	container: {
		...Platform.select({
			ios: {
				height: hasNotch ? hp(4.6) : hp(5.3),
				borderRadius: hasNotch ? hp(2.3): hp(2.7)
			},
			android: {
				height: hp(5.3),
				borderRadius: hp(2.7)
			}
		}),
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		backgroundColor: Colors.white,
		minWidth: wp(25),
		paddingHorizontal: wp(3),

		shadowColor: 'rgba(0,0,0,0.2)',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		shadowRadius: 2,
		marginRight: wp(2)
	},
	textStyle: {
		...Fonts.medium,
		marginLeft: wp(1)
	}
});
