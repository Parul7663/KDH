const Order = require('../models/order')
const Product = require('../models/product')


//create a new order api/v1/order/new
exports.newOrder = async (req, res, next) => {
    const {
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        user
    } = req.body
   
    const order = await Order.create({
        orderItems,
        shippingInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        orderCreatedAt : Date.now(),
        user
    })

    res.status  (200).json({
        "sucess":true
    })
}
