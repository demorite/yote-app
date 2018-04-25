import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {AppLoading} from 'expo';
import RootNavigation from './navigation/RootNavigation';
import store from './store'
import {Provider} from 'react-redux';
import {Ionicons} from '@expo/samples'

export default class App extends React.Component {
	state = {
		isLoadingComplete: false,
	};
	_loadResourcesAsync = async () => {
		return Promise.all([]);
	};
	_handleLoadingError = error => {
		// In this case, you might want to report the error to your error
		// reporting service, for example Sentry
		console.warn(error);
	};
	_handleFinishLoading = () => {
		this.setState({isLoadingComplete: true});
	};

	render() {
		if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
			return (
				<AppLoading
					startAsync={this._loadResourcesAsync}
					onError={this._handleLoadingError}
					onFinish={this._handleFinishLoading}
				/>
			);
		} else {
			return (
				<Provider store={store}>
					<View style={styles.container}>
						<StatusBar barStyle="light-content"/>
						<RootNavigation/>
					</View>
				</Provider>
			);
		}
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
