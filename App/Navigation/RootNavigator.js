import * as React from 'react';
import { SafeAreaViewBase } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationService from 'App/Services/NavigationService';
//Stacks
import SplashScreen from 'App/Screens/SplashScreen/SplashScreen';
import RadarMainStack from 'App/Navigation/StackNavigators/RadarMain/index';

//New instance of the createStackNavigator class
const Stack = createStackNavigator();

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */

const RootNavigation = () => {
	return (
		<NavigationContainer
			ref={(navigatorRef) => {
				// Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
				NavigationService.setTopLevelNavigator(navigatorRef);
			}}
		>
			<Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
				{/* <Stack.Screen name="Auth" component={AuthStack} /> */}
				<Stack.Screen name="MainScreen" component={RadarMainStack} />
				<Stack.Screen name="SplashScreen" component={SplashScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigation;
