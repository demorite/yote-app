import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {ListItem} from "react-native-elements";
import MatchProvider from "../../api/providers/MatchProvider";

export default class MatchesScreen extends React.Component {
	static navigationOptions = {
		title: 'Matches',
	};

	state = {refreshing: true};

	async updateMatches() {
		this.setState({refreshing: true});
		try {
			const matches = await MatchProvider.getMatches();
			this.setState({matches});
		} catch (err) {
			console.log(err);
		} finally {
			this.setState({refreshing: false});
		}
	};

	componentDidMount() {
		// noinspection JSIgnoredPromiseFromCall
		this.updateMatches();
	}

	render() {
		const {refreshing, matches} = this.state;
		return <View style={styles.container}>
			<FlatList refreshing={refreshing}
			          onRefresh={this.updateMatches.bind(this)}
			          data={matches}
			          keyExtractor={(item, index) => `${item.id}`}
			          renderItem={({item}) => <ListItem
				          key={item.id}
				          title={`${item.redPlayers.map(p => `${p.firstname} ${p.name}`).join(', ')} vs. ${item.bluePlayers.map(p => `${p.firstname} ${p.name}`).join(', ')} `}
				          onPress={() => this.props.navigation.navigate('MatchDetails', {match: item})}
			          />}
			/>
		</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
	},
});
