const express = require('express');
const router = express.Router();

const {
	registerAcount,
	loginAccount,
} = require('../controller/userControllers');

router.post('/register', registerAcount);
router.post('/login', loginAccount);

module.exports = router;
