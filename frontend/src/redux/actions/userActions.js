import axios from 'axios';
import Cookie from 'js-cookie';
import {
	USER_REGISTER_FAIL,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_REQUEST,
	USER_SIGNIN_FAIL,
	USER_SIGNIN_SUCCESS,
	USER_SIGNIN_REQUEST,
	USER_SIGNOUT,
} from '../constants/userConstants';

const register =
	(firstName, lastName, phone, email, password) => async dispatch => {
		dispatch({
			type: USER_REGISTER_REQUEST,
			payload: { firstName, lastName, phone, email, password },
		});

		try {
			await axios
				.post('api/users/register', {
					firstName,
					lastName,
					phone,
					email,
					password,
				})
				.then(data => {
					dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
					Cookie.set('userInfo', JSON.stringify(data));
				})
				.catch(error => {
					if (error.response) {
						dispatch({
							type: USER_REGISTER_FAIL,
							payload: error.response.data.message,
						});
					}
				});
		} catch (error) {
			const message =
				error.response && error.response.data.message
					? error.response.data.message
					: error.message;
			dispatch({ type: USER_REGISTER_FAIL, payload: message });
		}
	};

const login = (email, password) => async dispatch => {
	dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
	try {
		await axios
			.post('api/users/login', {
				email,
				password,
			})
			.then(data => {
				dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
				Cookie.set('userInfo', JSON.stringify(data));
			})
			.catch(error => {
				if (error.response) {
					dispatch({
						type: USER_SIGNIN_FAIL,
						payload: error.response.data.message,
					});
				}
			});
	} catch (error) {
		const message =
			error.response && error.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: USER_SIGNIN_FAIL, payload: message });
	}
};

const logout = () => dispatch => {
	Cookie.remove('userInfo');
	Cookie.remove('cart');
	dispatch({ type: USER_SIGNOUT });
};

export { register, login, logout };
