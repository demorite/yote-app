import React from 'react'
import {Text, View} from "react-native";
import {Card} from "react-native-elements";
import Bold from '../components/Bold'
import HorizontalDivider from '../components/HorizontalDivider'

class UserDetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Details'
    };

    componentDidMount() {

    }

    render() {
        const {user} = this.props.navigation.state.params;

        return <View>
            <Card
                image={{uri: 'https://picsum.photos/600?random&' + encodeURI(user.username)}}>
                <HorizontalDivider>
                    <Text>Informations</Text>
                </HorizontalDivider>
                <Text><Bold>Nom : </Bold><Text>{`${user.name}`}</Text></Text>
                <Text><Bold>Utilisateur : </Bold><Text>{`${user.username}`}</Text></Text>
                <Text><Bold>Email : </Bold><Text>{`${user.email}`}</Text></Text>
                <Text><Bold>Adresse : </Bold><Text>{`${user.address.street} ${user.address.suite}, ${user.address.city}`}</Text></Text>
                <Text><Bold>Téléphone : </Bold><Text>{`${user.phone}`}</Text></Text>
                <Text><Bold>Site : </Bold><Text>{`${user.website}`}</Text></Text>
                <HorizontalDivider>
                    <Text>Société</Text>
                </HorizontalDivider>
                <Text><Bold>Nom : </Bold><Text>{`${user.company.name}`}</Text></Text>
                <Text><Bold>Devise : </Bold><Text>{`${user.company.catchPhrase}`}</Text></Text>
            </Card>
        </View>;
    }
}

export default UserDetailsScreen;