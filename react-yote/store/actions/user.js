import SailsSocket from "sails-socket/src/index";
import {FETCH_USERS, FETCH_USERS_FAIL, FETCH_USERS_SUCCESS} from "../consts/user";
import * as _ from 'lodash'
import {apiUrl} from "../../constants/config";

export const fetchAndSubscribeToUsers = (user) => dispatch => {
	dispatch({type: FETCH_USERS});
	try {
		SailsSocket.connect({url: apiUrl})
	} catch (err) {}

	let fetchUsers = function () {
		if (!user || !user.team) throw new Error('Not Authenticated');
		const url = `/user`;
		SailsSocket.get(url, users => {
			return dispatch({
				type: FETCH_USERS_SUCCESS,
				payload: _.orderBy(_.filter(users, u => u.team && user.team ? u.team.id === user.team.id : false), 'id')
			})
		});
	};

	try {
		fetchUsers();
		SailsSocket.off('user');
		SailsSocket.on('user', () => {
			fetchUsers();
		});
	} catch (err) {
		console.log(err);
		dispatch({type: FETCH_USERS_FAIL, err})
	}
};