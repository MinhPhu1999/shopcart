import { useEffect, useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from '@material-ui/lab';

//Components
import Product from 'components/Product/Product';
import LoadingBackdrop from 'components/LoadingBackdrop/LoadingBackdrop';

//Actions
import { getProducts as listProducts } from 'redux/actions/productActions';

import './HomeScreen.css';

const HomeScreen = () => {
	const dispatch = useDispatch();
	const [pageNumber, setPageNumber] = useState(1);

	const getProducts = useSelector(state => state.getProducts);
	const { products, loading, error, numberOfPages } = getProducts;

	useEffect(() => {
		dispatch(listProducts(pageNumber, 4));
	}, [dispatch, pageNumber]);

	const handleChange = (_, value) => {
		setPageNumber(value);
	};

	if (loading) {
		return <LoadingBackdrop open={loading} />;
	}

	return (
		<div className="homescreen">
			<h2 className="homescreen__title">Latest Product</h2>
			<div className="homescreen_products">
				{error ? (
					<h2>{error}</h2>
				) : (
					products.map(product => (
						<Product
							key={product._id}
							productId={product._id}
							name={product.name}
							price={product.price}
							description={product.description}
							imageUrl={product.imageUrl}
						/>
					))
				)}
			</div>
			<Pagination
				className="pagination"
				color="primary"
				count={numberOfPages}
				page={pageNumber}
				onChange={handleChange}
			/>
		</div>
	);
};

export default memo(HomeScreen);
