import React from 'react';
import { Link } from 'react-router-dom';

import './CartEmpty.css';

export default function CartEmpty() {
	return (
		<div className="empty-cart">
			<img
				className="empty-cart-img"
				src="/img/emptyCart.png"
				alt="Product"
			/>
			<p className="empty-cart-note">Your Cart Is Empty</p>
			<Link className="empty-cart-shopping" to="/">
				Go Back
			</Link>
		</div>
	);
}
