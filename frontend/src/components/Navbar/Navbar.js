import { useState, memo, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Menu, MenuItem } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import isEmpty from 'lodash/isEmpty';
// Actions
import { logout } from 'redux/actions/userActions';
import { getCart } from 'redux/actions/cartActions';

// Helpers
import { totalItems } from 'helpers';

import './Navbar.css';

const Navbar = ({ click }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const { cartItems } = useSelector(state => state.cartGet);
	const { userInfo } = useSelector(state => state.userLogin);

	const dispatch = useDispatch();

	const itemsInCart = useMemo(() => totalItems(cartItems), [cartItems]);

	const openMenu = event => {
		setAnchorEl(event.currentTarget);
	};

	const closeMenu = () => {
		setAnchorEl(null);
	};

	const logoutHandle = () => {
		dispatch(logout());
	};

	useEffect(() => {
		if (!isEmpty(userInfo)) {
			dispatch(getCart(userInfo?.user?._id));
		}
	}, [dispatch, userInfo]);

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
								{`Hello ${userInfo?.user?.lastName}`}
							</button>
							<Menu
								className="menu"
								anchorEl={anchorEl}
								open={!!anchorEl}
								keepMounted
								onClose={closeMenu}
								getContentAnchorEl={null}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'center',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'center',
								}}
							>
								<MenuItem>
									<Link to="/profile" className="logout-link">
										<span className="logout">
											<PersonOutlineIcon className="logout-icon" />
											My Account
										</span>
									</Link>
								</MenuItem>

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
