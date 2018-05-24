import * as _ from 'lodash';
import {createSelector} from "reselect";
import getUsers from "./get_users";

const getSelectedUser = (state, id) => createSelector(
	getUsers,
	(users) => {
		return _.find(users, {id: id})
	}
)(state);

export default getSelectedUser;
