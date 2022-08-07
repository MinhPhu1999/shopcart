import { memo, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//Components
import CartItem from 'components/CartItem/CartItem';
import LoadingBackdrop from 'components/LoadingBackdrop/LoadingBackdrop';

//Actions
import { removeCart, changeQty } from 'redux/actions/cartActions';

import './CartScreen.css';

const CartScreen = ({ match }) => {
	const dispatch = useDispatch();

	const { cartItems, loading } = useSelector(state => state.cartGet);

	const { userInfo } = useSelector(state => state.userLogin);

	const qtyChangeHandler = (id_user, id, quantity) => {
		dispatch(changeQty(id_user, id, quantity));
	};

	const removeHandler = (id_user, id) => {
		dispatch(removeCart(id_user, id));
	};

	const itemsInCart = useMemo(
		() =>
			cartItems?.reduce(
				(quantity, item) => quantity + Number(item.quantity),
				0,
			),
		[cartItems],
	);

	const cartSubTotal = useMemo(
		() =>
			cartItems
				?.reduce((price, item) => price + item.price * item.quantity, 0)
				.toFixed(2),
		[cartItems],
	);

	return (
		<div>
			{loading ? (
				<>
					<LoadingBackdrop open={loading} />
					<div style={{ height: '180px' }}></div>
				</>
			) : (
				<div className="cartscreen">
					<div className="cartscreen__left">
						{/* <h2>Shoppong Cart</h2> */}
						{cartItems.length === 0 || cartItems === undefined ? (
							<div>
								<div className="empty-cart">
									<img
										className="empty-cart-img"
										src="/img/emptyCart.png"
										alt="Product"
									/>
									<p className="empty-cart-note">
										Your Cart Is Empty
									</p>
									<Link
										className="empty-cart-shopping"
										to="/"
									>
										Go Back
									</Link>
								</div>
								{/* Your cart is empty <Link to="/"> Go Back</Link> */}
							</div>
						) : (
							cartItems.map(item => (
								<CartItem
									key={item.products}
									item={item}
									qtyChangeHandler={qtyChangeHandler}
									removeHandler={removeHandler}
									id_user={userInfo.data.user._id}
								/>
							))
						)}
					</div>
					<div className="cartscreen__right">
						<div className="cartscreen__info">
							<p>Subtotal ({itemsInCart}) items</p>
							<p>${cartSubTotal}</p>
						</div>
						<div>
							<button>Proceed To Checkout</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default memo(CartScreen);
