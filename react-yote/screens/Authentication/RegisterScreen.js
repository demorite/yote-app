import React from "react";
import {ScrollView, View} from "react-native";
import Space from "../../components/Space";
import {Button, CheckBox, FormInput, FormLabel, FormValidationMessage} from "react-native-elements";
import LoadingModal from "../../components/LoadingModal";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {register} from '../../store/actions/auth'

class RegisterScreen extends React.Component {
	static navigationOptions = {
		title: 'Register',
	};

	state = {
		gender: 'male'
	};

	render() {
		const {isLoading, message} = this.state;

		return <ScrollView>
			<FormLabel labelStyle={{color: "teal"}}>Name</FormLabel>
			<FormInput value={this.state.name} onChangeText={(name) => this.setState({name})}/>
			<FormLabel labelStyle={{color: "teal"}}>Firstname</FormLabel>
			<FormInput value={this.state.firstname} onChangeText={(firstname) => this.setState({firstname})}/>
			<FormLabel labelStyle={{color: "teal"}}>Sex</FormLabel>
			<View style={{flexDirection: "row"}}>
				<CheckBox title={"Male"} containerStyle={{backgroundColor: 'transparent'}} checked={this.state.gender === 'male'} onPress={() => this.setState({gender: 'male'})}/>
				<CheckBox title={"Female"} containerStyle={{backgroundColor: 'transparent'}} checked={this.state.gender === 'female'} onPress={() => this.setState({gender: 'female'})}/>
			</View>
			<FormLabel labelStyle={{color: "teal"}}>Username</FormLabel>
			<FormInput value={this.state.username} onChangeText={(username) => this.setState({username})}/>
			<FormLabel labelStyle={{color: "teal"}}>Email</FormLabel>
			<FormInput value={this.state.email} onChangeText={(email) => this.setState({email})}/>
			<FormLabel labelStyle={{color: "teal"}}>Password</FormLabel>
			<FormInput value={this.state.password} onChangeText={(password) => this.setState({password})}/>
			<FormLabel labelStyle={{color: "teal"}}>Re-Password</FormLabel>
			<FormInput value={this.state.password2} onChangeText={(password2) => this.setState({password2})}/>
			<FormValidationMessage>{message}</FormValidationMessage>
			<Space size={10}/>
			<Button
				backgroundColor={"teal"}
				title='Register' onPress={() => this.handleRegister()}/>
			<LoadingModal visible={isLoading === true}/>
			<Space size={10}/>
		</ScrollView>
	}

	handleRegister() {
		try {
			this.setState({isLoading: true});
			const args = {name, firstname, gender, username, email, password, password2} = this.state;
			const error = [];

			if (!name) error.push('Pas de nom');
			else if (!firstname) error.push('Pas de prénom');
			else if (!firstname) error.push('Pas de sex');
			else if (!firstname) error.push('Pas de nom d\'utilisateur');
			else if (!firstname) error.push('Pas de mot de passe');
			else if (!firstname) error.push('Veuillez insérer de nouveau votre mot de passe');
			else if (password !== password2) error.push('Les deux mots de passe ne sont pas identiques');

			if (error.length > 0) return this.setState({message: error.join('\n'), isLoading: false});

			this.props.register(args)
				.then(() => this.setState({isLoading: false}))
				.catch(() => this.setState({isLoading: false}))

		} catch (err) {
			this.setState({isLoading: false})
		}
	}
}

export default connect(null,
	dispatch => bindActionCreators({
		register
	}, dispatch)
)(RegisterScreen);