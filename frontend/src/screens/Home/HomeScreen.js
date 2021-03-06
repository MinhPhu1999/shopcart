import './HomeScreen.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from '@material-ui/lab';

//Componts
import Product from '../../components/Product/Product';

//Actions
import { getProducts as listProducts } from '../../redux/actions/productActions';


const HomeScreen = () => {
	const dispatch = useDispatch();
	const [pageNumber, setPageNumber] = useState(1);

	const getProducts = useSelector(state => state.getProducts);
	const { products, loading, error, numberOfPages } = getProducts;

	useEffect(() => {
		dispatch(listProducts(pageNumber, 6));
	}, [dispatch, pageNumber]);

	const handleChange = (event, value) => {
		setPageNumber(value);
	};

	return (
		<div className="homescreen">
			<h2 className="homescreen__title">Latest Product</h2>
			<div className="homescreen_products">
				{loading ? (
					<h2>Loading...</h2>
				) : error ? (
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

export default HomeScreen;
