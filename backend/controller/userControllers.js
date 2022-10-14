const User = require('../models/User');
const bcrypt = require('bcrypt');

const OTP = require('../config/otp');
const nodeMailer = require('../config/nodeMailer');

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
		res.status(500).json({ message: 'Register failure in catch' });
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
				firstName: userF.firstName,
				lastName: userF.lastName,
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

		let otp = OTP.generateOTP();

		const sendEmail = await nodeMailer.sendEmailForgotPassword(email, otp);
		console.log('sendEmail', sendEmail);
		if (!sendEmail) {
			//trường hợp gửi mail fail
			return res.status(500).send({ message: 'Send email fail' });
		}
		userF.otp = otp;

		try {
			userF.save(err => {
				err
					? res.status(500).send({ message: 'fail' })
					: res
							.status(201)
							.send({ message: 'success', email: email });
			}); //lưu các thay đổi
		} catch (err) {
			return res.status(500).send({ message: err });
		}
	} catch {
		res.status(500).json({ message: 'Login failure' });
	}
};

// const verifyForgotPassword = async (req, res) => {
// 	//kiểm tra có truyền tham số đủ hay không
// 	if (
// 		typeof req.body.email === 'undefined' ||
// 		typeof req.body.otp === 'undefined'
// 	) {
// 		return res.status(402).send({ message: 'Invalid data' });
// 	}
// 	//khai báo các biến cần thiết
// 	const { email, otp } = req.body;
// 	let userFind = null;
// 	try {
// 		userFind = await User.findOne({ email: email, otp: otp }); //tìm kiếm user theo email
// 	} catch (err) {
// 		return res.send({ message: 'user not found' });
// 	}

// 	userFind
// 		? res.status(200).send({ message: 'success', otp: otp })
// 		: res.status(422).send({ message: 'OTP fail' });
// };

const verifyForgotPassword = async (req, res) => {
	//kiểm tra có truyền tham số đủ hay không
	if (
		typeof req.body.email === 'undefined' ||
		typeof req.body.otp === 'undefined' ||
		typeof req.body.newPassword === 'undefined'
	) {
		return res.status(402).send({ message: 'Invalid data' });
	}
	//khai báo các biến cần thiết
	const { email, otp, newPassword } = req.body;
	let userFind = null;
	try {
		userFind = await User.findOne({ email: email }); //tìm kiếm user theo email
	} catch (err) {
		return res.send({ message: 'user not found' });
	}
	if (userFind === null) {
		//trường hợp không có user trong db
		return res.status(422).send({ message: 'User not found in database' });
	}
	//trường hợp kiểm tra otp nhập vào khác với otp trong db
	if (userFind.otp != otp) {
		return res.status(422).send({ message: 'OTP fail' });
	}

	//hash password
	userFind.password = bcrypt.hashSync(newPassword, 10);
	try {
		await userFind.save(err => {
			err
				? res.status(500).send({ message: 'fail' })
				: res.status(201).send({ message: 'success' });
		}); //lưu các thay đổi
	} catch (err) {
		return res.status(500).send({ message: err });
	}
};

const getUser = async (req, res) => {
	//kiểm tra có truyền tham số đủ hay không
	if (typeof req.params.id === 'undefined') {
		return res.status(402).send({ message: 'Invalid data' });
	}
	//khai báo các biến cần thiết
	const { id } = req.params;
	let userFind = null;
	try {
		userFind = await User.findOne({ _id: id }); //tìm kiếm user theo id
	} catch (err) {
		return res.send({ message: 'user not found' });
	}

	res.status(200).send(userFind);
};

const updateInfor = async (req, res) => {
	//kiểm tra có truyền tham số đủ hay không
	if (
		typeof req.body.firstName === 'undefined' ||
		typeof req.body.lastName === 'undefined' ||
		typeof req.body.id === 'undefined' ||
		typeof req.body.email === 'undefined'
	) {
		return res.status(422).send({ message: 'Invalid data' });
	}
	//khai báo các biến cần thiết
	const { email, firstName, lastName, id, password } = req.body;
	let newUser = await User.findById(id);
	//tìm kiếm user theo email
	let userFind = await User.findOne({ email: email });
	//trường hợp email đã có trong db
	if (userFind != null && newUser.email !== email) {
		return res.status(422).send({ message: 'Email already exist' });
	}
	//cập nhật thay đổi
	newUser.firstName = firstName;
	newUser.lastName = lastName;
	newUser.email = email;
	newUser.password = bcrypt.hashSync(password, 10);
	try {
		await newUser.save(); //lưu các thay đổi
	} catch (err) {
		return res.status(500).send({ message: err });
	}
	//thông báo update infor thành công
	res.status(200).send({
		message: 'success',
		user: {
			email: newUser.email,
			firstName: newUser.firstName,
			lastName: newUser.lastName,
			_id: newUser._id,
		},
	});
};

module.exports = {
	registerAcount,
	loginAccount,
	forgotPassword,
	verifyForgotPassword,
	getUser,
	updateInfor,
};
