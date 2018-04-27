import * as _ from 'lodash';
import {createSelector} from "reselect";
import getUsers from "./get_users";

const getSelectedUser = (state, id) => createSelector(
	getUsers,
	(users) => {
		console.log('user', users, id, _.find(users, ['id', id]));
		return _.find(users, {id: id})
	}
)(state);

export default getSelectedUser;
