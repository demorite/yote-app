import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import BabyfootProvider from "../../api/providers/BabyfootProvider";
import {ListItem} from "react-native-elements";

export default class BabyFootScreen extends React.Component {
	static navigationOptions = {
		title: 'BabyFoots',
	};

	state = {refreshing: true};

	async updateBabyFoots() {
		this.setState({refreshing: true});
		try {
			const babyFoots = await BabyfootProvider.getBabyfoots();
			this.setState({babyFoots});
		} catch (err) {
			console.log(err);
		} finally {
			this.setState({refreshing: false});
		}
	};

	componentDidMount() {
		// noinspection JSIgnoredPromiseFromCall
		this.updateBabyFoots();
	}

	render() {
		const {refreshing, babyFoots} = this.state;
		return <View style={styles.container}>
			<FlatList refreshing={refreshing}
			          onRefresh={this.updateBabyFoots.bind(this)}
			          data={babyFoots}
			          keyExtractor={(item, index) => `${item.id}`}
			          renderItem={({item}) => <ListItem
				          key={item.id}
				          title={item.place}
				          onPress={() => this.props.navigation.navigate('BabyFootDetails', {babyFoot: item})}
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
