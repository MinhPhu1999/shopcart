import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ click }) => {
	const cart = useSelector(state => state.cart);
	const { cartItems } = cart;

	const userLogin = useSelector(state => state.userLogin);
	const { userInfo } = userLogin;

	console.log(userInfo)

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
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

				{/**links */}
				{userInfo ? (
					<ul className="navbar__links">
						<li>
							<Link to="/cart" className="cart__link">
								<i className="fas fa-shopping-cart"></i>
								<span>
									Cart
									<span className="cartlogo__badge">
										{getCartCount()}
									</span>
								</span>
							</Link>
						</li>
						<li>
							<div className="navbar__username">
								{`Hello ${userInfo.data.user.name}`}
							</div>
							{/* <Link to="/">Shop</Link> */}
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

export default Navbar;
