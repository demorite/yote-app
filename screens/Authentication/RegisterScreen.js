import React from "react";
import {Picker, View} from "react-native";
import Space from "../../components/Space";
import {Button, FormInput, FormLabel, FormValidationMessage} from "react-native-elements";
import LoadingModal from "../../components/LoadingModal";

class RegisterScreen extends React.Component {
	static navigationOptions = {
		title: 'Register',
	};

	state = {};

	render() {
		const {isLoading, message} = this.state;

		return <View>
			<FormLabel labelStyle={{color: "teal"}}>Name</FormLabel>
			<FormInput/>
			<FormLabel labelStyle={{color: "teal"}}>Firstname</FormLabel>
			<FormInput/>
			<FormLabel labelStyle={{color: "teal"}}>Sex</FormLabel>
			<FormLabel labelStyle={{color: "teal"}}>Username</FormLabel>
			<FormInput/>
			<FormLabel labelStyle={{color: "teal"}}>Email</FormLabel>
			<FormInput/>
			<FormLabel labelStyle={{color: "teal"}}>Password</FormLabel>
			<FormInput/>
			<FormLabel labelStyle={{color: "teal"}}>Re-Password</FormLabel>
			<FormInput/>
			<FormValidationMessage>{message}</FormValidationMessage>
			<Space size={10}/>
			<Button
				backgroundColor={"teal"}
				title='Register' onPress={() => this.handleRegister()}/>
			<LoadingModal visible={isLoading === true}/>
		</View>
	}

	handleRegister() {
		this.setState({isLoading: true});
		setTimeout(this.setState.bind(this, {isLoading: false}), 2000)
	}
}

export default RegisterScreen;