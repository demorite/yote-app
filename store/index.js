import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'

import auth from './reducers/auth'

const reducers = {
	auth
};

const reducer = combineReducers(reducers);

const middlewares = [
	thunk,
];

const enhancer = compose(applyMiddleware(...middlewares));

const store = createStore(reducer, enhancer);

export default store;
