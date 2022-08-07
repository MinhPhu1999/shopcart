const Cart = require('../models/Cart');

const addCart = async (req, res) => {
	try {
		const { id_user, products } = req.body;
		const { price, quantity } = products;

		let cartF = null;
		cartF = await Cart.findOne({ id_user: id_user });
		if (cartF === null) {
			const cartN = new Cart({
				id_user,
				products,
				total: quantity * price,
			});

			cartN.save((err, data) => {
				err
					? res.json({ message: 'Add cart failure' })
					: res.json({ message: 'Add cart success' });
			});
		} else {
			let index = cartF.products.findIndex(e => products._id === e._id);

			if (index === -1) {
				cartF.products.push(products);
				cartF.total += quantity * price;
			} else {
				cartF.products[index].quantity += quantity;
				cartF.total += quantity * price;
			}

			cartF.save((err, data) => {
				err
					? res.json({ message: 'Add cart failure 2' })
					: res.json({ message: 'Add cart success 2' });
			});
		}
	} catch (error) {
		res.json({ message: error });
	}
};

const getCart = async (req, res) => {
	try {
		const data = await Cart.findOne({ id_user: req.params.id_user });

		if (data) {
			return res.json(data.products);
		}
		res.json({ message: 'Fail' });
	} catch (err) {
		res.json({ message: 'Fail 2' });
	}
};

const removeFromCart = async (req, res) => {
	let cartFind = await Cart.findOne({ id_user: req.body.id_user });

	if (!cartFind) {
		return res.json({ message: 'cart not found' });
	}

	let index = cartFind.products.findIndex(e => e._id === req.body.id_product);

	if (index === -1) {
		return res.json({ message: 'product not found in list' });
	}
	cartFind.total -=
		cartFind.products[index].quantity * cartFind.products[index].price;
	cartFind.products.splice(index, 1);
	cartFind.save(err => {
		err
			? res.json({ message: 'Fail 2' })
			: res.json({ message: 'Success 2' });
	});
};

const changeQty = async (req, res) => {
	const { id_user, id_product, quantity } = req.body;
	try {
		let cartFind = await Cart.findOne({ id_user: id_user });
		let index = cartFind.products.findIndex(e => e._id === id_product);

		cartFind.total +=
			cartFind.products[index].price *
			(quantity - cartFind.products[index].quantity);

		cartFind.products[index].quantity = quantity;

		cartFind.save(err => {
			err ? res.json({ message: err }) : res.json({ message: 'Success' });
		});
	} catch (err) {
		err
			? res.json({ message: 'Fail 2' })
			: res.json({ message: 'Success 2' });
	}
};

module.exports = { addCart, getCart, removeFromCart, changeQty };
