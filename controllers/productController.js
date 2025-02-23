const Product = require('../models/product');

//create a new product =>api/v1/admin/products/new
exports.newProduct = async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        // prodctCount,
        product
    })
}

//get single product details=>api/v1/product/:id
exports.getSingleProduct = async(req,res,next) =>{

    const product = await Product.findById(req.params.id);
    // const product = await Product.findOne({_id: `${req.params.id}`})

    if(!product){
        return res.status(404).json({
            success:'false',
            message:'product not found'
        })
    }

         res.status(404).json({
            success:'true',
           product
         })
}

//get all prd
exports.getProducts = async (req, res, next) => {
    const products = await Product.find()
    const productsCount = await Product.countDocuments();
    res.status(200).json({
        sucess: true,
        productsCount,
        products
    })
}

//update product =>api/v1/product/:id
exports.updateProduct = async (req, res, next) => {
    var product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({
            success: 'false',
            message: 'product not found'
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });
    res.status(200).json({
        success:true,
        message:"product updated re",
        product
    })
}

//delete product =>api/v1/admin/product/:id
exports.deleteProduct = async (req, res, next) => {
    var product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({
            success: 'false',
            message: 'product not found'
        })
    }
    await product.deleteOne();
    res.status(200).json({
        success:true,
       message:'product deleted sucessfully'
    })
}
