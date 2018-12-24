import React, {Component} from 'react';
import {View,Text,StyleSheet,SafeAreaView,TextInput,ScrollView,Image} from 'react-native';
import Button from '../components/Button'
import AV from 'leancloud-storage'

var APP_ID = 'TzepAkzneVzRLubPbXTw5OTz-gzGzoHsz';
var APP_KEY = 'AY1bx0tcsSCjqCmSJLccmK46';


export default class mainPage extends Component<Props>{
	static navigationOptions =({ navigation }) => {
		// let backButton = (
		// 	<Button
		// 		onPress={()=>navigation.goBack()}>
		// 		<View style={{justifyContent:'center',alignItems:'center',paddingHorizontal:10,marginTop: 20}}>
		// 			{/*<Ionicons name='md-arrow-back' color={'white'} size={25}/>*/}
		// 		</View>
		// 	</Button>);
		return {
			header:null,
			// headerStyle: {
			// },
			// headerTitleStyle: {
			// 	fontWeight: 'bold',
			// }
			// ,
			// headerTransparent:true,
			// headerLeft:backButton
		};
	};

	componentDidMount(): void {
		AV.init({
			appId: APP_ID,
			appKey: APP_KEY
		});
	}

	_renderSwpier(){
		return(
				<View style={{flex:0.1,flexDirection: 'row',backgroundColor: 'white',alignItems:'center',justifyContent: 'center'}}>
					<View style={{flex:0.8,height:'100%',backgroundColor:'white',justifyContent:'center',paddingHorizontal: 20,}}>
						<TextInput style={{flex:0.5,backgroundColor:'rgba(0,0,0,0.1)',borderRadius:5,paddingHorizontal:5}}/>
					</View>
					<Button
						onPress={()=>{
							var cql = 'select * from Books';
							AV.Query.doCloudQuery(cql).then(function (data) {
								// results 即为查询结果，它是一个 AV.Object 数组
								var results = data.results;
							}, function (error) {
							});
							// cql = 'select count(*) from %@ where status = 0';
							// AV.Query.doCloudQuery(cql).then(function (data) {
							// 	// 获取符合查询的数量
							// 	var count = data.count;
							// }, function (error) {
							// });

						}}
						style={{flex:0.2,justifyContent:'center',alignItems:'center'}}>
						<Text>写书</Text>
					</Button>
				</View>
			)
	}
	_renderTodayTopic(){
		return(
			<View style={{flex:0.2,backgroundColor:'orange',height: 150}}>

			</View>
		)
	}

	_renderTopBar(){
		return(
			<View style={{borderTopWidth: 0.5,borderColor:'lightgray',flexDirection: 'row',backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
				<Button style={{backgroundColor:"white",paddingHorizontal:10,paddingVertical: 10,marginHorizontal: 10}}>
					<Text>推荐</Text>
				</Button>
				<Button style={{backgroundColor:"white",paddingHorizontal:10,paddingVertical: 10,marginHorizontal: 10}}>
					<Text>榜单</Text>
				</Button>
			</View>
		)
	}

	_renderBooks(){
		return(
			<Button
				onPress={()=>this.props.navigation.push('bookDetailPage',{
					name:'从你的全世界路过'
				})}
				style={{backgroundColor:'white',marginVertical:5,paddingHorizontal:5,paddingVertical:10,marginHorizontal:4}}>
				<Image source={require('../imgs/bookface.jpg')} style={{width:'100%',height:200}} resizeMode='stretch'/>
				<Text style={{fontSize:15,paddingVertical:5}}>从你的全世界路过</Text>
				<Text style={{fontSize:13,color:'gray',}}>简介:我爱谁，已无所谓</Text>
				<View style={{backgroundColor:'white',flexDirection:'row',marginTop: 10,justifyContent:'flex-end',alignItems:'center'}}>
					<Image source={require('../imgs/like.png')} style={{width:20,height:20}}/>
					<Text style={{color:'gray',fontSize:12,paddingHorizontal:5}}>122</Text>
					<Image source={require('../imgs/star.png')} style={{width:20,height:20}}/>
					<Text style={{color:'gray',fontSize:12,paddingHorizontal:5}}>22</Text>
				</View>
			</Button>
		)
	}

	render(){
		return(
			<SafeAreaView style={{flex:1}}>
				<View style={styles.container}>
					{this._renderSwpier()}
					{this._renderTopBar()}
					<ScrollView style={{flex:0.9,backgroundColor:'lightgray',marginVertical:5 }}>
						{/*{this._renderTodayTopic()}*/}
						{this._renderBooks()}
					</ScrollView>
				</View>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
	}
});