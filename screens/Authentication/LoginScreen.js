import React from "react";
import {TouchableOpacity, View} from "react-native";
import {Button, FormInput, FormLabel, FormValidationMessage, Text} from "react-native-elements";
import Space from "../../components/Space";
import LoadingModal from "../../components/LoadingModal";

class LoginScreen extends React.Component {
	static navigationOptions = {
		title: 'Login',
	};

	state = {};

	render() {
		const {isLoading, message} = this.state;
		return <View>
			<FormLabel labelStyle={{color: "teal"}}>Username</FormLabel>
			<FormInput/>
			<FormLabel labelStyle={{color: "teal"}}>Password</FormLabel>
			<FormInput/>
			<FormValidationMessage>{message}</FormValidationMessage>
			<Space size={10}/>
			<Button
				backgroundColor={"teal"}
				title='Login' onPress={() => this.handleLogin()}/>
			<Space/>
			<View style={{paddingHorizontal: 15, flexDirection: 'row', flexWrap: 'wrap'}}>
				<Text>Pas encore de compte ? </Text>
				<TouchableOpacity onPress={() => this.handleToRegister()}>
					<Text style={{color: 'teal'}}>
						S'inscrire
					</Text>
				</TouchableOpacity>
			</View>
			<LoadingModal visible={isLoading === true}/>
		</View>
	}

	handleLogin() {
		this.setState({isLoading: true})
		setTimeout(this.setState.bind(this, {isLoading: false}), 2000)
	}

	handleToRegister() {
		this.props.navigation.navigate('Register')
	}
}

export default LoginScreen