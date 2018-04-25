import {ActivityIndicator, Modal, View} from "react-native";
import React from "react";

export default class LoadingModal extends React.Component {
	render() {
		const {visible = false} = this.props;

		return <Modal
			animationType="slide"
			transparent={true}
			visible={visible}>
			<View style={{flex: 1, justifyContent: "center", alignItems: 'center'}}>
				<View style={{backgroundColor: 'white', padding: 40, borderRadius: 10}}>
					<ActivityIndicator/>
				</View>
			</View>
		</Modal>
	}
}