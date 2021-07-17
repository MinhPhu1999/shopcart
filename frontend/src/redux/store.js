import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Cookie from 'js-cookie';

//Reducer
import {
	cartPostReducer,
	cartGetReducer,
	removeCartPostReducer,
	changeQty,
} from './reducers/cartReducers';
import {
	getProductDetailsReducer,
	getProductsReducer,
} from './reducers/productReducers';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers';

const userInfo = Cookie.getJSON('userInfo') || null;

const reducer = combineReducers({
	cartGet: cartGetReducer,
	cartAdd: cartPostReducer,
	cartRemove: removeCartPostReducer,
	cartChange: changeQty,

	getProducts: getProductsReducer,
	getProductDetails: getProductDetailsReducer,

	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
});

const middleware = [thunk];

const cartItems = Cookie.getJSON('cartItems') || [];

const INITIAL_STATE = {
	cartGet: { cartItems },
	userLogin: { userInfo },
};

const store = createStore(
	reducer,
	INITIAL_STATE,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
