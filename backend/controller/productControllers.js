const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
	let { page, limit } = req.query;
	page = parseInt(page);
	limit = parseInt(limit);

	try {
		const countP = await Product.countDocuments({});
		const totalPage = parseInt((countP - 1) / limit + 1);
		if (page < 1 || page > totalPage) {
			return res.status(400).json({ data: [], message: 'Invalid page' });
		}

		await Product.find({})
			.skip(limit * (page - 1))
			.limit(limit)
			.exec((err, products) => {
				err
					? res.json({ message: err })
					: res.json({ products, totalPage });
			});
	} catch (error) {
		res.status(500).json({ message: 'Server Error' });
	}
};

const getProductById = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);

		res.json(product);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server Error' });
	}
};

module.exports = {
	getAllProducts,
	getProductById,
};
