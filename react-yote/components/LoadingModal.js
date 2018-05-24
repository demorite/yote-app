import {ActivityIndicator, Modal, View} from "react-native";
import React from "react";

export default class LoadingModal extends React.Component {
	render() {
		const {visible = false} = this.props;

		return <Modal
			animationType="fade"
			transparent={true}
			onRequestClose={() => true}
			visible={visible}>
			<View style={{flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: "rgba(0,0,0,0.1)"}}>
				<View style={{backgroundColor: 'white', padding: 40, borderRadius: 10}}>
					<ActivityIndicator/>
				</View>
			</View>
		</Modal>
	}
}