import SailsSocket from "sails-socket/src/index";
import {FETCH_BABYFOOTS, FETCH_BABYFOOTS_FAIL, FETCH_BABYFOOTS_SUCCESS} from "../consts/babyfoot";
import * as _ from 'lodash'
import {apiUrl} from "../../constants/config";
import babyfoot from "../reducers/babyfoot";

export const fetchAndSubscribeToBabyFoots = () => dispatch => {
	dispatch({type: FETCH_BABYFOOTS});
	try {
		SailsSocket.connect({url: apiUrl})
	} catch (err) {}

	let fetchUsers = function () {
		SailsSocket.get('/babyfoot', babyFoots => dispatch({
			type: FETCH_BABYFOOTS_SUCCESS,
			payload: _.orderBy(babyFoots, 'id')
		}));
	};

	try {
		fetchUsers();
		SailsSocket.off('babyfoot');
		SailsSocket.on('babyfoot', () => {
			fetchUsers();
		});
	} catch (err) {
		dispatch({type: FETCH_BABYFOOTS_FAIL, err});
	}
};

export const toggleUserOnBabyfooot = (baby, userid) => async dispatch => {
	try {
		const url = `${apiUrl}/babyfoot/${baby.id}`;

		try {

			let currentPlayers = baby.currentPlayers.map(u => u.id);
			if (currentPlayers.length >= baby.max_players) return false;

			if (currentPlayers.indexOf(userid) < 0)
				currentPlayers.push(userid);
			else
				currentPlayers = currentPlayers.filter(p => p !== userid);

			const res = await fetch(url, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method: "PATCH",
				credentials: "include",
				body: JSON.stringify({currentPlayers})
			});
		} catch (e) {
			console.log(e);
		}

		return true
	} catch (e) {
		console.log(e)
	}
};