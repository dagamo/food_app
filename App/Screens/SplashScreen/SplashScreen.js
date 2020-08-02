import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './SplashScreenStyle';
import { Helpers } from 'App/Theme';
//images
import LogoIcon from 'App/Assets/Images/RADAR_RED.png';
//services
import navigation from 'App/Services/NavigationService';
import { getToken } from 'App/Services/Auth';

const SplashScreen = (props) => {
	useEffect(() => {
		props.navigation.navigate('MainScreen');
	}, []);

	return (
		<View style={[ Helpers.fillRowCenter, styles.container ]}>
			<View style={[ Helpers.center ]}>
				{/* You will probably want to insert your logo here */}
				<Image source={LogoIcon} style={styles.logo} />
			</View>
		</View>
	);
};

export default SplashScreen;
