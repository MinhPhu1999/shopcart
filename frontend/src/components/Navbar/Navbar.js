import { useState, memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, MenuItem } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

// Actions
import { logout } from 'redux/actions/userActions';

import './Navbar.css';

const Navbar = ({ click }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const { cartItems } = useSelector(state => state.cartGet);
	const { userInfo } = useSelector(state => state.userLogin);

	const dispatch = useDispatch();

	const itemsInCart = useMemo(
		() =>
			cartItems?.reduce(
				(quantity, item) => quantity + Number(item.quantity),
				0,
			),
		[cartItems],
	);

	const openMenu = event => {
		setAnchorEl(event.currentTarget);
	};

	const closeMenu = () => {
		setAnchorEl(null);
	};

	const logoutHandle = () => {
		dispatch(logout());
	};

	return (
		<div className="navbar__wrapper">
			<nav className="navbar">
				{/**logo */}
				<Link to="/">
					<div className="navbar__logo">
						<h2>MERN Shopping Cart</h2>
					</div>
				</Link>

				{userInfo ? (
					<ul className="navbar__links">
						<li>
							<Link to="/cart" className="cart__link">
								<i className="fas fa-shopping-cart"></i>
								<span>
									Cart
									{cartItems?.length > 0 && (
										<span className="cartlogo__badge">
											{itemsInCart}
										</span>
									)}
								</span>
							</Link>
						</li>
						<li>
							<button
								className="navbar__username"
								onClick={openMenu}
							>
								{`Hello ${userInfo.data.user.name}`}
							</button>
							<Menu
								className="menu"
								anchorEl={anchorEl}
								open={!!anchorEl}
								keepMounted
								onClose={closeMenu}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
							>
								<MenuItem>
									<Link
										to="/"
										className="logout-link"
										onClick={logoutHandle}
									>
										<span className="logout">
											<ExitToApp className="logout-icon" />
											Log Out
										</span>
									</Link>
								</MenuItem>
							</Menu>
						</li>
					</ul>
				) : (
					<div className="navbar__account">
						<div className="navbar__account-item">
							<Link to="/signin">Login</Link>
						</div>
						<div className="navbar__account-item">
							<Link to="/signup">Register</Link>
						</div>
					</div>
				)}

				{/**hamburger menu */}
				<div className="hamburger__menu" onClick={click}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</nav>
		</div>
	);
};

export default memo(Navbar);
