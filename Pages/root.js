import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from 'react-navigation';
import mainPage from './mainPage';
import userPage from './userPage'
class root extends Component<Props>{
	render() {
		return(
			<Tabs />
		)
	}
}

const HomeStack = createStackNavigator({
	Home:mainPage
});

const MineStack = createStackNavigator({
	Mine: userPage
});



export default createAppContainer(Tabs);
