const express = require('express');
const router = express.Router();

const {
	registerAcount,
	loginAccount,
	forgotPassword,
	verifyForgotPassword,
	getUser,
	updateInfor,
} = require('../controller/userControllers');

router.post('/register', registerAcount);
router.post('/login', loginAccount);
router.post('/forgot', forgotPassword);
router.post('/verify', verifyForgotPassword);
router.put('/update', updateInfor);
router.get('/:id', getUser);

module.exports = router;
