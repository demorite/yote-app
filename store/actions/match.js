import SailsSocket from "sails-socket/src/index";
import {FETCH_MATCHES, FETCH_MATCHES_FAIL, FETCH_MATCHES_SUCCESS} from "../consts/match";
import * as _ from 'lodash'

export const fetchAndSubscribeToMatches = () => dispatch => {
	dispatch({type: FETCH_MATCHES});
	try {
		SailsSocket.connect({url: 'http://localhost:1337'})
	} catch (err) {}

	let fetchUsers = function () {
		SailsSocket.get('/match', matches => dispatch({
			type: FETCH_MATCHES_SUCCESS,
			payload: _.orderBy(matches, 'id')
		}));
	};

	try {
		fetchUsers();
		SailsSocket.off('match');
		SailsSocket.on('match', () => {
			fetchUsers();
		});
	}
	catch (err) {
		dispatch({type: FETCH_MATCHES_FAIL, err});
	}
};