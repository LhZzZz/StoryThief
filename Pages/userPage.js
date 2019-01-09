import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class userPage extends Component<Props>{
	render(){
		return(
			<View style={styles.container}>
				<Text>userpage</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor:'red'
	}
});