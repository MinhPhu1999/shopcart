import axios from 'axios';
import Cookie from 'js-cookie';
import {
	CART_ADD_POST_FAIL,
	CART_ADD_POST_SUCCESS,
	CART_ADD_POST_REQUEST,
	CART_LIST_FAIL,
	CART_LIST_SUCCESS,
	CART_LIST_REQUEST,
	CART_REMOVE_POST_SUCCESS,
	CART_REMOVE_POST_REQUEST,
	CART_REMOVE_POST_FAIL,
	CART_CHANGEQTY_FAIL,
	CART_CHANGEQTY_SUCCESS,
	CART_CHANGEQTY_REQUEST,
} from '../constants/cartConstants';

const addCart = (id_user, products) => async (dispatch, getState) => {
	dispatch({ type: CART_ADD_POST_REQUEST, payload: { id_user, products } });
	try {
		const { data } = await axios.post('/api/cart/add', {
			id_user,
			products,
		});
		dispatch({ type: CART_ADD_POST_SUCCESS, payload: data });
		dispatch(getCart(id_user));
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: CART_ADD_POST_FAIL, payload: message });
	}
};

const getCart = id_user => async (dispatch, getState) => {
	dispatch({ type: CART_LIST_REQUEST, payload: id_user });
	try {
		const { data } = await axios.get('/api/cart/' + id_user);

		dispatch({ type: CART_LIST_SUCCESS, payload: data });
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: CART_LIST_FAIL, payload: message });
	}
};

const removeCart = (id_user, id_product) => async (dispatch, getState) => {
	dispatch({ type: CART_REMOVE_POST_REQUEST, payload: id_user, id_product });

	try {
		await axios.put('/api/cart/remove', {
			id_user,
			id_product,
		});
		dispatch({
			type: CART_REMOVE_POST_SUCCESS,
			payload: { id_user, id_product },
		});
		Cookie.remove('cartItems');
		dispatch(getCart(id_user));
	} catch (error) {
		const message =
			error.response && error.response.data.message
				? error.response.data.message
				: error.message;
		dispatch({ type: CART_REMOVE_POST_FAIL, payload: message });
	}
};

const changeQty =
	(id_user, id_product, quantity) => async (dispatch, getState) => {
		dispatch({
			type: CART_CHANGEQTY_REQUEST,
			payload: { id_user, id_product, quantity },
		});

		try {
			const { data } = await axios.put('/api/cart/changeqty', {
				id_user,
				id_product,
				quantity,
			});
			dispatch({
				type: CART_CHANGEQTY_SUCCESS,
				payload: data,
				success: true,
			});
			dispatch(getCart(id_user));
		} catch (error) {
			const message =
				error.response && error.response.data.message
					? error.response.data.message
					: error.message;
			dispatch({ type: CART_CHANGEQTY_FAIL, payload: message });
		}
	};

export { addCart, getCart, removeCart, changeQty };
