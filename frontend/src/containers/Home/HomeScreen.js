import { useEffect, useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from '@material-ui/lab';
import isEmpty from 'lodash/isEmpty';

//Components
import Product from 'components/Product/Product';
import LoadingBackdrop from 'components/LoadingBackdrop/LoadingBackdrop';

//Actions
import { getProducts as getlistProducts } from 'redux/actions/productActions';

import './HomeScreen.css';

const HomeScreen = () => {
	const dispatch = useDispatch();
	const [pageNumber, setPageNumber] = useState(1);

	const getProducts = useSelector(state => state.getProducts);
	const { products, loading, error, numberOfPages } = getProducts;

	const [listProducts, setListProducts] = useState(products);
	const [countPages, setCountPages] = useState(numberOfPages);

	useEffect(() => {
		dispatch(getlistProducts(pageNumber, 4));
		setListProducts(products);
		setCountPages(numberOfPages);
	}, [dispatch, pageNumber]);

	const handleChange = (_, value) => {
		setPageNumber(value);
		setListProducts([]);
		setCountPages(0);
	};

	useEffect(() => {
		setListProducts(products);
		setCountPages(numberOfPages);
	}, [products, numberOfPages]);

	if (loading) {
		return <LoadingBackdrop open={loading} />;
	}

	const onKeyUp = () => {
		const input = document.getElementById('myInput');
		const filter = input.value.toUpperCase();
		const list = products.filter(
			peoduct => peoduct.name.toUpperCase().indexOf(filter) > -1,
		);

		if (list.length > 0) {
			setCountPages(filter === '' ? numberOfPages : 1);
		} else {
			setCountPages(0);
		}

		setListProducts(list);
	};

	return (
		<div className="homescreen">
			<h2 className="homescreen__title">Latest Product</h2>
			<input
				type="text"
				id="myInput"
				onKeyUp={onKeyUp}
				placeholder="Search for names.."
				title="Type in a name"
			/>
			<div className="homescreen_products">
				<>
					{!isEmpty(listProducts) &&
						listProducts.map(product => (
							<Product
								key={product._id}
								productId={product._id}
								name={product.name}
								price={product.price}
								description={product.description}
								imageUrl={product.imageUrl}
							/>
						))}
				</>
			</div>
			<Pagination
				className="pagination"
				color="primary"
				count={countPages}
				// count={numberOfPages}
				page={pageNumber}
				onChange={handleChange}
			/>
		</div>
	);
};

export default memo(HomeScreen);
