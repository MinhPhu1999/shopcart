const express = require('express');
const router = express.Router();

const {
	addCart,
	getCart,
	removeFromCart,
	changeQty,
} = require('../controller/cartControllers');

router.post('/add', addCart);
router.get('/:id_user', getCart);
router.put('/remove', removeFromCart);
router.put('/changeqty', changeQty);

module.exports = router;
