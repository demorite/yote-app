import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'

import auth from './reducers/auth'
import user from './reducers/user'
import babyfoot from "./reducers/babyfoot";
import match from "./reducers/match";

const reducers = {
	auth,
	user,
	babyfoot,
	match
};

const reducer = combineReducers(reducers);

const middlewares = [
	thunk,
	store => next => action => {
		console.log(action.type);
		next(action)
	}
];

const enhancer = compose(applyMiddleware(...middlewares));

const store = createStore(reducer, enhancer);

export default store;
