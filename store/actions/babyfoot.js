import SailsSocket from "sails-socket/src/index";
import {FETCH_BABYFOOTS, FETCH_BABYFOOTS_FAIL, FETCH_BABYFOOTS_SUCCESS} from "../consts/babyfoot";
import * as _ from 'lodash'

export const fetchAndSubscribeToBabyFoots = () => dispatch => {
	dispatch({type: FETCH_BABYFOOTS});
	try {
		SailsSocket.connect({url: 'http://localhost:1337'})
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