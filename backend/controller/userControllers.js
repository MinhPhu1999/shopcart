const User = require('../models/User');
const bcrypt = require('bcrypt');

const registerAcount = async (req, res) => {
	try {
		const userExist = await User.find({ email: req.body.email });
		if (userExist.length > 0) {
			return res.status(500).json({ message: 'User exist' });
		}

		req.body.password = bcrypt.hashSync(req.body.password, 10);

		const user = new User(req.body);
		await user.save((err, data) => {
			if (err) {
				res.status(500).json({ message: 'Register failure' });
			}
			res.status(200).json({ message: 'Register success' });
		});
	} catch {
		res.status(500).json({ message: 'Register failure' });
	}
};

const loginAccount = async (req, res) => {
	try {
		let userF = null;
		userF = await User.findOne({ email: req.body.email });
		if (!userF) {
			return res.status(404).json({ message: 'User not found' });
		}
		if (!bcrypt.compareSync(req.body.password, userF.password)) {
			return res.status(400).json({ message: 'Password wrong' });
		}
		res.status(200).json({
			message: 'login success',
			user: {
				email: userF.email,
				name: `${userF.firstName} ${userF.lastName}`,
				_id: userF._id,
			},
		});
	} catch {
		res.status(500).json({ message: 'Login failure' });
	}
};

const forgotPassword = async (req, res) => {
	try {
		let userF = null;
		userF = await User.findOne({ email: req.body.email });
		if (!userF) {
			return res.status(404).json({ message: 'User not found' });
		}
		if (!bcrypt.compareSync(req.body.password, userF.password)) {
			return res.status(400).json({ message: 'Password wrong' });
		}
		res.status(200).json({
			message: 'login success',
			user: {
				email: userF.email,
				name: `${userF.firstName} ${userF.lastName}`,
				_id: userF._id,
			},
		});
	} catch {
		res.status(500).json({ message: 'Login failure' });
	}
};

module.exports = { registerAcount, loginAccount };
