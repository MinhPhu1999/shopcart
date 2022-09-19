const nodemailer = require('nodemailer');
require('dotenv').config();
const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;

const transporter = nodemailer.createTransport({
	// host: 'smtp.mailtrap.io',
	// port: 2525,
	// secure: false,
	service: 'gmail',
	auth: {
		user: adminEmail,
		pass: adminPassword,
	},
});

exports.sendEmailForgotPassword = async (email, otp) => {
	let mailOptions = {
		from: `SHOOPER 👻 <${adminEmail}>`, // sender address
		to: email, // list of receivers
		subject: 'Forgot password Verification Otp', // Subject line
		html:
			'<b>Forgot password</b>' +
			' <br/>' +
			'<span>Please enter OTP below</span>' +
			'<br/>' +
			'<span>' +
			otp +
			'</span>',
	};

	console.log('email', email);

	try {
		let send = await transporter.sendMail(mailOptions);
	} catch (err) {
		console.log(err);
		return false;
	}
	return true;
};
