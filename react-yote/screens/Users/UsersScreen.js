import React from 'react';
import {FlatList, StyleSheet, View,} from 'react-native';
import {ListItem} from "react-native-elements";
import {connect} from "react-redux";
import getUsers from "../../store/selectors/user/get_users";
import isLoading from "../../store/selectors/user/is_loading";
import {bindActionCreators} from "redux";
import {fetchAndSubscribeToUsers} from "../../store/actions/user";
import getUser from "../../store/selectors/auth/get_user";

class UsersScreen extends React.Component {
	static navigationOptions = ({navigation}) => {
		let title = "Team";
		if (navigation.state.params && navigation.state.params.title)
			title = `Team ${navigation.state.params.title}`;
		return {
			title
		};
	};

	componentDidMount() {

		const {navigation, user} = this.props;

		this.props.fetchAndSubscribeToUsers(user);
		if (user && user.team && user.team.name) {
			navigation.setParams({title: user.team.name});
		}
	}

	render() {
		const {users, fetchAndSubscribeToUsers, isLoading = false} = this.props;

		return (
			<View style={styles.container}>
				<FlatList
					data={users}
					refreshing={isLoading}
					onRefresh={() => fetchAndSubscribeToUsers()}
					keyExtractor={(user) => `${user.id}`}
					ListEmptyComponent={() => <ListItem title={"Pas d'équipiers"}/>}
					renderItem={({item}) => <ListItem
						key={item.id}
						title={`${item.name} ${item.firstname}`}
						subtitle={`Matches: ${item.blueMatches.length + item.redMatches.length}`}
						onPress={() => this.props.navigation.navigate('UserDetails', {user: item.id})}
					/>}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	users: getUsers(state),
	user: getUser(state),
	isLoading: isLoading(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchAndSubscribeToUsers,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreen)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
