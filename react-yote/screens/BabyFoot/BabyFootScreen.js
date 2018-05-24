import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ListItem} from "react-native-elements";
import {connect} from "react-redux";
import getBabyFoots from "../../store/selectors/babyfoot/get_babyfoots";
import isLoading from "../../store/selectors/babyfoot/is_loading";
import {fetchAndSubscribeToBabyFoots} from "../../store/actions/babyfoot";
import {bindActionCreators} from "redux";

class BabyFootScreen extends React.Component {
	static navigationOptions = {
		title: 'BabyFoots',
	};

	componentDidMount() {
		this.props.fetchAndSubscribeToBabyFoots();
	}

	render() {
		const {babyFoots, isLoading = false, fetchAndSubscribeToBabyFoots} = this.props;
		return <View style={styles.container}>
			<FlatList data={babyFoots}
			          refreshing={isLoading}
			          onRefresh={() => fetchAndSubscribeToBabyFoots()}
			          keyExtractor={(item, index) => `${item.id}`}
			          ListEmptyComponent={() => <ListItem title={"Pas de babyfoot enregistré"}/>}
			          renderItem={({item}) => <ListItem
				          key={item.id}
				          title={item.place}
				          subtitle={`Etat: ${item.state || 'Free'}; nombre de joueurs: ${item.max_players}`}
				          onPress={() => this.props.navigation.navigate('BabyFootDetails', {babyFoot: item.id})}
			          />}
			/>
		</View>;
	}
}

const mapStateToProps = (state) => ({
	babyFoots: getBabyFoots(state),
	isLoading: isLoading(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchAndSubscribeToBabyFoots
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BabyFootScreen)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
