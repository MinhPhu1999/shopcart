import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './SideDrawer.css';

const SideDrawer = ({ show, click }) => {
	const sideDrawerClass = ['sidedrawer'];

	if (show) {
		sideDrawerClass.push('show');
	}

	const { cartItems } = useSelector(state => state.cartGet);

	const itemsInCart = useMemo(
		() =>
			cartItems?.reduce(
				(quantity, item) => quantity + Number(item.quantity),
				0,
			),
		[cartItems],
	);

	return (
		<div className={sideDrawerClass.join(' ')}>
			<ul className="sidedrawer__links" onClick={click}>
				<li>
					<Link to="/cart">
						<i className="fas fa-shopping-cart"></i>
						<span>
							Cart{' '}
							{cartItems?.lenght > 0 && (
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
