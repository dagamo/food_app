import React from 'react';
import { View } from 'react-native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//containers
import Home from 'App/Screens/Home/index';
import Tracking from 'App/Screens/Orders/index';
import Cameras from 'App/Screens/OrderProcess/index';
import AddOrder from 'App/Screens/AddOrder/index';
import Products from 'App/Screens/Product/index';
import CreateProduct from 'App/Screens/AddProduct/index';
import AddProductOrder from 'App/Screens/AddProductOrder/index';
//stacks

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const screenVertical = {
	gestureEnabled: false,
	gestureDirection: 'vertical',
	cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS
};

const screenHorizontal = {
	gestureEnabled: true,
	gestureDirection: 'horizontal',
	cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
};

const TabMain = () => (
	<Tab.Navigator initialRouteName="RadarMain" lazy={true} tabBar={() => <View />}>
		<Tab.Screen name="CamerasMain" component={Cameras} />
		<Tab.Screen name="RadarMain" component={Home} />
		<Stack.Screen name="Tracking" component={Tracking} />
	</Tab.Navigator>
);

function TabsMain() {
	return (
		<Stack.Navigator headerMode="none">
			<Stack.Screen name="RadarMain" component={TabMain} />
			<Stack.Screen name="AddOrder" component={AddOrder} options={screenVertical} />
			<Stack.Screen name="Products" component={Products} options={screenVertical} />
			<Stack.Screen name="AddProduct" component={CreateProduct} options={screenVertical} />
			<Stack.Screen name="AddProductOrder" component={AddProductOrder} options={screenVertical} />
		</Stack.Navigator>
	);
}

export default TabsMain;
