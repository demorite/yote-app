import React from 'react'
import {ActivityIndicator, ScrollView, Text} from "react-native";
import {Card} from "react-native-elements";
import Bold from '../../components/Bold'
import HorizontalDivider from '../../components/HorizontalDivider'
import {connect} from "react-redux";
import getSelectedBabyFoot from "../../store/selectors/babyfoot/get_selected_babyfoot";
import Button from "react-native-elements/src/buttons/Button";
import Space from "../../components/Space";
import bindActionCreators from "redux/src/bindActionCreators";
import {toggleUserOnBabyfooot} from "../../store/actions/babyfoot";
import getUser from "../../store/selectors/auth/get_user";

class BabyFootDetailsScreen extends React.Component {
	static navigationOptions = {
		title: 'Details'
	};

	render() {
		const {babyFoot, user} = this.props;

		if (!babyFoot) return <ActivityIndicator/>

		return <ScrollView>
			<Card
				image={{uri: 'https://picsum.photos/600?random&' + encodeURI(babyFoot.place)}}>
				<HorizontalDivider>
					<Text>Informations</Text>
				</HorizontalDivider>
				<Text><Bold>Lieu : </Bold><Text>{`${babyFoot.place}`}</Text></Text>
				<Text><Bold>Nombre de joueurs : </Bold><Text>{`${babyFoot.currentPlayers.length}/${babyFoot.max_players}`}</Text></Text>
				<Text><Bold>Status : </Bold><Text>{`${
					babyFoot.currentPlayers.length === 0
						? "Free"
						: babyFoot.currentPlayers.length < babyFoot.max_players
						? "Pas plein"
						: "Plein"
					}`}</Text></Text>
				<Space/>
				<Button title={
					babyFoot.currentPlayers.length < babyFoot.max_players
						? babyFoot.currentPlayers.map(u => u.id).indexOf(user.id) >= 0
						? "Ne plus participer"
						: "Participer"
						: "Full"
				}
				        disabled={babyFoot.currentPlayers.length === babyFoot.max_players}
				        onPress={() => this.props.toggleUserOnBabyfooot(babyFoot, user.id)}/>
			</Card>
		</ScrollView>;
	}
}

export default connect((state, props) => ({
	babyFoot: getSelectedBabyFoot(state, props.navigation.state.params.babyFoot),
	user: getUser(state)
}), (dispatch) => bindActionCreators({
	toggleUserOnBabyfooot
}, dispatch))(BabyFootDetailsScreen);