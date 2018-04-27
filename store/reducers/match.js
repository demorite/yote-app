import {Map} from 'immutable';
import {FETCH_MATCHES, FETCH_MATCHES_FAIL, FETCH_MATCHES_SUCCESS} from '../consts/match'

const initialState = Map({});

const handlers = {
	[FETCH_MATCHES]: (state, action) => state
		.set('fetching', true),
	[FETCH_MATCHES_SUCCESS]: (state, action) => state
		.set('matches', action.payload)
		.set('fetching', false),
	[FETCH_MATCHES_FAIL]: (state, action) => state
		.set('fetching', false)
};

export default (state = initialState, action) => {
	const handler = handlers[action.type];
	if (typeof handler === 'function')
		return handler(state, action);
	return state
}