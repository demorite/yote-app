import React from "react";
import {
	ActivityIndicator,
	ScrollView,
	Text,
	TouchableOpacity,
} from "react-native";
import {Card} from "react-native-elements";
import Bold from "../../components/Bold";
import HorizontalDivider from "../../components/HorizontalDivider";
import {connect} from "react-redux";

import getSelectedMatch from "../../store/selectors/match/get_selected_match";

class MatchDetailsScreen extends React.Component {
	static navigationOptions = {
		title: "Details",
	};

	render() {
		const {match} = this.props;

		if (!match) return <ActivityIndicator />;

		const imageUrl =
			"https://picsum.photos/600?random&" + encodeURI(match.place);
		const playerItem = (p, i) => {
			const toUserDetails = () =>
				this.props.navigation.navigate("UserDetails", {user: p.id});
			return (
				<TouchableOpacity key={i} onPress={toUserDetails}>
					<Text style={{color: "teal"}}> - {`${p.firstname} ${p.name}`}</Text>
				</TouchableOpacity>
			);
		};

		return (
			<ScrollView>
				<Card image={{uri: imageUrl}}>
					<HorizontalDivider>
						<Text>&Eacute;quipes</Text>
					</HorizontalDivider>
					<Bold>Rouge</Bold>
					{match.redPlayers && match.redPlayers.map(playerItem)}
					<Bold>Bleue</Bold>
					{match.bluePlayers && match.bluePlayers.map(playerItem)}
					<HorizontalDivider>
						<Text>BabyFoot</Text>
					</HorizontalDivider>
					<TouchableOpacity
						onPress={() => {
							if (match.babyfoot)
								this.props.navigation.navigate("BabyFootDetails", {
									babyFoot: match.babyfoot.id,
								});
						}}>
						<Text>
							<Bold>Lieu : </Bold>
							<Text>{`${
								match.babyfoot ? match.babyfoot.place : "Pas de baby-foot"
							}`}</Text>
						</Text>
					</TouchableOpacity>
					<HorizontalDivider>
						<Text>Informations</Text>
					</HorizontalDivider>
					<Text>
						<Bold>Durée : </Bold>
						<Text>{`${match.duration}`}</Text>
					</Text>
					<Text>
						<Bold>Joué : </Bold>
						<Text>{`${match.played ? "Oui" : "Non"}`}</Text>
					</Text>
					<Text>
						<Bold>En cours : </Bold>
						<Text>{`${match.inUse ? "Oui" : "Non"}`}</Text>
					</Text>
					<Text>
						<Bold>Score (Rouge - Bleu) : </Bold>
						<Text>{`${match.redScore} - ${match.blueScore}`}</Text>
					</Text>
					<Text>
						<Bold>Score (Rouge - Bleu) : </Bold>
						<Text>{`${match.redScore} - ${match.blueScore}`}</Text>
					</Text>
				</Card>
			</ScrollView>
		);
	}
}

export default connect((state, props) => ({
	match: getSelectedMatch(state, props.navigation.state.params.match),
}))(MatchDetailsScreen);
