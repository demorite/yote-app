import React from "react";
import {View} from "react-native";

export default class Space extends React.Component {
	render() {
		return <View style={{height: this.props.size || 20}}/>
	}
}