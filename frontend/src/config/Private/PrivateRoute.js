import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
function PrivateRoute({ component: Component, ...rest }) {
	const userLogin = useSelector(state => state.userLogin);
	const { userInfo } = userLogin;

	return (
		<Route
			{...rest}
			render={props =>
				!isEmpty(userInfo) ? (
					<Component {...props}></Component>
				) : (
					<Redirect to="/signin" />
				)
			}
		></Route>
	);
}

export default PrivateRoute;
