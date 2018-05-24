import {apiUrl} from "../../constants/config";
import {LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, REGISTRATION, REGISTRATION_FAIL} from '../consts/auth'

export const register = (args) => async dispatch => {
	dispatch({
		type: REGISTRATION
	});

	const url = `${apiUrl}/register`;

	const options = {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify(args)
	};

	return fetch(url, options)
		.then(response => {if (response.ok) return response.json()})
		.then(json => console.log(json))
		.catch(err => dispatch({
			type: REGISTRATION_FAIL,
			err
		}))
};

export const login = (username, password) => async dispatch => {
	dispatch({type: LOGIN});

	try {
		const res = await fetch(`${apiUrl}/login`, {
			headers: new Headers({
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}),
			credentials: "include",
			method: "POST",
			body: JSON.stringify({username, password}),
		})
		if (!res.ok)
			throw new Error("Not ok");
		const login = await res.json();

		if (!login.user)
			throw new Error("No user");
		dispatch({type: LOGIN_SUCCESS, payload: login.user})
	} catch (e) {
		console.log(err);
		dispatch({type: LOGIN_FAIL})
	}
};

export const checkLogged = () => async dispatch => {
	try {
		const url = `${apiUrl}/whoami`;
		const res = await fetch(url, {credentials: "include"});
		if (!res.ok) throw new Error("Not ok");
		const json = await res.json();
		console.log(json)

		if (!json.user) throw new Error("Not logged");
		dispatch({type: LOGIN_SUCCESS, payload: json.user});
	} catch (e) {
		console.log(e)
	}
}

export const setCurrentUser = (userid) => async dispatch => {
	try {
		const url = `${apiUrl}/user/${userid}`;
		console.log(url)
		const response = await fetch(url);
		console.log(response)
		if (!response.ok) throw new Error(response);

		const user = await response.json();
		console.log(user)
		if (!user) throw new Error("User not found");

	} catch (e) {console.log(e) }
};

export const isLoggedIn = () => dispatch => {
	const url     = `${apiUrl}/whoami`;
	const options = {credentials: 'include'};
	fetch(url, options)
		.then(res => res.ok && res.json())
		.then(json => {
			if (json === false)
				throw new Error(json.message);
			dispatch({type: LOGIN_SUCCESS, payload: json})
		})
		.catch(err => console.log(err));
};