import {Map} from 'immutable';
import {FETCH_USERS, FETCH_USERS_FAIL, FETCH_USERS_SUCCESS} from "../consts/user";

const initialState = Map({});

const handlers = {
	[FETCH_USERS]: (state, action) => state
		.set('fetching', true),
	[FETCH_USERS_SUCCESS]: (state, action) => state
		.set('users', action.payload)
		.set('fetching', false),
	[FETCH_USERS_FAIL]: (state, action) => state
		.set('fetching', false),
};

export default (state = initialState, action) => {
	const handler = handlers[action.type];
	if (typeof handler === 'function')
		return handler(state, action);
	return state
}