import React from 'react'
import {Text, View} from "react-native";
import {Card} from "react-native-elements";
import Bold from '../../components/Bold'
import HorizontalDivider from '../../components/HorizontalDivider'

class UserDetailsScreen extends React.Component {
	static navigationOptions = {
		title: 'Details'
	};
	state = {
		nom: 'Dylan',
		prenom: 'Dylan'
	};

	componentDidMount() {
		this.setState({
			nom: 'Maxime'
		})
	}

	render() {
		const {user} = this.props.navigation.state.params;

		return <View>
			<Card
				image={{uri: 'https://picsum.photos/600?random&' + encodeURI(user.username)}}>
				<HorizontalDivider>
					<Text>Informations</Text>
				</HorizontalDivider>
				<Text><Bold>Nom : </Bold><Text>{`${user.name} ${user.firstname}`}</Text></Text>
				<Text><Bold>Email : </Bold><Text>{`${user.email}`}</Text></Text>
				<Text><Bold>Sexe : </Bold><Text>{`${user.sex}`}</Text></Text>
			</Card>
		</View>;
	}
}

export default UserDetailsScreen;