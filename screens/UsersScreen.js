import React from 'react';
import {FlatList, StyleSheet, View,} from 'react-native';
import {ListItem} from "react-native-elements";
import FakeUserProvider from "../api/providers/FakeUserProvider";

export default class UsersScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: 'Users'
    });

    state = {
        users: undefined,
        refreshing: true,
    };

    async updateUsers() {
        this.setState({refreshing: true});
        try {
            const users = await FakeUserProvider.getUsers();
            this.setState({users});
        } catch (err) {
            console.log(err)
        } finally {
            this.setState({refreshing: false})
        }
    }

    async componentDidMount() {
        await this.updateUsers();
    }

    render() {
        const {users, refreshing} = this.state;

        return (
            <View style={styles.container}>
                <FlatList
                    refreshing={refreshing}
                    onRefresh={this.updateUsers.bind(this)}
                    keyExtractor={(item) => `${item.id}`}
                    data={users}
                    renderItem={({item}) => <ListItem
                        key={item.id}
                        title={`${item.name}`}
                        onPress={() => this.props.navigation.navigate('UserDetails', {user: item})}
                    />}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
