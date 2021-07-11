import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Cookie from 'js-cookie';

//Reducer
import { cartReducer } from './reducers/cartReducers';
import {
	getProductDetailsReducer,
	getProductsReducer,
} from './reducers/productReducers';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';

const userInfo = Cookie.getJSON('userInfo') || null;

const reducer = combineReducers({
	cart: cartReducer,

	getProducts: getProductsReducer,
	getProductDetails: getProductDetailsReducer,

	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
});

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem('cart')
	? JSON.parse(localStorage.getItem('cart'))
	: [];

const INITIAL_STATE = {
	cart: {
		cartItems: cartFromLocalStorage,
	},
	userLogin: { userInfo },
};

const store = createStore(
	reducer,
	INITIAL_STATE,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
