import React from 'react';
import {TabBarBottom, TabNavigator} from 'react-navigation';

import Colors from '../constants/Colors';

import UsersScreen from '../screens/UsersScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Ionicons from "react-native-vector-icons/Ionicons";

export default TabNavigator(
    {
        Users: {
            screen: UsersScreen,
        },
        Links: {
            screen: LinksScreen,
        },
        Settings: {
            screen: SettingsScreen,
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
                    case 'Links':
                        iconName = 'md-link';
                        break;
                    case 'Settings':
                        iconName = 'md-options';
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
