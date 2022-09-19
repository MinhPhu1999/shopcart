import { memo, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import isEmpty from 'lodash/isEmpty';

// Helpers
import { totalItems } from 'helpers';

// Actions
import { getCart } from 'redux/actions/cartActions';

import './SideDrawer.css';

const SideDrawer = ({ show, click }) => {
	const dispatch = useDispatch();

	const sideDrawerClass = ['sidedrawer'];

	if (show) {
		sideDrawerClass.push('show');
	}

	const { userInfo } = useSelector(state => state.userLogin);
	const { cartItems } = useSelector(state => state.cartGet);

	const itemsInCart = useMemo(() => totalItems(cartItems), [cartItems]);

	useEffect(() => {
		dispatch(getCart(userInfo.user._id));
	}, [dispatch, userInfo]);

	return (
		<div className={sideDrawerClass.join(' ')}>
			<ul className="sidedrawer__links" onClick={click}>
				<li>
					<Link to="/cart">
						<i className="fas fa-shopping-cart"></i>
						<span>
							Cart
							{!isEmpty(cartItems) && (
								<span className="sidedrawer__cartbadge">
									{itemsInCart}
								</span>
							)}
						</span>
					</Link>
				</li>
				<li>
					<Link to="/">Shop</Link>
				</li>
			</ul>
		</div>
	);
};

export default memo(SideDrawer);
