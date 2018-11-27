import React from "react";
import {StyleSheet, View} from "react-native";
import {Provider} from "react-redux";
import RootNavigation from "./navigation/RootNavigation";
import store from "./store";

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					{/*<StatusBar barStyle="light-content"/>*/}
					<RootNavigation />
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
