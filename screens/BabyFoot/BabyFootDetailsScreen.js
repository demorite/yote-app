import React from 'react'
import {ActivityIndicator, ScrollView, Text} from "react-native";
import {Card} from "react-native-elements";
import Bold from '../../components/Bold'
import HorizontalDivider from '../../components/HorizontalDivider'
import {connect} from "react-redux";
import getSelectedBabyFoot from "../../store/selectors/babyfoot/get_selected_babyfoot";

class BabyFootDetailsScreen extends React.Component {
	static navigationOptions = {
		title: 'Details'
	};

	render() {
		const {babyFoot} = this.props;

		if (!babyFoot) return <ActivityIndicator/>

		return <ScrollView>
			<Card
				image={{uri: 'https://picsum.photos/600?random&' + encodeURI(babyFoot.place)}}>
				<HorizontalDivider>
					<Text>Informations</Text>
				</HorizontalDivider>
				<Text><Bold>Lieu : </Bold><Text>{`${babyFoot.place}`}</Text></Text>
				<Text><Bold>Nombre de joueurs : </Bold><Text>{`${babyFoot.max_players}`}</Text></Text>
				<Text><Bold>Status : </Bold><Text>{`${babyFoot.state}`}</Text></Text>
			</Card>
		</ScrollView>;
	}
}

export default connect((state, props) => ({
	babyFoot: getSelectedBabyFoot(state, props.navigation.state.params.babyFoot)
}))(BabyFootDetailsScreen);