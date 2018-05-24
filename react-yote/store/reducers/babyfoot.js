import {Map} from 'immutable';
import {FETCH_BABYFOOTS, FETCH_BABYFOOTS_FAIL, FETCH_BABYFOOTS_SUCCESS} from "../consts/babyfoot";

const initialState = Map({});

const handlers = {
	[FETCH_BABYFOOTS]: (state) => state
		.set('fetching', true),
	[FETCH_BABYFOOTS_SUCCESS]: (state, action) => state
		.set('babyFoots', action.payload)
		.set('fetching', false),
	[FETCH_BABYFOOTS_FAIL]: (state) => state
		.set('fetching', false),
};

export default (state = initialState, action) => {
	const handler = handlers[action.type];
	if (typeof handler === 'function')
		return handler(state, action);
	return state
}