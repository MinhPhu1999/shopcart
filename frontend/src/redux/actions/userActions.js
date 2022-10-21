import axios from 'axios';
import Cookie from 'js-cookie';
import isEmpty from 'lodash/isEmpty';
import {
	USER_REGISTER_FAIL,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_REQUEST,
	USER_SIGNIN_FAIL,
	USER_SIGNIN_SUCCESS,
	USER_SIGNIN_REQUEST,
	USER_FORGOT_PASSWORD_REQUEST,
	USER_FORGOT_PASSWORD_SUCCESS,
	USER_FORGOT_PASSWORD_FAIL,
	USER_VERIFY_PASSWORD_REQUEST,
	USER_VERIFY_PASSWORD_SUCCESS,
	USER_VERIFY_PASSWORD_FAIL,
	USER_DETAIL_REQUEST,
	USER_DETAIL_SUCCESS,
	USER_DETAIL_FAIL,
	USER_UPDATE_PROFILE_REQUEST,
	USER_UPDATE_PROFILE_SUCCESS,
	USER_UPDATE_PROFILE_FAIL,
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
					dispatch({
						type: USER_REGISTER_SUCCESS,
						payload: data.data,
					});
					// Cookie.set('userInfo', JSON.stringify(data));
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
		const { data } = await axios.post('api/users/login', {
			email,
			password,
		});

		if (!isEmpty(data)) {
			dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
			Cookie.set('userInfo', JSON.stringify(data));
		}
	} catch (error) {
		dispatch({
			type: USER_SIGNIN_FAIL,
			payload: 'PassWord or Email wrong',
		});
	}
};

const logout = () => dispatch => {
	Cookie.remove('userInfo');
	Cookie.remove('cart');
	dispatch({ type: USER_SIGNOUT });
};

const forgotPassword = email => async dispatch => {
	dispatch({ type: USER_FORGOT_PASSWORD_REQUEST, payload: { email } });

	try {
		await axios
			.post('api/users/forgot', {
				email,
			})
			.then(data => {
				dispatch({ type: USER_FORGOT_PASSWORD_SUCCESS, payload: data });
			})
			.catch(error => {
				if (error.response) {
					dispatch({
						type: USER_FORGOT_PASSWORD_FAIL,
						payload: error.response.data.message,
					});
				}
			});
	} catch (error) {
		const message =
			error.response && error.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: USER_FORGOT_PASSWORD_FAIL, payload: message });
	}
};

const verifyPassword = (email, otp) => async dispatch => {
	dispatch({ type: USER_VERIFY_PASSWORD_REQUEST, payload: { email, otp } });

	try {
		await axios
			.post('api/users/forgot', {
				email,
				otp,
			})
			.then(data => {
				dispatch({ type: USER_VERIFY_PASSWORD_SUCCESS, payload: data });
				// Cookie.set('userInfo', JSON.stringify(data));
			})
			.catch(error => {
				if (error.response) {
					dispatch({
						type: USER_VERIFY_PASSWORD_FAIL,
						payload: error.response.data.message,
					});
				}
			});
	} catch (error) {
		const message =
			error.response && error.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: USER_VERIFY_PASSWORD_FAIL, payload: message });
	}
};

const detailUser = userId => async dispatch => {
	dispatch({ type: USER_DETAIL_REQUEST, payload: userId });

	try {
		const { data } = await axios.get(`api/users/` + userId);

		dispatch({ type: USER_DETAIL_SUCCESS, payload: data });
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: USER_DETAIL_FAIL, payload: message });
	}
};

const updateUserProfile =
	(email, firstName, lastName, password, id) => async dispatch => {
		dispatch({
			type: USER_UPDATE_PROFILE_REQUEST,
			payload: { email, firstName, lastName, id },
		});

		try {
			const { data } = await axios.put(`api/users/update`, {
				email,
				firstName,
				lastName,
				password,
				id,
			});
			//console.log(data);
			dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data });
			dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
			Cookie.set('userInfo', JSON.stringify(data));
		} catch (error) {
			const message =
				error.response && error.response.data.message
					? error.response.data.message
					: error.message;
			dispatch({ type: USER_UPDATE_PROFILE_FAIL, payload: message });
		}
	};

export {
	register,
	login,
	logout,
	forgotPassword,
	verifyPassword,
	detailUser,
	updateUserProfile,
};
