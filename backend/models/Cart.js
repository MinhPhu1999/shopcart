const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
	id_user: String,
	products: {
		type: [
			{
				_id: String,
				name: String,
				price: Number,
				quantity: Number,
				imageUrl: String,
			},
		],
	},
	total: Number,
});

module.exports = mongoose.model('cart', cartSchema);
