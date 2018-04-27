import React from 'react'
import {ActivityIndicator, ScrollView, Text} from "react-native";
import {Card} from "react-native-elements";
import Bold from '../../components/Bold'
import HorizontalDivider from '../../components/HorizontalDivider'
import {connect} from "react-redux";
import getSelectedUser from "../../store/selectors/user/get_selected_user";

class UserDetailsScreen extends React.Component {
	static navigationOptions = {
		title: 'Details'
	};
	state = {
		nom: 'Dylan',
		prenom: 'Dylan'
	};

	render() {
		const {user} = this.props;
		
		if (!user) return <ActivityIndicator/>;

		return <ScrollView>
			<Card
				image={{uri: 'https://picsum.photos/600?random&' + encodeURI(user.username)}}>
				<HorizontalDivider>
					<Text>Informations</Text>
				</HorizontalDivider>
				<Text><Bold>Nom : </Bold><Text>{`${user.name} ${user.firstname}`}</Text></Text>
				<Text><Bold>Email : </Bold><Text>{`${user.email}`}</Text></Text>
				<Text><Bold>Sexe : </Bold><Text>{`${user.sex}`}</Text></Text>
			</Card>
		</ScrollView>;
	}
}

const mapStateToProps = (state, props) => {
	return ({
		user: getSelectedUser(state, props.navigation.state.params.user)
	})
};

export default connect(mapStateToProps)(UserDetailsScreen);