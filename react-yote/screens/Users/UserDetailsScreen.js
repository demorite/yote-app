import React from 'react'
import {ActivityIndicator, ScrollView, Text, TouchableOpacity, View} from "react-native";
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
				{
					user.blueMatches.length > 0 &&
					<View>
						<HorizontalDivider>
							<Text>Matches as blue</Text>
						</HorizontalDivider>
						{
							user.blueMatches.map(match => {
								return <TouchableOpacity key={match.id} onPress={() => this.props.navigation.navigate('MatchDetails', {match: match.id})}>
									<Text>{match.blueScore} - {match.redScore} ({match.blueScore === match.redScore ? 'draw' : match.blueScore > match.redScore ? 'win' : 'lose'})</Text>
								</TouchableOpacity>
							})
						}
					</View>
				}
				{
					user.redMatches.length > 0 &&
					<View>
						<HorizontalDivider>
							<Text>Matches as red</Text>
						</HorizontalDivider>
						{
							user.redMatches.map(match => {
								return <TouchableOpacity key={match.id} onPress={() => this.props.navigation.navigate('MatchDetails', {match: match.id})}>
									<Text>{match.redScore} - {match.blueScore} ({match.redScore === match.blueScore ? 'draw' : match.redScore > match.blueScore ? 'win' : 'lose'})</Text>
								</TouchableOpacity>
							})
						}
					</View>
				}
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