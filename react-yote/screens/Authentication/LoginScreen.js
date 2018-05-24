import React from "react";
import {TouchableOpacity, View} from "react-native";
import {Button, FormInput, FormLabel, FormValidationMessage, Text} from "react-native-elements";
import Space from "../../components/Space";
import {bindActionCreators} from "redux";
import {checkLogged, login} from '../../store/actions/auth'
import {connect} from "react-redux";
import LoadingModal from "../../components/LoadingModal";

class LoginScreen extends React.Component {
	static navigationOptions = {
		title: 'Login',
	};

	state = {username: 'demorite', password: "yesplease"};

	componentDidMount() {
		this.setState({isLoading: true});
		this.props.checkLogged().finally(() => this.setState({isLoading: false}));
	}

	render() {
		const {isLoading, message} = this.state;
		return <View>
			<FormLabel labelStyle={{color: "teal"}}>Username</FormLabel>
			<FormInput value={this.state.username} onChangeText={(username) => this.setState({username})}/>
			<FormLabel labelStyle={{color: "teal"}}>Password</FormLabel>
			<FormInput value={this.state.password} onChangeText={(password) => this.setState({password})}/>
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
		this.setState({isLoading: true, message: null});
		const {username, password} = this.state;
		if (!username)
			return this.setState({message: 'Pas de nom utilisateur', isLoading: false});
		else if (!password)
			return this.setState({message: 'Pas de mot de passe', isLoading: false});
		this.props.login(username, password).finally(() => this.setState({isLoading: false}));
	}

	handleToRegister() {
		//this.props.navigation.navigate('Register')
	}
}

export default connect(null, dispatch => bindActionCreators({
	login,
	checkLogged
}, dispatch))(LoginScreen)