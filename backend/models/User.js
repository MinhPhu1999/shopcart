const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	phone: {
		type: String,
	},
	email: {
		type: String,
		lowercase: true,
		match: [/\S+@\S+\.\S+/, 'is invalid'],
	},
	password: {
		type: String,
	},
});

module.exports = mongoose.model('user', userSchema);
