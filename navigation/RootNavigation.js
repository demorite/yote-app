import {Notifications} from 'expo';
import React from 'react';
import {StackNavigator} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
import UserDetailsScreen from "../screens/Users/UserDetailsScreen";
import BabyFootDetailsScreen from "../screens/BabyFoot/BabyFootDetailsScreen";
import MatchDetailsScreen from "../screens/Match/MatchDetailsScreen";
import LoginScreen from '../screens/Authentication/LoginScreen'
import RegisterScreen from '../screens/Authentication/RegisterScreen'
import {connect} from "react-redux";
import getUser from "../store/selectors/auth/get_user";

const RootStackNavigator = StackNavigator(
	{
		Main: {
			screen: MainTabNavigator,
		},
		UserDetails: {
			screen: UserDetailsScreen,
		},
		BabyFootDetails: {
			screen: BabyFootDetailsScreen,
		},
		MatchDetails: {
			screen: MatchDetailsScreen,
		},
	},
	{
		navigationOptions: () => ({
			headerTintColor: '#FFFFFF',
			headerStyle: {
				backgroundColor: "#008080"
			}
		}),
	}
);

const AuthenticationStackNavigator = StackNavigator(
	{
		Login: {screen: LoginScreen},
		Register: {screen: RegisterScreen},
	},
	{
		navigationOptions: () => ({
			headerTintColor: '#FFFFFF',
			headerStyle: {
				backgroundColor: "#008080"
			}
		}),
	}
);

class RootNavigator extends React.Component {
	_handleNotification = ({origin, data}) => {
		console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
	};

	componentDidMount() {
		this._notificationSubscription = this._registerForPushNotifications();
	}

	componentWillUnmount() {
		this._notificationSubscription && this._notificationSubscription.remove();
	}

	render() {
		const {user} = this.props;
		return <RootStackNavigator/>;
		if (!user)
			return <AuthenticationStackNavigator/>;
		return <RootStackNavigator/>;
	}

	_registerForPushNotifications() {
		// Send our push token over to our backend so we can receive notifications
		// You can comment the following line out if you want to stop receiving
		// a notification every time you open the app. Check out the source
		// for this function in api/registerForPushNotificationsAsync.js
		registerForPushNotificationsAsync();

		// Watch for incoming notifications
		this._notificationSubscription = Notifications.addListener(this._handleNotification);
	}
}

const mapStateToProps = state => ({
	user: getUser(state),
});

export default connect(mapStateToProps)(RootNavigator);