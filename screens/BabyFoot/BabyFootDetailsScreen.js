import React from 'react'
import {Text, View} from "react-native";
import {Card} from "react-native-elements";
import Bold from '../../components/Bold'
import HorizontalDivider from '../../components/HorizontalDivider'

class BabyFootDetailsScreen extends React.Component {
	static navigationOptions = {
		title: 'Details'
	};

	render() {
		const {babyFoot} = this.props.navigation.state.params;

		return <View>
			<Card
				image={{uri: 'https://picsum.photos/600?random&' + encodeURI(babyFoot.place)}}>
				<HorizontalDivider>
					<Text>Informations</Text>
				</HorizontalDivider>
				<Text><Bold>Lieu : </Bold><Text>{`${babyFoot.place}`}</Text></Text>
				<Text><Bold>Nombre de joueurs : </Bold><Text>{`${babyFoot.max_players}`}</Text></Text>
				<Text><Bold>Status : </Bold><Text>{`${babyFoot.state}`}</Text></Text>
			</Card>
		</View>;
	}
}

export default BabyFootDetailsScreen;