import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class bookDetailPage extends Component<Props>{
	constructor(props){
		super(props);
		this.state={
			name:this.props.navigation.getParam('name')
		}
	}
	render(){
		return(
			<View style={styles.container}>
				<Text>{this.state.name}</Text>
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