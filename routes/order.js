const express = require('express');
const router = express.Router();

const {newOrder} = require('../controllers/orderController')

router.route('/order/new').post(newOrder);
router.route('/order').post(newOrder);


module.exports = router;