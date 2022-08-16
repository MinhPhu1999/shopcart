const nodemailer = require('nodemailer');
require('dotenv').config();
const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: false,
	service: 'gmail',
	auth: {
		user: adminEmail,
		pass: adminPassword,
	},
});

exports.sendEmailForgotPassword = async (email, token) => {
	let mailOptions = {
		from: `SHOOPER 👻 <${adminEmail}>`, // sender address
		to: email, // list of receivers
		subject: 'Forgot password Verification Token', // Subject line
		html:
			'<b>Forgot password</b>' +
			' <br/>' +
			'<span>Please enter OTP below</span>' +
			'<br/>' +
			'<span>' +
			token +
			'</span>',
	};
	try {
		let send = await transporter.sendMail(mailOptions);
	} catch (err) {
		console.log(err);
		return false;
	}
	return true;
};
