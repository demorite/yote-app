import React from 'react';
import {TabBarBottom, TabNavigator} from 'react-navigation';

import Colors from '../constants/Colors';

import UsersScreen from '../screens/Users/UsersScreen';
import BabyFootScreen from '../screens/BabyFoot/BabyFootScreen';
import MatchesScreen from '../screens/Match/MatchesScreen';
import Ionicons from "react-native-vector-icons/Ionicons";

export default TabNavigator(
	{
		Match: {
			screen: MatchesScreen,
		},
		Users: {
			screen: UsersScreen,
		},
		BabyFoots: {
			screen: BabyFootScreen,
		},
	},
	{
		navigationOptions: ({navigation}) => ({
			tabBarIcon: ({focused}) => {
				const {routeName} = navigation.state;
				let iconName;
				switch (routeName) {
					case 'Users':
						iconName = 'md-person';
						break;
					case 'BabyFoots':
						iconName = 'md-football';
						break;
					case 'Match':
						iconName = 'md-people';
				}
				return (
					<Ionicons
						name={iconName}
						size={28}
						style={{marginBottom: -3, width: 25}}
						color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
					/>
				);
			},
		}),
		tabBarComponent: TabBarBottom,
		tabBarPosition: 'bottom',
		animationEnabled: true,
		swipeEnabled: true,
	}
);
