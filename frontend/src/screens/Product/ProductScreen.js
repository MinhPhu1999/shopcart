import './ProductScreen.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Component
import LoadingBackdrop from '../../components/Config/LoadingBackdrop/LoadingBackdrop';

//Actions
import { getProductDetails } from '../../redux/actions/productActions';
import { addCart } from '../../redux/actions/cartActions';

const ProductScreen = ({ match, history }) => {
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();
	const productDetails = useSelector(state => state.getProductDetails);

	const { loading, error, product } = productDetails;

	const userLogin = useSelector(state => state.userLogin);
	const { userInfo } = userLogin;

	useEffect(() => {
		if (product && match.params.id !== product?._id) {
			dispatch(getProductDetails(match.params.id));
		}
	}, [dispatch, product, match]);

	const addToCartHandler = (_id, name, price, imageUrl, quantity) => {
		if (!userInfo) {
			history.push('/signin');
		} else {
			let products = {
				_id: _id,
				name: name,
				price: price,
				imageUrl: imageUrl,
				quantity: quantity,
			};
			dispatch(addCart(userInfo.data.user._id, products));
		}
	};

	return (
		<div className="productscreen">
			{loading ? (
				<>
					<LoadingBackdrop open={loading} />
					<div style={{ height: '180px' }}></div>
				</>
			) : error ? (
				<h2>{error}</h2>
			) : (
				<>
					<div className="productscreen__left">
						<div className="left__image">
							<img src={product?.imageUrl} alt={product?.name} />
						</div>

						<div className="left__info">
							<p className="left__name">{product?.name}</p>
							<p>Price: ${product?.price}</p>
							<p>Description: {product?.description}</p>
						</div>
					</div>
					<div className="productscreen__right">
						<div className="right__info">
							<p>
								Price: <span>${product?.price}</span>
							</p>
							<p>
								Status:{' '}
								<span>
									{product?.countInStock > 0
										? 'In Stock'
										: 'Out of Stock'}
								</span>
							</p>
							<p>
								Qty
								<select
									value={quantity}
									onChange={e => setQuantity(e.target.value)}
								>
									{[
										...Array(product?.countInStock).keys(),
									].map(x => (
										<option key={x + 1} value={x + 1}>
											{x + 1}
										</option>
									))}
								</select>
							</p>
							<p>
								<button
									type="button"
									onClick={() =>
										addToCartHandler(
											product._id,
											product.name,
											product.price,
											product.imageUrl,
											quantity,
										)
									}
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

export default ProductScreen;
