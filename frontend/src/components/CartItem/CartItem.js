import { memo } from 'react';
import { Link } from 'react-router-dom';

import './CartItem.css';

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
	const handleQtyChange = e => {
		qtyChangeHandler(item._id, e.target.value);
	};

	const handleRemoveCartItem = () => {
		removeHandler(item._id);
	};

	return (
		<div className="cartitem">
			<div className="cartitem__image">
				<img src={item.imageUrl} alt={item.name} />
			</div>

			<Link to={`/product/${item._id}`} className="cartitem__name">
				<p>{item.name}</p>
			</Link>

			<p className="cartitem__price">${item.price}</p>

			<select
				className="cartitem__select"
				value={item.quantity}
				onChange={handleQtyChange}
			>
				{[...Array(10).keys()].map(x => (
					<option key={x + 1} value={x + 1}>
						{x + 1}
					</option>
				))}
			</select>

			<button
				className="cartitem__deleteBtn"
				onClick={handleRemoveCartItem}
			>
				<i className="fas fa-trash"></i>
			</button>
		</div>
	);
};

export default memo(CartItem);
