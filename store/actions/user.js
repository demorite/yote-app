import SailsSocket from "sails-socket/src/index";
import {FETCH_USERS, FETCH_USERS_FAIL, FETCH_USERS_SUCCESS} from "../consts/user";
import * as _ from 'lodash'

export const fetchAndSubscribeToUsers = () => dispatch => {
	dispatch({type: FETCH_USERS});
	try {
		SailsSocket.connect({url: 'http://localhost:1337'})
	} catch (err) {}

	let fetchUsers = function () {
		SailsSocket.get('/user', users => dispatch({
			type: FETCH_USERS_SUCCESS,
			payload: _.orderBy(users, 'id')
		}));
	};

	try {
		fetchUsers();
		SailsSocket.off('user');
		SailsSocket.on('user', () => {
			fetchUsers();
		});
	} catch (err) {
		dispatch({type: FETCH_USERS_FAIL, err})
	}
};