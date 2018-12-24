'use strict';

import React, { Component } from 'react'
import {
	View,
	Platform,
	TouchableHighlight,
	TouchableNativeFeedback,
	TouchableOpacity,
} from 'react-native'

export default class Button extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return Platform.OS === 'ios'?(
			<TouchableOpacity activeOpacity={0.6} {...this.props}>{this.props.children}</TouchableOpacity>
		):(
			<TouchableOpacity activeOpacity={0.6} {...this.props} disable={this.props.disable} >{this.props.children}</TouchableOpacity>
		)
		// <View {...this.props}><TouchableOpacity disable={this.props.disable} onPress={this.props.onPress}>{this.props.children}</TouchableOpacity></View>
	}
}
