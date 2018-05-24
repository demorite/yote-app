import SailsSocket from "sails-socket/src/index";
import {FETCH_MATCHES, FETCH_MATCHES_FAIL, FETCH_MATCHES_SUCCESS} from "../consts/match";
import * as _ from 'lodash'
import {apiUrl} from "../../constants/config";

export const fetchAndSubscribeToMatches = (user) => dispatch => {
	dispatch({type: FETCH_MATCHES});
	try {
		SailsSocket.connect({url: apiUrl})
	} catch (err) {}

	let fetchMatches = function () {
		SailsSocket.get('/match', matches => {
			return dispatch({
				type: FETCH_MATCHES_SUCCESS,
				payload: _.orderBy(matches, 'id')
			});
		})
	};

	try {
		fetchMatches();
		SailsSocket.off('match');
		SailsSocket.on('match', () => {
			fetchMatches();
		});
	}
	catch (err) {
		dispatch({type: FETCH_MATCHES_FAIL, err});
	}
};
