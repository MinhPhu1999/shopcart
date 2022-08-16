export const totalItems = cartItems => {
	const itemsInCart = cartItems?.reduce(
		(quantity, item) => quantity + item.quantity,
		0,
	);
	return itemsInCart;
};

export const totalPriceOfItems = cartItems => {
	cartItems
		?.reduce((price, item) => price + item.price * item.quantity, 0)
		.toFixed(2);
};
