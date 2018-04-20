import React from 'react'
import {Text, View} from "react-native";
import {Card} from "react-native-elements";
import Bold from '../../components/Bold'
import HorizontalDivider from '../../components/HorizontalDivider'

class MatchDetailsScreen extends React.Component {
	static navigationOptions = {
		title: 'Details'
	};

	render() {
		const {match} = this.props.navigation.state.params;

		return <View>
			<Card
				image={{uri: 'https://picsum.photos/600?random&' + encodeURI(match.place)}}>
				<HorizontalDivider>
					<Text>&Eacute;quipes</Text>
				</HorizontalDivider>
				<Bold>Rouge</Bold>
				{match.redPlayers.map((p, i) => <Text key={i} > - {`${p.firstname} ${p.name}`}</Text>)}
				<Bold>Bleue</Bold>
				{match.bluePlayers.map((p, i) => <Text key={i} > - {`${p.firstname} ${p.name}`}</Text>)}
				<HorizontalDivider>
					<Text>BabyFoot</Text>
				</HorizontalDivider>
				<Text><Bold>Lieu : </Bold><Text>{`${match.babyfoot.place}`}</Text></Text>
				<HorizontalDivider>
					<Text>Informations</Text>
				</HorizontalDivider>
				<Text><Bold>Durée : </Bold><Text>{`${match.duration}`}</Text></Text>
				<Text><Bold>Joué : </Bold><Text>{`${match.played ? 'Oui' : 'Non'}`}</Text></Text>
				<Text><Bold>En cours : </Bold><Text>{`${match.inUse ? 'Oui' : 'Non'}`}</Text></Text>
				<Text><Bold>Score (Rouge - Bleu) : </Bold><Text>{`${match.redScore} - ${match.blueScore}`}</Text></Text>
				<Text><Bold>Score (Rouge - Bleu) : </Bold><Text>{`${match.redScore} - ${match.blueScore}`}</Text></Text>
			</Card>
		</View>;
	}
}

export default MatchDetailsScreen;