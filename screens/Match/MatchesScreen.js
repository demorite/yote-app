import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ListItem} from "react-native-elements";
import {connect} from "react-redux";
import getMatches from '../../store/selectors/match/get_matches'
import isLoading from '../../store/selectors/match/is_loading'
import {bindActionCreators} from "redux";
import {fetchAndSubscribeToMatches} from '../../store/actions/match';

class MatchesScreen extends React.Component {
	static navigationOptions = {
		title: 'Matches',
	};

	componentDidMount() {
		this.props.fetchAndSubscribeToMatches();
	}

	render() {
		const {matches, fetchAndSubscribeToMatches, isLoading = false} = this.props;
		return <View style={styles.container}>
			<FlatList data={matches}
			          refreshing={isLoading}
			          onRefresh={() => fetchAndSubscribeToMatches()}
			          keyExtractor={(item, index) => `${item.id}`}
			          ListEmptyComponent={() => <ListItem title={"Pas de match en cours"}/>}
			          renderItem={({item}) => <ListItem
				          key={item.id}
				          title={`${item.redPlayers.length > 0 ? item.redPlayers.map(p => `${p.firstname} ${p.name}`).join(', ') : 'Personne'} vs. ${item.bluePlayers.length > 0 ? item.bluePlayers.map(p => `${p.firstname} ${p.name}`).join(', ') : 'Personne'} `}
				          subtitle={`${item.babyfoot ? item.babyfoot.place : 'Nul part' }`}
				          onPress={() => this.props.navigation.navigate('MatchDetails', {match: item.id})}
			          />}
			/>
		</View>;
	}
}

export default connect(
	state => ({
		matches: getMatches(state),
		isLoading: isLoading(state)
	}),
	dispatch => bindActionCreators({
		fetchAndSubscribeToMatches
	}, dispatch)
)(MatchesScreen)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
