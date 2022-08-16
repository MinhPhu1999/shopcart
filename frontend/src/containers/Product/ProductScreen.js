import { memo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Component
import LoadingBackdrop from 'components/LoadingBackdrop/LoadingBackdrop';

//Actions
import { getProductDetails } from 'redux/actions/productActions';
import { addCart } from 'redux/actions/cartActions';

import './ProductScreen.css';

const ProductScreen = () => {
	const { id } = useParams();

	const dispatch = useDispatch();

	const [quantity, setQuantity] = useState(1);

	const { loading, error, product } = useSelector(
		state => state.getProductDetails,
	);
	const { userInfo } = useSelector(state => state.userLogin);

	useEffect(() => {
		dispatch(getProductDetails(id));
	}, [dispatch, id]);

	const addToCartHandler = () => {
		dispatch(addCart(userInfo.data.user._id, { ...product, quantity }));
	};

	const handleChangeQty = e => {
		setQuantity(Number(e.target.value));
	};

	if (loading) {
		return <LoadingBackdrop open={loading} />;
	}

	const { price, name, imageUrl, countInStock, description } = product;

	return (
		<div className="productscreen">
			{error ? (
				<h2>{error}</h2>
			) : (
				<>
					<div className="productscreen__left">
						<div className="left__image">
							<img src={imageUrl} alt={name} />
						</div>

						<div className="left__info">
							<p className="left__name">{name}</p>
							<p>Price: ${price}</p>
							<p>Description: {description}</p>
						</div>
					</div>
					<div className="productscreen__right">
						<div className="right__info">
							<p>
								Price: <span>${price}</span>
							</p>
							<p>
								Status:{' '}
								<span>
									{countInStock > 0
										? 'In Stock'
										: 'Out of Stock'}
								</span>
							</p>
							<p>
								Qty
								<select
									value={quantity}
									onChange={handleChangeQty}
								>
									{[...Array(countInStock).keys()].map(x => (
										<option key={x + 1} value={x + 1}>
											{x + 1}
										</option>
									))}
								</select>
							</p>
							<p>
								<button
									type="button"
									onClick={addToCartHandler}
								>
									Add To Cart
								</button>
							</p>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default memo(ProductScreen);
