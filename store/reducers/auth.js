import {Map} from 'immutable'

const initialState = Map({});

const handlers = {};

export default function auth(state = initialState, action) {
	const handler = handlers[action.type];
	if (typeof handler === 'function')
		return handler(state, action);
	return state
}