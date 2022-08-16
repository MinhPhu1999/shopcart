import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Helpers
import { totalItems } from 'helpers';

import './SideDrawer.css';

const SideDrawer = ({ show, click }) => {
	const sideDrawerClass = ['sidedrawer'];

	if (show) {
		sideDrawerClass.push('show');
	}

	const { cartItems } = useSelector(state => state.cartGet);

	const itemsInCart = useMemo(() => totalItems(cartItems), [cartItems]);

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
