import {Map} from 'immutable'
import {LOGIN_SUCCESS} from "../consts/auth";

const initialState = Map({});

const handlers = {
	[LOGIN_SUCCESS]: (state, action) => {
		console.log(action)
		return state.set('user', action.payload)
	}
};

export default function auth(state = initialState, action) {
	const handler = handlers[action.type];
	if (typeof handler === 'function')
		return handler(state, action);
	return state
}