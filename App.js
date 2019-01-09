/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */



import React, {Component} from 'react';
import {View,Text,Button,Image} from 'react-native';
import {
	createBottomTabNavigator,
	createStackNavigator,
	createAppContainer,
} from 'react-navigation';
// import Button from './components/Button'
import mainPage from './Pages/mainPage'
import userPage from './Pages/userPage'
import bookDetailPage from './Pages/bookDetailPage'


const HomeStack = createStackNavigator({
	Home: mainPage,
	bookDetailPage:bookDetailPage,
});

const SettingsStack = createStackNavigator({
	Settings: userPage,
});

export default createAppContainer(createBottomTabNavigator(
	{
		主页: HomeStack,
		我的: SettingsStack,
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				let iconName;
				if (routeName === '主页') {
					iconName = `home${focused ? '' : '-outline'}.png`;
				} else if (routeName === '我的') {
					iconName = `ios-options${focused ? '' : '-outline'}`;
				}
				return (
					<View>
						<Image source={require('./imgs/home.png')} style={{width:20,height:20}} />
					</View>
				);
			},
		}),
		tabBarOptions: {
			activeTintColor: 'blue',
			inactiveTintColor: 'gray',
		},
	}
));
