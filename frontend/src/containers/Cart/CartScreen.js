import { memo, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
//Components
import CartItem from 'components/CartItem/CartItem';
import CartEmpty from 'components/CartEmpty/CartEmpty';
import LoadingBackdrop from 'components/LoadingBackdrop/LoadingBackdrop';

//Actions
import { removeCart, changeQty, getCart } from 'redux/actions/cartActions';

// Helpers
import { totalItems, totalPriceOfItems } from 'helpers';

import './CartScreen.css';

const CartScreen = () => {
	const dispatch = useDispatch();

	const { cartItems, loading } = useSelector(state => state.cartGet);

	const { userInfo } = useSelector(state => state.userLogin);

	const itemsInCart = useMemo(() => totalItems(cartItems), [cartItems]);
	const cartSubTotal = useMemo(
		() => totalPriceOfItems(cartItems),
		[cartItems],
	);

	const qtyChangeHandler = (id, quantity) => {
		dispatch(changeQty(userInfo.data.user._id, id, quantity));
	};

	const removeHandler = id => {
		dispatch(removeCart(userInfo.data.user._id, id));
	};

	useEffect(() => {
		dispatch(getCart(userInfo.data.user._id));
	}, [dispatch, userInfo]);

	if (loading) {
		return <LoadingBackdrop open={loading} />;
	}

	return (
		<div className="cartscreen">
			<div className="cartscreen__left">
				{isEmpty(cartItems) ? (
					<CartEmpty />
				) : (
					cartItems.map(item => (
						<CartItem
							key={item._id}
							item={item}
							qtyChangeHandler={qtyChangeHandler}
							removeHandler={removeHandler}
						/>
					))
				)}
			</div>
			<div className="cartscreen__right">
				<div className="cartscreen__info">
					<p>Subtotal ({itemsInCart}) item(s)</p>
					<p>${cartSubTotal}</p>
				</div>
				<div>
					<button>Proceed To Checkout</button>
				</div>
			</div>
		</div>
	);
};

export default memo(CartScreen);
