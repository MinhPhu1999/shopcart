import * as actionTypes from '../constants/productConstants';
import axios from 'axios';

export const getProducts = (pageNumber, limit) => async dispatch => {
	try {
		dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

		const { data } = await axios.get(
			`/api/products?page=${pageNumber}&limit=${limit}`,
		);

		dispatch({
			type: actionTypes.GET_PRODUCTS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.GET_PRODUCTS_FAIL,
			payload:
				error.response && error.response.data.mesage
					? error.response.data.mesage
					: error.mesage,
		});
	}
};

export const getProductDetails = id => async dispatch => {
	try {
		dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });

		const { data } = await axios.get(`/api/products/${id}`);

		dispatch({
			type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
			payload:
				error.response && error.response.data.mesage
					? error.response.data.mesage
					: error.mesage,
		});
	}
};

export const removeProductDetails = () => dispatch => {
	dispatch({
		type: actionTypes.GET_PRODUCT_DETAILS_RESET,
	});
};
