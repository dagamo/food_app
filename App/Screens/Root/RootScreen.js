import React, { Component } from 'react';
import { View, SafeAreaView } from 'react-native';
import AppNavigator from '../../Navigation/RootNavigator';
import { Helpers } from 'App/Theme';

class RootScreen extends Component {
	render() {
		return (
				<View style={Helpers.fill}>
					<AppNavigator />
				</View>
		);
	}
}

// RootScreen.propTypes = {
// 	startup: PropTypes.func
// };

export default RootScreen;
