import {
	CART_ADD_POST_FAIL,
	CART_ADD_POST_REQUEST,
	CART_ADD_POST_SUCCESS,
	CART_EMPTY,
	CART_LIST_FAIL,
	CART_LIST_REQUEST,
	CART_LIST_SUCCESS,
	CART_REMOVE_POST_FAIL,
	CART_REMOVE_POST_REQUEST,
	CART_REMOVE_POST_SUCCESS,
	CART_CHANGEQTY_FAIL,
	CART_CHANGEQTY_REQUEST,
	CART_CHANGEQTY_SUCCESS,
} from '../constants/cartConstants';

function cartPostReducer(state = {}, action) {
	switch (action.type) {
		case CART_ADD_POST_REQUEST:
			return { loading: true };
		case CART_ADD_POST_SUCCESS:
			return { loading: false, success: true };
		case CART_ADD_POST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
}

function cartGetReducer(state = { cartItems: [] }, action) {
	switch (action.type) {
		case CART_LIST_REQUEST:
			return { loading: true, cartItems: [] };
		case CART_LIST_SUCCESS:
			return { loading: false, cartItems: action.payload };
		case CART_LIST_FAIL:
			return { loading: false, error: action.payload };
		case CART_EMPTY:
			return { ...state, cartItems: [] };
		default:
			return state;
	}
}

function removeCartPostReducer(state = {}, action) {
	switch (action.type) {
		case CART_REMOVE_POST_REQUEST:
			return { loading: true };
		case CART_REMOVE_POST_SUCCESS:
			return { loading: false, success: true };
		case CART_REMOVE_POST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
}

function changeQty(state = {}, action) {
	switch (action.type) {
		case CART_CHANGEQTY_REQUEST:
			return { loading: true };
		case CART_CHANGEQTY_SUCCESS:
			return { loading: false, success: true };
		case CART_CHANGEQTY_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
}

export { cartPostReducer, cartGetReducer, removeCartPostReducer, changeQty };
