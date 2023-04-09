// callback function

const Product = require("../modeles/productModel");


// Created the product Admin
exports.createProduct =  async (req, res, next)=>{
    const product = await Product.create(req.body);
    console.log(product)

    res.status(201).json({
        success:true,
        product
    })
}


// Get All Product
exports.getAllProducts = async (req,res)=>{
    const product = await Product.find();

    
    res.status(200).json({
        success:true,
        product
        })
}


